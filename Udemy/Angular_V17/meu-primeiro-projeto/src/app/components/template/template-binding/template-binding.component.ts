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

  /**************************************************************************************************************************
   *                                        23. Property binding                                                            *
  ***************************************************************************************************************************/

public descricaoAula24='O Attribute binding é bem similar ao Property binding, apenas a sintaxe que é diferente <element [attr.attribute-you-are-targeting]="value"> </element>';
public Aula24_ArialLabel = 'Aula 24 Arial label';
public Aula24_Title = 'Aula 24 Title';


  /**************************************************************************************************************************
   *                                        25. Class and Style binding                                                     *
  ***************************************************************************************************************************/
  
  public descricaoAula25='É possivel controlar as classes a partir de alterações no arquivo ts do componente, aumentando assim a reatividade da aplicação'
                        + ' seguindo a seguinte sintaxe: [class.background-red] = "valor booleano".'
                        + 'Agora a parte dos estilos segue quase o mesmo esquema, mas muda apenas que é possivel passar um texto de estilo ao invés de um valor booleno.'

  ;

  public isTextDecoration = this.age <=18? 'underline': 'none';

}
