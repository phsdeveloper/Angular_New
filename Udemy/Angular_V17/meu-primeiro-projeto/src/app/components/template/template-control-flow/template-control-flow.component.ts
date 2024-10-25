import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';

@Component({
  selector: 'app-template-control-flow',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './template-control-flow.component.html',
  styleUrl: './template-control-flow.component.scss'
})
export class TemplateControlFlowComponent {
public CaminhoComponente = '../src/app/components/template/template-control-flow';
public bl_isTrue = true;
public FUN_AlterarValorBooleno() {
  this.bl_isTrue = !this.bl_isTrue;
}

}
