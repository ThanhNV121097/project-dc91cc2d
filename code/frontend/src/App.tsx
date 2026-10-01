import { T, useList } from "./editable";
import Hero from "./components/Hero";
import Categories from "./components/Categories";
import Trust from "./components/Trust";
import Visit from "./components/Visit";

export default function App() {
  const links = useList<{ label: string; href: string }>("nav.links");
  return (
    <div className="min-h-screen bg-ground text-ink font-body">
      <header className="mx-auto flex max-w-page items-center justify-between px-[var(--gutter)] py-6">
        <T k="site.name" as="a" href="/" className="font-display text-lg text-ink" />
        <nav className="flex items-center gap-6 text-sm">
          {links.map((l, i) => (
            <T key={i} k={`nav.links.${i}.label`} as="a" href={l.href} className="text-ink-soft" />
          ))}
          <T
            k="nav.cta.label"
            as="a"
            href="#visit"
            className="rounded-full bg-accent px-4 py-2 text-accent-ink"
          />
        </nav>
      </header>
      <main>
        <Hero />
        <Categories />
        <Trust />
        <Visit />
      </main>
      <footer className="mx-auto max-w-page border-t border-line px-[var(--gutter)] py-10 text-sm text-ink-soft">
        <T k="footer.line" />
      </footer>
    </div>
  );
}
