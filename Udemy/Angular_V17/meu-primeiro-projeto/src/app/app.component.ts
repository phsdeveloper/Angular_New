import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { NewComponent } from './components/new-component/new-component.component';
import { TemplateBindingComponent } from './components/template/template-binding/template-binding.component';

@Component({
  selector: 'app-root',
  standalone: true, 
  imports: [RouterOutlet,NewComponent,TemplateBindingComponent],
  template: `
  <!--<router-outlet /> -->
  <app-new-component/>
  <app-template-binding />

  `
})
export class AppComponent {
  title = 'meu-primeiro-projeto';
}
