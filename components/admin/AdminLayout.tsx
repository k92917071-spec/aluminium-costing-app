"use client";

import Link from "next/link";
import { logout } from "@/lib/auth";

export default function AdminLayout({ children }) {
  return (
    <div className="flex min-h-screen bg-black text-white">
      <aside className="w-64 bg-gray-900 p-5 space-y-4">
        <h2 className="text-xl font-bold">Admin Panel</h2>

        <nav className="space-y-2">
          <Link href="/admin/dashboard">Dashboard</Link>
          <Link href="/admin/sizes">Sizes</Link>
          <Link href="/admin/variables">Variables</Link>
          <Link href="/admin/formulas">Formulas</Link>
          <Link href="/admin/preview">Live Preview</Link>
        </nav>

        <button onClick={logout} className="mt-10 text-red-400">
          Logout
        </button>
      </aside>

      <main className="flex-1 p-6">{children}</main>
    </div>
  );
}
