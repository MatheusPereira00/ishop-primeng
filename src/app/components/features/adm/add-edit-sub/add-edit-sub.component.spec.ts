import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AddEditSubComponent } from './add-edit-sub.component';

describe('AddEditSubComponent', () => {
  let component: AddEditSubComponent;
  let fixture: ComponentFixture<AddEditSubComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [AddEditSubComponent],
    });
    fixture = TestBed.createComponent(AddEditSubComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
