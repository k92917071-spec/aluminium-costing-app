"use client";

import { useEffect, useState } from "react";
import AdminLayout from "@/components/admin/AdminLayout";
import { supabase } from "@/lib/auth";

export default function FormulaPage() {
  const [formula, setFormula] = useState("");

  const saveFormula = async () => {
    await supabase.from("formulas").insert({
      name: "default",
      expression: formula,
    });

    alert("Saved");
  };

  return (
    <AdminLayout>
      <h1 className="text-xl mb-4">Formula Editor</h1>

      <textarea
        className="w-full h-40 bg-gray-900 p-4"
        placeholder="Enter formula..."
        onChange={(e) => setFormula(e.target.value)}
      />

      <button onClick={saveFormula} className="mt-4 bg-green-500 px-4 py-2">
        Save Formula
      </button>
    </AdminLayout>
  );
}
