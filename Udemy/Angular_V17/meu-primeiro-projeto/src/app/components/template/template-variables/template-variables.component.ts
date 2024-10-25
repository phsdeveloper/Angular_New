import { ElementRef, ViewChild, Component } from '@angular/core';
import { NewComponent } from '../../new-component/new-component.component';


@Component({
  selector: 'app-template-variables',
  standalone: true,
  imports: [NewComponent],
  templateUrl: './template-variables.component.html',
  styleUrl: './template-variables.component.scss'
})
export class TemplateVariablesComponent {

  @ViewChild('name') public nameInput!: ElementRef;
  @ViewChild('h2') public h2!: ElementRef;
  @ViewChild(NewComponent) public childComponent!:NewComponent;
  
public name_Value = 'name_Value >>  Não atualizado';
public name_Type = '';
public name_Class = '' ; 

public h2_InnerText = '';
public h2_DataCodigo = '';
public idadeAulaAnterior = '';
  ngAfterViewInit(): void {
    this.name_Value = this.nameInput.nativeElement.value + ' - Vindo do typeScript';
    this.name_Type = this.nameInput.nativeElement.type + ' - Vindo do typeScript';
    this.name_Class = this.nameInput.nativeElement.className + ' - Vindo do typeScript';

    this.h2_InnerText = this.h2.nativeElement.innerText + ' - Vindo do typeScript';
    this.h2_DataCodigo = this.h2.nativeElement.getAttribute('data-Codigo') + ' - Vindo do typeScript';
   this.idadeAulaAnterior = this.childComponent.Titulo + ' ->> vindo do typeScript dessa aula';
   
  }


public CaminhoComponente = 'src/app/components/template/template-variables';
public InputDescricao_02 = 'Depois basta acessar o elemento com o Text Interpolation acessando suas propriedades Exemplo: {{name.value}}'
public InputDescricao_03 = "É possivel tambem acessar atributos HTML como os data com o seguinte código {{h2.getAttribute('data-Codigo')}}"

public NewComponent_tagHTML = '<app-new-component/>'
public NewComponent_CodigoTS = '@ViewChild(NewComponent) public childComponent!:NewComponent;'
public NewComponent_ImportText = "import { ElementRef, ViewChild, Component } from '@angular/core';"


public DadosViaTS_Declaracao = "@ViewChild('name') public nameInput!: ElementRef;";
public DadosViaTS_GetDados = "this.name_Value = this.nameInput.nativeElement.value + ' - Vindo do typeScript';";
public DadosViaTS_Funcao= "ngAfterViewInit(): void {}";

}
