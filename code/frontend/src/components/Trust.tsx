import { T } from "../editable";

export default function Trust() {
  return (
    <section className="bg-ink px-[var(--gutter)] py-20 text-white">
      <div className="mx-auto max-w-[62ch]">
        <T k="trust.heading" as="h2" className="text-[clamp(26px,3vw,36px)] text-white" />
        <T k="trust.body" as="p" className="mt-4 text-lg text-white/70" />
      </div>
    </section>
  );
}
