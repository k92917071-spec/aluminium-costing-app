"use client";

import { useState } from "react";
import AdminLayout from "@/components/admin/AdminLayout";
import { FormulaEngine } from "@/engine/formulaEngine";

export default function PreviewPage() {
  const [result, setResult] = useState(0);

  const testCalculation = () => {
    const engine = new FormulaEngine({
      weight_per_km: 10,
      aluminium_rate: 250,
      job_work_rate: 40,
    });

    const res = engine.evaluate(
      "(weight_per_km * aluminium_rate) + (weight_per_km * job_work_rate)"
    );

    setResult(res);
  };

  return (
    <AdminLayout>
      <h1 className="text-xl mb-4">Live Preview</h1>

      <button onClick={testCalculation} className="bg-blue-500 px-4 py-2">
        Test Calculation
      </button>

      <div className="mt-6 text-2xl">₹ {result}</div>
    </AdminLayout>
  );
}
