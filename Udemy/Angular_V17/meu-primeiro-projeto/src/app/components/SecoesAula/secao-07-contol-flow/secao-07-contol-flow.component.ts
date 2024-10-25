import { Component } from '@angular/core';
import { TemplateControlFlowComponent } from '../../template/template-control-flow/template-control-flow.component';

@Component({
  selector: 'app-secao-07-contol-flow',
  standalone: true,
  imports: [TemplateControlFlowComponent],
  templateUrl: './secao-07-contol-flow.component.html',
  styleUrl: './secao-07-contol-flow.component.scss'
})
export class Secao07ContolFlowComponent {
public title = 'Seção 7: [ Angular ] - Control Flow'
}
