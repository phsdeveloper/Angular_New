import { Component } from '@angular/core';
import { TemplateBindingComponent } from '../../template/template-binding/template-binding.component';

@Component({
  selector: 'app-secao-06-template',
  standalone: true,
  imports: [TemplateBindingComponent],
  templateUrl: './secao-06-template.component.html',
  styleUrl: './secao-06-template.component.scss'
})
export class Secao06TemplateComponent {
  public title = 'Seção 6: [Angular] - Template';
}
