import { importProvidersFrom, isDevMode } from '@angular/core';
import { AppComponent } from './app/app.component';
import {
  HttpClientModule,
  provideHttpClient,
  withInterceptorsFromDi,
} from '@angular/common/http';
import {
  BrowserAnimationsModule,
  provideAnimations,
} from '@angular/platform-browser/animations';
import { AppRoutingModule } from './app/app-routing.module';
import { bootstrapApplication, BrowserModule } from '@angular/platform-browser';
import { MessageService } from 'primeng/api';

import { TranslocoRootModule } from './app/shared/transloco/transloco-root.module';
import { provideTransloco } from '@ngneat/transloco';

bootstrapApplication(AppComponent, {
  providers: [
    importProvidersFrom(
      BrowserModule,
      BrowserAnimationsModule,
      AppRoutingModule,
      HttpClientModule,
      TranslocoRootModule
    ),
    MessageService,
    provideAnimations(),
    provideHttpClient(withInterceptorsFromDi()),
    provideHttpClient(),
    provideTransloco({
      config: {
        availableLangs: ['pt', 'en'],
        defaultLang: 'pt',
        // Remove this option if your application doesn't support changing language in runtime.
        reRenderOnLangChange: true,
        prodMode: !isDevMode(),
      },
    }),
  ],
}).catch(err => console.error(err));
