import { NgModule } from "@angular/core";
import { CadastroUsuarioComponent } from "./components/pages/cadastro-usuario/cadastro-usuario.component";
import { LoginUsuarioComponent } from "./components/pages/login-usuario/login-usuario.component";
import { NotFoundComponent } from "./components/errors/not-found/not-found.component";
import { CommonModule } from "@angular/common";
import { RouterLink } from "@angular/router";
import { FormsModule, ReactiveFormsModule } from "@angular/forms";
import { LoginRoutingModule } from "./login-routing.module";
import { NavbarComponent } from "./components/shared/navbar/navbar.component";


@NgModule({
    declarations: [ //componentes do módulo
        CadastroUsuarioComponent,
        LoginUsuarioComponent,
        NotFoundComponent,
        NavbarComponent
    ],
    imports: [ //bilbiotecas compartilhadas no módulo
        CommonModule,
        RouterLink,
        FormsModule,
        ReactiveFormsModule,
        LoginRoutingModule //rotas do módulo
    ]
})
export class LoginModule {}


