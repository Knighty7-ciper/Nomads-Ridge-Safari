// Currency conversion and formatting utility for Kenya/East Africa region

const EXCHANGE_RATES = {
  USD_TO_KES: 129.50, // Approximate rate
};

const CURRENCY_CONFIG = {
  KES: {
    symbol: 'KES',
    locale: 'en-KE',
    currencyCode: 'KES',
  },
  USD: {
    symbol: '$',
    locale: 'en-US',
    currencyCode: 'USD',
  },
};

export function formatPrice(
  priceInUSD: number,
  currency: 'KES' | 'USD' = 'KES'
): string {
  let priceToFormat = priceInUSD;

  if (currency === 'KES') {
    priceToFormat = priceInUSD * EXCHANGE_RATES.USD_TO_KES;
  }

  const config = CURRENCY_CONFIG[currency];

  return new Intl.NumberFormat(config.locale, {
    style: 'currency',
    currency: config.currencyCode,
    minimumFractionDigits: 0,
    maximumFractionDigits: 0,
  }).format(priceToFormat);
}

export function convertToKES(priceInUSD: number): number {
  return Math.round(priceInUSD * EXCHANGE_RATES.USD_TO_KES);
}

export function convertToUSD(priceInKES: number): number {
  return Math.round(priceInKES / EXCHANGE_RATES.USD_TO_KES);
}

export function getPricePerPerson(
  totalPrice: number,
  groupSize: number,
  currency: 'KES' | 'USD' = 'KES'
): string {
  const pricePerPerson = totalPrice / groupSize;
  return formatPrice(pricePerPerson, currency);
}
