import { TestBed } from '@angular/core/testing';

import { SidenavConfigService } from './sidenav-config.service';

describe('SidenavConfigService', () => {
  let service: SidenavConfigService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(SidenavConfigService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
