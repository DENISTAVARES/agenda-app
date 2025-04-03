import { Injectable } from "@angular/core";
import { AutenticarUsuariosResponse } from "../modules/login/models/autenticar-usuarios.response";


@Injectable({
    providedIn: 'root'
})
export class AuthService {


    //nome usado para gravar os dados do usuário
    //autenticado na session storage
    auth_key = "usuario_agenda";


    //função para gravar os dados do usuário autenticado
    create(usuario: AutenticarUsuariosResponse) {
        sessionStorage.setItem(this.auth_key, JSON.stringify(usuario));
    }


    //função para ler os dados do usuário autenticado
    get() : AutenticarUsuariosResponse | null {
        let usuario = sessionStorage.getItem(this.auth_key);
        if(usuario != null) {
            return JSON.parse(usuario);
        }


        return null;
    }


    //função para apagar os dados do usuário autenticado
    remove() {
        sessionStorage.removeItem(this.auth_key);
    }
}



