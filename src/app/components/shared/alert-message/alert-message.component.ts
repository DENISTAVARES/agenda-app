import { CommonModule } from '@angular/common';
import { Component, Input } from '@angular/core';


@Component({
  selector: 'app-alert-message',
  imports: [CommonModule],
  templateUrl: './alert-message.component.html',
  styleUrl: './alert-message.component.css'
})
export class AlertMessageComponent {


  //parâmetros do componente
  @Input() message : string = '';
  @Input() type : 'success' | 'error' = 'success';
}




