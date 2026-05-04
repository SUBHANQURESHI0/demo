export default function AboutPage() {
  return (
    <main className="mx-auto max-w-[1440px] px-4 py-14 sm:px-6 lg:px-10 lg:py-20">
      <header className="max-w-3xl">
        <p className="text-[11px] font-semibold uppercase tracking-[0.18em] text-neutral-500">About</p>
        <h1 className="mt-3 font-(family-name:--font-playfair) text-4xl font-medium tracking-tight text-neutral-950 sm:text-5xl lg:text-6xl">
          Modern British luxury, made digital.
        </h1>
        <p className="mt-6 text-[16px] leading-relaxed text-neutral-600 sm:text-[17px]">
          MODERNUK exists to bridge craft and convenience — obsessive about materials and fit, uncompromising about how
          the store feels. No clutter. No noise. Just products worth owning.
        </p>
      </header>

      <div className="mt-16 grid gap-12 border-t border-neutral-200/90 pt-16 lg:grid-cols-3 lg:gap-10">
        <div>
          <h2 className="text-[11px] font-semibold uppercase tracking-[0.14em] text-neutral-500">Craft</h2>
          <p className="mt-4 text-[15px] leading-relaxed text-neutral-700">
            We work with specialist makers and responsible suppliers so every seam earns its place.
          </p>
        </div>
        <div>
          <h2 className="text-[11px] font-semibold uppercase tracking-[0.14em] text-neutral-500">Sustainability</h2>
          <p className="mt-4 text-[15px] leading-relaxed text-neutral-700">
            Fewer, better pieces — with packaging and logistics designed to reduce waste without compromising delivery.
          </p>
        </div>
        <div>
          <h2 className="text-[11px] font-semibold uppercase tracking-[0.14em] text-neutral-500">Service</h2>
          <p className="mt-4 text-[15px] leading-relaxed text-neutral-700">
            Fast, human support when you need it — and a returns flow that respects your time.
          </p>
        </div>
      </div>
    </main>
  );
}
