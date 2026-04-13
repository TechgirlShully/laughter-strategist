"use client";
import { useEffect, useState } from "react";


export default function Home() {
  const [price, setPrice] = useState(null);

useEffect(() => {
  fetch("https://api.twelvedata.com/price?symbol=GBP/USD&apikey=05fd3136e64a4ee88dd8c0331ac12055")
    .then(res => res.json())
    .then(data => setPrice(data.price));
}, []);

  return (
    <main className="text-white bg-[#0b0f19] min-h-screen px-6">

      {/* HERO */}
      
        <section className="py-16">

        <h1 className="text-5xl font-bold mb-4">
          Laughter-The-Strategist
        </h1>
        <p className="text-gray-400">
          Professional Forex Signals & Market Analysis
        </p>
      </section>

      <div className="glass p-4 text-center">
  <p className="text-gray-400">GBP/USD</p>
  <h2 className="text-green-400 text-xl">
    {price ? price : "Loading..."}
  </h2>
</div>

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

      <section className="glass p-10 mt-10">
  <h2 className="text-2xl mb-6">FAQs</h2>

  <div className="space-y-4 text-gray-400">
    <p><strong>Are your signals guaranteed?</strong><br/>No. Forex trading is risky and profits are not guaranteed.</p>

    <p><strong>Do you offer mentorship?</strong><br/>Yes. We provide training and guidance for traders.</p>

    <p><strong>Can beginners join?</strong><br/>Absolutely. All levels are welcome.</p>
  </div>
</section>

<section className="glass p-10 mt-10">
  <h2 className="text-2xl mb-6">Get Started</h2>

  <form className="grid gap-4">

    <input placeholder="Full Name" className="p-3 bg-black/40 rounded"/>
    <input placeholder="Email Address" className="p-3 bg-black/40 rounded"/>

    <input placeholder="Interest (Signals / Mentorship)" className="p-3 bg-black/40 rounded"/>

    <textarea placeholder="Your Learning Goals" className="p-3 bg-black/40 rounded"></textarea>

    <button className="bg-green-500 p-3 rounded hover:scale-105">
      Submit
    </button>

  </form>

  <section className="grid md:grid-cols-3 gap-6 mt-10">

  {/* BASIC */}
  <div className="glass p-6">
    <h3 className="text-xl mb-2">Student</h3>
    <p className="text-green-400 mb-4">$50/month</p>
    <p className="text-gray-400">Access to learning materials</p>
  </div>

  {/* VIP */}
  <div className="glass p-6 border border-green-400">
    <h3 className="text-xl mb-2">VIP</h3>
    <p className="text-green-400 mb-4">$150/month</p>
    <p className="text-gray-400">Signals + mentorship</p>
  </div>

  {/* VIP PREMIUM */}
  <div className="glass p-6">
    <h3 className="text-xl mb-2">VIP Premium</h3>
    <p className="text-green-400 mb-4">$300/month</p>
    <p className="text-gray-400">Full access + 1-on-1 coaching</p>
  </div>

</section>

<p className="text-gray-500 mt-6">
  Trading Forex involves risk. Signals are not guaranteed to be profitable and losses may occur.
</p>

</section>

{/* ACTIVITY FEED */}
<section className="glass p-6 mt-10">
  <h2 className="text-xl mb-3">Live Activity</h2>
  <p className="text-green-400">GBP/USD hit TP ✔</p>
  <p className="text-red-400">EUR/USD SL hit ✖</p>
</section>

{/* TRADE HISTORY */}
<section className="glass p-6 mt-10">
  <h2 className="text-xl mb-3">Trade History</h2>
  <p className="text-gray-400">
    Last 10 trades displayed here
  </p>
</section>

{/* MARKET SESSION */}
<section className="glass p-6 mt-10 mb-20">
  <h2 className="text-xl mb-3">Market Session</h2>
  <p className="text-green-400">
    London Session Active
  </p>
</section>


    </main>
  );
}
