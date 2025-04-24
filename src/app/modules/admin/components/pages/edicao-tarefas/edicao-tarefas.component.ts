import { Component } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
import { TarefasService } from '../../../services/tarefas.service';
import { TarefasRequest } from '../../../models/tarefas.request';
import { ActivatedRoute } from '@angular/router';


@Component({
  selector: 'app-edicao-tarefas',
  standalone: false,
  templateUrl: './edicao-tarefas.component.html',
  styleUrl: './edicao-tarefas.component.css'
})
export class EdicaoTarefasComponent {


  form: FormGroup;
  msg: string = '';
  id: string = '';


  constructor(
    private service: TarefasService,
    private fb: FormBuilder,
    private activatedRoute: ActivatedRoute,
  ) {
    this.form = this.fb.group({
      nome: new FormControl('', [Validators.required]),
      data: new FormControl('', [Validators.required]),
      prioridade: new FormControl('', [Validators.required]),
    });
  }


  ngOnInit() {
    this.id = this.activatedRoute.snapshot.params['id'];
    this.service.obterPorId(this.id)
      .subscribe({
        next: (response) => {
          const dataFormatada = response.data ? response.data.substring(0, 10) : null;
          this.form.patchValue({
            ...response,
            data: dataFormatada
          });
        }
      })
  }


  onSubmit() {


    const request: TarefasRequest = {
      nome: this.form.get('nome')?.value as string,
      data: this.form.get('data')?.value as string,
      prioridade: this.form.get('prioridade')?.value as string,
    }


    this.service.atualizar(this.id, request)
      .subscribe({
        next: (response) => {
          this.msg = `Tarefa '${response.nome}' atualizada com sucesso!`;
        }
      });
  }
}





