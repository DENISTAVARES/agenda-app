import { HttpClient } from "@angular/common/http";
import { Injectable } from "@angular/core";
import { CadastroUsuariosRequest } from "../models/cadastro-usuarios.request";
import { Observable } from "rxjs";
import { CadastroUsuariosResponse } from "../models/cadastro-usuarios.response";
import { environment } from "../../../../environments/environment";

@Injectable({
    providedIn: 'root'
})
export class UsuariosService {

    //método construtor para injeção de dependência
    constructor(
        private http: HttpClient
    ) {
    }

    /*
       Método para realizar uma requisição de cadastro
       de usuários no endpoint da API
    */
    cadastrar(request: CadastroUsuariosRequest): Observable<CadastroUsuariosResponse> {
        //fazendo uma requisição POST para a API
        return this.http.post<CadastroUsuariosResponse>(environment.apiUsuarios, request);
    }

}