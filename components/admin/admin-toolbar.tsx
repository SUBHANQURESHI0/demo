import type { ReactNode } from "react";

interface AdminToolbarProps {
  children: ReactNode;
}

export function AdminToolbar({ children }: AdminToolbarProps) {
  return (
    <div className="flex flex-col gap-3 rounded-xl border border-zinc-200/90 bg-white p-3 shadow-sm sm:flex-row sm:items-center sm:justify-between sm:p-4">
      {children}
    </div>
  );
}
