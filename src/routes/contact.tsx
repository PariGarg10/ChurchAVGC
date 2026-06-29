import { createFileRoute } from "@tanstack/react-router";
import { useState } from "react";
import { SiteHeader } from "@/components/SiteHeader";
import { SiteFooter } from "@/components/SiteFooter";
import { Reveal } from "@/components/Reveal";
import team from "@/assets/team.jpg";

export const Route = createFileRoute("/contact")({
  head: () => ({
    meta: [
      { title: "Contact — AVGC Studios" },
      { name: "description", content: "Schedule a conversation about partnering with AVGC Studios." },
      { property: "og:title", content: "Contact AVGC Studios" },
      { property: "og:description", content: "Schedule a consultation with our team." },
    ],
  }),
  component: ContactPage,
});

function ContactPage() {
  const [sent, setSent] = useState(false);
  return (
    <div>
      <SiteHeader />
      <section className="pt-40 pb-16 bg-[color:var(--background)]">
        <div className="container-page max-w-4xl">
          <Reveal>
            <div className="eyebrow">Contact</div>
            <h1 className="mt-6 font-serif text-5xl md:text-7xl leading-[1.04]">
              Let&rsquo;s partner on <span className="text-[color:var(--gold)]">your mission.</span>
            </h1>
            <p className="mt-8 text-lg text-[color:var(--muted-foreground)] max-w-2xl leading-relaxed">
              We view ourselves not merely as a production vendor, but as a ministry partner.
              Tell us about your content — we&rsquo;ll listen first.
            </p>
          </Reveal>
        </div>
      </section>

      <section className="pb-16">
        <div className="container-page">
          <Reveal>
            <div className="overflow-hidden rounded-2xl">
              <img src={team} alt="Our team" width={1600} height={1000} loading="lazy" className="w-full h-auto" />
            </div>
          </Reveal>
        </div>
      </section>

      <section className="section-y bg-white">
        <div className="container-page grid lg:grid-cols-2 gap-16">
          <Reveal>
            <div>
              <h2 className="font-serif text-3xl md:text-4xl text-[color:var(--navy)]">Get in touch</h2>
              <p className="mt-4 text-[color:var(--muted-foreground)] leading-relaxed">
                Reach us in whatever way is easiest. We answer every message personally,
                usually within one business day.
              </p>
              <ul className="mt-10 space-y-6">
                {[
                  ["Email", "info@avgcstudio.com"],
                  ["Phone", "+91 92669 85959"],
                  ["Office", "Mon–Sat, 9:30am–6:30pm IST"],
                ].map(([k, v]) => (
                  <li key={k} className="border-b border-[color:var(--border)] pb-6">
                    <div className="eyebrow">{k}</div>
                    <div className="mt-2 font-serif text-2xl text-[color:var(--navy)]">{v}</div>
                  </li>
                ))}
              </ul>
              <a
                href="#schedule"
                className="btn-primary mt-10"
              >
                Open the scheduler
              </a>
            </div>
          </Reveal>

          <Reveal delay={150}>
            <form
              onSubmit={(e) => {
                e.preventDefault();
                setSent(true);
              }}
              className="card-elev"
            >
              <h3 className="font-serif text-2xl text-[color:var(--navy)]">Tell us about your ministry</h3>
              <p className="mt-2 text-sm text-[color:var(--muted-foreground)]">
                We&rsquo;ll reply within one business day.
              </p>

              <div className="mt-8 grid gap-5">
                <Field label="Your name" name="name" required />
                <Field label="Church or ministry" name="org" required />
                <Field label="Email" name="email" type="email" required />
                <Field label="Phone (optional)" name="phone" />
                <div>
                  <label className="eyebrow text-[color:var(--navy)]/60">What would you like to talk about?</label>
                  <textarea
                    name="message"
                    rows={5}
                    required
                    className="mt-3 w-full rounded-xl border border-[color:var(--border)] bg-white px-4 py-3 text-[color:var(--ink)] outline-none focus:border-[color:var(--gold)] transition-colors"
                  />
                </div>
              </div>

              <button type="submit" className="btn-primary mt-8 w-full" disabled={sent}>
                {sent ? "Thank you — we'll be in touch." : "Schedule a consultation"}
              </button>
            </form>
          </Reveal>
        </div>
      </section>

      <section id="schedule" className="section-y bg-[color:var(--background)]">
        <div className="container-page">
          <Reveal>
            <div className="text-center max-w-2xl mx-auto">
              <div className="eyebrow">Meeting Scheduler</div>
              <h2 className="mt-5 font-serif text-4xl md:text-5xl leading-[1.05]">
                Pick a time that works for you.
              </h2>
              <p className="mt-6 text-[color:var(--muted-foreground)]">
                30 minutes. No prep needed. We&rsquo;ll bring the questions.
              </p>
            </div>
          </Reveal>
          <Reveal delay={120}>
            <div className="mt-12 card-elev max-w-3xl mx-auto text-center">
              <div className="grid grid-cols-7 gap-2 text-xs text-[color:var(--muted-foreground)]">
                {["S", "M", "T", "W", "T", "F", "S"].map((d, i) => (
                  <div key={i}>{d}</div>
                ))}
                {Array.from({ length: 35 }).map((_, i) => {
                  const day = i - 2;
                  const valid = day > 0 && day <= 30;
                  const active = day === 14;
                  return (
                    <div
                      key={i}
                      className={`aspect-square grid place-items-center rounded-lg text-sm transition-colors ${
                        !valid
                          ? "text-transparent"
                          : active
                          ? "bg-[color:var(--navy)] text-[color:var(--cream)]"
                          : "hover:bg-[color:var(--cream)] text-[color:var(--ink)] cursor-pointer"
                      }`}
                    >
                      {valid ? day : "·"}
                    </div>
                  );
                })}
              </div>
              <div className="mt-8 grid grid-cols-2 md:grid-cols-4 gap-3">
                {["9:00 AM", "11:00 AM", "2:00 PM", "4:00 PM"].map((t) => (
                  <button
                    key={t}
                    className="rounded-xl border border-[color:var(--border)] bg-white py-3 text-sm font-semibold text-[color:var(--navy)] hover:border-[color:var(--gold)] hover:text-[color:var(--gold)] transition-colors"
                  >
                    {t}
                  </button>
                ))}
              </div>
              <p className="mt-6 text-xs text-[color:var(--muted-foreground)]">
                Times shown in Central Time. We&rsquo;ll send a calendar invite with the link.
              </p>
            </div>
          </Reveal>
        </div>
      </section>

      <SiteFooter />
    </div>
  );
}

function Field({
  label,
  name,
  type = "text",
  required = false,
}: {
  label: string;
  name: string;
  type?: string;
  required?: boolean;
}) {
  return (
    <div>
      <label htmlFor={name} className="eyebrow text-[color:var(--navy)]/60">
        {label}
      </label>
      <input
        id={name}
        name={name}
        type={type}
        required={required}
        className="mt-3 w-full rounded-xl border border-[color:var(--border)] bg-white px-4 py-3 text-[color:var(--ink)] outline-none focus:border-[color:var(--gold)] transition-colors"
      />
    </div>
  );
}
