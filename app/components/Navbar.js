"use client";
import { signOut, useSession } from "next-auth/react";

export default function Navbar() {
  return (
    <>
      {/* TOP TICKER */}
      <div className="bg-black text-green-400 text-sm flex gap-6 px-6 py-2 overflow-x-auto">
        <span>GBP/USD: 1.2500 ▲</span>
        <span>EUR/USD: 1.0800 ▼</span>
        <span>USD/JPY: 150.20 ▲</span>
      </div>

      {/* MAIN NAV */}
      <nav className="flex justify-between items-center px-10 py-5 bg-[#0b0f19] border-b border-gray-800">

        <h1 className="text-green-400 font-bold text-lg">
          Laughter-The-Strategist
        </h1>

        <div className="flex gap-6">
          <a href="/">Home</a>
          <a href="/dashboard">Dashboard</a>
          <a href="/blog">Insights</a>
        </div>

      </nav>
    </>
  );
}
