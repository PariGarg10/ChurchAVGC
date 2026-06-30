import { createFileRoute, Link } from "@tanstack/react-router";
import heroImg from "@/assets/hero-worship.jpg";
import reelPanel1 from "@/assets/work-reel-panel-1.png";
import reelPanel2 from "@/assets/work-reel-panel-2.png";
import testimonialSohini from "@/assets/testimonial-sohini-ghoshal.png";
import testimonialEduardo from "@/assets/testimonial-eduardo-acin.png";
import testimonialDavid from "@/assets/testimonial-david-salas.png";
import testimonialMosongo from "@/assets/testimonial-mosongo-osong.png";
import { SiteHeader } from "@/components/SiteHeader";
import { SiteFooter } from "@/components/SiteFooter";
import { Reveal } from "@/components/Reveal";
import { FilmReelBackdrop } from "@/components/FilmReelBackdrop";
import { ProductionVideo } from "@/components/ProductionVideo";
import { productionVideos } from "@/data/production-videos";
import { TestimonialVideo } from "@/components/TestimonialVideo";
import { useState } from "react";

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title: "AVGC Studios — Amplify the Message. Multiply the Impact." },
      {
        name: "description",
        content:
          "AVGC Studios helps churches and ministries maximize the impact of their content through visual storytelling, animation, content repurposing, and media production.",
      },
      { property: "og:title", content: "Amplify the Message. Multiply the Impact." },
      { property: "og:description", content: "Creative production for churches and ministries worldwide." },
    ],
  }),
  component: Home,
});

function Home() {
  return (
    <div className="bg-[color:var(--background)]">
      <SiteHeader transparent />
      <Hero />
      <ServicesOverview />
      <SermonFlow />
      <Portfolio />
      <ProcessTimeline />
      <WhyUs />
      <Testimonials />
      <FAQ />
      <CTA />
      <SiteFooter />
    </div>
  );
}

/* ---------- 1. HERO ---------- */
function Hero() {
  return (
    <section className="relative min-h-screen w-full overflow-hidden text-[color:var(--cream)]">
      <img
        src={heroImg}
        alt="Pastor preaching with a camera operator filming in warm light"
        width={1920}
        height={1280}
        className="absolute inset-0 h-full w-full object-cover animate-kenburns"
      />
      <div className="absolute inset-0 bg-gradient-to-b from-black/70 via-black/45 to-black/85" />
      <div className="absolute inset-0 bg-[radial-gradient(80%_60%_at_50%_40%,transparent,rgba(0,0,0,0.55))]" />

      <div className="relative container-page flex min-h-screen flex-col justify-end pt-32 pb-20 md:pb-28">
        <div className="max-w-3xl">
          <div className="eyebrow text-[color:var(--gold)]">AVGC Studios</div>
          <h1 className="mt-6 font-serif text-[clamp(2.5rem,6vw,5.25rem)] leading-[1.04] tracking-tight text-[color:var(--cream)]">
            Amplify the Message. <em className="not-italic text-[color:var(--gold)]">Multiply the Impact.</em>
          </h1>
          <p className="mt-6 max-w-2xl text-base md:text-lg leading-relaxed text-[color:var(--cream)]/85">
            The challenge isn&rsquo;t creating more content &mdash; it&rsquo;s maximizing the impact
            of the content already being created. We help ministries transform valuable teachings
            into engaging visual experiences that reach people wherever they are.
          </p>
          <div className="mt-10 flex flex-wrap gap-4">
            <Link to="/work" className="btn-gold">View Our Work</Link>
            <Link to="/contact" className="btn-gold">Schedule a Conversation</Link>
          </div>
          <p className="mt-10 text-xs tracking-[0.18em] uppercase text-[color:var(--cream)]/55">
            Most ministries already have valuable content
          </p>
          <div className="mt-5 flex flex-wrap gap-x-10 gap-y-3 text-[color:var(--cream)]/65 font-serif text-lg italic">
            <span>Sermons</span>
            <span>· Bible Studies</span>
            <span>· Podcasts</span>
            <span>· Testimonies</span>
            <span>· Children&rsquo;s Ministry Lessons</span>
          </div>
        </div>
      </div>
    </section>
  );
}

/* ---------- 2. SERVICES ---------- */
function ServicesOverview() {
  const items = [
    { title: "Sermons", body: "Add visuals, maps, scripture references and contextual imagery." },
    { title: "Bible Studies", body: "Historical context, character illustrations and educational graphics." },
    { title: "Testimonies & Faith Stories", body: "Bring personal stories to life through visual storytelling." },
    { title: "Mission & Ministry Updates", body: "Help supporters see impact through visuals rather than simply describing it." },
    { title: "Children's Ministry", body: "Create engaging content for younger audiences." },
    { title: "Leadership & Discipleship Training", body: "Make educational content easier to understand and retain." },
  ];
  return (
    <section className="section-y bg-[color:var(--background)]">
      <div className="container-page">
        <Reveal>
          <div className="max-w-3xl">
            <div className="eyebrow">Content We Support</div>
            <h2 className="mt-5 font-serif text-4xl md:text-6xl leading-[1.05]">
              Valuable content
              <br />
              <span className="text-[color:var(--gold)]">you already have.</span>
            </h2>
          </div>
        </Reveal>

        <div className="mt-16 grid grid-cols-2 gap-px bg-[color:var(--border)] rounded-2xl overflow-hidden border border-[color:var(--border)]">
          {items.map((it, i) => (
            <Reveal key={it.title} delay={i * 90}>
              <article className="bg-[color:var(--background)] p-10 md:p-14 h-full group transition-colors hover:bg-white">
                <div className="text-xs font-semibold tracking-[0.2em] text-[color:var(--gold)]">
                  0{i + 1}
                </div>
                <h3 className="mt-5 font-serif text-2xl md:text-3xl text-[color:var(--navy)]">
                  {it.title}
                </h3>
                <p className="mt-4 max-w-md text-[color:var(--muted-foreground)] leading-relaxed">
                  {it.body}
                </p>
                <Link to="/services" className="mt-8 inline-flex items-center text-sm font-semibold text-[color:var(--navy)] group-hover:text-[color:var(--gold)] transition-colors">
                  Learn more <span className="ml-2 transition-transform group-hover:translate-x-1">→</span>
                </Link>
              </article>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}

/* ---------- 3. SERMON FLOW CARDS ---------- */
function SermonFlow() {
  const cards = [
    { step: "1", phase: "Origin", title: "One Sunday", chips: [{ label: "Sunday Sermon", icon: "✦" }], variant: "origin" as const },
    { step: "2", phase: "Craft", title: "Shaped with care", chips: [{ label: "Professional Editing", icon: "✎" }] },
    { step: "3", phase: "Long-form", title: "Where people watch & listen", chips: [{ label: "YouTube", icon: "▶" }, { label: "Podcast", icon: "♪" }, { label: "Facebook", icon: "f" }] },
    { step: "4", phase: "Short-form", title: "Where people scroll", chips: [{ label: "Instagram", icon: "◐" }, { label: "Website", icon: "◉" }, { label: "Email", icon: "✉" }] },
    { step: "5", phase: "Discipleship", title: "Truth, made memorable", chips: [{ label: "Animated Bible Lessons", icon: "✺" }] },
    { step: "6", phase: "Impact", title: "Thousands more reached", chips: [{ label: "Lives Touched", icon: "✿" }], variant: "impact" as const },
  ];

  return (
    <section className="section-y relative overflow-hidden bg-[#2A1C14] text-[color:var(--cream)]">
      <div
        className="pointer-events-none absolute inset-0 opacity-[0.16]"
        style={{
          backgroundImage: "radial-gradient(circle at 1px 1px, #C6A15B 1px, transparent 0)",
          backgroundSize: "28px 28px",
        }}
      />
      <div className="pointer-events-none absolute -top-24 left-1/2 h-[420px] w-[720px] -translate-x-1/2 rounded-full bg-[radial-gradient(closest-side,rgba(198,161,91,0.18),transparent)]" />

      <div className="container-page relative">
        <Reveal>
          <div className="max-w-3xl">
            <div className="eyebrow text-[color:var(--gold)]">One Message</div>
            <h2 className="mt-5 font-serif text-4xl md:text-6xl leading-[1.05] text-[color:var(--cream)]">
              One Sermon. <em className="not-italic text-[color:var(--gold)]">Many Touchpoints.</em>
            </h2>
            <p className="mt-6 text-[color:var(--cream)]/75 max-w-2xl leading-relaxed">
              A single message becomes a week of touchpoints &mdash; across platforms, formats, and audiences.
            </p>
          </div>
        </Reveal>

        <Reveal delay={120}>
          <div className="mt-14 rounded-[2rem] border border-[color:var(--gold)]/25 bg-[#F3EBDD] p-6 md:p-10 shadow-[0_24px_60px_-30px_rgba(42,28,20,0.18)]">
            <div className="flow-rail overflow-visible pb-2">
              <div className="flow-rail__track min-w-0">
              {cards.map((card) => (
                <article key={card.step} className="flow-step group">
                  <div
                    className={`flow-step__badge ${
                      card.variant === "origin"
                        ? "flow-step__badge--origin"
                        : card.variant === "impact"
                        ? "flow-step__badge--impact"
                        : ""
                    }`}
                  >
                    {card.step}
                  </div>
                  <div
                    className={`flow-step__card ${
                      card.variant === "origin"
                        ? "flow-step__card--origin"
                        : card.variant === "impact"
                        ? "flow-step__card--impact"
                        : ""
                    }`}
                  >
                    <div className="flow-step__phase">{card.phase}</div>
                    <h3 className="flow-step__title">{card.title}</h3>
                    <div className="mt-4 space-y-2">
                      {card.chips.map((chip) => (
                        <div key={chip.label} className="flow-step__chip">
                          <span className="flow-step__chip-icon">{chip.icon}</span>
                          <span>{chip.label}</span>
                        </div>
                      ))}
                    </div>
                  </div>
                </article>
              ))}
              </div>
            </div>
          </div>
        </Reveal>

        <Reveal delay={250}>
          <div className="mt-12 grid grid-cols-4 gap-px overflow-hidden rounded-2xl border border-[color:var(--cream)]/10 bg-[color:var(--cream)]/10">
            {[
              { k: "1", v: "Enhanced video" },
              { k: "10", v: "Social posts" },
              { k: "20", v: "Shorts" },
              { k: "∞", v: "Audience reach" },
            ].map((s) => (
              <div key={s.v} className="bg-[#2A1C14] px-6 py-7 text-center">
                <div className="font-serif text-3xl text-[color:var(--gold)] md:text-4xl">{s.k}</div>
                <div className="mt-1 text-xs uppercase tracking-wider text-[color:var(--cream)]/60">{s.v}</div>
              </div>
            ))}
          </div>
        </Reveal>
      </div>
    </section>
  );
}

/* ---------- 4. PORTFOLIO ---------- */
function Portfolio() {
  return (
    <section className="section-y relative overflow-hidden bg-[color:var(--background)]">
      <FilmReelBackdrop panelTop={reelPanel1} panelBottom={reelPanel2} />
      <div className="container-page relative z-[1]">
        <div className="flex flex-wrap items-end justify-between gap-6">
          <Reveal>
            <div>
              <div className="eyebrow">Recent Work</div>
              <h2 className="mt-5 font-serif text-4xl md:text-6xl leading-[1.05]">Selected Productions</h2>
            </div>
          </Reveal>
          <Reveal delay={150}>
            <Link to="/work" className="btn-ghost">See all work</Link>
          </Reveal>
        </div>

        <div className="mt-16 grid grid-cols-2 gap-10">
          {productionVideos.map((item, i) => (
            <Reveal key={item.title + i} delay={i * 100}>
              <ProductionVideo item={item} />
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}

/* ---------- 5. PROCESS TIMELINE ---------- */
function ProcessTimeline() {
  const steps = [
    {
      t: "Share Your Vision",
      d: "We listen first. Your church, your voice, your audience — and the valuable content you already have.",
      icon: "✦",
      phase: "Week 01",
      bullets: ["Discovery call", "Content audit", "Ministry goals"],
    },
    {
      t: "Receive Creative Strategy",
      d: "A clear plan for maximizing your existing content — formats, cadence, and channels designed for your ministry's rhythm.",
      icon: "❋",
      phase: "Week 02",
      bullets: ["Content roadmap", "Channel mix", "Repurposing plan"],
    },
    {
      t: "Production Begins",
      d: "Sermon enhancement, animation, audio mastering, and visual storytelling — all in motion behind the scenes.",
      icon: "✺",
      phase: "Week 03",
      bullets: ["Sermon enhancement", "Visual graphics", "Content repurposing"],
    },
    {
      t: "Review & Feedback",
      d: "Collaborative reviews on a single link. Time-stamped notes — never a headache.",
      icon: "✿",
      phase: "Week 04",
      bullets: ["One review link", "Stamped notes", "Two revision rounds"],
    },
    {
      t: "Publish Everywhere",
      d: "We deliver and distribute across every channel — helping faithful messages travel farther and engage deeper.",
      icon: "✶",
      phase: "Ongoing",
      bullets: ["Multi-channel publish", "Audience analytics", "Ongoing partnership"],
    },
  ];
  const [active, setActive] = useState(0);
  const cur = steps[active];
  const progress = ((active + 1) / steps.length) * 100;

  return (
    <section className="section-y relative overflow-hidden bg-[#2A1C14] text-[color:var(--cream)]">
      <div
        className="pointer-events-none absolute inset-0 opacity-[0.12]"
        style={{
          backgroundImage: "radial-gradient(circle at 1px 1px, #C6A15B 1px, transparent 0)",
          backgroundSize: "28px 28px",
        }}
      />
      <div className="container-page relative">
        <Reveal>
          <div className="flex flex-wrap items-end justify-between gap-6">
            <div className="max-w-2xl">
              <div className="eyebrow text-[color:var(--gold)]">How We Work</div>
              <h2 className="mt-5 font-serif text-4xl md:text-6xl leading-[1.05] text-[color:var(--cream)]">
                A stewardship <em className="not-italic text-[color:var(--gold)]">mindset.</em>
              </h2>
            </div>
            <div className="text-xs tracking-[0.2em] uppercase text-[color:var(--cream)]/55">
              Step <span className="text-[color:var(--gold)] font-semibold">{String(active + 1).padStart(2, "0")}</span>
              <span className="mx-2 text-[color:var(--gold)]/35">/</span>
              <span className="text-[color:var(--cream)]/55">{String(steps.length).padStart(2, "0")}</span>
            </div>
          </div>
        </Reveal>

        {/* Horizontal stepper rail */}
        <Reveal delay={120}>
          <div className="mt-14 relative">
            {/* base rail */}
            <div className="absolute left-0 right-0 top-5 h-px bg-[color:var(--gold)]/20" />
            {/* progress rail */}
            <div
              className="absolute left-0 top-5 h-[2px] bg-gradient-to-r from-[color:var(--gold)] to-[oklch(0.78_0.12_75)] transition-all duration-700 ease-out"
              style={{ width: `${progress}%` }}
            />
            <div className="grid grid-cols-5 gap-2">
              {steps.map((s, i) => {
                const isActive = i === active;
                const isDone = i < active;
                return (
                  <button
                    key={s.t}
                    onClick={() => setActive(i)}
                    onMouseEnter={() => setActive(i)}
                    className="group flex flex-col items-center text-center pt-0 focus:outline-none"
                  >
                    <span
                      className={`relative z-10 grid place-items-center h-10 w-10 rounded-full border-2 transition-all duration-300 ${
                        isActive
                          ? "bg-[color:var(--navy)] border-[color:var(--gold)] scale-110 shadow-[0_8px_20px_-6px_rgba(31,53,86,0.45)]"
                          : isDone
                          ? "bg-[color:var(--gold)] border-[color:var(--gold)]"
                          : "bg-[#2A1C14] border-[color:var(--gold)]/30 group-hover:border-[color:var(--gold)]"
                      }`}
                    >
                      <span
                        className={`font-serif text-sm ${
                          isActive
                            ? "text-[color:var(--gold)]"
                            : isDone
                            ? "text-[#2A1C14]"
                            : "text-[color:var(--cream)]/45 group-hover:text-[color:var(--gold)]"
                        }`}
                      >
                        {String(i + 1).padStart(2, "0")}
                      </span>
                    </span>
                    <span
                      className={`mt-4 text-[11px] md:text-xs tracking-[0.14em] uppercase transition-colors ${
                        isActive ? "text-[color:var(--gold)] font-semibold" : "text-[color:var(--cream)]/45"
                      }`}
                    >
                      {s.phase}
                    </span>
                    <span
                      className={`mt-1 block font-serif text-sm leading-snug transition-colors ${
                        isActive ? "text-[color:var(--cream)]" : "text-[color:var(--cream)]/45 group-hover:text-[color:var(--gold)]"
                      }`}
                    >
                      {s.t}
                    </span>
                  </button>
                );
              })}
            </div>
          </div>
        </Reveal>

        {/* Active panel */}
        <Reveal delay={200}>
          <div className="mt-16 grid grid-cols-[1.1fr_1fr] gap-10 items-stretch">
            {/* Story card */}
            <div
              key={`story-${active}`}
              className="relative rounded-3xl border border-[color:var(--gold)]/15 bg-[#352518] text-[color:var(--cream)] p-10 md:p-14 overflow-hidden shadow-[0_30px_80px_-30px_rgba(0,0,0,0.55)] animate-[float-up_0.5s_ease-out]"
            >
              <div
                className="absolute -top-20 -right-20 h-72 w-72 rounded-full blur-3xl opacity-25"
                style={{ background: "radial-gradient(closest-side, var(--gold), transparent)" }}
              />
              <div className="relative">
                <div className="flex items-center gap-4">
                  <span className="grid place-items-center h-14 w-14 rounded-2xl bg-[color:var(--gold)] text-[color:var(--navy)] font-serif text-2xl shadow-lg">
                    {cur.icon}
                  </span>
                  <div>
                    <div className="text-[11px] tracking-[0.2em] uppercase text-[color:var(--gold)]">{cur.phase}</div>
                    <div className="font-serif text-xs text-[color:var(--cream)]/55 mt-0.5">
                      Step {String(active + 1).padStart(2, "0")} of {String(steps.length).padStart(2, "0")}
                    </div>
                  </div>
                </div>
                <h3 className="mt-10 font-serif text-3xl md:text-5xl leading-[1.08] text-[color:var(--gold)]">{cur.t}</h3>
                <p className="mt-6 text-[color:var(--cream)]/75 leading-relaxed max-w-lg">{cur.d}</p>
              </div>
            </div>

            {/* Deliverables card */}
            <div
              key={`del-${active}`}
              className="rounded-3xl border border-[color:var(--border)] bg-[color:var(--background)] p-10 md:p-12 animate-[float-up_0.6s_ease-out]"
            >
              <div className="eyebrow">Deliverables</div>
              <ul className="mt-8 space-y-5">
                {cur.bullets.map((b, i) => (
                  <li key={b} className="flex items-start gap-4">
                    <span className="mt-2 h-1.5 w-1.5 rounded-full bg-[color:var(--gold)] shrink-0" />
                    <div className="flex-1 flex items-baseline justify-between gap-4 border-b border-dashed border-[color:var(--border)] pb-4">
                      <span className="font-serif text-lg md:text-xl text-[color:var(--navy)]">{b}</span>
                      <span className="text-xs tracking-wider uppercase text-[color:var(--muted-foreground)]">
                        0{i + 1}
                      </span>
                    </div>
                  </li>
                ))}
              </ul>

              <div className="mt-10 flex items-center justify-between">
                <button
                  onClick={() => setActive((a) => Math.max(0, a - 1))}
                  disabled={active === 0}
                  className="text-sm font-semibold text-[color:var(--navy)] disabled:opacity-30 hover:text-[color:var(--gold)] transition-colors"
                >
                  ← Previous
                </button>
                <button
                  onClick={() => setActive((a) => Math.min(steps.length - 1, a + 1))}
                  disabled={active === steps.length - 1}
                  className="text-sm font-semibold text-[color:var(--navy)] disabled:opacity-30 hover:text-[color:var(--gold)] transition-colors"
                >
                  Next →
                </button>
              </div>
            </div>
          </div>
        </Reveal>
      </div>
    </section>
  );
}

/* ---------- 6. WHY US ---------- */
function WhyUs() {
  const cols = [
    { t: "Extend Reach", d: "Help faithful messages travel farther and reach people wherever they are." },
    { t: "Repurpose Content", d: "Maximize existing content within your current budget — rather than spending more." },
    { t: "Engage Younger Audiences", d: "Visual storytelling in formats today\u2019s audiences naturally engage with." },
    { t: "Preserve Bandwidth", d: "We become an extension of your ministry team, freeing staff to focus on shepherding." },
  ];
  return (
    <section className="section-y bg-[color:var(--background)]">
      <div className="container-page">
        <Reveal>
          <div className="text-center max-w-3xl mx-auto">
            <div className="eyebrow">Why Ministries Can Do More With AVGC Studios</div>
            <h2 className="mt-5 font-serif text-4xl md:text-6xl leading-[1.05]">
              Ministry-Focused Stewardship.
            </h2>
          </div>
        </Reveal>

        <div className="mt-16 grid grid-cols-4 gap-8">
          {cols.map((c, i) => (
            <Reveal key={c.t} delay={i * 100}>
              <div className="text-center md:text-left">
                <div className="font-serif text-4xl text-[color:var(--gold)]">
                  {["✦", "❋", "✺", "✿"][i]}
                </div>
                <h3 className="mt-5 font-serif text-2xl text-[color:var(--navy)]">{c.t}</h3>
                <p className="mt-3 text-[color:var(--muted-foreground)] leading-relaxed">{c.d}</p>
              </div>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}

/* ---------- 7. TESTIMONIALS ---------- */
function Testimonials() {
  const videoItems = [
    {
      name: "David Salas",
      church: "Director, Revelation Media",
      poster: testimonialDavid,
      videoSrc: "https://drive.google.com/file/d/1f6wzYMRVZlt4SMg2lmsuSgqY1k2nWfbR/view",
    },
    {
      name: "Mosongo Osong",
      church: "Founder, Catholic Brain",
      poster: testimonialMosongo,
      videoSrc: "https://drive.google.com/file/d/1xUjr0zmOTqlrBjdB5bwZHKlWs3g2MS6v/view",
    },
  ];
  const quoteItems = [
    {
      quote:
        "We have worked with AVGC Studios for a year now on video editing, illustrations, and ILO development projects. They consistently deliver high-quality, polished, creative output while working with tight timelines and large volumes. Their quality control is solid, their communication is smooth, and they address review notes quickly. They\u2019re a reliable and valued partner!",
      name: "Sohini Ghoshal",
      church: "Project Manager, Creator UP",
      img: testimonialSohini,
    },
    {
      quote:
        "Although Shackleton Kids is a children\u2019s publisher, a few years ago we decided to create our own YouTube channel where we upload animated versions of our stories. Two years ago, we met AVGC Studios, and since then they have become our partner for the development of our audiovisual content, with whom we continue to work year after year. I could highlight the quality of their work, their flexibility in adapting to our needs, or their punctuality in deliveries, but for me the most important thing is the feeling of transparency and honesty. That\u2019s why we\u2019ve just renewed our contract with them for another year.",
      name: "Eduardo Acin",
      church: "Partner & Publishing Director, Shackleton Kids",
      img: testimonialEduardo,
    },
  ];

  return (
    <section className="section-y bg-white">
      <div className="container-page">
        <Reveal>
          <div className="eyebrow">Testimonials</div>
        </Reveal>

        <div className="mt-10 grid grid-cols-2 gap-6">
          {videoItems.map((item, i) => (
            <Reveal key={item.name} delay={i * 100}>
              <article className="flex h-full flex-col rounded-3xl border border-[color:var(--border)] bg-[color:var(--background)] p-5 md:p-6">
                <TestimonialVideo videoSrc={item.videoSrc} poster={item.poster} name={item.name} />
                <div className="mt-4">
                  <div className="font-serif text-lg text-[color:var(--navy)]">{item.name}</div>
                  <div className="text-xs text-[color:var(--muted-foreground)]">{item.church}</div>
                </div>
              </article>
            </Reveal>
          ))}
        </div>

        <div className="mt-10 space-y-10">
          {quoteItems.map((item, i) => (
            <Reveal key={item.name} delay={250 + i * 100}>
              <article className="rounded-3xl border border-[color:var(--border)] bg-white p-6 md:p-8">
                <div className="grid grid-cols-[220px_1fr] gap-7 items-start">
                  <div className="h-44 w-44 md:h-52 md:w-52 shrink-0 overflow-hidden rounded-2xl">
                    <img src={item.img} alt={item.name} width={640} height={640} loading="lazy" className="h-full w-full object-cover" />
                  </div>
                  <div className="flex min-h-full flex-col">
                    <p className="font-serif text-[1.35rem] md:text-[1.65rem] leading-[1.35] text-[color:var(--navy)]">
                      <span className="text-[color:var(--gold)] mr-1">&ldquo;</span>
                      {item.quote}
                      <span className="text-[color:var(--gold)] ml-1">&rdquo;</span>
                    </p>
                    <div className="mt-8 md:mt-10 text-right">
                      <div className="font-serif text-lg text-[color:var(--navy)]">{item.name}</div>
                      <div className="mt-1 text-xs text-[color:var(--muted-foreground)]">{item.church}</div>
                    </div>
                  </div>
                </div>
              </article>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}

/* ---------- 8. FAQ ---------- */
function FAQ() {
  const items = [
    { q: "What partnership tiers do you offer?", a: "We offer Essential Ministry, Growth Ministry, and Strategic Ministry Partner — each designed for different stages of content expansion. Contact us to find the right fit for your ministry." },
    { q: "Do you work with churches of every denomination?", a: "Yes. We collaborate with faith-based organizations, churches, ministries, and mission-focused initiatives across denominations and traditions." },
    { q: "What content can you help us repurpose?", a: "Sermons, Bible studies, podcasts, testimonies, children's ministry lessons, mission updates, and leadership training — all enhanced with visuals, animation, and storytelling." },
    { q: "How do you help ministries reach modern audiences?", a: "The Gospel remains timeless. But reaching modern audiences often requires meeting them where they already are — YouTube, podcasts, social media, streaming platforms, and mobile devices." },
  ];
  const [open, setOpen] = useState<number | null>(0);
  return (
    <section className="section-y bg-[color:var(--background)]">
      <div className="container-page grid grid-cols-[1fr_2fr] gap-16">
        <Reveal>
          <div>
            <div className="eyebrow">Questions</div>
            <h2 className="mt-5 font-serif text-4xl md:text-5xl leading-[1.05]">Frequently Asked</h2>
            <p className="mt-6 text-[color:var(--muted-foreground)] max-w-sm">
              Still curious? We&rsquo;d love to talk through your ministry&rsquo;s specific needs.
            </p>
          </div>
        </Reveal>
        <Reveal delay={120}>
          <ul className="divide-y divide-[color:var(--border)] border-y border-[color:var(--border)]">
            {items.map((it, i) => {
              const isOpen = open === i;
              return (
                <li key={it.q}>
                  <button
                    onClick={() => setOpen(isOpen ? null : i)}
                    className="w-full flex items-center justify-between gap-6 py-7 text-left"
                  >
                    <span className="font-serif text-xl md:text-2xl text-[color:var(--navy)]">
                      {it.q}
                    </span>
                    <span
                      className={`text-2xl text-[color:var(--gold)] transition-transform ${
                        isOpen ? "rotate-45" : ""
                      }`}
                    >
                      +
                    </span>
                  </button>
                  <div
                    className="grid transition-all duration-500 ease-out"
                    style={{ gridTemplateRows: isOpen ? "1fr" : "0fr" }}
                  >
                    <div className="overflow-hidden">
                      <p className="pb-7 pr-12 text-[color:var(--muted-foreground)] leading-relaxed">
                        {it.a}
                      </p>
                    </div>
                  </div>
                </li>
              );
            })}
          </ul>
        </Reveal>
      </div>
    </section>
  );
}

/* ---------- 9. CTA ---------- */
function CTA() {
  return (
    <section className="bg-[#2A1C14] text-[color:var(--cream)]">
      <div className="container-page section-y text-center">
        <Reveal>
          <div className="eyebrow text-[color:var(--gold)]">Begin Today</div>
        </Reveal>
        <Reveal delay={100}>
          <h2 className="mt-6 font-serif text-[clamp(2.25rem,6vw,5rem)] leading-[1.05] text-[color:var(--cream)] max-w-4xl mx-auto">
            Help faithful messages travel farther.
          </h2>
        </Reveal>
        <Reveal delay={220}>
          <p className="mt-8 max-w-xl mx-auto text-[color:var(--cream)]/70 leading-relaxed">
            Our goal is simple: to help faithful messages travel farther, engage deeper,
            and impact more lives.
          </p>
        </Reveal>
        <Reveal delay={320}>
          <div className="mt-12 flex flex-wrap justify-center gap-4">
            <Link to="/contact" className="btn-gold">Schedule a Conversation</Link>
            <Link to="/work" className="btn-ghost text-[color:var(--cream)] border-[color:var(--cream)]/30 hover:!text-[color:var(--cream)]">
              View Our Work
            </Link>
          </div>
        </Reveal>
      </div>
    </section>
  );
}
