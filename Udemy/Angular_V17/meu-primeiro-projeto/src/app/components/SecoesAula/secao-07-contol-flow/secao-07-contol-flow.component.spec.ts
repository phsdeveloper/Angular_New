import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Secao07ContolFlowComponent } from './secao-07-contol-flow.component';

describe('Secao07ContolFlowComponent', () => {
  let component: Secao07ContolFlowComponent;
  let fixture: ComponentFixture<Secao07ContolFlowComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [Secao07ContolFlowComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(Secao07ContolFlowComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
