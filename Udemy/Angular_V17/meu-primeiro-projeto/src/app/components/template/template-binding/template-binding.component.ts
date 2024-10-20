import { Component } from '@angular/core';

@Component({
  selector: 'app-template-binding',
  standalone: true,
  imports: [],
  templateUrl: './template-binding.component.html',
  styleUrl: './template-binding.component.scss'
})
export class TemplateBindingComponent {

constructor(){
  
}

  public CaminhoComponente = 'src/app/components/template/template-binding'

  public name = 'Paulo Santos';
  public age = 42;
  public descricao = 'O Text interpolation é uma das formas de comunicação entre o "Back-end" com o "Front-end" do Angular, onde essa comunicação é realizada através de dois pares de chaves {{ valor }}';
  public sum(val1: number, val2: number) {
    return val1 + val2;
  }

  /**************************************************************************************************************************
   *                                        23. Property binding                                                            *
  ***************************************************************************************************************************/

  public descricao2 = 'O Property Binding permite que a partir do "Back end" do Angular possamos controlar elementos HTML no "Front end" do angular. Isso é possóvel através do seguinte comando <element [property]="value"></element>';
  public isDisabled = true;
  public srcValue = 'https://res-1.cdn.office.net/files/fabric-cdn-prod_20240610.001/assets/item-types/32/folder.svg';
  public imgAlt = 'Property binding IMG ALT';
  public imgTitle = 'Property binding IMG Title';


}
