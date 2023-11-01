import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SidenavConfigComponent } from './sidenav-config.component';

describe('SidenavConfigComponent', () => {
  let component: SidenavConfigComponent;
  let fixture: ComponentFixture<SidenavConfigComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [SidenavConfigComponent]
    });
    fixture = TestBed.createComponent(SidenavConfigComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
