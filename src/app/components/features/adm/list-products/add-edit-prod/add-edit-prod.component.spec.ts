import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AddEditProdComponent } from './add-edit-prod.component';

describe('AddEditProdComponent', () => {
  let component: AddEditProdComponent;
  let fixture: ComponentFixture<AddEditProdComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [AddEditProdComponent]
    });
    fixture = TestBed.createComponent(AddEditProdComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
