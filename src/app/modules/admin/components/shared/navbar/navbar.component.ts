import { Component } from '@angular/core';
import { AuthService } from '../../../../../services/auth.service';
import { Router } from '@angular/router';


@Component({
  selector: 'app-navbar',
  standalone: false,
  templateUrl: './navbar.component.html',
  styleUrl: './navbar.component.css'
})
export class NavbarComponent {


  //atributos
  nome: string = '';
  email: string = '';


  //construtor para injeção de dependência
  constructor(
    private authService : AuthService,
    private router: Router
  ) {}


  //função para capturar o evento de carregamento do componente
  ngOnInit() {
    //capturando os dados do usuário na sessão do navegador
    const usuario = this.authService.get();
    //preenchendo o nome e o email
    this.nome = usuario?.nome as string;
    this.email = usuario?.email as string;
  }


  //função para logout do usuário
  logout() {
    if(confirm('Deseja realmente encerrar sua sessão?')) {
      this.authService.remove(); //apagar os dados do usuário da sessão
      //redirecionar de volta para a página de login
      this.router.navigate(['/login/login-usuario'])
        .then(() => {
          location.reload();
        })
    }
  }


}





