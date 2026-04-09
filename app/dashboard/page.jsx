"use client";
import { useEffect, useState } from "react";

export default function Dashboard() {
  const [signals, setSignals] = useState([]);

  useEffect(() => {
    fetch("/api/signals")
      .then(res => res.json())
      .then(data => setSignals(data));
  }, []);

  return (
    <div className="flex min-h-screen bg-[#0b0f19] text-white">

      {/* SIDEBAR */}
      <div className="w-64 bg-black p-6 border-r border-gray-800">
        <h2 className="text-green-400 text-xl mb-6">Dashboard</h2>

        <ul className="space-y-4 text-gray-400">
          <li className="hover:text-white">Overview</li>
          <li className="hover:text-white">Signals</li>
          <li className="hover:text-white">Performance</li>
        </ul>
      </div>

      {/* MAIN CONTENT */}
      <div className="flex-1 p-10">

        <h1 className="text-3xl mb-6 text-green-400">
          Live Signals
        </h1>

        {/* CHART */}
        <div className="mb-10">
          <iframe
            src="https://s.tradingview.com/widgetembed/?symbol=FX:GBPUSD&interval=15&theme=dark"
            className="w-full h-[400px]"
          ></iframe>
        </div>

        {/* SIGNALS */}
        <div className="grid md:grid-cols-2 gap-6">

          {signals.map((s, i) => (
            <div key={i} className="bg-[#111827] p-6 rounded-xl">

              <h2 className="text-xl mb-2">{s.pair}</h2>

              <p className="text-gray-400">Entry: {s.entry}</p>
              <p className="text-green-400">TP: {s.tp}</p>
              <p className="text-red-400">SL: {s.sl}</p>

            </div>
          ))}

        </div>

      </div>
    </div>
  );
}


          