import { T } from "../editable";

/**
 * The hero: a CSS-drawn phone with a lit accent screen, standing in for
 * product photography the shop does not have on file yet. No blob glow —
 * the screen itself is the light source.
 */
export default function Hero() {
  return (
    <section className="relative overflow-hidden bg-ink text-ink-inverse">
      <div className="relative mx-auto grid max-w-page grid-cols-1 items-center gap-16 px-[var(--gutter)] py-24 md:grid-cols-[1.1fr_0.9fr] md:py-32">
        <div>
          <T k="hero.headline" as="h1" className="text-[clamp(40px,6vw,76px)] max-w-[12ch] text-ink-inverse" />
          <T k="hero.sub" as="p" className="mt-6 max-w-[42ch] text-lg text-ink-inverse-soft" />
          <T
            k="hero.cta.label"
            as="a"
            href="#visit"
            className="mt-10 inline-block rounded-full bg-accent px-7 py-3 text-base font-medium text-accent-ink transition-[filter] duration-base ease-out hover:brightness-110"
          />
        </div>
        <div className="relative mx-auto h-[420px] w-[260px]" aria-hidden="true">
          {/* phone, lit screen doubling as the hero's light source */}
          <div className="absolute left-1/2 top-0 h-[400px] w-[200px] -translate-x-1/2 rounded-[36px] border border-line-dark bg-surface-dim shadow-md">
            <div className="absolute left-1/2 top-5 h-2 w-14 -translate-x-1/2 rounded-full bg-ink" />
            <div className="absolute inset-3 top-10 rounded-[26px] bg-accent" />
          </div>
          {/* AirPods case, titanium against the dark ground */}
          <div className="absolute bottom-0 right-0 h-[90px] w-[70px] rounded-[18px] border border-line-dark bg-ink-inverse shadow-md">
            <div className="absolute left-1/2 top-2 h-[6px] w-[6px] -translate-x-1/2 rounded-full bg-accent" />
          </div>
        </div>
      </div>
    </section>
  );
}
