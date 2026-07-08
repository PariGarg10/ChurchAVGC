import { CONTACT_EMAIL } from "@/lib/contact";

const exploreLinks = [
  ["/#process", "What we do"],
  ["/#productions", "Our work samples"],
  ["/#services", "How we partner"],
  ["/#testimonials", "Meet our clients"],
  ["/#faq", "FAQs"],
] as const;

export function SiteFooter() {
  return (
    <footer className="bg-[#2A1C14] text-[color:var(--cream)]">
      <div className="container-page py-12 sm:py-16 md:py-20 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-10 sm:gap-12">
        <div className="sm:col-span-2">
          <div className="font-serif text-xl sm:text-2xl">AVGC Studios</div>
          <p className="mt-4 max-w-md text-sm text-[color:var(--cream)]/70 leading-relaxed">
          A creative production company empowering faithful messages to travel farther, engage deeper, and transform lives worldwide.
          </p>
        </div>
        <div>
          <div className="eyebrow text-[color:var(--gold)]">Explore</div>
          <ul className="mt-4 space-y-3 text-sm">
            {exploreLinks.map(([href, label]) => (
              <li key={href}>
                <a href={href} className="hover:text-[color:var(--gold)] transition-colors">
                  {label}
                </a>
              </li>
            ))}
          </ul>
        </div>
        <div>
          <div className="eyebrow text-[color:var(--gold)]">Contact</div>
          <ul className="mt-4 space-y-3 text-sm text-[color:var(--cream)]/80">
            <li>
              <a href={`mailto:${CONTACT_EMAIL}`} className="hover:text-[color:var(--gold)] transition-colors break-all">
                {CONTACT_EMAIL}
              </a>
            </li>
          </ul>
          <a href="/#contact" className="btn-gold mt-6 inline-flex w-full sm:w-auto justify-center" style={{ minHeight: 48 }}>
            Start a Conversation
          </a>
        </div>
      </div>
      <div className="border-t border-white/10">
        <div className="container-page py-5 sm:py-6 flex flex-col sm:flex-row sm:justify-between gap-4 sm:gap-3 text-xs text-[color:var(--cream)]/60">
          <div className="flex flex-col sm:flex-row sm:flex-wrap sm:items-center gap-2 sm:gap-4">
            <span>© {new Date().getFullYear()} AVGC Studios. All rights reserved.</span>
            <span className="hidden sm:inline text-[color:var(--cream)]/30">|</span>
            <div className="flex flex-wrap items-center gap-2 sm:gap-4">
              <a href="/privacy-policy" className="hover:text-[color:var(--gold)] transition-colors">
                Privacy Policy
              </a>
              <span className="text-[color:var(--cream)]/30">|</span>
              <a href="/terms-and-conditions" className="hover:text-[color:var(--gold)] transition-colors">
                Terms & Conditions
              </a>
            </div>
          </div>
          <div className="sm:text-right">For the glory of the God and the good of His Church.</div>
        </div>
      </div>
    </footer>
  );
}
