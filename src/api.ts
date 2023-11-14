const BASE_URL = "https://api.coinpaprika.com/v1";

const BASE_URL_2 = "https://ohlcv-api.nomadcoders.workers.dev";

export function fetchCoins() {
  return fetch(`${BASE_URL}/coins`).then((response) => response.json());
}

export function fetchPrice(coinId: string) {
  return fetch(`${BASE_URL}/tickers/${coinId}`).then((response) =>
    response.json()
  );
}

export function fetchChart(coinId: string) {
  return fetch(`${BASE_URL}/coins/${coinId}`).then((response) =>
    response.json()
  );
}

export function fetchChartData(coinId: string) {
  return fetch(`${BASE_URL_2}?coinId=${coinId}`).then((response) =>
    response.json()
  );
}
