import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ExperienciaUpdateComponent } from './experiencia-update.component';

describe('ExperienciaUpdateComponent', () => {
  let component: ExperienciaUpdateComponent;
  let fixture: ComponentFixture<ExperienciaUpdateComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ExperienciaUpdateComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ExperienciaUpdateComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
