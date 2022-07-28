import { ComponentFixture, TestBed } from '@angular/core/testing';

import { UpdateFranjaComponent } from './update-franja.component';

describe('UpdateFranjaComponent', () => {
  let component: UpdateFranjaComponent;
  let fixture: ComponentFixture<UpdateFranjaComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ UpdateFranjaComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(UpdateFranjaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
