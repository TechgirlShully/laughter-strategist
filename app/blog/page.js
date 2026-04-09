export default function Blog() {
  return (
    <div className="p-10 bg-black text-white min-h-screen">
      <h1 className="text-3xl mb-6">Market Insights</h1>

      <div className="bg-gray-900 p-6 rounded mb-4 hover:scale-105 transition">

        <h2 className="text-xl">GBP/USD Analysis</h2>
        <p className="text-gray-400 mt-2">
          Market shows bullish momentum with strong support levels...
        </p>
      </div>

      <div className="bg-gray-900 p-6 rounded mb-4 hover:scale-105 transition">

        <h2 className="text-xl">EUR/USD Outlook</h2>
        <p className="text-gray-400 mt-2">
          Bearish trend continues as resistance holds...
        </p>
      </div>
    </div>
  );
}
