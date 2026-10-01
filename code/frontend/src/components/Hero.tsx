import { T } from "../editable";

/**
 * The hero: a CSS-drawn phone and earbud case on a dark ground, standing in
 * for product photography the shop does not have on file yet.
 */
export default function Hero() {
  return (
    <section className="relative overflow-hidden bg-[#0C0E10] text-white">
      <div className="pointer-events-none absolute right-[6%] top-1/2 h-[520px] w-[520px] -translate-y-1/2 rounded-full bg-accent/40 blur-[110px]" />
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
        <div className="relative mx-auto h-[420px] w-[260px]" aria-hidden="true">
          {/* phone */}
          <div className="absolute left-1/2 top-0 h-[400px] w-[200px] -translate-x-1/2 rounded-[36px] border border-white/15 bg-gradient-to-b from-[#1c1f22] to-[#0C0E10] shadow-md">
            <div className="absolute left-1/2 top-5 h-2 w-14 -translate-x-1/2 rounded-full bg-black/60" />
            <div className="absolute inset-3 top-10 rounded-[26px] bg-gradient-to-br from-accent/50 via-accent/10 to-transparent" />
          </div>
          {/* AirPods case */}
          <div className="absolute bottom-0 right-0 h-[90px] w-[70px] rounded-[18px] border border-white/20 bg-gradient-to-b from-white/95 to-white/80 shadow-md">
            <div className="absolute left-1/2 top-2 h-[6px] w-[6px] -translate-x-1/2 rounded-full bg-accent" />
          </div>
        </div>
      </div>
    </section>
  );
}
