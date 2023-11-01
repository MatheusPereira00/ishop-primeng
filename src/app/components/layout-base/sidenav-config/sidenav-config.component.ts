import { Component, inject, Input } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MenuItem, MessageService } from 'primeng/api';
import { ButtonModule } from 'primeng/button';
import { SidebarModule } from 'primeng/sidebar';
import { SidenavConfigService } from 'src/app/data-acess/services/sidenav-config-service/sidenav-config.service';
import { RadioButtonModule } from 'primeng/radiobutton';
import { FormsModule } from '@angular/forms';
import { TranslocoService } from '@ngneat/transloco';
import { ToastModule } from 'primeng/toast';

@Component({
  selector: 'app-sidenav-config',
  standalone: true,
  imports: [
    CommonModule,
    ButtonModule,
    SidebarModule,
    RadioButtonModule,
    FormsModule,
    ToastModule,
  ],
  templateUrl: './sidenav-config.component.html',
  providers: [MessageService],
})
export class SidenavConfigComponent {
  @Input() public minimal = false;

  public sidebarVisible = false;
  public items!: MenuItem[];
  public value!: number;

  public scales: number[] = [10, 11, 12, 13, 14];
  private _sidnavConfig = inject(SidenavConfigService);
  private _translocoService = inject(TranslocoService);
  private _messageService = inject(MessageService);

  get scale(): number {
    return this._sidnavConfig.config.scale;
  }

  set scale(_val: number) {
    this._sidnavConfig.config.scale = _val;
  }

  get menuMode(): string {
    return this._sidnavConfig.config.menuMode;
  }

  public set menuMode(_val: string) {
    this._sidnavConfig.config.menuMode = _val;
  }

  public changeLang(lang: string): void {
    this._translocoService.setActiveLang(lang);
    this._messageService.add({
      key: 'tc',
      severity: 'info',
      summary: 'IDIOMA',
      detail: 'IDIOMA ALTERADO',
    });
  }
  public toogleSidebarVisible(): void {
    this.sidebarVisible = true;
  }

  public decrementScale(): void {
    this.scale--;
    this.applyScale();
  }

  public incrementScale(): void {
    this.scale++;
    this.applyScale();
  }

  public applyScale(): void {
    document.documentElement.style.fontSize = this.scale + 'px';
  }

  public changeTheme(theme: string, colorScheme: string): void {
    const themeLink = <HTMLLinkElement>document.getElementById('theme-css');
    const newHref = themeLink
      .getAttribute('href')!
      .replace(this._sidnavConfig.config.theme, theme);
    this._sidnavConfig.config.colorScheme;
    this.replaceThemeLink(newHref, () => {
      this._sidnavConfig.config.theme = theme;
      this._sidnavConfig.config.colorScheme = colorScheme;
      this._sidnavConfig.onConfigUpdate();
    });
  }

  public replaceThemeLink(href: string, onComplete: Function): void {
    const id = 'theme-css';
    const themeLink = <HTMLLinkElement>document.getElementById('theme-css');
    const cloneLinkElement = <HTMLLinkElement>themeLink.cloneNode(true);

    cloneLinkElement.setAttribute('href', href);
    cloneLinkElement.setAttribute('id', id + '-clone');

    themeLink.parentNode!.insertBefore(cloneLinkElement, themeLink.nextSibling);

    cloneLinkElement.addEventListener('load', () => {
      themeLink.remove();
      cloneLinkElement.setAttribute('id', id);
      onComplete();
    });
  }
}
