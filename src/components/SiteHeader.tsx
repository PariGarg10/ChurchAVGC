import { useEffect, useState } from "react";

const nav = [
  { href: "/#process", label: "What We Do" },
  { href: "/#productions", label: "Our Work Samples" },
  { href: "/#services", label: "How We Partner" },
  { href: "/#testimonials", label: "Meet Our Clients" },
  { href: "/#faq", label: "FAQs" },
] as const;

export function SiteHeader({ transparent = false }: { transparent?: boolean }) {
  const baseUrl = import.meta.env.BASE_URL;
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
      <div className="container-page flex h-16 sm:h-20 items-center justify-between gap-4 sm:gap-6">
        <a href="/" className="flex items-center group shrink-0">
          <img
            src={`${baseUrl}${solid ? "avgc-logo-light.png" : "avgc-logo-dark.png"}`}
            alt="AVGC logo"
            className="h-12 w-auto sm:h-14 transition-transform group-hover:scale-105"
          />
        </a>

        <nav className="hidden lg:flex items-center gap-5 xl:gap-8">
          {nav.map((item) => (
            <a
              key={item.href}
              href={item.href}
              className={`text-base xl:text-[1.05rem] font-medium transition-colors ${
                solid
                  ? "text-[color:var(--ink)] hover:text-[color:var(--gold)]"
                  : "text-[color:var(--cream)]/90 hover:text-[color:var(--gold)]"
              }`}
            >
              {item.label}
            </a>
          ))}
        </nav>

        <div className="hidden lg:flex items-center shrink-0">
          <a href="/#contact" className="btn-primary !text-sm xl:!text-[0.95rem]" style={{ minHeight: 44, height: 44, padding: "0 1rem" }}>
            <span className="hidden xl:inline">Start a Conversation</span>
            <span className="xl:hidden">Start</span>
          </a>
        </div>

        <button
          onClick={() => setOpen((s) => !s)}
          className="lg:hidden p-2 -mr-2"
          aria-label={open ? "Close menu" : "Open menu"}
          aria-expanded={open}
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
                className="text-lg font-medium text-[color:var(--ink)]"
              >
                {item.label}
              </a>
            ))}
            <a href="/#contact" onClick={() => setOpen(false)} className="btn-primary mt-2">
              Start a Conversation
            </a>
          </div>
        </div>
      )}
    </header>
  );
}
