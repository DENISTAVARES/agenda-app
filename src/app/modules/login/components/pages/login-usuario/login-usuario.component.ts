import { Component } from '@angular/core';
import { UsuariosService } from '../../../services/usuarios.service';
import { Router } from '@angular/router';
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
import { AutenticarUsuariosRequest } from '../../../models/autenticar-usuarios.request';


@Component({
  selector: 'app-login-usuario',
  standalone: false,
  templateUrl: './login-usuario.component.html',
  styleUrl: './login-usuario.component.css'
})
export class LoginUsuarioComponent {


  //atributos
  form: FormGroup;
  mensagemErro: string = '';  


  //construtor para injeção de dependência
  constructor(
    private service: UsuariosService,
    private router: Router,
    private fb: FormBuilder
  ) {    
    this.form = this.fb.group({
      email: new FormControl('', [Validators.required, Validators.email]),
      senha: new FormControl('', [Validators.required, Validators.minLength(8)])
    });
  }


  //função para capturar o submit do formulário
  onSubmit() {


    //criando um objeto request
    const request: AutenticarUsuariosRequest = {
      email: this.form.get('email')?.value as string, //capturando o campo 'email'
      senha: this.form.get('senha')?.value as string //capturando o campo 'senha'
    };


    //executando a autenticação do usuário
    this.service.autenticar(request)
      .subscribe({ //capturando a resposta da requisição
        next: () => { //retorno de sucesso
          //redirecionar para a página do dashboard
          this.router.navigate(['/admin/dashboard'])
            .then(() => {
              location.reload(); //recarregar a página do navegador
            });
        },
        error: (e) => { //retorno de sucesso
          this.mensagemErro = e.error.message;
        }
      })
  }
}




