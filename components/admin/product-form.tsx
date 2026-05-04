"use client";

import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";

export function ProductForm() {
  return (
    <form className="grid gap-8 rounded-xl border border-zinc-200/90 bg-white p-6 shadow-sm md:grid-cols-2 md:p-8">
      <div className="md:col-span-2">
        <p className="text-[11px] font-semibold uppercase tracking-[0.14em] text-zinc-500">Core details</p>
        <h2 className="mt-1 text-lg font-semibold tracking-tight text-zinc-900">Product identity</h2>
        <p className="mt-1 text-sm text-zinc-600">Name, URL slug, and commercial attributes.</p>
      </div>

      <div className="space-y-2">
        <label className="text-xs font-semibold text-zinc-700" htmlFor="name">
          Product name
        </label>
        <Input
          id="name"
          placeholder="Premium Leather Chelsea Boots"
          className="h-10 rounded-lg border-zinc-200 bg-white text-sm"
        />
      </div>
      <div className="space-y-2">
        <label className="text-xs font-semibold text-zinc-700" htmlFor="slug">
          Slug
        </label>
        <Input
          id="slug"
          placeholder="premium-leather-chelsea-boots"
          className="h-10 rounded-lg border-zinc-200 bg-white text-sm tabular-nums"
        />
      </div>
      <div className="space-y-2">
        <label className="text-xs font-semibold text-zinc-700" htmlFor="price">
          Price (GBP)
        </label>
        <Input id="price" type="number" placeholder="125.00" className="h-10 rounded-lg border-zinc-200 bg-white text-sm tabular-nums" />
      </div>
      <div className="space-y-2">
        <label className="text-xs font-semibold text-zinc-700" htmlFor="stock">
          Stock on hand
        </label>
        <Input id="stock" type="number" placeholder="10" className="h-10 rounded-lg border-zinc-200 bg-white text-sm tabular-nums" />
      </div>

      <div className="space-y-2 md:col-span-2">
        <label className="text-xs font-semibold text-zinc-700" htmlFor="description">
          Description
        </label>
        <textarea
          id="description"
          rows={5}
          placeholder="Handcrafted in artisan workshops. Include materials, fit notes, and care instructions."
          className="w-full resize-y rounded-lg border border-zinc-200 bg-white px-3 py-2 text-sm text-zinc-900 outline-none transition-[color,box-shadow] placeholder:text-zinc-400 focus-visible:border-zinc-300 focus-visible:ring-[3px] focus-visible:ring-zinc-400/20"
        />
      </div>

      <div className="flex flex-wrap gap-2 md:col-span-2">
        <Button type="button" className="h-10 rounded-lg bg-zinc-900 px-6 text-sm font-medium text-white hover:bg-zinc-800">
          Save product
        </Button>
        <Button type="button" variant="outline" className="h-10 rounded-lg border-zinc-200 bg-white text-sm font-medium">
          Save draft
        </Button>
      </div>
    </form>
  );
}
