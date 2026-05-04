"use client";

import Link from "next/link";
import { Menu, Search } from "lucide-react";
import { useCart } from "@/lib/store";
import { Button } from "@/components/ui/button";
import { CartDrawer } from "./cart-drawer";
import { Sheet, SheetContent, SheetHeader, SheetTitle, SheetTrigger } from "@/components/ui/sheet";

const navLinks = [
  { href: "/shop", label: "Shop" },
  { href: "/collections", label: "Collections" },
  { href: "/about", label: "About" },
] as const;

export function Navbar() {
  const itemCount = useCart((state) => state.items.reduce((acc, item) => acc + item.quantity, 0));

  return (
    <nav
      id="site-navbar"
      className="sticky top-0 z-50 w-full border-b border-black/[0.06] bg-white/80 backdrop-blur-xl supports-[backdrop-filter]:bg-white/70"
    >
      <div className="relative mx-auto flex h-[52px] max-w-[1440px] items-center justify-between px-4 sm:px-6 lg:px-10">
        <Link
          href="/"
          className="text-[15px] font-semibold tracking-[-0.02em] text-neutral-900 transition-opacity hover:opacity-70"
        >
          MODERNUK
        </Link>

        <div className="absolute left-1/2 top-1/2 hidden -translate-x-1/2 -translate-y-1/2 items-center gap-10 md:flex">
          {navLinks.map((link) => (
            <Link
              key={link.href}
              href={link.href}
              className="text-[13px] font-medium text-neutral-600 transition-colors hover:text-neutral-900"
            >
              {link.label}
            </Link>
          ))}
        </div>

        <div className="flex items-center gap-0.5">
          <Button variant="ghost" size="icon" className="h-9 w-9 rounded-full text-neutral-800 hover:bg-neutral-100">
            <Search className="h-[18px] w-[18px]" strokeWidth={1.75} />
          </Button>
          <CartDrawer itemCount={itemCount} />
          <Sheet>
            <SheetTrigger asChild>
              <Button variant="ghost" size="icon" className="h-9 w-9 rounded-full md:hidden">
                <Menu className="h-[18px] w-[18px]" strokeWidth={1.75} />
              </Button>
            </SheetTrigger>
            <SheetContent side="right" className="w-[min(100vw-2rem,380px)] border-l border-neutral-200/80 p-0">
              <SheetHeader className="border-b border-neutral-100 px-6 py-5 text-left">
                <SheetTitle className="text-[15px] font-semibold tracking-tight text-neutral-900">Menu</SheetTitle>
              </SheetHeader>
              <nav className="flex flex-col px-2 py-4">
                {navLinks.map((link) => (
                  <Link
                    key={link.href}
                    href={link.href}
                    className="rounded-lg px-4 py-3 text-[15px] font-medium text-neutral-800 hover:bg-neutral-50"
                  >
                    {link.label}
                  </Link>
                ))}
                <div className="mt-6 border-t border-neutral-100 px-4 pt-4">
                  <Link href="/admin" className="text-[13px] text-neutral-500 hover:text-neutral-900">
                    Admin
                  </Link>
                </div>
              </nav>
            </SheetContent>
          </Sheet>
        </div>
      </div>
    </nav>
  );
}
