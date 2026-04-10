"use client";
import { motion } from "framer-motion";

export default function Home() {
  return (
    <main className="text-white bg-[#0b0f19] min-h-screen px-6">

      {/* HERO */}
      
        <section className="py-16">

        <h1 className="text-5xl font-bold mb-4">
          Laughter Strategist
        </h1>
        <p className="text-gray-400">
          Professional Forex Signals & Market Analysis
        </p>
      </section>

      {/* TOP STATS BAR */}
      <section className="grid grid-cols-2 md:grid-cols-4 gap-4 mb-10">

        {[
          { pair: "GBP/USD", price: "1.2500" },
          { pair: "EUR/USD", price: "1.0800" },
          { pair: "USD/JPY", price: "150.20" },
          { pair: "XAU/USD", price: "2300" },
        ].map((item, i) => (
          <div key={i} className="glass p-4 text-center">
            <p className="text-gray-400">{item.pair}</p>
            <h2 className="text-green-400 text-xl">{item.price}</h2>
          </div>
        ))}
      </section>

      {/* MAIN GRID */}
      <section className="grid md:grid-cols-3 gap-6">

        {/* LEFT: CHART */}
        <div className="md:col-span-2 glass p-4">
          <h2 className="mb-4 text-lg">Live Market Chart</h2>

          <iframe
            src="https://s.tradingview.com/widgetembed/?symbol=FX:GBPUSD&interval=15&theme=dark"
            className="w-full h-[400px]"
          ></iframe>
        </div>

        {/* RIGHT: SIGNAL FEED */}
        <div className="glass p-4">
          <h2 className="mb-4 text-lg">Live Signals</h2>

          <div className="space-y-4">

            <div className="border-b border-white/10 pb-2">
              <p className="text-green-400">BUY GBP/USD</p>
              <p className="text-sm text-gray-400">Entry: 1.2500</p>
            </div>

            <div className="border-b border-white/10 pb-2">
              <p className="text-red-400">SELL EUR/USD</p>
              <p className="text-sm text-gray-400">Entry: 1.0800</p>
            </div>

            <div>
              <p className="text-green-400">BUY USD/JPY</p>
              <p className="text-sm text-gray-400">Entry: 150.00</p>
            </div>

          </div>
        </div>

      </section>

      {/* LOWER SECTION */}
      <section className="grid md:grid-cols-2 gap-6 mt-10">

        {/* MARKET OVERVIEW */}
<section className="glass p-6 mt-10">
  <h2 className="text-xl mb-3">Market Overview</h2>
  <p className="text-green-400">
    GBP ↑ EUR ↓ USD ↑ JPY ↓
  </p>
</section>
{/* MARKET NEWS */}
<section className="glass p-6 mt-6 mb-20">
  <h2 className="text-xl mb-3">Market News</h2>
  <p className="text-gray-400">
    GBP gaining strength after positive economic data release.
  </p>
</section>



        {/* PERFORMANCE */}
        <div className="glass p-6">
          <h2 className="mb-4">Performance</h2>
          <p className="text-green-400 text-2xl">+320 Pips This Week</p>
          <p className="text-gray-400">Win Rate: 92%</p>
        </div>

        {/* CTA */}
        <div className="glass p-6 flex flex-col justify-center">
          <h2 className="mb-4">Join Premium Signals</h2>

          <a
            href="https://wa.me/7017838958"
            className="bg-green-500 px-6 py-3 rounded-lg text-center hover:scale-105 transition"
          >
            Join WhatsApp
          </a>
        </div>

      </section>

    </main>
  );
}
