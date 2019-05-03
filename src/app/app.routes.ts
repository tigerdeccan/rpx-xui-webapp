import { Routes } from '@angular/router';
import { AuthService as auth } from './auth/auth.service';


export const ROUTES: Routes = [
    {
        path: '',
        redirectTo: 'create-cases',
        pathMatch: 'full',
    },
    {
        path: 'create-cases',
        loadChildren: '../cases/cases.module#CasesModule',
        canActivate: [auth]
    },

    {
        path: '**',
        redirectTo: '/create-cases',
        pathMatch: 'full'
    }
];
