import { AdminPageHeader } from "@/components/admin/admin-page-header";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";

const customers = [
  { id: "CUS-01", name: "Alice Smith", email: "alice@example.com", orders: 4, tier: "Gold", ltv: 1280 },
  { id: "CUS-02", name: "John Clark", email: "john@example.com", orders: 2, tier: "Silver", ltv: 460 },
  { id: "CUS-03", name: "Henry Cole", email: "henry@example.com", orders: 7, tier: "Gold", ltv: 2210 },
  { id: "CUS-04", name: "Mia Price", email: "mia@example.com", orders: 1, tier: "Bronze", ltv: 160 },
];

function tierClass(tier: string) {
  switch (tier) {
    case "Gold":
      return "border-amber-500/25 bg-amber-500/10 text-amber-950";
    case "Silver":
      return "border-zinc-300 bg-zinc-100 text-zinc-800";
    default:
      return "border-orange-500/20 bg-orange-500/10 text-orange-950";
  }
}

export default function AdminCustomersPage() {
  return (
    <main className="space-y-6">
      <AdminPageHeader
        eyebrow="Audience"
        title="Customers"
        description="Segment health, lifetime value, and engagement — without visual noise."
      />

      <div className="grid gap-3 sm:grid-cols-3">
        <div className="rounded-xl border border-zinc-200/90 bg-white p-5 shadow-sm">
          <p className="text-[11px] font-semibold uppercase tracking-[0.14em] text-zinc-500">Total customers</p>
          <p className="mt-2 tabular-nums text-2xl font-semibold tracking-tight text-zinc-900">8,204</p>
        </div>
        <div className="rounded-xl border border-zinc-200/90 bg-white p-5 shadow-sm">
          <p className="text-[11px] font-semibold uppercase tracking-[0.14em] text-zinc-500">Repeat purchase rate</p>
          <p className="mt-2 tabular-nums text-2xl font-semibold tracking-tight text-zinc-900">39.1%</p>
        </div>
        <div className="rounded-xl border border-zinc-200/90 bg-white p-5 shadow-sm">
          <p className="text-[11px] font-semibold uppercase tracking-[0.14em] text-zinc-500">VIP segment</p>
          <p className="mt-2 tabular-nums text-2xl font-semibold tracking-tight text-zinc-900">642</p>
        </div>
      </div>

      <div className="overflow-hidden rounded-xl border border-zinc-200/90 bg-white shadow-sm">
        <div className="overflow-x-auto">
          <table className="w-full min-w-[960px] text-left text-sm">
            <thead>
              <tr className="border-b border-zinc-200/90 bg-zinc-50/80">
                <th className="px-5 py-3 text-[11px] font-semibold uppercase tracking-widest text-zinc-500">
                  Customer ID
                </th>
                <th className="px-5 py-3 text-[11px] font-semibold uppercase tracking-widest text-zinc-500">Name</th>
                <th className="px-5 py-3 text-[11px] font-semibold uppercase tracking-widest text-zinc-500">Email</th>
                <th className="px-5 py-3 text-[11px] font-semibold uppercase tracking-widest text-zinc-500">Orders</th>
                <th className="px-5 py-3 text-[11px] font-semibold uppercase tracking-widest text-zinc-500">Tier</th>
                <th className="px-5 py-3 text-[11px] font-semibold uppercase tracking-widest text-zinc-500">LTV</th>
                <th className="px-5 py-3 text-[11px] font-semibold uppercase tracking-widest text-zinc-500">Action</th>
              </tr>
            </thead>
            <tbody>
              {customers.map((customer) => (
                <tr key={customer.id} className="border-b border-zinc-100 transition-colors hover:bg-zinc-50/80">
                  <td className="px-5 py-3.5 font-medium tabular-nums text-zinc-900">{customer.id}</td>
                  <td className="px-5 py-3.5 font-medium text-zinc-900">{customer.name}</td>
                  <td className="px-5 py-3.5 text-zinc-600">{customer.email}</td>
                  <td className="px-5 py-3.5 tabular-nums text-zinc-800">{customer.orders}</td>
                  <td className="px-5 py-3.5">
                    <Badge
                      variant="secondary"
                      className={`rounded-md border px-2 py-0.5 text-[11px] font-semibold ${tierClass(customer.tier)}`}
                    >
                      {customer.tier}
                    </Badge>
                  </td>
                  <td className="px-5 py-3.5 tabular-nums font-medium text-zinc-900">GBP {customer.ltv}</td>
                  <td className="px-5 py-3.5">
                    <Button variant="ghost" size="sm" className="h-8 rounded-lg text-xs font-medium text-zinc-800">
                      View profile
                    </Button>
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
