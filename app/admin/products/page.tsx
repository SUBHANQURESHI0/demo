import Link from "next/link";
import { MOCK_PRODUCTS } from "@/lib/mock-data";
import { AdminPageHeader } from "@/components/admin/admin-page-header";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { ArrowUpDown } from "lucide-react";

export default function AdminProductsPage() {
  return (
    <main className="space-y-6">
      <AdminPageHeader
        eyebrow="Catalog"
        title="Products"
        description="Inventory, pricing, and health at a glance — optimized for daily merchandising."
        actions={
          <Button asChild size="sm" className="h-9 rounded-lg bg-zinc-900 text-xs font-medium text-white hover:bg-zinc-800">
            <Link href="/admin/products/new">Add product</Link>
          </Button>
        }
      />

      <div className="overflow-hidden rounded-xl border border-zinc-200/90 bg-white shadow-sm">
        <div className="overflow-x-auto">
          <table className="w-full min-w-[900px] text-left text-sm">
            <thead>
              <tr className="border-b border-zinc-200/90 bg-zinc-50/80">
                <th className="px-5 py-3 text-[11px] font-semibold uppercase tracking-[0.1em] text-zinc-500">
                  <span className="inline-flex items-center gap-1.5">
                    Name
                    <ArrowUpDown className="h-3 w-3 opacity-60" />
                  </span>
                </th>
                <th className="px-5 py-3 text-[11px] font-semibold uppercase tracking-[0.1em] text-zinc-500">
                  Category
                </th>
                <th className="px-5 py-3 text-[11px] font-semibold uppercase tracking-[0.1em] text-zinc-500">Price</th>
                <th className="px-5 py-3 text-[11px] font-semibold uppercase tracking-[0.1em] text-zinc-500">Stock</th>
                <th className="px-5 py-3 text-[11px] font-semibold uppercase tracking-[0.1em] text-zinc-500">Status</th>
                <th className="px-5 py-3 text-[11px] font-semibold uppercase tracking-[0.1em] text-zinc-500">Action</th>
              </tr>
            </thead>
            <tbody>
              {MOCK_PRODUCTS.map((product) => (
                <tr key={product.id} className="border-b border-zinc-100 transition-colors hover:bg-zinc-50/80">
                  <td className="px-5 py-3.5 font-medium text-zinc-900">{product.name}</td>
                  <td className="px-5 py-3.5 text-zinc-600">{product.category}</td>
                  <td className="px-5 py-3.5 tabular-nums font-medium text-zinc-900">
                    GBP {product.price.toFixed(2)}
                  </td>
                  <td className="px-5 py-3.5 tabular-nums text-zinc-800">{product.stock}</td>
                  <td className="px-5 py-3.5">
                    <Badge
                      variant="secondary"
                      className={
                        product.stock <= 8
                          ? "rounded-md border border-amber-500/25 bg-amber-500/10 px-2 py-0.5 text-[11px] font-semibold text-amber-950"
                          : "rounded-md border border-emerald-500/20 bg-emerald-500/10 px-2 py-0.5 text-[11px] font-semibold text-emerald-900"
                      }
                    >
                      {product.stock <= 8 ? "Low stock" : "Healthy"}
                    </Badge>
                  </td>
                  <td className="px-5 py-3.5">
                    <Button variant="ghost" size="sm" className="h-8 rounded-lg text-xs font-medium text-zinc-800">
                      Edit
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
