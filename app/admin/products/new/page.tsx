import Link from "next/link";
import { AdminPageHeader } from "@/components/admin/admin-page-header";
import { ProductForm } from "@/components/admin/product-form";
import { Button } from "@/components/ui/button";
import { ChevronLeft } from "lucide-react";

export default function NewProductPage() {
  return (
    <main className="space-y-6">
      <div className="flex flex-col gap-4">
        <Button asChild variant="ghost" size="sm" className="h-8 w-fit rounded-lg px-2 text-xs font-medium text-zinc-600 hover:text-zinc-900">
          <Link href="/admin/products" className="inline-flex items-center gap-1">
            <ChevronLeft className="h-4 w-4" />
            Back to catalog
          </Link>
        </Button>
        <AdminPageHeader
          eyebrow="Catalog"
          title="New product"
          description="Create a new SKU with clean metadata. This form is structured like enterprise PIM tools."
        />
      </div>
      <ProductForm />
    </main>
  );
}
