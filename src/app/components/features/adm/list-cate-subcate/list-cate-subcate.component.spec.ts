import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ListCateSubcateComponent } from './list-cate-subcate.component';

describe('ListCateSubcateComponent', () => {
  let component: ListCateSubcateComponent;
  let fixture: ComponentFixture<ListCateSubcateComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [ListCateSubcateComponent],
    });
    fixture = TestBed.createComponent(ListCateSubcateComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
