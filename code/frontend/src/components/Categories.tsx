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
      <div className="mt-10 grid grid-cols-1 gap-4 md:grid-cols-[1.3fr_1fr]">
        {items[0] && (
          <div className="flex flex-col justify-between rounded-[var(--radius)] border border-line bg-surface p-10">
            <div>
              <T k="categories.items.0.name" as="h3" className="text-[clamp(24px,2.6vw,32px)] text-ink" />
              <T k="categories.items.0.detail" as="p" className="mt-4 max-w-[46ch] text-lg text-ink-soft" />
            </div>
            {/* three stacked cases, standing for "the colors we keep in stock" */}
            <div className="mt-10 flex h-28 items-end" aria-hidden="true">
              <div className="h-24 w-16 -mr-4 rotate-[-8deg] rounded-[var(--radius-sm)] border border-line bg-ink" />
              <div className="h-28 w-16 rotate-[4deg] rounded-[var(--radius-sm)] border border-line bg-accent" />
              <div className="h-24 w-16 -ml-4 rotate-[10deg] rounded-[var(--radius-sm)] border border-line bg-ink-soft" />
            </div>
          </div>
        )}
        <div className="grid grid-cols-1 gap-4">
          {items.slice(1).map((item, i) => (
            <div key={i} className="rounded-[var(--radius)] border border-line bg-surface p-6">
              <T k={`categories.items.${i + 1}.name`} as="h3" className="text-xl text-ink" />
              <T k={`categories.items.${i + 1}.detail`} as="p" className="mt-2 max-w-[52ch] text-base text-ink-soft" />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
