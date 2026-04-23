"use client";

import { useEffect, useState } from "react";
import AdminLayout from "@/components/admin/AdminLayout";
import { supabase } from "@/lib/auth";

export default function SizesPage() {
  const [sizes, setSizes] = useState([]);
  const [name, setName] = useState("");
  const [weight, setWeight] = useState("");

  const fetchSizes = async () => {
    const { data } = await supabase.from("sizes").select("*");
    setSizes(data || []);
  };

  useEffect(() => {
    fetchSizes();
  }, []);

  const addSize = async () => {
    await supabase.from("sizes").insert({
      size_name: name,
      weight_per_km: Number(weight),
    });

    fetchSizes();
  };

  const deleteSize = async (id) => {
    await supabase.from("sizes").delete().eq("id", id);
    fetchSizes();
  };

  return (
    <AdminLayout>
      <h1 className="text-xl mb-4">Sizes</h1>

      <div className="flex gap-2 mb-4">
        <input
          placeholder="Size"
          onChange={(e) => setName(e.target.value)}
          className="bg-gray-800 p-2"
        />
        <input
          placeholder="Weight"
          onChange={(e) => setWeight(e.target.value)}
          className="bg-gray-800 p-2"
        />
        <button onClick={addSize} className="bg-blue-500 px-4">
          Add
        </button>
      </div>

      <table className="w-full">
        <thead>
          <tr>
            <th className="text-left">Size</th>
            <th className="text-left">Weight</th>
            <th className="text-left">Actions</th>
          </tr>
        </thead>

        <tbody>
          {sizes.map((s: any) => (
            <tr key={s.id}>
              <td>{s.size_name}</td>
              <td>{s.weight_per_km}</td>
              <td>
                <button
                  onClick={() => deleteSize(s.id)}
                  className="text-red-400"
                >
                  Delete
                </button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </AdminLayout>
  );
}
