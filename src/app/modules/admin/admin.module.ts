import { NgModule } from "@angular/core";
import { DashboardComponent } from "./components/pages/dashboard/dashboard.component";
import { CadastroTarefasComponent } from "./components/pages/cadastro-tarefas/cadastro-tarefas.component";
import { ConsultaTarefasComponent } from "./components/pages/consulta-tarefas/consulta-tarefas.component";
import { EdicaoTarefasComponent } from "./components/pages/edicao-tarefas/edicao-tarefas.component";
import { CommonModule } from "@angular/common";
import { RouterLink } from "@angular/router";
import { FormsModule, ReactiveFormsModule } from "@angular/forms";
import { AdminRoutingModule } from "./admin-routing.module";
import { NavbarComponent } from "./components/shared/navbar/navbar.component";


@NgModule({
    /* Configurando os componentes do módulo */
    declarations: [
        DashboardComponent,
        CadastroTarefasComponent,
        ConsultaTarefasComponent,
        EdicaoTarefasComponent, 
        NavbarComponent
    ],
    /* Configurando as bibliotecas utilizadas no módulo */
    imports: [
        CommonModule,
        RouterLink,
        FormsModule,
        ReactiveFormsModule,
        AdminRoutingModule
    ]
})
export class AdminModule { }


