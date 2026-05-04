import type { ReactNode } from "react";
import { AdminSidebar } from "@/components/admin/admin-sidebar";
import { Bell, CalendarDays, Search } from "lucide-react";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";

export default function AdminLayout({ children }: { children: ReactNode }) {
  return (
    <div data-admin className="flex min-h-screen flex-col bg-zinc-100 text-zinc-900 antialiased md:flex-row">
      <AdminSidebar />
      <div className="flex min-w-0 flex-1 flex-col">
        <header className="sticky top-0 z-20 border-b border-zinc-200/90 bg-white/85 px-4 py-3 backdrop-blur-xl md:px-8">
          <div className="mx-auto flex w-full max-w-[1600px] flex-col gap-3 lg:flex-row lg:items-center lg:justify-between">
            <div className="flex items-center gap-3 md:hidden">
              <div className="flex h-8 w-8 items-center justify-center rounded-md bg-zinc-950 text-xs font-bold text-white">
                M
              </div>
              <div>
                <p className="text-[12px] font-semibold tracking-tight text-zinc-900">MODERNUK</p>
                <p className="text-[10px] font-medium uppercase tracking-[0.14em] text-zinc-500">Admin</p>
              </div>
            </div>
            <div className="relative w-full flex-1 lg:max-w-xl">
              <Search className="pointer-events-none absolute left-3 top-1/2 h-4 w-4 -translate-y-1/2 text-zinc-400" />
              <Input
                className="h-10 rounded-lg border-zinc-200 bg-zinc-50/80 pl-9 text-sm placeholder:text-zinc-400 focus-visible:bg-white"
                placeholder="Search orders, SKUs, customers…"
              />
            </div>
            <div className="flex items-center gap-2">
              <Button
                variant="outline"
                size="sm"
                className="h-9 rounded-lg border-zinc-200 bg-white text-xs font-medium text-zinc-800"
              >
                <CalendarDays className="mr-2 h-3.5 w-3.5" />
                Last 7 days
              </Button>
              <Button
                variant="outline"
                size="icon"
                className="h-9 w-9 rounded-lg border-zinc-200 bg-white text-zinc-800"
              >
                <Bell className="h-4 w-4" />
              </Button>
              <div
                className="flex h-9 w-9 items-center justify-center rounded-lg bg-zinc-900 text-[11px] font-semibold text-white"
                aria-hidden
              >
                AD
              </div>
            </div>
          </div>
        </header>
        <div className="mx-auto w-full max-w-[1600px] flex-1 px-4 py-6 md:px-8 md:py-8">{children}</div>
      </div>
    </div>
  );
}
