import { AbstractControl, ValidationErrors } from "@angular/forms";

export class ConfirmarSenhaValidator {


    /*
        Função para criar uma validação customizada
        para confirmar senha do usuário
    */
    static confirmarSenha(senha: string, senhaConfirmacao: string): ValidationErrors | null {


        //criar a regra de validação
        return (group: AbstractControl): ValidationErrors | null => {


            //capturando os valores dos campos
            const senhaInput = group.get(senha)?.value;
            const senhaConfirmacaoInput = group.get(senhaConfirmacao)?.value;


            //verificar se os valores estão preenchidos e são diferentes
            if (senhaInput && senhaConfirmacaoInput && senhaInput != senhaConfirmacaoInput) {
                //criando um erro de validação e dar um nome para este erro
                group.get(senhaConfirmacao)?.setErrors({ confirmarSenha: true });
                return { confirmarSenha: true }; //erro de validação            
            }


            return null; //não há erros de validação
        }
    }
}

