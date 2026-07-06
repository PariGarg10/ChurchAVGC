import { useEffect, useState } from "react";

const nav = [
  { href: "#stewardship", label: "Process" },
  { href: "#productions", label: "Work" },
  { href: "#services", label: "Services" },
  { href: "#testimonials", label: "Testimonials" },
  { href: "#faq", label: "FAQ" },
] as const;

export function SiteHeader({ transparent = false }: { transparent?: boolean }) {
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 24);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  const solid = !transparent || scrolled;

  return (
    <header
      className={`fixed inset-x-0 top-0 z-50 transition-all duration-500 ${
        solid
          ? "bg-[color:var(--cream)]/85 backdrop-blur-md border-b border-[color:var(--border)]"
          : "bg-transparent"
      }`}
    >
      <div className="container-page flex h-20 items-center justify-between gap-6">
        <a href="#home" className="flex items-center gap-2 group">
          <span
            className={`font-serif text-xl tracking-tight ${
              solid ? "text-[color:var(--navy)]" : "text-[color:var(--cream)]"
            }`}
          >
            AVGC Studios
          </span>
        </a>

        <nav className="hidden lg:flex items-center gap-9">
          {nav.map((item) => (
            <a
              key={item.href}
              href={item.href}
              className={`text-sm font-medium transition-colors ${
                solid
                  ? "text-[color:var(--ink)] hover:text-[color:var(--gold)]"
                  : "text-[color:var(--cream)]/90 hover:text-[color:var(--gold)]"
              }`}
            >
              {item.label}
            </a>
          ))}
        </nav>

        <div className="hidden lg:flex items-center">
          <a href="#contact" className="btn-primary" style={{ height: 44, padding: "0 1.25rem" }}>
            Schedule a Conversation
          </a>
        </div>

        <button
          onClick={() => setOpen((s) => !s)}
          className="lg:hidden p-2"
          aria-label="Open menu"
        >
          <div className={`w-6 h-px mb-1.5 ${solid ? "bg-[color:var(--ink)]" : "bg-[color:var(--cream)]"}`} />
          <div className={`w-6 h-px mb-1.5 ${solid ? "bg-[color:var(--ink)]" : "bg-[color:var(--cream)]"}`} />
          <div className={`w-6 h-px ${solid ? "bg-[color:var(--ink)]" : "bg-[color:var(--cream)]"}`} />
        </button>
      </div>

      {open && (
        <div className="lg:hidden bg-[color:var(--cream)] border-t border-[color:var(--border)]">
          <div className="container-page py-6 flex flex-col gap-4">
            {nav.map((item) => (
              <a
                key={item.href}
                href={item.href}
                onClick={() => setOpen(false)}
                className="text-base font-medium text-[color:var(--ink)]"
              >
                {item.label}
              </a>
            ))}
            <a href="#contact" onClick={() => setOpen(false)} className="btn-primary mt-2">
              Schedule a Conversation
            </a>
          </div>
        </div>
      )}
    </header>
  );
}
