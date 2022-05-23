export async function getStocksAll(symbol, interval, start_date= null, end_date= null) {
  const url = process.env.REACT_APP_TWELVE_DATA_BASE_URL;
  console.log('url', url)
  try {
    const response = await fetch(url + `ime_series?${symbol}=TSLA&interval=${interval}&start_date=${start_date}&end_date=${end_date}&apikey=` + process.env.REACT_APP_TWELVE_DATA_API_KEY);

    const data = await response.json();
    console.log('data', data);
    return data;
  } catch (err) {
    console.error(err);
  }
}
