"use client";

import { useEffect, useState } from "react";
import AdminLayout from "@/components/admin/AdminLayout";
import { supabase } from "@/lib/auth";

export default function VariablesPage() {
  const [vars, setVars] = useState([]);

  const fetchVars = async () => {
    const { data } = await supabase.from("variables").select("*");
    setVars(data || []);
  };

  const updateVar = async (key, value) => {
    await supabase.from("variables").upsert({ key, value });
    fetchVars();
  };

  useEffect(() => {
    fetchVars();
  }, []);

  return (
    <AdminLayout>
      <h1 className="text-xl mb-4">Variables</h1>

      {vars.map((v: any) => (
        <div key={v.key} className="flex gap-2 mb-2">
          <span className="w-40">{v.key}</span>
          <input
            defaultValue={v.value}
            onBlur={(e) => updateVar(v.key, e.target.value)}
            className="bg-gray-800 p-2"
          />
        </div>
      ))}
    </AdminLayout>
  );
}
