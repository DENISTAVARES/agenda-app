import { Component } from '@angular/core';
import { Chart } from 'angular-highcharts';
import { DashboardResponse } from '../../../models/dashboard.response';
import { TarefasService } from '../../../services/tarefas.service';


@Component({
  selector: 'app-dashboard',
  standalone: false,
  templateUrl: './dashboard.component.html',
  styleUrl: './dashboard.component.css'
})
export class DashboardComponent {


  //Propriedades do componente
  grafico: Chart = new Chart();
  dados: DashboardResponse[] = [];


  constructor(
    private service: TarefasService
  ) { }


  //Função executada quando o componente é inicializado
  ngOnInit() {


    this.service.consultarDashboard()
      .subscribe((response) => {


        this.dados = response;


        //Montando os dados do gráfico
        const conteudo: any[] = [];
        this.dados.forEach((item) => {
          conteudo.push([item.prioridade, item.quantidade]);
        });


        //Configurando o gráfico
        this.grafico = new Chart({
          chart: { type: 'pie' },
          title: { text: 'Quantidade de tarefas por prioridade' },
          subtitle: { text: 'Total de tarefas separadas por tipo / prioridade' },
          plotOptions: {
            pie: {
              innerSize: '50%',
              dataLabels: { enabled: true }
            }
          },
          series: [{
            data: conteudo,
            type: 'pie',
            name: 'Quantidade de tarefas',
          }],
          legend: { enabled: false },
          credits: { enabled: false },
        });
      });
  }
}





