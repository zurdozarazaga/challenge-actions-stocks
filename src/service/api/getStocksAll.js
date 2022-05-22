
export async function getStocksAll() {
  const url = process.env.REACT_APP_TWELVE_DATA_URL_ALL;
  console.log('url', url)
  try {
    const response = await fetch(url);

    const data = await response.json();
    console.log('data', data);
    return data;
  } catch (err) {
    console.error(err);
  }
}
