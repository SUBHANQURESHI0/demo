"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import {
  ArrowUpRight,
  Boxes,
  LayoutDashboard,
  Receipt,
  Sparkles,
  Users,
} from "lucide-react";
import { cn } from "@/lib/utils";

const links = [
  { href: "/admin", label: "Overview", icon: LayoutDashboard },
  { href: "/admin/products", label: "Catalog", icon: Boxes },
  { href: "/admin/orders", label: "Orders", icon: Receipt },
  { href: "/admin/customers", label: "Customers", icon: Users },
] as const;

export function AdminSidebar() {
  const pathname = usePathname();

  return (
    <aside className="sticky top-0 z-30 flex w-full flex-col border-b border-zinc-800/90 bg-zinc-950 text-zinc-100 md:h-screen md:w-[260px] md:shrink-0 md:border-b-0 md:border-r md:border-zinc-800/90 lg:w-[280px]">
      <div className="hidden px-5 pt-8 md:block">
        <div className="flex items-center gap-2">
          <div className="flex h-9 w-9 items-center justify-center rounded-lg bg-white text-sm font-bold tracking-tight text-zinc-950">
            M
          </div>
          <div className="min-w-0">
            <p className="truncate text-[13px] font-semibold tracking-tight text-white">MODERNUK</p>
            <p className="text-[11px] font-medium uppercase tracking-[0.14em] text-zinc-500">Commerce OS</p>
          </div>
        </div>
      </div>

      <nav className="flex gap-1 overflow-x-auto px-2 py-2 md:mt-8 md:flex-col md:gap-0.5 md:px-3 md:py-0">
        {links.map((link) => {
          const Icon = link.icon;
          const active =
            pathname === link.href || (link.href !== "/admin" && pathname.startsWith(link.href));

          return (
            <Link
              key={link.href}
              href={link.href}
              className={cn(
                "flex shrink-0 items-center gap-3 rounded-lg px-3 py-2.5 text-[13px] font-medium transition-colors md:py-2.5",
                active
                  ? "bg-white text-zinc-950 shadow-sm"
                  : "text-zinc-400 hover:bg-zinc-900 hover:text-white"
              )}
            >
              <Icon className="h-[18px] w-[18px] shrink-0 opacity-90" />
              <span className="whitespace-nowrap">{link.label}</span>
            </Link>
          );
        })}
      </nav>

      <div className="mt-auto hidden border-t border-zinc-800/90 p-4 md:block">
        <Link
          href="/"
          className="flex items-center justify-between rounded-lg px-3 py-2.5 text-[13px] font-medium text-zinc-400 transition-colors hover:bg-zinc-900 hover:text-white"
        >
          <span>View storefront</span>
          <ArrowUpRight className="h-4 w-4" />
        </Link>
        <div className="mt-3 flex items-center gap-2 rounded-lg border border-zinc-800/80 bg-zinc-900/60 px-3 py-2">
          <Sparkles className="h-4 w-4 text-amber-400/90" />
          <p className="text-[11px] leading-snug text-zinc-500">v1.0 · Production</p>
        </div>
      </div>
    </aside>
  );
}
