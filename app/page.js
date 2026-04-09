"use client";
import { motion } from "framer-motion";

export default function Home() {
  return (
    <main className="min-h-screen bg-gradient-to-br from-gray-950 via-black to-gray-900 text-white">

      {/* HERO */}
      <section className="text-center py-20 px-6">
        <motion.h1
  initial={{ opacity: 0, y: -40 }}
  animate={{ opacity: 1, y: 0 }}
  transition={{ duration: 0.8 }}
  className="text-6xl font-bold leading-tight"
>
  Trade Smarter.
  <span className="text-green-400"> Win Consistently.</span>
</motion.h1>


        <p className="text-xl text-gray-300 mb-8">
          Precision Trading. Proven Strategy. GBP/USD Specialist.
        </p>

        <a
          href="/login"
          className="bg-green-500 hover:bg-green-600 px-8 py-4 rounded-xl text-lg transition"
        >
          Get Started
        </a>
      </section>

      {/* SERVICES */}
      <section className="grid md:grid-cols-3 gap-6 px-10 pb-20">

        <div className="bg-white/5 p-6 rounded-xl backdrop-blur-lg hover:scale-105 transition">
          <h2 className="text-xl mb-3 text-green-400">Forex Signals</h2>
          <p className="text-gray-400">Accurate GBP/USD & major pairs signals.</p>
        </div>

        <div className="bg-white/5 p-6 rounded-xl backdrop-blur-lg hover:scale-105 transition">
          <h2 className="text-xl mb-3 text-green-400">Mentorship</h2>
          <p className="text-gray-400">Learn smart money strategy step-by-step.</p>
        </div>

        <div className="bg-white/5 p-6 rounded-xl backdrop-blur-lg hover:scale-105 transition">
          <h2 className="text-xl mb-3 text-green-400">Account Management</h2>
          <p className="text-gray-400">We grow your account professionally.</p>
        </div>

      </section>

    </main>
  );
}
