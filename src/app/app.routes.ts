import { Routes } from '@angular/router';
import { CadastroUsuarioComponent } from './components/pages/cadastro-usuario/cadastro-usuario.component';
import { LoginUsuarioComponent } from './components/pages/login-usuario/login-usuario.component';
import { NotFoundComponent } from './components/errors/not-found/not-found.component';

export const routes: Routes = [
    {
        path: '', //rota default do projeto
        redirectTo: '/pages/login-usuario', //redirecionamento
        pathMatch: 'full' //a url deve ser exatamente igual a rota
    },
    {
        path: 'pages/cadastro-usuario',
        component: CadastroUsuarioComponent
    },
    {
        path: 'pages/login-usuario',
        component: LoginUsuarioComponent
    },
    {
        path: '**', //rota para página não encontrada (404)
        component: NotFoundComponent
    }
];
