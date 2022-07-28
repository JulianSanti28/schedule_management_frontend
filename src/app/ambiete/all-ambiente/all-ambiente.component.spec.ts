import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AllAmbienteComponent } from './all-ambiente.component';

describe('AllAmbienteComponent', () => {
  let component: AllAmbienteComponent;
  let fixture: ComponentFixture<AllAmbienteComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AllAmbienteComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(AllAmbienteComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
