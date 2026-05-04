import Link from "next/link";

export function Footer() {
  return (
    <footer className="mt-0 border-t border-neutral-200/90 bg-[#f5f5f7] text-neutral-900">
      <div className="mx-auto max-w-[1440px] px-4 py-16 sm:px-6 lg:px-10">
        <div className="grid gap-12 md:grid-cols-2 lg:grid-cols-4">
          <div className="lg:col-span-1">
            <p className="text-[13px] font-semibold tracking-tight text-neutral-900">MODERNUK</p>
            <p className="mt-3 max-w-xs text-[12px] leading-relaxed text-neutral-600">
              Essential wardrobe pieces. Designed to last — shipped with care.
            </p>
          </div>
          <div>
            <p className="text-[11px] font-semibold uppercase tracking-[0.12em] text-neutral-500">Shop</p>
            <ul className="mt-4 space-y-2 text-[13px]">
              <li>
                <Link href="/shop" className="text-neutral-700 hover:text-neutral-950">
                  All products
                </Link>
              </li>
              <li>
                <Link href="/collections" className="text-neutral-700 hover:text-neutral-950">
                  Collections
                </Link>
              </li>
            </ul>
          </div>
          <div>
            <p className="text-[11px] font-semibold uppercase tracking-[0.12em] text-neutral-500">Company</p>
            <ul className="mt-4 space-y-2 text-[13px]">
              <li>
                <Link href="/about" className="text-neutral-700 hover:text-neutral-950">
                  About
                </Link>
              </li>
              <li>
                <Link href="/admin" className="text-neutral-700 hover:text-neutral-950">
                  Admin
                </Link>
              </li>
            </ul>
          </div>
          <div>
            <p className="text-[11px] font-semibold uppercase tracking-[0.12em] text-neutral-500">Support</p>
            <ul className="mt-4 space-y-2 text-[13px] text-neutral-600">
              <li>Mon–Sat, 9:00–19:00</li>
              <li>care@modernuk.co.uk</li>
              <li>+44 20 7946 0912</li>
            </ul>
          </div>
        </div>
        <div className="mt-14 flex flex-col gap-2 border-t border-neutral-300/80 pt-8 text-[11px] text-neutral-500 sm:flex-row sm:items-center sm:justify-between">
          <p>Copyright © {new Date().getFullYear()} MODERNUK. All rights reserved.</p>
          <p className="text-neutral-400">United Kingdom · GBP</p>
        </div>
      </div>
    </footer>
  );
}
