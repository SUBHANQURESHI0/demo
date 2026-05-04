import { KpiCard } from "@/components/admin/kpi-card";
import { AdminPageHeader } from "@/components/admin/admin-page-header";
import { ArrowUpRight, Dot, PackageCheck, ShieldAlert } from "lucide-react";
import Link from "next/link";
import { Button } from "@/components/ui/button";

export default function AdminDashboardPage() {
  const revenueTrend = [
    { week: "W1", value: 38 },
    { week: "W2", value: 52 },
    { week: "W3", value: 46 },
    { week: "W4", value: 67 },
    { week: "W5", value: 74 },
    { week: "W6", value: 82 },
  ];

  const fulfillmentQueue = [
    { id: "ORD-1012", customer: "Emily Turner", status: "Ready to pack", priority: "High" },
    { id: "ORD-1011", customer: "Oliver Bennett", status: "Awaiting courier", priority: "Medium" },
    { id: "ORD-1009", customer: "Sophia Adams", status: "Quality check", priority: "High" },
  ];

  return (
    <main className="space-y-8">
      <AdminPageHeader
        eyebrow="Overview"
        title="Dashboard"
        description="Revenue, demand, and operations in one calm surface — tuned for fast decisions."
      />

      <section className="grid gap-3 sm:grid-cols-2 xl:grid-cols-4">
        <KpiCard label="Revenue" value="GBP 12,430" helper="+12% vs last month" />
        <KpiCard label="Orders" value="146" helper="+8 this week" />
        <KpiCard label="Customers" value="89" helper="24 returning" />
        <KpiCard label="Products" value="32" helper="5 low in stock" />
      </section>

      <section className="grid gap-4 xl:grid-cols-5">
        <article className="xl:col-span-3 rounded-xl border border-zinc-200/90 bg-white p-6 shadow-sm">
          <div className="mb-6 flex items-start justify-between gap-4">
            <div>
              <p className="text-[11px] font-semibold uppercase tracking-[0.14em] text-zinc-500">Performance</p>
              <h2 className="mt-1 text-lg font-semibold tracking-tight text-zinc-900">Revenue momentum</h2>
            </div>
            <span className="shrink-0 rounded-full bg-emerald-500/10 px-2.5 py-1 text-[11px] font-semibold text-emerald-700">
              +18.4%
            </span>
          </div>
          <div className="grid grid-cols-6 gap-2 sm:gap-3">
            {revenueTrend.map((point) => (
              <div key={point.week} className="flex h-48 flex-col">
                <div className="flex min-h-0 flex-1 items-end">
                  <div
                    className="w-full rounded-t-lg bg-linear-to-t from-zinc-900 to-zinc-400"
                    style={{ height: `${point.value}%` }}
                  />
                </div>
                <span className="pt-2 text-center text-[11px] font-medium text-zinc-500">{point.week}</span>
              </div>
            ))}
          </div>
        </article>

        <article className="xl:col-span-2 flex flex-col rounded-xl border border-zinc-800 bg-zinc-950 p-6 text-white shadow-sm">
          <p className="text-[11px] font-semibold uppercase tracking-[0.14em] text-zinc-500">Signals</p>
          <h2 className="mt-1 text-lg font-semibold tracking-tight">Operational alerts</h2>
          <div className="mt-5 flex flex-1 flex-col gap-3 text-sm">
            <div className="rounded-lg border border-zinc-800 bg-zinc-900/80 p-4">
              <p className="font-medium text-zinc-100">Low stock on 5 SKUs</p>
              <p className="mt-1 text-xs leading-relaxed text-zinc-400">Reorder suggested within 24 hours.</p>
            </div>
            <div className="rounded-lg border border-zinc-800 bg-zinc-900/80 p-4">
              <p className="font-medium text-zinc-100">Return rate rising in outerwear</p>
              <p className="mt-1 text-xs leading-relaxed text-zinc-400">Review size guide and PDP fit notes.</p>
            </div>
          </div>
        </article>
      </section>

      <section className="grid gap-4 lg:grid-cols-2">
        <article className="rounded-xl border border-zinc-200/90 bg-white p-6 shadow-sm">
          <div className="mb-4 flex items-center justify-between gap-3">
            <h2 className="text-lg font-semibold tracking-tight text-zinc-900">Fulfillment queue</h2>
            <Button asChild variant="ghost" size="sm" className="h-8 rounded-lg text-xs font-medium text-zinc-700">
              <Link href="/admin/orders">View all</Link>
            </Button>
          </div>
          <div className="space-y-2">
            {fulfillmentQueue.map((order) => (
              <div
                key={order.id}
                className="flex items-center justify-between gap-3 rounded-lg border border-zinc-200/90 bg-zinc-50/50 px-4 py-3"
              >
                <div className="min-w-0">
                  <p className="truncate text-sm font-medium text-zinc-900">{order.id}</p>
                  <p className="truncate text-xs text-zinc-500">{order.customer}</p>
                </div>
                <div className="shrink-0 text-right">
                  <p className="text-xs font-medium text-zinc-800">{order.status}</p>
                  <p className="text-[11px] text-zinc-500">{order.priority} priority</p>
                </div>
              </div>
            ))}
          </div>
        </article>

        <article className="rounded-xl border border-zinc-200/90 bg-white p-6 shadow-sm">
          <h2 className="mb-4 text-lg font-semibold tracking-tight text-zinc-900">Shortcuts</h2>
          <div className="space-y-2">
            <Link
              href="/admin/products/new"
              className="flex items-center justify-between rounded-lg border border-zinc-200/90 px-4 py-3 text-sm font-medium text-zinc-800 transition-colors hover:bg-zinc-50"
            >
              <span className="flex items-center gap-3">
                <PackageCheck className="h-4 w-4 text-zinc-500" />
                Launch new product
              </span>
              <ArrowUpRight className="h-4 w-4 text-zinc-400" />
            </Link>
            <Link
              href="/admin/customers"
              className="flex items-center justify-between rounded-lg border border-zinc-200/90 px-4 py-3 text-sm font-medium text-zinc-800 transition-colors hover:bg-zinc-50"
            >
              <span className="flex items-center gap-3">
                <ShieldAlert className="h-4 w-4 text-zinc-500" />
                Review at-risk customers
              </span>
              <ArrowUpRight className="h-4 w-4 text-zinc-400" />
            </Link>
            <Link
              href="/admin/orders"
              className="flex items-center justify-between rounded-lg border border-zinc-200/90 px-4 py-3 text-sm font-medium text-zinc-800 transition-colors hover:bg-zinc-50"
            >
              <span className="flex items-center gap-3">
                <Dot className="h-4 w-4 text-zinc-500" />
                Process pending shipments
              </span>
              <ArrowUpRight className="h-4 w-4 text-zinc-400" />
            </Link>
          </div>
        </article>
      </section>
    </main>
  );
}
