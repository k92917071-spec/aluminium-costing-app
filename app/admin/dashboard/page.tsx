import AdminLayout from "@/components/admin/AdminLayout";

export default function Dashboard() {
  return (
    <AdminLayout>
      <h1 className="text-2xl font-bold">Dashboard</h1>

      <div className="grid grid-cols-3 gap-4 mt-6">
        <div className="bg-gray-800 p-4 rounded">Total Sizes</div>
        <div className="bg-gray-800 p-4 rounded">Active Formulas</div>
        <div className="bg-gray-800 p-4 rounded">System Health</div>
      </div>
    </AdminLayout>
  );
}
