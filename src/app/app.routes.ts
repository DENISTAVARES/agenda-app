import { Routes } from '@angular/router';
import { NotFoundComponent } from './modules/login/components/errors/not-found/not-found.component';
import { AuthGuard } from './guards/auth.guard';


export const routes: Routes = [
    {
        path: 'login', //domínio -> rota do módulo
        loadChildren: () => import('./modules/login/login.module').then(m => m.LoginModule)
    },
    {
        path: 'admin', //domínio -> rota do módulo
        loadChildren: () => import('./modules/admin/admin.module').then(m => m.AdminModule),
        canActivate: [AuthGuard] //aplicando o guardião
    },
    {
        path: '',
        pathMatch: 'full',
        redirectTo: '/login/login-usuario'
    },
    {
        path: '**', //rota para página não encontrada (404)
        component: NotFoundComponent
    }
]





