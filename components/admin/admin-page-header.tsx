import type { ReactNode } from "react";

interface AdminPageHeaderProps {
  eyebrow?: string;
  title: string;
  description?: string;
  actions?: ReactNode;
}

export function AdminPageHeader({ eyebrow, title, description, actions }: AdminPageHeaderProps) {
  return (
    <div className="flex flex-col gap-4 border-b border-zinc-200/90 pb-6 sm:flex-row sm:items-end sm:justify-between">
      <div className="min-w-0 space-y-1">
        {eyebrow ? (
          <p className="text-[11px] font-semibold uppercase tracking-[0.16em] text-zinc-500">{eyebrow}</p>
        ) : null}
        <h1 className="text-2xl font-semibold tracking-tight text-zinc-900 sm:text-3xl">{title}</h1>
        {description ? <p className="max-w-2xl text-sm leading-relaxed text-zinc-600">{description}</p> : null}
      </div>
      {actions ? <div className="flex shrink-0 flex-wrap items-center gap-2">{actions}</div> : null}
    </div>
  );
}
