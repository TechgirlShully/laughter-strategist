"use client";
import { useEffect, useState } from "react";

export default function Dashboard() {
  return (
    <div className="text-white p-10">

      <h1 className="text-4xl font-bold mb-10">Trading Signals</h1>

      <div className="grid md:grid-cols-3 gap-6">

        <div className="glass p-6">
          <h2 className="text-green-400 font-bold">EUR/USD SELL</h2>
          <p>Entry: 1.0800</p>
          <p>TP: 1.0700</p>
          <p>SL: 1.0850</p>
        </div>

        <div className="glass p-6">
          <h2 className="text-green-400 font-bold">GBP/USD BUY</h2>
          <p>Entry: 1.2500</p>
          <p>TP: 1.2600</p>
          <p>SL: 1.2450</p>
        </div>

        <div className="glass p-6">
          <h2 className="text-green-400 font-bold">USD/JPY BUY</h2>
          <p>Entry: 150.00</p>
          <p>TP: 151.20</p>
          <p>SL: 149.50</p>
        </div>

      </div>

    </div>
  );
}
