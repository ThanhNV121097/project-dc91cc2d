import { T } from "../editable";

export default function Visit() {
  return (
    <section id="visit" className="mx-auto max-w-page px-[var(--gutter)] py-24">
      <div className="flex flex-col items-start justify-between gap-8 border-t border-line pt-12 md:flex-row md:items-end">
        <div>
          <T k="visit.heading" as="h2" className="text-[clamp(28px,3.4vw,40px)] text-ink" />
          <T k="visit.address" as="p" className="mt-3 text-lg text-ink-soft" />
        </div>
        <T
          k="visit.cta.label"
          as="a"
          href="https://www.google.com/maps?q=19+Duy+T%C3%A2n,+H%C3%A0+N%E1%BB%99i"
          className="inline-block rounded-full border border-line px-7 py-3 text-base font-medium text-ink transition-colors duration-base ease-out hover:border-ink"
        />
      </div>
    </section>
  );
}
