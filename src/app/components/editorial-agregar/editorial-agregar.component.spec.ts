import { ComponentFixture, TestBed } from '@angular/core/testing';

import { EditorialAgregarComponent } from './editorial-agregar.component';

describe('EditorialAgregarComponent', () => {
  let component: EditorialAgregarComponent;
  let fixture: ComponentFixture<EditorialAgregarComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [EditorialAgregarComponent]
    });
    fixture = TestBed.createComponent(EditorialAgregarComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
