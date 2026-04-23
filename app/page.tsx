"use client";

import { useState } from "react";
import { useCalculation } from "@/hooks/useCalculation";

export default function Home() {
  const [size, setSize] = useState(null);
  const [result, setResult] = useState(0);

  const { calculate } = useCalculation();

  const handleCalculate = () => {
    const variables = {
      aluminium_rate: 250,
      job_work_rate: 40
    };

    const formula =
      "(weight_per_km * aluminium_rate) + (weight_per_km * job_work_rate)";

    const res = calculate(size, variables, formula);
    setResult(res);
  };

  return (
    <div className="min-h-screen bg-black text-white p-6">
      <h1 className="text-3xl font-bold">Aluminium Costing</h1>

      <input
        className="mt-4 p-3 bg-gray-800 rounded"
        placeholder="Enter Size"
        onChange={(e) => setSize({ weight_per_km: 12 })}
      />

      <button
        onClick={handleCalculate}
        className="mt-4 bg-blue-500 px-6 py-2 rounded"
      >
        Calculate
      </button>

      <div className="text-4xl mt-6">₹ {result}</div>
    </div>
  );
}
