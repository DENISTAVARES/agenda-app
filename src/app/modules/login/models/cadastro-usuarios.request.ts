/*
    Objeto de modelo de dados para a requisição
    de cadastro de usuário da API
*/
export interface CadastroUsuariosRequest {

    //atributos
    nome: string;
    email: string;
    senha: string;
}