import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { NewComponent } from './components/new-component/new-component.component';
import { Secao06TemplateComponent } from './components/SecoesAula/secao-06-template/secao-06-template.component';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, Secao06TemplateComponent,NewComponent],
  template: `
  <!--<router-outlet /> -->
  <div class="container-fluid">
    <br/>
    <h2>Udemy Curso de Angular 2 (v17+) Typescript do Básico ao Avançado</h2>
    <br/>
    <div class="accordion" id="accordionAulas">
      <app-secao-06-template/>
    </div>
    <app-new-component/>
    
  </div>

  `
})
export class AppComponent {
  title = 'meu-primeiro-projeto';
}
