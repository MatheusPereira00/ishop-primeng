import { Injectable } from '@angular/core';
import { Subject } from 'rxjs';
import { AppConfig, LayoutState } from '../../interfaces/config-interface/config';

@Injectable({
  providedIn: 'root',
})
export class SidenavConfigService {
  public appConfig!: AppConfig;
  public layoutState!: LayoutState;

  public config: AppConfig = {
    ripple: false,
    inputStyle: 'outlined',
    menuMode: 'static',
    colorScheme: 'light',
    theme: 'lara-light-indigo',
    scale: 10,
  };

  public state: LayoutState = {
    staticMenuDesktopInactive: false,
    overlayMenuActive: false,
    profileSidebarVisible: false,
    configSidebarVisible: false,
    staticMenuMobileActive: false,
    menuHoverActive: false,
  };

  private overlayOpen = new Subject<any>();

  private configUpdate = new Subject<AppConfig>();

  public configUpdate$ = this.configUpdate.asObservable();

  public overlayOpen$ = this.overlayOpen.asObservable();

  public onMenuToggle(): void {
    if (this.isOverlay()) {
      this.state.overlayMenuActive = !this.state.overlayMenuActive;
      if (this.state.overlayMenuActive) {
        this.overlayOpen.next(null);
      }
    }

    if (this.isDesktop()) {
      this.state.staticMenuDesktopInactive = !this.state.staticMenuDesktopInactive;
    } else {
      this.state.staticMenuMobileActive = !this.state.staticMenuMobileActive;

      if (this.state.staticMenuMobileActive) {
        this.overlayOpen.next(null);
      }
    }
  }

  public showProfileSidebar(): void {
    this.state.profileSidebarVisible = !this.state.profileSidebarVisible;
    if (this.state.profileSidebarVisible) {
      this.overlayOpen.next(null);
    }
  }

  public isOverlay(): any {
    return this.config.menuMode === 'overlay';
  }

  public isDesktop(): any {
    return window.innerWidth > 991;
  }

  public onConfigUpdate(): void {
    this.configUpdate.next(this.config);
  }
}
