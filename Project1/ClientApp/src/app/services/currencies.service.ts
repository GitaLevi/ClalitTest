import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { map, Observable } from 'rxjs';
import { exchangeRatesResponseCollectioDTO } from '../models/currencyModel';
import { AppConfigService } from './app-config.service';

@Injectable({
  providedIn: 'root'
})
export class CurrenciesService {

  constructor(private httpClient: HttpClient,
    private appConfigService: AppConfigService) {
  }

  public getAllCurrencies(): Observable<exchangeRatesResponseCollectioDTO> {
    return this.httpClient.get<exchangeRatesResponseCollectioDTO>(this.appConfigService.apiBaseUrl() + "Currency/GetAllCurrencies");
  }
}
