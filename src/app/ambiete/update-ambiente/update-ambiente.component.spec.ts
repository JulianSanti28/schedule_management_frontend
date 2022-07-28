import { ComponentFixture, TestBed } from '@angular/core/testing';

import { UpdateAmbienteComponent } from './update-ambiente.component';

describe('UpdateAmbienteComponent', () => {
  let component: UpdateAmbienteComponent;
  let fixture: ComponentFixture<UpdateAmbienteComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ UpdateAmbienteComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(UpdateAmbienteComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
