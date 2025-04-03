/*
    Objeto de modelo de dados para a resposta
    de autenticação de usuário da API
*/
export interface AutenticarUsuariosResponse {


    //atributos
    id: string;
    nome: string;
    email: string;
    token: string;
    dataExpiracao: string
}
