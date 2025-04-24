import { HttpClient } from "@angular/common/http";
import { Injectable } from "@angular/core";
import { TarefasRequest } from "../models/tarefas.request";
import { Observable } from "rxjs";
import { TarefasResponse } from "../models/tarefas.response";
import { environment } from "../../../../environments/environment";
import { DashboardResponse } from "../models/dashboard.response";


@Injectable({
    providedIn: 'root'
})
export class TarefasService {


    //construtor para injeção de dependências
    constructor(private http: HttpClient) {}


    //método para cadastrar tarefa
    criar(request: TarefasRequest): Observable<TarefasResponse> {
        return this.http.post<TarefasResponse>
            (`${environment.apiTarefas}/criar`, request);
    }


    //método para editar tarefa
    atualizar(id: string, request: TarefasRequest): Observable<TarefasResponse> {
        return this.http.put<TarefasResponse>
            (`${environment.apiTarefas}/atualizar/${id}`, request);
    }


    //método para excluir tarefa
    excluir(id: string): Observable<TarefasResponse> {
        return this.http.delete<TarefasResponse>
            (`${environment.apiTarefas}/deletar/${id}`);
    }


    //método para listar tarefas
    listar(): Observable<TarefasResponse[]> {
        return this.http.get<TarefasResponse[]>
            (`${environment.apiTarefas}/listar`);
    }


    //método para buscar tarefa por ID
    obterPorId(id: string): Observable<TarefasResponse> {
        return this.http.get<TarefasResponse>
            (`${environment.apiTarefas}/${id}`);
    }


    //método para consultar os dados do dashboard
    consultarDashboard(): Observable<DashboardResponse[]> {
        return this.http.get<DashboardResponse[]>
            (`${environment.apiTarefas}/dashboard`);
    }
}



