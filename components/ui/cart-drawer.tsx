"use client";

import { Sheet, SheetContent, SheetHeader, SheetTitle, SheetTrigger } from "@/components/ui/sheet";
import { Button } from "@/components/ui/button";
import { Minus, Plus, ShoppingBag, X } from "lucide-react";
import { useCart } from "@/lib/store";
import Image from "next/image";

export function CartDrawer({ itemCount }: { itemCount: number }) {
  const { items, removeItem, total, updateQty } = useCart();
  const subtotal = total();
  const shipping = subtotal > 150 ? 0 : 9.99;
  const grandTotal = subtotal + shipping;

  return (
    <Sheet>
      <SheetTrigger asChild>
        <Button variant="ghost" size="icon" className="relative h-9 w-9 rounded-full text-neutral-900 hover:bg-neutral-100">
          <ShoppingBag className="h-[18px] w-[18px]" strokeWidth={1.75} />
          {itemCount > 0 ? (
            <span className="absolute -right-0.5 -top-0.5 flex h-[15px] min-w-[15px] items-center justify-center rounded-full bg-neutral-950 px-0.5 text-[9px] font-bold text-white">
              {itemCount > 9 ? "9+" : itemCount}
            </span>
          ) : null}
        </Button>
      </SheetTrigger>
      <SheetContent className="flex w-full flex-col border-l border-neutral-200/90 bg-[#fbfbfd] p-0 sm:max-w-md">
        <SheetHeader className="border-b border-neutral-200/90 px-6 py-5 text-left">
          <SheetTitle className="text-[15px] font-semibold tracking-tight text-neutral-950">Bag</SheetTitle>
          <p className="text-[12px] font-normal text-neutral-500">{itemCount} {itemCount === 1 ? "item" : "items"}</p>
        </SheetHeader>

        <div className="flex-1 overflow-y-auto px-6 py-4">
          {items.length === 0 ? (
            <div className="flex flex-col items-center justify-center py-20 text-center">
              <ShoppingBag className="mb-4 h-10 w-10 text-neutral-300" strokeWidth={1.25} />
              <p className="text-[15px] font-medium text-neutral-900">Your bag is empty</p>
              <p className="mt-1 max-w-xs text-[13px] text-neutral-500">Add pieces from the shop — shipping is on us over GBP 150.</p>
            </div>
          ) : (
            <ul className="space-y-1">
              {items.map((item) => (
                <li key={item.id} className="flex gap-4 border-b border-neutral-200/80 py-4 last:border-0">
                  <div className="relative h-[72px] w-[72px] shrink-0 overflow-hidden rounded-lg bg-neutral-100 ring-1 ring-black/[0.04]">
                    <Image src={item.image} alt={item.name} fill sizes="72px" className="object-cover" />
                  </div>
                  <div className="flex min-w-0 flex-1 flex-col justify-between">
                    <div className="flex items-start justify-between gap-2">
                      <p className="text-[13px] font-semibold leading-snug text-neutral-900">{item.name}</p>
                      <button
                        type="button"
                        onClick={() => removeItem(item.id)}
                        className="shrink-0 rounded-md p-1 text-neutral-400 transition-colors hover:bg-neutral-200/60 hover:text-neutral-900"
                        aria-label={`Remove ${item.name}`}
                      >
                        <X className="h-4 w-4" />
                      </button>
                    </div>
                    <div className="mt-2 flex items-center justify-between gap-2">
                      <p className="text-[13px] font-semibold tabular-nums text-neutral-900">£{item.price.toFixed(2)}</p>
                      <div className="inline-flex items-center rounded-full border border-neutral-200 bg-white p-0.5">
                        <button
                          type="button"
                          onClick={() => updateQty(item.id, item.quantity - 1)}
                          className="flex h-7 w-7 items-center justify-center rounded-full text-neutral-700 hover:bg-neutral-100"
                          aria-label="Decrease quantity"
                        >
                          <Minus className="h-3 w-3" />
                        </button>
                        <span className="min-w-6 text-center text-[11px] font-semibold tabular-nums text-neutral-600">{item.quantity}</span>
                        <button
                          type="button"
                          onClick={() => updateQty(item.id, item.quantity + 1)}
                          className="flex h-7 w-7 items-center justify-center rounded-full text-neutral-700 hover:bg-neutral-100"
                          aria-label="Increase quantity"
                        >
                          <Plus className="h-3 w-3" />
                        </button>
                      </div>
                    </div>
                  </div>
                </li>
              ))}
            </ul>
          )}
        </div>

        {items.length > 0 ? (
          <div className="border-t border-neutral-200/90 bg-white px-6 py-5">
            <div className="mb-4 h-1 overflow-hidden rounded-full bg-neutral-200">
              <div
                className="h-full rounded-full bg-neutral-950 transition-all"
                style={{ width: `${Math.min(100, (subtotal / 150) * 100)}%` }}
              />
            </div>
            <p className="text-[11px] text-neutral-500">
              {subtotal >= 150 ? "You unlocked free shipping." : `Spend £${(150 - subtotal).toFixed(2)} more for free shipping.`}
            </p>
            <dl className="mt-5 space-y-2 text-[13px]">
              <div className="flex justify-between text-neutral-600">
                <dt>Subtotal</dt>
                <dd className="tabular-nums font-medium text-neutral-900">£{subtotal.toFixed(2)}</dd>
              </div>
              <div className="flex justify-between text-neutral-600">
                <dt>Shipping</dt>
                <dd className="tabular-nums font-medium text-neutral-900">{shipping === 0 ? "Free" : `£${shipping.toFixed(2)}`}</dd>
              </div>
              <div className="flex justify-between border-t border-neutral-200/90 pt-3 text-[15px] font-semibold text-neutral-950">
                <dt>Total</dt>
                <dd className="tabular-nums">£{grandTotal.toFixed(2)}</dd>
              </div>
            </dl>
            <p className="mt-3 text-center text-[11px] text-neutral-500">Taxes calculated at checkout.</p>
            <Button type="button" className="mt-5 h-12 w-full rounded-full bg-neutral-950 text-[14px] font-semibold text-white hover:bg-neutral-800">
              Checkout
            </Button>
          </div>
        ) : null}
      </SheetContent>
    </Sheet>
  );
}
