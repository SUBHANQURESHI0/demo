import type { ReactNode } from "react";
import { Footer } from "@/components/ui/footer";

export default function ShopLayout({ children }: { children: ReactNode }) {
  return (
    <div data-store className="flex min-h-[calc(100vh-52px)] flex-col bg-[#fbfbfd]">
      <div className="flex-1">{children}</div>
      <Footer />
    </div>
  );
}
