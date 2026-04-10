"use client";
import { motion } from "framer-motion";

export default function Home() {
  return (
    <main className="text-white relative overflow-hidden px-6">

      {/* GLOW BACKGROUND */}
      <div className="absolute top-20 left-10 w-72 h-72 bg-green-500/20 blur-3xl rounded-full"></div>
      <div className="absolute bottom-20 right-10 w-72 h-72 bg-purple-500/20 blur-3xl rounded-full"></div>

      {/* HERO */}
      <section className="text-center py-28">
        <h1 className="text-6xl font-bold mb-6">
          Trade Smarter. Earn Consistently.
        </h1>
        <p className="text-gray-400 max-w-xl mx-auto mb-8">
          Professional Forex signals, analysis and strategies to help you win in the market.
        </p>

        <a
          href="https://wa.me/2347017838958"
          className="bg-green-500 px-6 py-3 rounded-xl shadow-lg shadow-green-500/30 hover:scale-105 transition"
        >
          Join WhatsApp
        </a>
      </section>

      {/* STATS */}
      <motion.section
        className="grid md:grid-cols-3 gap-6 mb-20"
        initial={{ opacity: 0, y: 60 }}
        whileInView={{ opacity: 1, y: 0 }}
      >
        {["95% Win Rate", "200+ Members", "Daily Signals"].map((item, i) => (
          <div key={i} className="glass p-6 text-center">
            <h2 className="text-2xl font-bold text-green-400">{item}</h2>
          </div>
        ))}
      </motion.section>

      {/* ABOUT */}
      <section className="glass p-10 mb-20">
        <h2 className="text-3xl font-bold mb-4">About Me</h2>
        <p className="text-gray-400">
          I am a Forex strategist focused on GBP/USD and major pairs. I provide
          high-probability setups, risk management strategies and consistent signals.
        </p>
      </section>

      {/* SIGNAL PREVIEW */}
      <section className="mb-20">
        <h2 className="text-3xl font-bold mb-6 text-center">
          Latest Signals
        </h2>

        <div className="grid md:grid-cols-3 gap-6">
          {[1,2,3].map((_, i) => (
            <div key={i} className="glass p-6">
              <h3 className="text-green-400 font-bold">GBP/USD BUY</h3>
              <p className="text-gray-400">Entry: 1.2500</p>
              <p className="text-gray-400">TP: 1.2600</p>
              <p className="text-gray-400">SL: 1.2450</p>
            </div>
          ))}
        </div>
      </section>

      {/* CTA */}
      <section className="text-center pb-20">
        <h2 className="text-3xl font-bold mb-4">
          Want More Accurate Signals?
        </h2>

        <a
          href="https://t.me/YOUR_TELEGRAM"
          className="bg-purple-500 px-6 py-3 rounded-xl hover:scale-105 transition"
        >
          Join Telegram
        </a>
      </section>

    </main>
  );
}
