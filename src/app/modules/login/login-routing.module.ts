import { RouterModule, Routes } from "@angular/router";
import { LoginUsuarioComponent } from "./components/pages/login-usuario/login-usuario.component";
import { CadastroUsuarioComponent } from "./components/pages/cadastro-usuario/cadastro-usuario.component";
import { NotFoundComponent } from "./components/errors/not-found/not-found.component";
import { NgModule } from "@angular/core";


export const routes: Routes = [
    {
        path: 'cadastro-usuario',
        component: CadastroUsuarioComponent
    },
    {
        path: 'login-usuario',
        component: LoginUsuarioComponent
    },
    {
        path: '**', //rota para página não encontrada (404)
        component: NotFoundComponent
    }
];


@NgModule({
    imports: [RouterModule.forChild(routes)],
    exports: [RouterModule]
})
export class LoginRoutingModule { }
