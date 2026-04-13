export async function getGBPUSD() {
  const res = await fetch(
    "https://api.twelvedata.com/price?symbol=GBP/USD&apikey=05fd3136e64a4ee88dd8c0331ac12055"
  );

  const data = await res.json();
  return data.price;
}
