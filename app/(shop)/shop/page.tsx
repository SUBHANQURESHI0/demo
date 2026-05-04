import { MOCK_PRODUCTS } from "@/lib/mock-data";
import { ProductCard } from "@/components/ui/product-card";
import Image from "next/image";
import Link from "next/link";

export default function ShopPage() {
  return (
    <main className="mx-auto max-w-[1440px] px-4 pb-20 pt-8 sm:px-6 lg:px-10 lg:pt-12">
      <section className="relative overflow-hidden rounded-2xl bg-neutral-950">
        <div className="absolute inset-0">
          <Image
            src="/images/collection.jpg"
            alt=""
            fill
            className="object-cover opacity-60"
            sizes="(max-width: 1440px) 100vw, 1440px"
            priority
          />
          <div className="absolute inset-0 bg-linear-to-r from-black/80 via-black/45 to-transparent" />
        </div>
        <div className="relative grid gap-10 px-6 py-16 sm:px-10 sm:py-20 lg:grid-cols-2 lg:items-end lg:py-24">
          <div className="max-w-xl text-white">
            <p className="text-[11px] font-semibold uppercase tracking-[0.2em] text-white/60">Shop</p>
            <h1 className="mt-3 font-(family-name:--font-playfair) text-4xl font-medium leading-[1.08] tracking-tight sm:text-5xl lg:text-[3.25rem]">
              Essentials, elevated.
            </h1>
            <p className="mt-4 max-w-md text-[15px] leading-relaxed text-white/75">
              A tight assortment — fewer pieces, higher standards. Built for daily wear and years of mileage.
            </p>
            <p className="mt-8 text-[11px] font-medium uppercase tracking-[0.14em] text-white/45">
              {MOCK_PRODUCTS.length} styles in catalog
            </p>
          </div>
          <div className="flex justify-start lg:justify-end">
            <Link
              href="/collections"
              className="inline-flex h-11 items-center rounded-full border border-white/35 bg-white/10 px-6 text-[13px] font-semibold text-white backdrop-blur-sm transition-colors hover:bg-white hover:text-neutral-950"
            >
              Browse collections
            </Link>
          </div>
        </div>
      </section>

      <div className="mt-14 flex items-end justify-between gap-4 border-b border-neutral-200/90 pb-6">
        <div>
          <p className="text-[11px] font-semibold uppercase tracking-[0.16em] text-neutral-500">All products</p>
          <h2 className="mt-1 text-xl font-semibold tracking-tight text-neutral-950 sm:text-2xl">Shop the line</h2>
        </div>
      </div>

      <div className="mt-10 grid grid-cols-1 gap-10 sm:grid-cols-2 lg:grid-cols-3 lg:gap-x-8 lg:gap-y-12">
        {MOCK_PRODUCTS.map((product) => (
          <ProductCard key={product.id} product={product} />
        ))}
      </div>
    </main>
  );
}
