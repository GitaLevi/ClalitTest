import { Component } from '@angular/core';
import { currencyModel, exchangeRatesResponseCollectioDTO } from 'src/app/models/currencyModel';
import { CurrenciesService } from 'src/app/services/currencies.service';

@Component({
  selector: 'app-currencies-list',
  templateUrl: './currencies-list.component.html',
  styleUrls: ['./currencies-list.component.scss']
})
export class CurrenciesListComponent {
  currenciesList: currencyModel[] = [];
  constructor(private currenciesService: CurrenciesService) {
  }

  ngOnInit(): void {
    this.getNegativeChanges();
  }

  getNegativeChanges() {
    this.currenciesService.getAllCurrencies().subscribe((response: exchangeRatesResponseCollectioDTO) => {
      if (response) {
        let list: currencyModel[] = response.ExchangeRatesResponseCollectioDTO.ExchangeRates.ExchangeRateResponseDTO;
        this.currenciesList = list.filter(change => change.CurrentChange < 0);
      }
    });
  }


}
