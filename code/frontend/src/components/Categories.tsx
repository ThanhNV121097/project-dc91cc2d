import { T, useList } from "../editable";

/**
 * What the shop carries, as an asymmetric bento rather than four equal
 * cards: the first item reads large, the rest sit smaller beside it.
 */
export default function Categories() {
  const items = useList<{ name: string; detail: string }>("categories.items");
  return (
    <section id="categories" className="mx-auto max-w-page px-[var(--gutter)] py-24">
      <T k="categories.heading" as="h2" className="text-[clamp(28px,3.4vw,40px)] text-ink" />
      <div className="mt-10 grid grid-cols-1 gap-4 md:grid-cols-2">
        {items.map((item, i) => (
          <div
            key={i}
            className={`rounded-[var(--radius)] border border-line bg-surface p-8 ${i === 0 ? "md:col-span-2 md:p-10" : ""}`}
          >
            <T k={`categories.items.${i}.name`} as="h3" className={`${i === 0 ? "text-2xl" : "text-xl"} text-ink`} />
            <T k={`categories.items.${i}.detail`} as="p" className="mt-3 max-w-[52ch] text-base text-ink-soft" />
          </div>
        ))}
      </div>
    </section>
  );
}
