import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Secao06TemplateComponent } from './secao-06-template.component';

describe('Secao06TemplateComponent', () => {
  let component: Secao06TemplateComponent;
  let fixture: ComponentFixture<Secao06TemplateComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [Secao06TemplateComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(Secao06TemplateComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
