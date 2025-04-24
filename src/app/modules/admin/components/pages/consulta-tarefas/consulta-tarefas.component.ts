import { Component } from '@angular/core';
import { TarefasService } from '../../../services/tarefas.service';
import { TarefasResponse } from '../../../models/tarefas.response';


@Component({
  selector: 'app-consulta-tarefas',
  standalone: false,
  templateUrl: './consulta-tarefas.component.html',
  styleUrl: './consulta-tarefas.component.css'
})
export class ConsultaTarefasComponent {


  tarefas: TarefasResponse[] = [];
  msg: string = '';


  constructor(
    private service: TarefasService
  ) {    
  }


  ngOnInit() {
    this.service.listar()
      .subscribe((response) => {
        this.tarefas = response;
      });
  }


  onDelete(id: string) {
    if(confirm('Deseja realmente excluir a tarefa selecionada?')) {
      this.service.excluir(id)
        .subscribe((response) => {
          this.msg = `Tarefa '${response.nome}', excluída com sucesso.`;
          this.ngOnInit();
        });
    }
  }


}
