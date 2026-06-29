import { Link } from "@tanstack/react-router";
import { useEffect, useState } from "react";

const nav = [
  { to: "/", label: "Home" },
  { to: "/services", label: "Services" },
  { to: "/work", label: "Work" },
  { to: "/process", label: "Process" },
  { to: "/about", label: "About" },
  { to: "/resources", label: "Resources" },
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
        <Link to="/" className="flex items-center gap-2 group">
          <span
            className={`font-serif text-xl tracking-tight ${
              solid ? "text-[color:var(--navy)]" : "text-[color:var(--cream)]"
            }`}
          >
            AVGC Studios
          </span>
        </Link>

        <nav className="hidden lg:flex items-center gap-9">
          {nav.map((item) => (
            <Link
              key={item.to}
              to={item.to}
              className={`text-sm font-medium transition-colors ${
                solid
                  ? "text-[color:var(--ink)] hover:text-[color:var(--gold)]"
                  : "text-[color:var(--cream)]/90 hover:text-[color:var(--gold)]"
              }`}
              activeProps={{ style: { color: "var(--gold)" } }}
              activeOptions={{ exact: item.to === "/" }}
            >
              {item.label}
            </Link>
          ))}
        </nav>

        <div className="hidden lg:flex items-center">
          <Link to="/contact" className="btn-primary" style={{ height: 44, padding: "0 1.25rem" }}>
            Schedule a Conversation
          </Link>
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
              <Link
                key={item.to}
                to={item.to}
                onClick={() => setOpen(false)}
                className="text-base font-medium text-[color:var(--ink)]"
              >
                {item.label}
              </Link>
            ))}
            <Link to="/contact" onClick={() => setOpen(false)} className="btn-primary mt-2">
              Schedule a Conversation
            </Link>
          </div>
        </div>
      )}
    </header>
  );
}
