import { T } from "../editable";

/**
 * The hero: a CSS-drawn phone and earbud case on a dark ground, standing in
 * for product photography the shop does not have on file yet.
 */
export default function Hero() {
  return (
    <section className="relative overflow-hidden bg-[#0C0E10] text-white">
      <div className="pointer-events-none absolute -right-40 top-1/2 h-[560px] w-[560px] -translate-y-1/2 rounded-full bg-accent/30 blur-[120px]" />
      <div className="relative mx-auto grid max-w-page grid-cols-1 items-center gap-16 px-[var(--gutter)] py-24 md:grid-cols-[1.1fr_0.9fr] md:py-32">
        <div>
          <T k="hero.headline" as="h1" className="text-[clamp(40px,6vw,76px)] max-w-[12ch] text-white" />
          <T k="hero.sub" as="p" className="mt-6 max-w-[42ch] text-lg text-white/70" />
          <T
            k="hero.cta.label"
            as="a"
            href="#visit"
            className="mt-10 inline-block rounded-full bg-accent px-7 py-3 text-base font-medium text-accent-ink transition-[filter] duration-base ease-out hover:brightness-110"
          />
        </div>
        <div className="relative mx-auto h-[380px] w-[220px]" aria-hidden="true">
          <div className="absolute inset-0 rounded-[40px] border border-white/15 bg-gradient-to-b from-white/10 to-white/0 shadow-md" />
          <div className="absolute left-1/2 top-6 h-2 w-16 -translate-x-1/2 rounded-full bg-white/20" />
          <div className="absolute inset-4 rounded-[28px] bg-gradient-to-br from-accent/60 via-accent/20 to-transparent" />
          <div className="absolute -bottom-10 left-1/2 h-24 w-24 -translate-x-[70%] rounded-[14px] bg-white/90" />
          <div className="absolute -bottom-10 left-1/2 h-24 w-24 translate-x-[10%] rounded-[14px] bg-white/70" />
        </div>
      </div>
    </section>
  );
}
