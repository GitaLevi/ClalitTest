import { APP_INITIALIZER, NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule } from '@angular/common/http';

import { AppComponent } from './app.component';
import { CurrenciesPageComponent } from './components/currencies-page/currencies-page.component';
import { CurrenciesListComponent } from './components/currencies-list/currencies-list.component';
import { CommonModule } from '@angular/common';
import { AppConfigService } from './services/app-config.service';

@NgModule({
  declarations: [
    AppComponent,
    CurrenciesPageComponent,
    CurrenciesListComponent
  ],
  imports: [
    BrowserModule,
    CommonModule,
    HttpClientModule
  ],
  providers: [
    {
      provide: APP_INITIALIZER,
      multi: true,
      deps: [AppConfigService],
      useFactory: (appConfigService: AppConfigService) => {
        return async () => {
          return await appConfigService.loadAppConfig();
        };
      }
    }
  ], bootstrap: [AppComponent]
})
export class AppModule { }
