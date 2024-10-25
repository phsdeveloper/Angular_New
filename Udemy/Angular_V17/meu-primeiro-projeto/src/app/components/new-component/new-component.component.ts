import { Component } from '@angular/core';

@Component({
  selector: 'app-new-component',
  standalone: true,
  imports: [],
  templateUrl: './new-component.component.html',
  styleUrl: './new-component.component.scss'
})
export class NewComponent {
  public Titulo = 'New Component >> Path: src/components/new-component/new-component.component.ts';
}
