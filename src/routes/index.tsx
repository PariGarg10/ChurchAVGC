import { createFileRoute } from "@tanstack/react-router";
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
import { lazy, Suspense, useState } from "react";

const ContactSection = lazy(() =>
  import("@/components/ContactSection").then((m) => ({ default: m.ContactSection }))
);

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
      <SermonFlow />
      <StewardshipSection />
      <Portfolio />
      <PartnershipServices />
      <Testimonials />
      <FAQ />
      <Suspense fallback={<div className="min-h-[40vh]" aria-hidden />}>
        <ContactSection />
      </Suspense>
      <SiteFooter />
    </div>
  );
}

/* ---------- HERO ---------- */
function Hero() {
  return (
    <section id="home" className="relative min-h-screen w-full overflow-hidden text-[color:var(--cream)]">
      <img
        src={heroImg}
        alt="Pastor preaching with a camera operator filming in warm light"
        width={1920}
        height={1280}
        fetchPriority="high"
        decoding="async"
        className="absolute inset-0 h-full w-full object-cover animate-kenburns"
      />
      <div className="absolute inset-0 bg-gradient-to-b from-black/70 via-black/45 to-black/85" />
      <div className="absolute inset-0 bg-[radial-gradient(80%_60%_at_50%_40%,transparent,rgba(0,0,0,0.55))]" />

      <div className="relative container-page flex min-h-screen flex-col justify-end pt-24 pb-16 sm:pt-28 sm:pb-20 md:pb-28">
        <div className="max-w-3xl">
          <h1 className="font-serif text-[clamp(2rem,6vw,5.25rem)] leading-[1.04] tracking-tight text-[color:var(--cream)]">
            Amplify the Message. <em className="not-italic text-[color:var(--gold)]">Multiply the Impact.</em>
          </h1>
          <p className="mt-5 md:mt-6 flex flex-wrap items-center gap-x-2 gap-y-1 text-[10px] sm:text-xs md:text-sm tracking-[0.12em] sm:tracking-[0.14em] uppercase text-[color:var(--cream)]/60">
            <span>Most ministries and churches already have valuable content</span>
            <span className="hidden sm:inline text-[color:var(--cream)]/35">·</span>
            <span className="font-serif normal-case italic tracking-normal text-[color:var(--cream)]/70 text-sm sm:text-base md:text-lg flex flex-wrap items-center gap-y-1">
              <span>Sermons</span>
              <span className="mx-3 text-[color:var(--cream)]/45">·</span>
              <span>Bible Studies</span>
              <span className="mx-3 text-[color:var(--cream)]/45">·</span>
              <span>Podcasts</span>
              <span className="mx-3 text-[color:var(--cream)]/45">·</span>
              <span>Testimonies</span>
              <span className="mx-3 text-[color:var(--cream)]/45">·</span>
              <span>Children&rsquo;s Ministry Lessons</span>
            </span>
          </p>
          <p className="mt-5 md:mt-6 max-w-2xl text-sm sm:text-base md:text-lg leading-relaxed text-[color:var(--cream)]/85">
            The challenge isn&rsquo;t creating more content &mdash; it&rsquo;s maximizing the impact
            of the content already being created. We help ministries transform valuable teachings
            into engaging visual experiences that reach people wherever they are.
          </p>
          <div className="mt-8 md:mt-10 flex flex-col sm:flex-row flex-wrap gap-3 sm:gap-4">
            <a href="#productions" className="btn-gold w-full sm:w-auto">View Our Work</a>
            <a href="#contact" className="btn-gold w-full sm:w-auto">Start a Conversation</a>
          </div>
        </div>
      </div>
    </section>
  );
}

/* ---------- STEWARDSHIP ---------- */
function StewardshipSection() {
  const weeks = [
    { phase: "Day 1", title: "Share Your Vision", num: "01" },
    { phase: "Day 2", title: "Receive Creative Strategy", num: "02" },
    { phase: "Day 3", title: "Production Begins", num: "03" },
    { phase: "Day 6", title: "Review & Feedback", num: "06" },
    { phase: "Day 7", title: "Publish Everywhere", num: "07" },
  ];

  const benefits = [
    { icon: "✦", t: "Extend Reach", d: "Help faithful messages travel farther and reach people wherever they are." },
    { icon: "❋", t: "Repurpose Content", d: "Maximize existing content within your current budget — rather than spending more." },
    { icon: "✺", t: "Engage Audiences", d: "Visual storytelling in formats today\u2019s audiences naturally engage with." },
    { icon: "✿", t: "Preserve Bandwidth", d: "We become an extension of your team." },
  ];

  return (
    <section id="stewardship" className="section-y relative overflow-hidden bg-[color:var(--background)]">
      <div className="container-page relative">
        <Reveal>
          <div className="max-w-2xl">
            <h2 className="font-serif text-3xl sm:text-4xl md:text-6xl leading-[1.05] text-[color:var(--navy)]">
              A <em className="not-italic text-[color:var(--gold)]">Stewardship</em> Mindset.
            </h2>
          </div>
        </Reveal>

        <Reveal delay={120}>
          <div className="mt-10 md:mt-14 relative overflow-x-auto scrollbar-none -mx-5 px-5 sm:mx-0 sm:px-0 sm:overflow-visible">
            <div className="hidden sm:block absolute left-0 right-0 top-5 h-px bg-[color:var(--gold)]/25" />
            <div className="hidden sm:block absolute left-0 top-5 h-[2px] w-full bg-gradient-to-r from-[color:var(--gold)] to-[oklch(0.78_0.12_75)]" />
            <div className="grid grid-cols-5 gap-3 sm:gap-2 min-w-[520px] sm:min-w-0">
              {weeks.map((s) => (
                <div key={s.title} className="flex flex-col items-center text-center">
                  <span className="relative z-10 grid h-9 w-9 sm:h-10 sm:w-10 place-items-center rounded-full border-2 border-[color:var(--gold)] bg-[color:var(--gold)] text-[#2A1C14] font-serif text-xs sm:text-sm">
                    {s.num}
                  </span>
                  <span className="mt-3 sm:mt-4 text-[10px] sm:text-[11px] md:text-xs tracking-[0.12em] sm:tracking-[0.14em] uppercase text-[color:var(--gold)] font-semibold">
                    {s.phase}
                  </span>
                  <span className="mt-1 block font-serif text-xs sm:text-sm leading-snug text-[color:var(--navy)]">
                    {s.title}
                  </span>
                </div>
              ))}
            </div>
          </div>
        </Reveal>

        <Reveal delay={200}>
          <div className="mt-16 text-center max-w-3xl mx-auto">
            <div className="eyebrow">Why Can You Do More With AVGC Studios</div>
          </div>
        </Reveal>

        <div className="mt-10 md:mt-12 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8 md:gap-8">
          {benefits.map((c, i) => (
            <Reveal key={c.t} delay={250 + i * 80}>
              <div className="text-center sm:text-left lg:text-center">
                <div className="font-serif text-3xl sm:text-4xl text-[color:var(--gold)]">{c.icon}</div>
                <h3 className="mt-4 md:mt-5 font-serif text-xl sm:text-2xl text-[color:var(--navy)]">{c.t}</h3>
                <p className="mt-2 md:mt-3 text-sm sm:text-base text-[color:var(--muted-foreground)] leading-relaxed">{c.d}</p>
              </div>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}

/* ---------- SERMON FLOW ---------- */
function SermonFlow() {
  const cards = [
    { step: "1", phase: "Origin", title: "One Sunday", chips: [{ label: "Sunday Sermon", icon: "✦" }] },
    { step: "2", phase: "Craft", title: "Shaped with care", chips: [{ label: "Professional Editing", icon: "✎" }] },
    { step: "3", phase: "Long-form", title: "Where people watch & listen", chips: [{ label: "YouTube", icon: "▶" }, { label: "Podcast", icon: "♪" }, { label: "Facebook", icon: "f" }] },
    { step: "4", phase: "Short-form", title: "Where people scroll", chips: [{ label: "Instagram", icon: "◐" }, { label: "Website", icon: "◉" }, { label: "TikTok", icon: "♫" }] },
    { step: "5", phase: "Discipleship", title: "Truth, made memorable", chips: [{ label: "Animated Bible Lessons", icon: "✺" }] },
    { step: "6", phase: "Impact", title: "Thousands more reached", chips: [{ label: "Lives Touched", icon: "✿" }] },
  ];

  return (
    <section id="process" className="section-y relative overflow-hidden bg-[#2A1C14] text-[color:var(--cream)]">
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
            <h2 className="font-serif text-[clamp(1.5rem,4.5vw,3.75rem)] leading-[1.05] text-[color:var(--cream)] whitespace-nowrap">
              One Sermon. <em className="not-italic text-[color:var(--gold)]">Many Touchpoints.</em>
            </h2>
            <p className="mt-6 text-[color:var(--cream)]/75 leading-relaxed whitespace-nowrap text-[clamp(0.72rem,1.6vw,1.125rem)]">
              A single message becomes a week of touchpoints &mdash; across platforms, formats, and audiences.
            </p>
          </div>
        </Reveal>

        <Reveal delay={120}>
          <div className="mt-10 md:mt-14 rounded-2xl sm:rounded-[2rem] border border-[color:var(--gold)]/25 bg-[#F3EBDD] p-4 sm:p-6 md:p-10 shadow-[0_24px_60px_-30px_rgba(42,28,20,0.18)]">
            <div className="flow-rail overflow-visible pb-2">
              <div className="flow-rail__track min-w-0">
                {cards.map((card) => (
                  <article key={card.step} className="flow-step group">
                    <div className="flow-step__badge">{card.step}</div>
                    <div className="flow-step__card flow-step__card--equal">
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
          <div className="mt-8 md:mt-12 grid grid-cols-2 md:grid-cols-4 gap-px overflow-hidden rounded-xl sm:rounded-2xl border border-[color:var(--cream)]/10 bg-[color:var(--cream)]/10">
            {[
              { k: "1", v: "Enhanced video" },
              { k: "10", v: "Social posts" },
              { k: "20", v: "Shorts" },
              { k: "∞", v: "Audience reach" },
            ].map((s) => (
              <div key={s.v} className="bg-[#2A1C14] px-3 py-5 sm:px-6 sm:py-7 text-center">
                <div className="font-serif text-2xl sm:text-3xl text-[color:var(--gold)] md:text-4xl">{s.k}</div>
                <div className="mt-1 text-[10px] sm:text-xs uppercase tracking-wider text-[color:var(--cream)]/60">{s.v}</div>
              </div>
            ))}
          </div>
        </Reveal>
      </div>
    </section>
  );
}

/* ---------- PORTFOLIO ---------- */
function Portfolio() {
  return (
    <section id="productions" className="section-y pt-8 md:pt-12 relative overflow-hidden bg-[color:var(--background)]">
      <div className="container-page relative z-[2]">
        <Reveal>
          <div className="text-center">
            <h2 className="font-serif text-3xl sm:text-4xl md:text-6xl leading-[1.05]">
              Our Work <span className="text-[color:var(--gold)]">Samples.</span>
            </h2>
          </div>
        </Reveal>
      </div>
      <div className="relative mt-4 md:mt-8">
        <div className="container-page relative z-[2]">
          <div className="pointer-events-none" aria-hidden>
            <div className="film-reel-vintage !relative !left-1/2 !right-auto !w-screen !max-w-none !-translate-x-1/2 !top-0 !opacity-50">
              <div className="film-reel-vintage__strip" style={{ backgroundImage: `url(${reelPanel1})` }} />
            </div>
          </div>
          <div className="mx-auto my-5 md:my-7 grid max-w-6xl grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8 items-start">
            {productionVideos.map((item, i) => (
              <Reveal key={item.title + i} delay={i * 100}>
                <ProductionVideo item={item} showMeta={false} />
              </Reveal>
            ))}
          </div>
          <div className="pointer-events-none" aria-hidden>
            <div className="film-reel-vintage !relative !left-1/2 !right-auto !w-screen !max-w-none !-translate-x-1/2 !bottom-0 !opacity-45">
              <div
                className="film-reel-vintage__strip film-reel-vintage__strip--reverse"
                style={{ backgroundImage: `url(${reelPanel2})` }}
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

/* ---------- PARTNERSHIP SERVICES ---------- */
function PartnershipServices() {
  const tiers = [
    {
      eyebrow: "Partnership 01",
      title: "Essential Ministry",
      sub: "For churches publishing weekly sermons and ministries getting started with content expansion.",
      benefits: ["Sermon Enhancement", "Scripture Callouts", "Visual Graphics", "Monthly Content Support"],
    },
    {
      eyebrow: "Partnership 02",
      title: "Growth Ministry",
      sub: "For churches and ministries seeking stronger engagement across YouTube and social media.",
      benefits: [
        "Everything in Essential",
        "YouTube Shorts",
        "Social Media Content",
        "Enhanced Storytelling",
        "Content Repurposing",
      ],
    },
    {
      eyebrow: "Partnership 03",
      title: "Strategic Ministry Partner",
      sub: "For organizations producing content at scale and seeking an ongoing media partner.",
      benefits: [
        "Dedicated Production Team",
        "Custom Animation",
        "Bible Visualizations",
        "Content Strategy",
        "Ongoing Creative Partnership",
      ],
    },
  ];

  return (
    <section id="services" className="section-y relative overflow-hidden bg-[#2A1C14] text-[color:var(--cream)]">
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
            <h2 className="font-serif text-3xl sm:text-4xl md:text-6xl leading-[1.05] text-[color:var(--cream)]">
              Ways We Can Partner.
            </h2>
            <p className="mt-5 md:mt-6 text-sm sm:text-base text-[color:var(--cream)]/75 leading-relaxed max-w-2xl">
              Every message represents prayer, preparation, and purpose. Our role is simply to help
              that message be seen, understood, and shared by more people through meaningful visual
              storytelling.
            </p>
          </div>
        </Reveal>

        <div className="mt-10 md:mt-16 grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 items-stretch gap-6 md:gap-8">
          {tiers.map((tier, i) => (
            <Reveal key={tier.title} delay={i * 100}>
              <article className="group relative flex h-full flex-col overflow-hidden rounded-2xl sm:rounded-3xl border border-[color:var(--gold)]/25 bg-[color:var(--background)] p-6 sm:p-8 md:p-10 transition-[border-color] duration-500 hover:border-[color:var(--gold)]">
                <div
                  className="absolute inset-0 bg-[rgba(198,161,91,0.92)] translate-y-full transition-transform duration-500 ease-[cubic-bezier(0.2,0.7,0.2,1)] group-hover:translate-y-0"
                  aria-hidden
                />
                <div className="relative z-10 flex flex-1 flex-col">
                  <div className="eyebrow transition-colors duration-300 group-hover:text-[#2A1C14]">
                    {tier.eyebrow}
                  </div>
                  <h3 className="mt-4 font-serif text-2xl sm:text-3xl text-[color:var(--navy)] transition-colors duration-300 group-hover:text-[#2A1C14]">
                    {tier.title}
                  </h3>
                  <p className="mt-4 font-serif italic text-base sm:text-lg text-[color:var(--muted-foreground)] leading-relaxed transition-colors duration-300 group-hover:text-[#2A1C14]/80">
                    {tier.sub}
                  </p>
                  <div className="mt-8">
                    <div className="eyebrow text-[color:var(--navy)]/60 transition-colors duration-300 group-hover:text-[#2A1C14]/70">
                      What&rsquo;s Included
                    </div>
                    <ul className="mt-4 space-y-3">
                      {tier.benefits.map((b) => (
                        <li
                          key={b}
                          className="flex items-start gap-3 text-[color:var(--muted-foreground)] transition-colors duration-300 group-hover:text-[#2A1C14]/85"
                        >
                          <span className="mt-2 h-1.5 w-1.5 shrink-0 rounded-full bg-[color:var(--gold)] group-hover:bg-[#2A1C14]" />
                          <span>{b}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>
                <div className="relative z-10 mt-auto min-h-[2.5rem] pt-8">
                  <a
                    href="#contact"
                    className="inline-flex items-center whitespace-nowrap text-base sm:text-lg font-semibold leading-none text-[color:var(--gold)] opacity-100 transition-all duration-300 lg:opacity-0 lg:group-hover:opacity-100 lg:group-hover:text-[#2A1C14]"
                  >
                    Let&rsquo;s start <span className="ml-2">→</span>
                  </a>
                </div>
              </article>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}

/* ---------- TESTIMONIALS ---------- */
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
        "We have worked with AVGC Studios for a year now on video editing, illustrations, and ILO development projects. They consistently deliver high-quality, polished, creative output while working with tight timelines and large volumes. Their quality control is solid, their communication is smooth, and they address review notes quickly. They’re a reliable and valued partner!",
      name: "Sohini Ghoshal",
      church: "Project Manager, Creator UP",
      img: testimonialSohini,
    },
    {
      quote:
        "Although Shackleton Kids is a children’s publisher, a few years ago we decided to create our own YouTube channel where we upload animated versions of our stories. Two years ago, we met AVGC Studios, and since then they have become our partner for the development of our audiovisual content, with whom we continue to work year after year. I could highlight the quality of their work, their flexibility in adapting to our needs, or their punctuality in deliveries, but for me the most important thing is the feeling of transparency and honesty. That’s why we’ve just renewed our contract with them for another year.",
      name: "Eduardo Acin",
      church: "Partner & Publishing Director, Shackleton Kids",
      img: testimonialEduardo,
    },
  ];

  return (
    <section id="testimonials" className="section-y bg-white">
      <div className="container-page">
        <Reveal>
          <h2 className="font-serif text-3xl sm:text-4xl md:text-5xl text-[color:var(--navy)]">Meet Our <span className="text-[color:var(--gold)]">Clients.</span></h2>
        </Reveal>

        <div className="mt-8 md:mt-10 grid grid-cols-1 md:grid-cols-2 gap-6">
          {videoItems.map((item, i) => (
            <Reveal key={item.name} delay={i * 100}>
              <article className="flex h-full flex-col rounded-2xl sm:rounded-3xl border border-[color:var(--border)] bg-[color:var(--background)] p-4 sm:p-5 md:p-6">
                <TestimonialVideo videoSrc={item.videoSrc} poster={item.poster} name={item.name} />
                <div className="mt-4">
                  <div className="font-serif text-lg text-[color:var(--navy)]">{item.name}</div>
                  <div className="text-xs text-[color:var(--muted-foreground)]">{item.church}</div>
                </div>
              </article>
            </Reveal>
          ))}
        </div>

        <div className="mt-8 md:mt-10 space-y-6 md:space-y-10">
          {quoteItems.map((item, i) => (
            <Reveal key={item.name} delay={250 + i * 100}>
              <article className="rounded-2xl sm:rounded-3xl border border-[color:var(--border)] bg-white p-5 sm:p-6 md:p-8">
                <div className="flex flex-col md:grid md:grid-cols-[minmax(0,220px)_1fr] gap-5 md:gap-7 items-start">
                  <div className="mx-auto md:mx-0 h-36 w-36 sm:h-44 sm:w-44 md:h-52 md:w-52 shrink-0 overflow-hidden rounded-2xl">
                    <img src={item.img} alt={item.name} width={640} height={640} loading="lazy" className="h-full w-full object-cover" />
                  </div>
                  <div className="flex min-h-full flex-col">
                    <p className="font-serif text-lg sm:text-[1.35rem] md:text-[1.65rem] leading-[1.35] text-[color:var(--navy)]">
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

/* ---------- FAQ ---------- */
function FAQ() {
  const items = [
    { q: "What partnership tiers do you offer?", a: "We offer Essential Ministry, Growth Ministry, and Strategic Ministry Partnership — each designed for different stages of content expansion." },
    { q: "Do you work with churches of every denomination?", a: "Yes. We collaborate with faith-based organizations, churches, ministries, and mission-focused initiatives across denominations and traditions." },
    { q: "What content can you help us repurpose?", a: "Sermons, Bible studies, podcasts, testimonies, children's ministry lessons, mission updates, and leadership training — all enhanced with visuals, animation, and storytelling." },
    { q: "How do you help ministries reach modern audiences?", a: "The Gospel remains timeless. But reaching modern audiences often requires meeting them where they already are — YouTube, podcasts, social media, streaming platforms, and mobile devices." },
  ];
  const [open, setOpen] = useState<number | null>(0);
  return (
    <section id="faq" className="section-y bg-[color:var(--background)]">
      <div className="container-page grid grid-cols-1 lg:grid-cols-[1fr_2fr] gap-8 lg:gap-16">
        <Reveal>
          <div>
            <h2 className="font-serif text-3xl sm:text-4xl md:text-5xl leading-[1.05]">FAQs</h2>
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
                    className="w-full flex items-center justify-between gap-4 sm:gap-6 py-5 sm:py-7 text-left"
                  >
                    <span className="font-serif text-lg sm:text-xl md:text-2xl text-[color:var(--navy)]">
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
                      <p className="pb-5 sm:pb-7 pr-4 sm:pr-12 text-sm sm:text-base text-[color:var(--muted-foreground)] leading-relaxed">
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
