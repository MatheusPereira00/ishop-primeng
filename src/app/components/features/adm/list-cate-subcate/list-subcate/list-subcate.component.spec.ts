import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ListSubcateComponent } from './list-subcate.component';

describe('ListSubcateComponent', () => {
  let component: ListSubcateComponent;
  let fixture: ComponentFixture<ListSubcateComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [ListSubcateComponent],
    });
    fixture = TestBed.createComponent(ListSubcateComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
