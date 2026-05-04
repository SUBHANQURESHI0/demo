"use client";

import { MOCK_PRODUCTS } from "@/lib/mock-data";
import { Button } from "@/components/ui/button";
import { motion } from "framer-motion";
import Image from "next/image";
import Link from "next/link";
import { ProductCard } from "@/components/ui/product-card";
import { Footer } from "@/components/ui/footer";
import { ArrowRight } from "lucide-react";

export default function HomePage() {
  const featured = MOCK_PRODUCTS.slice(0, 3);
  const spotlight = MOCK_PRODUCTS[0];

  return (
    <div className="min-h-screen bg-[#fbfbfd] text-neutral-900">
      {/* Hero — full-bleed editorial */}
      <section className="relative min-h-[min(92svh,880px)] w-full overflow-hidden bg-neutral-950">
        <Image
          src="/images/hero.jpg"
          alt=""
          fill
          priority
          className="object-cover object-center opacity-90"
          sizes="100vw"
        />
        <div className="absolute inset-0 bg-linear-to-t from-black/75 via-black/25 to-black/20" />
        <div className="relative mx-auto flex min-h-[min(92svh,880px)] max-w-[1440px] flex-col justify-end px-4 pb-16 pt-28 sm:px-6 sm:pb-20 lg:px-10 lg:pb-24">
          <motion.div
            initial={{ opacity: 0, y: 24 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, ease: [0.22, 1, 0.36, 1] }}
            className="max-w-2xl text-white"
          >
            <p className="text-[11px] font-semibold uppercase tracking-[0.2em] text-white/70">New season</p>
            <h1 className="mt-4 font-(family-name:--font-playfair) text-[clamp(2.5rem,6.5vw,4.75rem)] font-medium leading-[1.05] tracking-[-0.03em]">
              Designed to be lived in.
            </h1>
            <p className="mt-5 max-w-md text-[15px] leading-relaxed text-white/80">
              Quiet luxury essentials — precise fit, honest materials, and a store experience that stays out of your
              way.
            </p>
            <div className="mt-8 flex flex-wrap items-center gap-4">
              <Button
                asChild
                className="h-11 rounded-full bg-white px-7 text-[13px] font-semibold text-neutral-950 hover:bg-neutral-100"
              >
                <Link href="/shop">Shop</Link>
              </Button>
              <Link
                href="/collections"
                className="inline-flex items-center gap-1 text-[13px] font-medium text-white/90 underline-offset-4 hover:text-white hover:underline"
              >
                View collections <ArrowRight className="h-3.5 w-3.5" />
              </Link>
            </div>
            <p className="mt-10 text-[11px] leading-relaxed text-white/55">
              Free express shipping on orders over GBP 150 · 14-day returns · Rated 4.9
            </p>
          </motion.div>
        </div>
      </section>

      {/* Value strip — Nike-adjacent confidence, Apple-like restraint */}
      <section className="border-y border-neutral-200/90 bg-neutral-950 py-16 text-white sm:py-20">
        <div className="mx-auto grid max-w-[1440px] gap-12 px-4 sm:grid-cols-3 sm:px-6 lg:gap-16 lg:px-10">
          {[
            { k: "01", t: "Materials first", d: "Fabrics and leathers chosen for hand, drape, and longevity." },
            { k: "02", t: "Fit, refined", d: "Patterns tuned for real bodies — not runway proportions." },
            { k: "03", t: "Service, calm", d: "Fast answers, careful packing, and painless returns." },
          ].map((item) => (
            <div key={item.k} className="border-l border-white/15 pl-6 sm:border-l sm:pl-8">
              <p className="text-[10px] font-semibold uppercase tracking-[0.22em] text-white/45">{item.k}</p>
              <h2 className="mt-3 text-xl font-semibold tracking-tight sm:text-2xl">{item.t}</h2>
              <p className="mt-3 text-[13px] leading-relaxed text-white/65">{item.d}</p>
            </div>
          ))}
        </div>
      </section>

      {/* Spotlight — Apple-style product moment */}
      <section className="mx-auto max-w-[1440px] px-4 py-20 sm:px-6 lg:px-10 lg:py-28">
        <div className="grid items-center gap-10 lg:grid-cols-2 lg:gap-16">
          <div>
            <p className="text-[11px] font-semibold uppercase tracking-[0.18em] text-neutral-500">Spotlight</p>
            <h2 className="mt-3 font-(family-name:--font-playfair) text-4xl font-medium tracking-tight text-neutral-950 sm:text-5xl">
              {spotlight.name}
            </h2>
            <p className="mt-4 max-w-md text-[15px] leading-relaxed text-neutral-600">{spotlight.description}</p>
            <div className="mt-8 flex flex-wrap items-baseline gap-6">
              <p className="text-[15px] font-semibold tabular-nums text-neutral-900">GBP {spotlight.price.toFixed(2)}</p>
              <Button asChild variant="link" className="h-auto p-0 text-[13px] font-semibold text-neutral-900 underline-offset-4">
                <Link href={`/products/${spotlight.slug}`}>Learn more</Link>
              </Button>
            </div>
          </div>
          <Link href={`/products/${spotlight.slug}`} className="group relative aspect-4/5 overflow-hidden rounded-2xl bg-neutral-100">
            <Image
              src={spotlight.image}
              alt={spotlight.name}
              fill
              className="object-cover transition duration-700 ease-out group-hover:scale-[1.03]"
              sizes="(max-width: 1024px) 100vw, 50vw"
            />
          </Link>
        </div>
      </section>

      {/* Featured grid */}
      <section className="border-t border-neutral-200/90 bg-[#f5f5f7] py-20 sm:py-24">
        <div className="mx-auto max-w-[1440px] px-4 sm:px-6 lg:px-10">
          <div className="flex flex-col items-start justify-between gap-6 sm:flex-row sm:items-end">
            <div>
              <p className="text-[11px] font-semibold uppercase tracking-[0.18em] text-neutral-500">The edit</p>
              <h2 className="mt-2 font-(family-name:--font-playfair) text-3xl font-medium tracking-tight text-neutral-950 sm:text-4xl">
                Featured
              </h2>
            </div>
            <Link href="/shop" className="text-[13px] font-medium text-neutral-600 underline-offset-4 hover:text-neutral-950 hover:underline">
              Shop all
            </Link>
          </div>
          <div className="mt-12 grid gap-5 sm:grid-cols-2 lg:grid-cols-3 lg:gap-6">
            {featured.map((product) => (
              <motion.div key={product.id} initial={{ opacity: 0, y: 12 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true, margin: "-80px" }} transition={{ duration: 0.45 }}>
                <ProductCard product={product} />
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Full-bleed editorial */}
      <section className="relative left-1/2 w-screen -translate-x-1/2">
        <div className="relative min-h-[min(70vh,720px)] w-full">
          <Image src="/images/collection.jpg" alt="" fill className="object-cover" sizes="100vw" />
          <div className="absolute inset-0 bg-black/40" />
          <div className="absolute inset-0 flex items-end">
            <div className="mx-auto w-full max-w-[1440px] px-4 pb-14 sm:px-6 lg:px-10 lg:pb-20">
              <p className="text-[11px] font-semibold uppercase tracking-[0.2em] text-white/70">Collections</p>
              <h2 className="mt-3 max-w-xl font-(family-name:--font-playfair) text-3xl font-medium tracking-tight text-white sm:text-4xl">
                Built as complete wardrobes — not random SKUs.
              </h2>
              <div className="mt-8">
                <Button
                  asChild
                  variant="outline"
                  className="h-11 rounded-full border-white/40 bg-transparent px-7 text-[13px] font-semibold text-white hover:bg-white hover:text-neutral-950"
                >
                  <Link href="/collections">Explore</Link>
                </Button>
              </div>
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
}
