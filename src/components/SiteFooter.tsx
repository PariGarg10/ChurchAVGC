import { Link } from "@tanstack/react-router";

export function SiteFooter() {
  return (
    <footer className="bg-[color:var(--navy)] text-[color:var(--cream)]">
      <div className="container-page py-20 grid gap-12 md:grid-cols-4">
        <div className="md:col-span-2">
          <div className="font-serif text-2xl">
            AVGC Studios
          </div>
          <p className="mt-4 max-w-md text-sm text-[color:var(--cream)]/70 leading-relaxed">
            A creative production company, serving ministries worldwide.
            We help faithful messages travel farther, engage deeper, and impact more lives.
          </p>
        </div>
        <div>
          <div className="eyebrow text-[color:var(--gold)]">Explore</div>
          <ul className="mt-4 space-y-3 text-sm">
            {[
              ["/services", "Services"],
              ["/work", "Work"],
              ["/process", "Process"],
              ["/about", "About"],
              ["/resources", "Resources"],
            ].map(([to, label]) => (
              <li key={to}>
                <Link to={to} className="hover:text-[color:var(--gold)] transition-colors">
                  {label}
                </Link>
              </li>
            ))}
          </ul>
        </div>
        <div>
          <div className="eyebrow text-[color:var(--gold)]">Contact</div>
          <ul className="mt-4 space-y-3 text-sm text-[color:var(--cream)]/80">
            <li>info@avgcstudio.com</li>
            <li>+91 92669 85959</li>
            <li>WhatsApp · Mon–Sat</li>
          </ul>
          <Link to="/contact" className="btn-gold mt-6" style={{ height: 48 }}>
            Start a Conversation
          </Link>
        </div>
      </div>
      <div className="border-t border-white/10">
        <div className="container-page py-6 flex flex-col md:flex-row justify-between gap-3 text-xs text-[color:var(--cream)]/60">
          <div>© {new Date().getFullYear()} AVGC Studios. All rights reserved.</div>
          <div>For the glory of God and the good of His Church.</div>
        </div>
      </div>
    </footer>
  );
}
