import { Component } from '@angular/core';
import { UsuariosService } from '../../../services/usuarios.service';
import { FormBuilder, FormControl, FormGroup, FormsModule, ReactiveFormsModule, Validators } from '@angular/forms';
import { CadastroUsuariosRequest } from '../../../models/cadastro-usuarios.request';
import { CommonModule } from '@angular/common';
import { ConfirmarSenhaValidator } from '../../../validators/confirmar-senha.validator';

@Component({
  selector: 'app-cadastro-usuario',
  standalone: false,
  templateUrl: './cadastro-usuario.component.html',
  styleUrl: './cadastro-usuario.component.css'
})
export class CadastroUsuarioComponent {

  //atributos
  form: FormGroup;

  //método construtor para injeção de dependência
  constructor(
    private service: UsuariosService,
    private fb: FormBuilder
  )   
  {
      //criando o formulário
      this.form = this.fb.group({
        nome: new FormControl('',[ //Campo 'nome'
          Validators.required, Validators.minLength(8), Validators.maxLength(100)
        ]), 
        email: new FormControl('',[ //Campo 'email'
          Validators.required, Validators.email
        ]), 
        senha: new FormControl('',[ //Campo 'senha'
          Validators.required, Validators.pattern(/^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[@$!%*?&])[A-Za-z\d@$!%*?&]{8,}$/)         
        ]),
        senhaConfirmacao: new FormControl('',[ //Campo 'senhaConfirmacao'
          Validators.required         
        ]) 
      }, {//validação customizada para confirmar senha
        validators: [
          ConfirmarSenhaValidator.confirmarSenha('senha', 'senhaConfirmacao')
        ]
      })
    }

  //método para capturar o evento de submit do formulário
  onSubmit() {
    
    //criando um objeto para enviar os dados da requisição
    //preenchendo este objeto com os valores dos campos do formulário
    const request : CadastroUsuariosRequest = {
      nome : this.form.get('nome')?.value as string,
      email : this.form.get('email')?.value as string,
      senha : this.form.get('senha')?.value as string,
    }

    //chamando o serviço para cadastrar o usuário
    this.service.cadastrar(request)
      .subscribe({
        next: (data) => { //capturando a resposta de sucesso da API
          console.log(data);
        }
      })
  }
}
