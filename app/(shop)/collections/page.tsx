import Link from "next/link";
import { Button } from "@/components/ui/button";
import Image from "next/image";

export default function CollectionsPage() {
  const collections = [
    {
      title: "City Edit",
      description: "Minimal silhouettes for movement, meetings, and everything between.",
      image: "/images/overcoat.jpg",
      href: "/shop",
    },
    {
      title: "Weekend Tailoring",
      description: "Relaxed structure and tactile fabrics — polished without trying.",
      image: "/images/shirt.jpg",
      href: "/shop",
    },
    {
      title: "Travel Capsule",
      description: "Lightweight layers and bags engineered for transit and time zones.",
      image: "/images/weekender.jpg",
      href: "/shop",
    },
  ];

  return (
    <main className="bg-[#fbfbfd]">
      <div className="mx-auto max-w-[1440px] px-4 py-12 sm:px-6 lg:px-10 lg:py-16">
        <p className="text-[11px] font-semibold uppercase tracking-[0.18em] text-neutral-500">Collections</p>
        <h1 className="mt-3 max-w-3xl font-(family-name:--font-playfair) text-4xl font-medium tracking-tight text-neutral-950 sm:text-5xl">
          Edits, not overload.
        </h1>
        <p className="mt-4 max-w-2xl text-[15px] leading-relaxed text-neutral-600">
          Each collection is a complete point of view — fewer SKUs, stronger styling, and a clearer reason to buy.
        </p>
      </div>

      <div className="mx-auto max-w-[1440px] space-y-20 px-4 pb-24 sm:px-6 lg:space-y-28 lg:px-10 lg:pb-32">
        {collections.map((c, i) => (
          <section
            key={c.title}
            className="grid items-center gap-10 border-t border-neutral-200/90 pt-16 lg:grid-cols-2 lg:gap-16 lg:pt-20"
          >
            <div className={i % 2 === 1 ? "lg:order-2" : ""}>
              <div className="relative aspect-4/5 overflow-hidden rounded-2xl bg-neutral-100">
                <Image src={c.image} alt="" fill className="object-cover" sizes="(max-width: 1024px) 100vw, 50vw" />
              </div>
            </div>
            <div className={i % 2 === 1 ? "lg:order-1" : ""}>
              <p className="text-[10px] font-semibold uppercase tracking-[0.2em] text-neutral-500">Collection</p>
              <h2 className="mt-3 font-(family-name:--font-playfair) text-3xl font-medium tracking-tight text-neutral-950 sm:text-4xl">
                {c.title}
              </h2>
              <p className="mt-4 max-w-md text-[15px] leading-relaxed text-neutral-600">{c.description}</p>
              <div className="mt-8">
                <Button
                  asChild
                  className="h-11 rounded-full bg-neutral-950 px-7 text-[13px] font-semibold text-white hover:bg-neutral-800"
                >
                  <Link href={c.href}>Shop the edit</Link>
                </Button>
              </div>
            </div>
          </section>
        ))}
      </div>
    </main>
  );
}
