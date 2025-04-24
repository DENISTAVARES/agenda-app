import { HttpInterceptorFn } from "@angular/common/http";
import { inject } from "@angular/core";
import { AuthService } from "../services/auth.service";


//Endpoints que exigem token
const endpointsQueExigemToken = [
    "/api/tarefas"
];


//Criando o interceptor (sintaxe de função lambda)
export const AuthInterceptor: HttpInterceptorFn = (req, next) => {


    //injeção de dependência
    const authService = inject(AuthService);


    //verificar se requisição é para um endpoint que exige token
    const requerToken = endpointsQueExigemToken
        .some(endpoint => req.url.includes(endpoint));


    //se verdadeiro, adicionar o token no header da requisição
    if(requerToken) {
        //capturar os dados do usuário autenticado
        const usuario = authService.get();
        //clonar a requisição e adicionar o token JWT no cabecalho
        const reqClone = req.clone({
            setHeaders: {
                Authorization: `Bearer ${usuario?.token}`
            }
        });


        //enviando a requisição clonada
        return next(reqClone);
    }


    return next(req);
}

