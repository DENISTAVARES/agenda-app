import { Component } from '@angular/core';
import { UsuariosService } from '../../../services/usuarios.service';

@Component({
  selector: 'app-login-usuario',
  standalone: false,
  templateUrl: './login-usuario.component.html',
  styleUrl: './login-usuario.component.css'
})
export class LoginUsuarioComponent {

  //construtor para injeção de dependência
  constructor(
    private service: UsuariosService
  ) {    
  }
}
