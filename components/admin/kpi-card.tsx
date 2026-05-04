interface KpiCardProps {
  label: string;
  value: string;
  helper?: string;
}

export function KpiCard({ label, value, helper }: KpiCardProps) {
  return (
    <div className="rounded-xl border border-zinc-200/90 bg-white p-5 shadow-sm">
      <p className="text-[11px] font-semibold uppercase tracking-[0.14em] text-zinc-500">{label}</p>
      <p className="mt-2 tabular-nums text-2xl font-semibold tracking-tight text-zinc-900 sm:text-[28px]">{value}</p>
      {helper ? <p className="mt-1 text-xs text-zinc-500">{helper}</p> : null}
    </div>
  );
}
