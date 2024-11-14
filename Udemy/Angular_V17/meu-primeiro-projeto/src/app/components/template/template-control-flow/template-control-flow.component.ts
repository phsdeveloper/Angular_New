import { CommonModule,AsyncPipe } from '@angular/common';
import { Component } from '@angular/core';
import { delay, Observable, of } from 'rxjs';

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
}
