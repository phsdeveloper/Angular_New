import { CommonModule,AsyncPipe, NgFor } from '@angular/common';
import { Component } from '@angular/core';
import { delay, Observable, of } from 'rxjs';

@Component({
  selector: 'app-template-control-flow',
  standalone: true,
  imports: [CommonModule,NgFor],
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


public loadingData$: Observable<string[]> = of(['item 1','item 2','item 3',]).pipe(delay(3000));

public FUN_TrackByFn(index:number)
{
  return index;
}
public Aula32_teste = '<p>{{data}}</p>';
public Aula32_teste2 = '<li>{{item}}</li>';

public el_ColcheteAbrir ='{';
public el_Colchetefechar ='}';
public el_SinalMenor = '<';
public el_SinalMenorBarra = '</';
public el_SinalMaior = '>';

public aula32_Array = "public loadingData$: Observable}}<string[]> = of(['item 1','item 2','item 3',]).pipe(delay(3000));"

public aula32_FormaAntigaTrecho01 = '<ng-container *ngIf="loadingData$ | async as data; else loading">';
public aula32_FormaAntigaTrecho02 = '<ng-container *ngFor="let item of data; trackBy: FUN_TrackByFn">';
public aula32_FormaAntigaTrecho03 = '</ng-container>';



/**AULA 33 */
public items = [{name: 'Paulo Santos - default'}];

public FUN_addNewName(value: string){
  return this.items.push({name: value});
}

public trackByFN(index: number){
  return index;
}


public aula33_bl_exibirExplicacaoNovo = false;
public aula33_bl_exibirExplicacaoAntigo = false;

public FUN_VisualizarNovo() {
 this.aula33_bl_exibirExplicacaoNovo = !this.aula33_bl_exibirExplicacaoNovo;
 if(this.aula33_bl_exibirExplicacaoAntigo)
  this.aula33_bl_exibirExplicacaoAntigo = false;
}

public FUN_VisualizarAntigo(){
  if(this.aula33_bl_exibirExplicacaoNovo)
    this.aula33_bl_exibirExplicacaoNovo = false;

  this.aula33_bl_exibirExplicacaoAntigo=!this.aula33_bl_exibirExplicacaoAntigo;



}

public aula33_texto = '{{i}}: {{item.name}} - First: {{f}} - Last: {{l}} - Even: {{e}} - Odd: {{o}}';
public aula33_Texto2 = '*ngFor="let item of items; trackBy: trackByName; let i = index; let c = count; let f = first; let l = last; let e = even; let o = odd"';
}
