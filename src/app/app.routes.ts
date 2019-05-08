import { Routes } from '@angular/router';


export const ROUTES: Routes = [
    /*{
        path: '',
        redirectTo: 'create-cases',
        pathMatch: 'full',
    },
    {
        path: 'create-cases',
        loadChildren: '../cases/cases.module#CasesModule'
    },
    {
        path: '**',
        redirectTo: '/create-cases',
        pathMatch: 'full'
    }*/
    {
        path: '',
        redirectTo: 'organisation',
        pathMatch: 'full',
      },
      {
        path: 'organisations',
        loadChildren: '../org-manager/org-manager.module#OrgManagerModule'
      },
      {
        path: '**',
        redirectTo: '/organisation',
        pathMatch: 'full'
      }
];
