export default function Home() {
  return (
    <main className="bg-[#0b0f19] text-white">

      {/* HERO */}
      <section className="px-10 py-24 text-center max-w-5xl mx-auto">
        <h1 className="text-6xl font-bold leading-tight">
          Trade Smarter.
          <span className="text-green-400"> Win Consistently.</span>
        </h1>

        <p className="mt-6 text-gray-400 text-lg">
          Advanced GBP/USD strategies, real-time signals, and precision entries.
        </p>

        <div className="mt-8 flex justify-center gap-4">
          <a href="/login" className="bg-green-500 px-6 py-3 rounded-lg">
            Get Started
          </a>

          <a href="/dashboard" className="border border-gray-600 px-6 py-3 rounded-lg">
            View Signals
          </a>
        </div>
      </section>

      {/* STATS */}
      <section className="grid md:grid-cols-3 gap-6 px-10 py-10 text-center">
        <div>
          <h2 className="text-3xl font-bold text-green-400">92%</h2>
          <p className="text-gray-400">Win Rate</p>
        </div>

        <div>
          <h2 className="text-3xl font-bold text-green-400">500+</h2>
          <p className="text-gray-400">Trades Taken</p>
        </div>

        <div>
          <h2 className="text-3xl font-bold text-green-400">24/5</h2>
          <p className="text-gray-400">Market Coverage</p>
        </div>
      </section>

      {/* FEATURES */}
      <section className="px-10 py-20 grid md:grid-cols-3 gap-6">

        <div className="bg-[#111827] p-6 rounded-xl">
          <h3 className="text-xl mb-3">Accurate Signals</h3>
          <p className="text-gray-400">
            Get high-probability trade setups with clear entry and exit.
          </p>
        </div>

        <div className="bg-[#111827] p-6 rounded-xl">
          <h3 className="text-xl mb-3">Smart Strategy</h3>
          <p className="text-gray-400">
            Built on institutional trading concepts and liquidity zones.
          </p>
        </div>

        <div className="bg-[#111827] p-6 rounded-xl">
          <h3 className="text-xl mb-3">Risk Management</h3>
          <p className="text-gray-400">
            Every trade includes SL and TP to protect your capital.
          </p>
        </div>

      </section>

      {/* CHART SECTION */}
      <section className="px-10 py-20">
        <h2 className="text-3xl mb-6 text-center">
          Live Market View
        </h2>

        <div className="rounded-xl overflow-hidden">
          <iframe
            src="https://s.tradingview.com/widgetembed/?symbol=FX:GBPUSD&interval=15&theme=dark"
            className="w-full h-[400px]"
          ></iframe>
        </div>
      </section>

      {/* CTA */}
      <section className="text-center py-20 px-6 bg-[#111827]">
        <h2 className="text-4xl font-bold">
          Start Trading Like a Pro
        </h2>

        <p className="text-gray-400 mt-4">
          Join Laughter Strategist and gain access to elite trading insights.
        </p>

        <a
          href="/login"
          className="mt-6 inline-block bg-green-500 px-8 py-3 rounded-lg"
        >
          Join Now
        </a>
      </section>

    </main>
  );
}
