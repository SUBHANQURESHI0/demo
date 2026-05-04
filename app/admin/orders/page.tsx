import { AdminPageHeader } from "@/components/admin/admin-page-header";
import { AdminToolbar } from "@/components/admin/admin-toolbar";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Filter, Search } from "lucide-react";

const orders = [
  { id: "ORD-1001", customer: "A. Smith", total: 249.99, status: "Paid", channel: "Web", placed: "Today" },
  { id: "ORD-1002", customer: "J. Clark", total: 125.0, status: "Processing", channel: "Mobile", placed: "Today" },
  { id: "ORD-1003", customer: "M. Dawson", total: 78.0, status: "Packed", channel: "Web", placed: "Yesterday" },
  { id: "ORD-1004", customer: "N. Reed", total: 414.2, status: "Paid", channel: "Concierge", placed: "Yesterday" },
];

function statusClass(status: string) {
  switch (status) {
    case "Paid":
      return "bg-emerald-500/10 text-emerald-800 ring-1 ring-emerald-500/20";
    case "Processing":
      return "bg-amber-500/10 text-amber-900 ring-1 ring-amber-500/20";
    case "Packed":
      return "bg-zinc-500/10 text-zinc-800 ring-1 ring-zinc-500/15";
    default:
      return "bg-zinc-500/10 text-zinc-800 ring-1 ring-zinc-500/15";
  }
}

export default function AdminOrdersPage() {
  return (
    <main className="space-y-6">
      <AdminPageHeader
        eyebrow="Operations"
        title="Orders"
        description="Fulfillment-ready list with channel context. Built for speed and clarity."
      />

      <AdminToolbar>
        <div className="relative w-full max-w-md flex-1">
          <Search className="pointer-events-none absolute left-3 top-1/2 h-4 w-4 -translate-y-1/2 text-zinc-400" />
          <Input
            className="h-9 rounded-lg border-zinc-200 bg-zinc-50/80 pl-9 text-sm placeholder:text-zinc-400"
            placeholder="Search order ID or customer"
          />
        </div>
        <div className="flex flex-wrap gap-2">
          <Button variant="outline" size="sm" className="h-9 rounded-lg border-zinc-200 bg-white text-xs font-medium">
            <Filter className="mr-2 h-3.5 w-3.5" />
            Filters
          </Button>
          <Button size="sm" className="h-9 rounded-lg bg-zinc-900 text-xs font-medium text-white hover:bg-zinc-800">
            Export CSV
          </Button>
        </div>
      </AdminToolbar>

      <div className="overflow-hidden rounded-xl border border-zinc-200/90 bg-white shadow-sm">
        <div className="overflow-x-auto">
          <table className="w-full min-w-[800px] text-left text-sm">
            <thead>
              <tr className="border-b border-zinc-200/90 bg-zinc-50/80">
                <th className="px-5 py-3 text-[11px] font-semibold uppercase tracking-widest text-zinc-500">
                  Order ID
                </th>
                <th className="px-5 py-3 text-[11px] font-semibold uppercase tracking-widest text-zinc-500">
                  Customer
                </th>
                <th className="px-5 py-3 text-[11px] font-semibold uppercase tracking-widest text-zinc-500">
                  Placed
                </th>
                <th className="px-5 py-3 text-[11px] font-semibold uppercase tracking-widest text-zinc-500">
                  Channel
                </th>
                <th className="px-5 py-3 text-[11px] font-semibold uppercase tracking-widest text-zinc-500">
                  Total
                </th>
                <th className="px-5 py-3 text-[11px] font-semibold uppercase tracking-widest text-zinc-500">
                  Status
                </th>
              </tr>
            </thead>
            <tbody>
              {orders.map((order) => (
                <tr key={order.id} className="border-b border-zinc-100 transition-colors hover:bg-zinc-50/80">
                  <td className="px-5 py-3.5 font-medium tabular-nums text-zinc-900">{order.id}</td>
                  <td className="px-5 py-3.5 text-zinc-800">{order.customer}</td>
                  <td className="px-5 py-3.5 text-zinc-500">{order.placed}</td>
                  <td className="px-5 py-3.5 text-zinc-700">{order.channel}</td>
                  <td className="px-5 py-3.5 tabular-nums font-medium text-zinc-900">
                    GBP {order.total.toFixed(2)}
                  </td>
                  <td className="px-5 py-3.5">
                    <span
                      className={`inline-flex rounded-full px-2.5 py-1 text-[11px] font-semibold ${statusClass(order.status)}`}
                    >
                      {order.status}
                    </span>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </main>
  );
}
