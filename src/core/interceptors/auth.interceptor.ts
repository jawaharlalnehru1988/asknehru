import { HttpInterceptorFn, HttpRequest, HttpHandlerFn, HttpErrorResponse } from '@angular/common/http';
import { inject } from '@angular/core';
import { catchError, switchMap, throwError } from 'rxjs';
import { ApiService } from '../../app/api.service';

let isRefreshing = false;

export const authInterceptor: HttpInterceptorFn = (req: HttpRequest<unknown>, next: HttpHandlerFn) => {
  const apiService = inject(ApiService);
  const token = typeof window !== 'undefined' && window.localStorage ? localStorage.getItem('token') : null;

  let authReq = req;
  if (token && !req.headers.has('Authorization')) {
    authReq = req.clone({
      setHeaders: {
        Authorization: `Bearer ${token}`
      }
    });
  }

  return next(authReq).pipe(
    catchError((error: HttpErrorResponse) => {
      // If 401 Unauthorized and not already refreshing or calling auth endpoints
      if (
        error.status === 401 &&
        !req.url.includes('/api/auth/refresh') &&
        !req.url.includes('/api/auth/login') &&
        !req.url.includes('/api/auth/google')
      ) {
        // If public roadmaps/conversations endpoint failed with 401, retry anonymously without stale token
        const isPublicEndpoint = req.url.includes('/api/roadmaps') || req.url.includes('/api/conversations');
        if (isPublicEndpoint && req.headers.has('Authorization')) {
          const unauthReq = req.clone({
            headers: req.headers.delete('Authorization')
          });
          return next(unauthReq);
        }

        const refreshToken = typeof window !== 'undefined' && window.localStorage ? localStorage.getItem('refreshToken') : null;
        if (refreshToken && !isRefreshing) {
          isRefreshing = true;
          return apiService.refresh({ refreshToken }).pipe(
            switchMap((res: any) => {
              isRefreshing = false;
              if (res?.data?.accessToken) {
                localStorage.setItem('token', res.data.accessToken);
                if (res.data.refreshToken) {
                  localStorage.setItem('refreshToken', res.data.refreshToken);
                }
                const retryReq = req.clone({
                  setHeaders: {
                    Authorization: `Bearer ${res.data.accessToken}`
                  }
                });
                return next(retryReq);
              }
              return throwError(() => error);
            }),
            catchError((refreshErr) => {
              isRefreshing = false;
              console.warn('[AuthInterceptor] Refresh token failed or expired:', refreshErr);
              apiService.globalLogout();
              return throwError(() => refreshErr);
            })
          );
        }
      }
      return throwError(() => error);
    })
  );
};
