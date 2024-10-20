import { Component } from '@angular/core';

@Component({
  selector: 'app-template-binding',
  standalone: true,
  imports: [],
  templateUrl: './template-binding.component.html',
  styleUrl: './template-binding.component.scss'
})
export class TemplateBindingComponent {
  public CaminhoComponente = 'src/app/components/template/template-binding'

  public name = 'Paulo Santos';
  public age = 42;
  public descricao = 'O Text interpolation é uma das formas de comunicação entre o "Back-end" com o "Front-end" do Angular, onde essa comunicação é realizada através de dois pares de chaves {{ valor }}';
  
  public sum(val1: number, val2: number){
  return val1 + val2;
}
}
