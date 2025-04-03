import { RouterModule, Routes } from "@angular/router";
import { DashboardComponent } from "./components/pages/dashboard/dashboard.component";
import { CadastroTarefasComponent } from "./components/pages/cadastro-tarefas/cadastro-tarefas.component";
import { ConsultaTarefasComponent } from "./components/pages/consulta-tarefas/consulta-tarefas.component";
import { EdicaoTarefasComponent } from "./components/pages/edicao-tarefas/edicao-tarefas.component";
import { NgModule } from "@angular/core";


const routes : Routes = [
    {
        path : 'dashboard',
        component: DashboardComponent
    },
    {
        path: 'cadastro-tarefas',
        component: CadastroTarefasComponent
    },
    {
        path: 'consulta-tarefas',
        component: ConsultaTarefasComponent
    },
    {
        path: 'edicao-tarefas/:id',
        component: EdicaoTarefasComponent
    }
];
@NgModule({
    imports: [RouterModule.forChild(routes)],
    exports: [RouterModule]
})
export class AdminRoutingModule { }
