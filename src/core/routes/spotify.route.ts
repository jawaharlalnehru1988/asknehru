import { Routes } from '@angular/router';

export const spotifyRoute: Routes = [
    {
        path: '',
        loadComponent: () => import('../../app/spotify/spotify/spotify/spotify.component').then(m => m.SpotifyComponent)
    }
];
