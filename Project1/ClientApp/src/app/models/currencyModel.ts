export interface currencyModel {
    CurrentChange: number;
    CurrentExchangeRate: number;
    Key: string
    LastUpdate: Date
    Unit: number
}
export interface exchangeRatesResponseCollectioDTO {
    ExchangeRatesResponseCollectioDTO: exchangeRates
}
export interface exchangeRates {
    ExchangeRates: exchangeRateResponseDTO
}
export interface exchangeRateResponseDTO {
    ExchangeRateResponseDTO: currencyModel[]
}