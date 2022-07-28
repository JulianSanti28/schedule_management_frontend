import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CreateAmbienteComponent } from './create-ambiente.component';

describe('CreateAmbienteComponent', () => {
  let component: CreateAmbienteComponent;
  let fixture: ComponentFixture<CreateAmbienteComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CreateAmbienteComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(CreateAmbienteComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
