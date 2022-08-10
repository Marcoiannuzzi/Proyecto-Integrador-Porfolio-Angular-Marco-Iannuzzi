import { ComponentFixture, TestBed } from '@angular/core/testing';

import { EducacionUpdateComponent } from './educacion-update.component';

describe('EducacionUpdateComponent', () => {
  let component: EducacionUpdateComponent;
  let fixture: ComponentFixture<EducacionUpdateComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ EducacionUpdateComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(EducacionUpdateComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
