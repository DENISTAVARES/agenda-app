import { Injectable } from "@angular/core";
import { Router } from "@angular/router";
import { AuthService } from "../services/auth.service";


@Injectable({
    providedIn: 'root'
})
export class AuthGuard {


    //construtor para injeção de dependência
    constructor(
        private authService: AuthService,
        private router: Router
    ) { }


    //método para implementar o guardião
    canActivate() {
        //capturando o usuário autenticado
        const usuario = this.authService.get();
        if(usuario) { //verificando se existe um usuário
            return true;
        }
        else {
            //redirecionar para a página de login
            this.router.navigate(['/login/login-usuario']);
            return false;
        }
    }
}



