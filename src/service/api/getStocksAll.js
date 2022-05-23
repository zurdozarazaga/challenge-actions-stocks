
export async function getStocksAll() {
  const url = process.env.REACT_APP_TWELVE_DATA_BASE_URL;
  const exchange = 'NASDAQ'
  console.log('url', url)
  try {
    const response = await fetch(url + `stocks?source=docs&exchange=${exchange}`);

    const data = await response.json();
    console.log('data', data);
    return data;
  } catch (err) {
    console.error(err);
  }
}
