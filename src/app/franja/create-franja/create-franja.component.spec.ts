import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CreateFranjaComponent } from './create-franja.component';

describe('CreateFranjaComponent', () => {
  let component: CreateFranjaComponent;
  let fixture: ComponentFixture<CreateFranjaComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CreateFranjaComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(CreateFranjaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
