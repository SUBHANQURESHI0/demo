import Image from "next/image";
import { notFound } from "next/navigation";
import { MOCK_PRODUCTS } from "@/lib/mock-data";
import { Button } from "@/components/ui/button";
import Link from "next/link";
import { ProductPurchasePanel } from "@/components/ui/product-purchase-panel";
import { ChevronRight } from "lucide-react";

interface ProductPageProps {
  params: Promise<{ slug: string }>;
}

export default async function ProductPage({ params }: ProductPageProps) {
  const { slug } = await params;
  const product = MOCK_PRODUCTS.find((item) => item.slug === slug);

  if (!product) {
    notFound();
  }

  const relatedProducts = MOCK_PRODUCTS.filter((item) => item.id !== product.id).slice(0, 3);

  return (
    <main className="mx-auto max-w-[1440px] px-4 py-8 sm:px-6 lg:px-10 lg:py-12">
      <nav className="flex flex-wrap items-center gap-1 text-[12px] text-neutral-500">
        <Link href="/shop" className="hover:text-neutral-900">
          Shop
        </Link>
        <ChevronRight className="h-3.5 w-3.5 opacity-50" />
        <span className="text-neutral-400">{product.category}</span>
        <ChevronRight className="h-3.5 w-3.5 opacity-50" />
        <span className="font-medium text-neutral-900">{product.name}</span>
      </nav>

      <div className="mt-8 grid gap-10 lg:grid-cols-12 lg:gap-14">
        <div className="space-y-3 lg:col-span-7">
          <div className="relative aspect-4/5 overflow-hidden rounded-2xl bg-neutral-100">
            <Image
              src={product.image}
              alt={product.name}
              fill
              sizes="(max-width: 1024px) 100vw, 58vw"
              className="object-cover"
              priority
            />
          </div>
          {relatedProducts.length > 0 ? (
            <div className="grid grid-cols-3 gap-2 sm:gap-3">
              {relatedProducts.map((item) => (
                <Link
                  key={item.id}
                  href={`/products/${item.slug}`}
                  className="relative aspect-square overflow-hidden rounded-lg bg-neutral-100 ring-1 ring-black/[0.04] transition-opacity hover:opacity-90"
                >
                  <Image src={item.image} alt={item.name} fill sizes="120px" className="object-cover" />
                </Link>
              ))}
            </div>
          ) : null}
        </div>

        <div className="lg:col-span-5 lg:sticky lg:top-[72px] lg:self-start">
          <p className="text-[10px] font-semibold uppercase tracking-[0.18em] text-neutral-500">{product.category}</p>
          <h1 className="mt-2 font-(family-name:--font-playfair) text-3xl font-medium tracking-tight text-neutral-950 sm:text-4xl lg:text-[2.75rem] lg:leading-[1.1]">
            {product.name}
          </h1>
          <p className="mt-4 text-[15px] leading-relaxed text-neutral-600">{product.description}</p>
          <p className="mt-6 text-2xl font-semibold tabular-nums tracking-tight text-neutral-950">
            GBP {product.price.toFixed(2)}
          </p>
          <p className="mt-1 text-[12px] text-neutral-500">In stock · {product.stock} available</p>
          <div className="mt-8">
            <ProductPurchasePanel product={product} />
          </div>
          <Button asChild variant="ghost" className="mt-4 h-auto px-0 text-[13px] font-medium text-neutral-600 hover:bg-transparent hover:text-neutral-950">
            <Link href="/shop">Continue shopping</Link>
          </Button>
        </div>
      </div>
    </main>
  );
}
