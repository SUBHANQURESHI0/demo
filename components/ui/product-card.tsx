"use client";

import Image from "next/image";
import Link from "next/link";
import { Plus } from "lucide-react";
import { Button } from "@/components/ui/button";
import { useCart } from "@/lib/store";
import type { Product } from "@/lib/mock-data";

interface ProductCardProps {
  product: Product;
}

export function ProductCard({ product }: ProductCardProps) {
  const addItem = useCart((state) => state.addItem);

  return (
    <article className="group flex flex-col bg-transparent">
      <Link href={`/products/${product.slug}`} className="relative block overflow-hidden rounded-xl bg-neutral-100">
        <div className="relative aspect-3/4 w-full">
          <Image
            src={product.image}
            alt={product.name}
            fill
            sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
            className="object-cover transition duration-640 ease-out group-hover:scale-[1.02]"
          />
        </div>
      </Link>
      <div className="mt-4 flex flex-1 flex-col gap-1.5">
        <p className="text-[10px] font-semibold uppercase tracking-[0.16em] text-neutral-500">{product.category}</p>
        <Link href={`/products/${product.slug}`}>
          <h3 className="text-[15px] font-semibold leading-snug tracking-tight text-neutral-950 transition-colors group-hover:text-neutral-600">
            {product.name}
          </h3>
        </Link>
        <p className="line-clamp-2 text-[13px] leading-relaxed text-neutral-600">{product.description}</p>
        <div className="mt-auto flex items-center justify-between gap-3 pt-3">
          <p className="text-[14px] font-semibold tabular-nums tracking-tight text-neutral-900">
            GBP {product.price.toFixed(2)}
          </p>
          <Button
            type="button"
            size="sm"
            variant="outline"
            onClick={() => addItem(product)}
            className="h-8 rounded-full border-neutral-300 bg-white px-3 text-[12px] font-semibold text-neutral-900 hover:bg-neutral-950 hover:text-white"
          >
            <Plus className="mr-1 h-3.5 w-3.5" />
            Add
          </Button>
        </div>
      </div>
    </article>
  );
}
