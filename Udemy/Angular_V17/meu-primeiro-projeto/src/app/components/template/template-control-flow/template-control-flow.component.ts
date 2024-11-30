import { CommonModule, AsyncPipe, NgFor } from '@angular/common';
import { Component } from '@angular/core';
import { delay, Observable, of } from 'rxjs';

@Component({
  selector: 'app-template-control-flow',
  standalone: true,
  imports: [CommonModule, NgFor],
  templateUrl: './template-control-flow.component.html',
  styleUrl: './template-control-flow.component.scss'
})
export class TemplateControlFlowComponent {
  public CaminhoComponente = '../src/app/components/template/template-control-flow';
  public bl_isTrue = true;
  public FUN_AlterarValorBooleno() {
    this.bl_isTrue = !this.bl_isTrue;
  }


  //---------Aula 32


  public loadingData$: Observable<string[]> = of(['item 1', 'item 2', 'item 3',]).pipe(delay(3000));

  public FUN_TrackByFn(index: number) {
    return index;
  }
  public Aula32_teste = '<p>{{data}}</p>';
  public Aula32_teste2 = '<li>{{item}}</li>';

  public el_ColcheteAbrir = '{';
  public el_Colchetefechar = '}';
  public el_SinalMenor = '<';
  public el_SinalMenorBarra = '</';
  public el_SinalMaior = '>';

  public aula32_Array = "public loadingData$: Observable}}<string[]> = of(['item 1','item 2','item 3',]).pipe(delay(3000));"

  public aula32_FormaAntigaTrecho01 = '<ng-container *ngIf="loadingData$ | async as data; else loading">';
  public aula32_FormaAntigaTrecho02 = '<ng-container *ngFor="let item of data; trackBy: FUN_TrackByFn">';
  public aula32_FormaAntigaTrecho03 = '</ng-container>';



  /**AULA 33 */
  public items = [{ name: 'Paulo Santos - default' }];

  public FUN_addNewName(value: string) {
    return this.items.push({ name: value });
  }

  public trackByFN(index: number) {
    return index;
  }


  public aula33_bl_exibirExplicacaoNovo = false;
  public aula33_bl_exibirExplicacaoAntigo = false;

  public FUN_VisualizarNovo() {
    this.aula33_bl_exibirExplicacaoNovo = !this.aula33_bl_exibirExplicacaoNovo;
    if (this.aula33_bl_exibirExplicacaoAntigo)
      this.aula33_bl_exibirExplicacaoAntigo = false;
  }

  public FUN_VisualizarAntigo() {
    if (this.aula33_bl_exibirExplicacaoNovo)
      this.aula33_bl_exibirExplicacaoNovo = false;

    this.aula33_bl_exibirExplicacaoAntigo = !this.aula33_bl_exibirExplicacaoAntigo;



  }

  public aula33_texto = '{{i}}: {{item.name}} - First: {{f}} - Last: {{l}} - Even: {{e}} - Odd: {{o}}';
  public aula33_Texto2 = '*ngFor="let item of items; trackBy: trackByName; let i = index; let c = count; let f = first; let l = last; let e = even; let o = odd"';


  //------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------
  //Códigos aula 34

  public aula34_Nomes: NomeCadastro[] = [new NomeCadastro('Paulo Santos - default', this.formatarData(new Date()))];
  public aula34_ExibirFormaNova : boolean = true;

  public aula34_texto = '{{item.name}}';
  public aula34_texto2 = '{{item.dataCadastro}}';
  public aula34_texto3 = '<button class="btn btn-danger" (click)="FUN_Aula34_ExcluirItemLista(index)"> Excluir</button>';


  public FUN_Aula34_ExcluirItemLista(index: number) {
    console.log(`Index: ${index}`);
    this.aula34_Nomes.splice(index, 1);
    console.log(`Tamanho: ${this.aula34_Nomes.length}`);
  }

  public FUN_Aula34_AdicionarItem(value: string) {
    return this.aula34_Nomes.push(new NomeCadastro(value, this.formatarData(new Date())));
  }


  public Fun_Aula34_FormaNova()
  {
    this.aula34_ExibirFormaNova = true;
  }

  public FUN_Aula34_FormaAntiga()
  {
    this.aula34_ExibirFormaNova = false;
  }

  public formatarData(data: Date): string {
    const dia = ('0' + data.getDate()).slice(-2);
    const mes = ('0' + (data.getMonth() + 1)).slice(-2);
    const ano = data.getFullYear();
    const horas = ('0' + data.getHours()).slice(-2);
    const minutos = ('0' + data.getMinutes()).slice(-2);
    const segundos = ('0' + data.getSeconds()).slice(-2);
    return `${dia}/${mes}/${ano} ${horas}:${minutos}:${segundos}`;
  }

}
class NomeCadastro {
  public name: string;
  public dataCadastro: string;

  constructor(name: string, dataCadastro: string) {
    this.name = name;
    this.dataCadastro = dataCadastro;
  }
}

