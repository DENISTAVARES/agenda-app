import { Routes } from '@angular/router';


export const routes: Routes = [


    {
        path: 'login', //módulo
        loadChildren: () => import('./modules/login/login.module').then(m => m.LoginModule)
    },
    {
        path: '',
        pathMatch: 'full',
        redirectTo: '/login/login-usuario'
    }


]
