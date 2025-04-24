import { Component } from '@angular/core';
import { TarefasService } from '../../../services/tarefas.service';
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
import { TarefasRequest } from '../../../models/tarefas.request';


@Component({
  selector: 'app-cadastro-tarefas',
  standalone: false,
  templateUrl: './cadastro-tarefas.component.html',
  styleUrl: './cadastro-tarefas.component.css'
})
export class CadastroTarefasComponent {


  form: FormGroup;
  msg: string = '';


  constructor(
    private service: TarefasService,
    private fb: FormBuilder
  ) {
    this.form = this.fb.group({
      nome: new FormControl('', [Validators.required]),
      data: new FormControl('', [Validators.required]),
      prioridade: new FormControl('', [Validators.required]),
    });
  }


  onSubmit() {


    const request: TarefasRequest = {
      nome: this.form.get('nome')?.value as string,
      data: this.form.get('data')?.value as string,
      prioridade: this.form.get('prioridade')?.value as string,
    }


    this.service.criar(request)
      .subscribe({
        next: (response) => {
          this.msg = `Tarefa '${response.nome}' criada com sucesso!`;
          this.form.reset();
        }
      });
  }
}





