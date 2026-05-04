"use client";

import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Minus, Plus, ShieldCheck, Truck } from "lucide-react";
import { useCart } from "@/lib/store";
import type { Product } from "@/lib/mock-data";

interface ProductPurchasePanelProps {
  product: Product;
}

export function ProductPurchasePanel({ product }: ProductPurchasePanelProps) {
  const addItem = useCart((state) => state.addItem);
  const [quantity, setQuantity] = useState(1);

  const increment = () => setQuantity((prev) => Math.min(10, prev + 1));
  const decrement = () => setQuantity((prev) => Math.max(1, prev - 1));

  const addToBag = () => {
    for (let i = 0; i < quantity; i += 1) {
      addItem(product);
    }
  };

  return (
    <div className="rounded-2xl border border-neutral-200/90 bg-white p-6 shadow-sm sm:p-8">
      <div className="flex items-center gap-4">
        <span className="text-[12px] font-medium text-neutral-600">Quantity</span>
        <div className="inline-flex items-center rounded-full border border-neutral-200 bg-neutral-50 p-0.5">
          <button
            type="button"
            onClick={decrement}
            className="flex h-8 w-8 items-center justify-center rounded-full text-neutral-700 transition-colors hover:bg-white"
            aria-label="Decrease quantity"
          >
            <Minus className="h-3.5 w-3.5" />
          </button>
          <span className="min-w-8 text-center text-[13px] font-semibold tabular-nums text-neutral-900">{quantity}</span>
          <button
            type="button"
            onClick={increment}
            className="flex h-8 w-8 items-center justify-center rounded-full text-neutral-700 transition-colors hover:bg-white"
            aria-label="Increase quantity"
          >
            <Plus className="h-3.5 w-3.5" />
          </button>
        </div>
      </div>

      <div className="mt-6 space-y-2.5">
        <Button
          type="button"
          onClick={addToBag}
          className="h-12 w-full rounded-full bg-neutral-950 text-[14px] font-semibold tracking-tight text-white hover:bg-neutral-800"
        >
          Add to bag — GBP {(product.price * quantity).toFixed(2)}
        </Button>
        <Button
          type="button"
          variant="outline"
          className="h-12 w-full rounded-full border-neutral-300 bg-white text-[14px] font-semibold text-neutral-900 hover:bg-neutral-50"
        >
          Buy now
        </Button>
      </div>

      <ul className="mt-6 space-y-3 border-t border-neutral-200/90 pt-6 text-[12px] leading-relaxed text-neutral-600">
        <li className="flex gap-2.5">
          <Truck className="mt-0.5 h-4 w-4 shrink-0 text-neutral-900" strokeWidth={1.75} />
          <span>Complimentary express shipping on orders over GBP 150.</span>
        </li>
        <li className="flex gap-2.5">
          <ShieldCheck className="mt-0.5 h-4 w-4 shrink-0 text-neutral-900" strokeWidth={1.75} />
          <span>Secure checkout and purchase protection on every order.</span>
        </li>
      </ul>
    </div>
  );
}
