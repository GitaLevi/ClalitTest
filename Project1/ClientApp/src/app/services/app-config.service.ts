import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Subject } from 'rxjs';
@Injectable({
  providedIn: 'root'
})
export class AppConfigService {

  public appConfig: any;
  setBaseUrl: Subject<any> = new Subject();
  constructor(private httpClient: HttpClient) { }

  async loadAppConfig() {
    return await this.httpClient.get('/assets/config.json')
      .subscribe(data => {
        this.appConfig = data;
        this.setBaseUrl.next(this.appConfig)
      });
  }

  apiBaseUrl(): string {
    if (!this.appConfig) {
      throw Error('Config file not loaded!');
    }
    return this.appConfig.apiBaseUrl;
  }
}
