import { CONTACT_EMAIL } from "@/lib/contact";

export function SiteFooter() {
  return (
    <footer className="bg-[#2A1C14] text-[color:var(--cream)]">
      <div className="container-page py-20 grid grid-cols-4 gap-12">
        <div className="col-span-2">
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
              ["#services", "Services"],
              ["#productions", "Work"],
              ["#stewardship", "Process"],
              ["#testimonials", "Testimonials"],
              ["#faq", "FAQ"],
            ].map(([href, label]) => (
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
              <a href={`mailto:${CONTACT_EMAIL}`} className="hover:text-[color:var(--gold)] transition-colors">
                {CONTACT_EMAIL}
              </a>
            </li>
          </ul>
          <a href="#contact" className="btn-gold mt-6 inline-flex" style={{ height: 48 }}>
            Start a Conversation
          </a>
        </div>
      </div>
      <div className="border-t border-white/10">
        <div className="container-page py-6 flex flex-row justify-between gap-3 text-xs text-[color:var(--cream)]/60">
          <div className="flex items-center gap-4">
            <span>© {new Date().getFullYear()} AVGC Studios. All rights reserved.</span>
            <span className="text-[color:var(--cream)]/30">|</span>
            <a href="/privacy-policy" className="hover:text-[color:var(--gold)] transition-colors">
              Privacy Policy
            </a>
            <span className="text-[color:var(--cream)]/30">|</span>
            <a href="/terms-and-conditions" className="hover:text-[color:var(--gold)] transition-colors">
              Terms & Conditions
            </a>
          </div>
          <div>For the glory of God and the good of His Church.</div>
        </div>
      </div>
    </footer>
  );
}
