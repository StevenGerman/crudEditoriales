import { ComponentFixture, TestBed } from '@angular/core/testing';

import { EditorialListarComponent } from './editorial-listar.component';

describe('EditorialListarComponent', () => {
  let component: EditorialListarComponent;
  let fixture: ComponentFixture<EditorialListarComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [EditorialListarComponent]
    });
    fixture = TestBed.createComponent(EditorialListarComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
