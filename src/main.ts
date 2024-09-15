// import { enableProdMode, forwardRef, importProvidersFrom } from '@angular/core';
// import { platformBrowserDynamic } from '@angular/platform-browser-dynamic';


// import { environment } from './environments/environment';
// import { AppComponent } from './app/app.component';
// import { RouterModule } from '@angular/router';
// import { MatTooltipModule } from '@angular/material/tooltip';
// import { MatFormFieldModule } from '@angular/material/form-field';
// import { MatTableModule } from '@angular/material/table';
// import { MatCardModule } from '@angular/material/card';
// import { MatToolbarModule } from '@angular/material/toolbar';
// import { MatButtonModule } from '@angular/material/button';
// import { withInterceptorsFromDi, provideHttpClient } from '@angular/common/http';
// import { MatMenuModule } from '@angular/material/menu';
// import { MatRadioModule } from '@angular/material/radio';
// import { MatIconModule } from '@angular/material/icon';
// import { OverlayModule } from '@angular/cdk/overlay';
// import { provideAnimations } from '@angular/platform-browser/animations';
// import { AppRoutingModule } from './app/app-routing.module';
// import { BrowserModule, bootstrapApplication } from '@angular/platform-browser';
// import { RegisterComponent } from './app/register/register.component';
// import { NG_VALUE_ACCESSOR, FormsModule, ReactiveFormsModule } from '@angular/forms';

// if (environment.production) {
//   enableProdMode();
// }

// bootstrapApplication(AppComponent, {
//     providers: [
//         importProvidersFrom(BrowserModule, AppRoutingModule, OverlayModule, MatIconModule, MatRadioModule, MatMenuModule, MatButtonModule, MatToolbarModule, MatCardModule, MatTableModule, MatFormFieldModule, FormsModule, ReactiveFormsModule, MatTooltipModule, RouterModule),
//         {
//             provide: NG_VALUE_ACCESSOR,
//             useExisting: forwardRef(() => RegisterComponent),
//             multi: true
//         },
//         provideAnimations(),
//         provideHttpClient(withInterceptorsFromDi())
//     ]
// })
//   .catch(err => console.error(err));

import { bootstrapApplication } from '@angular/platform-browser';
import { appConfig } from './app/app.config';
import { AppComponent } from './app/app.component';

bootstrapApplication(AppComponent, appConfig)
  .catch((err) => console.error(err));
