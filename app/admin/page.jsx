"use client";
import { useState } from "react";

export default function Admin() {
  const [form, setForm] = useState({});

  const submit = async () => {
    await fetch("/api/signals", {
      method: "POST",
      body: JSON.stringify(form),
    });
    alert("Signal added!");
  };

  return (
    <div className="p-10 min-h-screen bg-black text-white">

      <h1 className="text-3xl mb-6">Admin Panel</h1>

      <div className="bg-gray-900 p-6 rounded-lg max-w-md">

        <input
          placeholder="Pair"
          className="w-full p-2 mb-4 text-black"
          onChange={e => setForm({ ...form, pair: e.target.value })}
        />

        <input
          placeholder="Type"
          className="w-full p-2 mb-4 text-black"
          onChange={e => setForm({ ...form, type: e.target.value })}
        />

        <input
          placeholder="Entry"
          className="w-full p-2 mb-4 text-black"
          onChange={e => setForm({ ...form, entry: e.target.value })}
        />

        <button
          onClick={submit}
          className="w-full bg-green-500 py-2 rounded"
        >
          Submit Signal
        </button>

      </div>
    </div>
  );
}
