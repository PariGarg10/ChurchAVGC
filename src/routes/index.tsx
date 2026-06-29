import { createFileRoute, Link } from "@tanstack/react-router";
import heroImg from "@/assets/hero-worship.jpg";
import workSermon from "@/assets/work-sermon.jpg";
import workAnimation from "@/assets/work-animation.jpg";
import workPodcast from "@/assets/work-podcast.jpg";
import workSocial from "@/assets/work-social.jpg";
import testimonialSohini from "@/assets/testimonial-sohini-ghoshal.png";
import testimonialEduardo from "@/assets/testimonial-eduardo-acin.png";
import testimonialDavid from "@/assets/testimonial-david-salas.png";
import testimonialMosongo from "@/assets/testimonial-mosongo-osong.png";
import { SiteHeader } from "@/components/SiteHeader";
import { SiteFooter } from "@/components/SiteFooter";
import { Reveal } from "@/components/Reveal";
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
            <Link to="/contact" className="btn-ghost text-[color:var(--cream)] border-[color:var(--cream)]/40 hover:!text-[color:var(--cream)]">
              Schedule a Conversation
            </Link>
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

        <div className="mt-16 grid gap-px bg-[color:var(--border)] md:grid-cols-2 rounded-2xl overflow-hidden border border-[color:var(--border)]">
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

/* ---------- 3. SERMON FLOW — interactive ---------- */
type FlowNode = {
  id: string;
  label: string;
  x: number;
  y: number;
  level: 0 | 1 | 2 | 3 | 4 | 5;
  icon?: string;
  meta?: string;
};

function SermonFlow() {
  const nodes: FlowNode[] = [
    { id: "sermon", label: "1 Sermon", x: 50, y: 7, level: 0, icon: "✦", meta: "Source" },
    { id: "edit", label: "1 Enhanced Video", x: 50, y: 24, level: 1, icon: "✎", meta: "Craft" },
    { id: "yt", label: "10 Social Posts", x: 16, y: 44, level: 2, icon: "▶", meta: "Social" },
    { id: "pod", label: "Podcast Content", x: 50, y: 44, level: 2, icon: "♪", meta: "Audio" },
    { id: "fb", label: "20 Shorts", x: 84, y: 44, level: 2, icon: "f", meta: "Short-form" },
    { id: "ig", label: "Social Media", x: 16, y: 64, level: 3, icon: "◐", meta: "Reels" },
    { id: "web", label: "Unlimited Audience", x: 50, y: 64, level: 3, icon: "◉", meta: "Reach" },
    { id: "email", label: "Content Repurposing", x: 84, y: 64, level: 3, icon: "✉", meta: "Multiply" },
    { id: "anim", label: "Enhanced Storytelling", x: 50, y: 82, level: 4, icon: "✺", meta: "Visual" },
    { id: "lives", label: "Thousands More Opportunities To Engage", x: 50, y: 95, level: 5, icon: "✿", meta: "Impact" },
  ];
  const links: [string, string][] = [
    ["sermon", "edit"],
    ["edit", "yt"],
    ["edit", "pod"],
    ["edit", "fb"],
    ["yt", "ig"],
    ["pod", "web"],
    ["fb", "email"],
    ["ig", "anim"],
    ["web", "anim"],
    ["email", "anim"],
    ["anim", "lives"],
  ];
  const byId = Object.fromEntries(nodes.map((n) => [n.id, n]));

  const anchorOffset = (level: FlowNode["level"]) =>
    ({ 0: 2.6, 1: 2.8, 2: 2.5, 3: 2.5, 4: 2.7, 5: 3.2 })[level];

  const anchor = (node: FlowNode, side: "top" | "bottom") => {
    const offset = anchorOffset(node.level);
    return { x: node.x, y: side === "top" ? node.y - offset : node.y + offset };
  };

  const isSpineLink = (a: FlowNode, b: FlowNode) => Math.abs(a.x - b.x) < 0.5;

  const spineLinks = links.filter(([a, b]) => isSpineLink(byId[a], byId[b]));
  const branchLinks = links.filter(([a, b]) => !isSpineLink(byId[a], byId[b]));

  const path = (a: FlowNode, b: FlowNode) => {
    const start = anchor(a, "bottom");
    const end = anchor(b, "top");
    const dy = end.y - start.y;
    const c1y = start.y + dy * 0.55;
    const c2y = end.y - dy * 0.55;
    return `M ${start.x} ${start.y} C ${start.x} ${c1y}, ${end.x} ${c2y}, ${end.x} ${end.y}`;
  };

  const renderBranchLinks = () =>
    branchLinks.map(([a, b], i) => {
      const A = byId[a];
      const B = byId[b];
      const d = path(A, B);
      return (
        <g key={`branch-${a}-${b}`}>
          <path
            d={d}
            fill="none"
            stroke="#C6A15B"
            strokeWidth={2}
            strokeLinecap="round"
            opacity={0.35}
            vectorEffect="non-scaling-stroke"
          />
          <path
            d={d}
            fill="none"
            stroke="#C6A15B"
            strokeWidth={2}
            strokeLinecap="round"
            filter="url(#flowGlow)"
            opacity={0.95}
            vectorEffect="non-scaling-stroke"
            pathLength={1}
            strokeDasharray="1 1"
            strokeDashoffset="1"
            style={{
              animation: `flowDraw 1.6s ${0.3 + i * 0.12}s cubic-bezier(.4,.0,.2,1) forwards`,
            }}
          />
          <circle r="1.5" fill="#C6A15B" opacity="0" vectorEffect="non-scaling-size">
            <animateMotion dur="3.2s" begin={`${1.2 + i * 0.25}s`} repeatCount="indefinite" path={d} />
            <animate attributeName="opacity" values="0;1;1;0" dur="3.2s" begin={`${1.2 + i * 0.25}s`} repeatCount="indefinite" />
          </circle>
        </g>
      );
    });

  const renderSpineLinks = () =>
    spineLinks.map(([a, b], i) => {
      const A = byId[a];
      const B = byId[b];
      const start = anchor(A, "bottom");
      const end = anchor(B, "top");
      const height = end.y - start.y;
      if (height <= 0) return null;
      const midY = start.y + height / 2;

      return (
        <div key={`spine-${a}-${b}`} className="pointer-events-none">
          <div
            className="absolute z-[4] -translate-x-1/2 rounded-full bg-[#C6A15B]/30"
            style={{ left: `${start.x}%`, top: `${start.y}%`, width: 2, height: `${height}%` }}
          />
          <div
            className="absolute z-[4] origin-top rounded-full bg-[#C6A15B] shadow-[0_0_12px_rgba(198,161,91,0.85)] animate-[flowSpineGrow_1.2s_ease-out_forwards]"
            style={{
              left: `calc(${start.x}% - 1px)`,
              top: `${start.y}%`,
              width: 2,
              height: `${height}%`,
              animationDelay: `${0.2 + i * 0.1}s`,
            }}
          />
          <div
            className="absolute z-[4] h-1 w-1 -translate-x-1/2 -translate-y-1/2 rounded-full bg-[#C6A15B] shadow-[0_0_6px_rgba(198,161,91,0.8)]"
            style={{ left: `${start.x}%`, top: `${midY}%` }}
          />
        </div>
      );
    });

  return (
    <section className="section-y relative overflow-hidden bg-[color:var(--navy)] text-[color:var(--cream)]">
      {/* atmospheric backdrop */}
      <div className="pointer-events-none absolute inset-0 opacity-[0.12]"
           style={{ backgroundImage: "radial-gradient(circle at 1px 1px, var(--cream) 1px, transparent 0)", backgroundSize: "28px 28px" }} />
      <div className="pointer-events-none absolute -top-32 left-1/2 -translate-x-1/2 h-[520px] w-[820px] rounded-full blur-3xl opacity-30"
           style={{ background: "radial-gradient(closest-side, var(--gold), transparent)" }} />

      <div className="container-page relative">
        <Reveal>
          <div className="max-w-3xl">
            <div className="eyebrow text-[color:var(--gold)]">One Message</div>
            <h2 className="mt-5 font-serif text-4xl md:text-6xl leading-[1.05] text-[color:var(--cream)]">
              One Sermon. <em className="not-italic text-[color:var(--gold)]">Many Touchpoints.</em>
            </h2>
            <p className="mt-6 text-[color:var(--cream)]/70 max-w-2xl leading-relaxed">
              A single message becomes a week of touchpoints &mdash; across platforms, formats,
              and audiences. Watch how one moment of teaching travels.
            </p>
          </div>
        </Reveal>

        <Reveal delay={150}>
          <div className="mt-16 relative mx-auto aspect-[4/5] md:aspect-[16/11] max-w-5xl rounded-[2rem] overflow-hidden border border-[color:var(--cream)]/10 bg-gradient-to-b from-white/[0.04] to-white/[0.01] backdrop-blur-sm shadow-[0_30px_80px_-20px_rgba(0,0,0,0.6)]">
            {/* Corner labels */}
            <div className="absolute top-5 left-6 text-[10px] tracking-[0.2em] uppercase text-[color:var(--cream)]/45">Origin</div>
            <div className="absolute bottom-5 right-6 text-[10px] tracking-[0.2em] uppercase text-[color:var(--gold)]">Impact</div>

            <svg viewBox="0 0 100 100" className="absolute inset-0 z-[1] h-full w-full pointer-events-none" preserveAspectRatio="none">
              <defs>
                <filter id="flowGlow" x="-50%" y="-50%" width="200%" height="200%">
                  <feGaussianBlur stdDeviation="1.2" result="b" />
                  <feMerge>
                    <feMergeNode in="b" />
                    <feMergeNode in="SourceGraphic" />
                  </feMerge>
                </filter>
              </defs>
              {renderBranchLinks()}
            </svg>

            {nodes.map((n, i) => {
              const isSource = n.level === 0;
              const isImpact = n.level === 5;
              const isHub = n.level === 1 || n.level === 4;
              return (
                <div
                  key={n.id}
                  className="absolute z-[2] -translate-x-1/2 -translate-y-1/2 group"
                  style={{ left: `${n.x}%`, top: `${n.y}%`, animation: `float-up 0.7s ${0.1 + i * 0.1}s ease-out both` }}
                >
                  {/* halo */}
                  {(isSource || isImpact) && (
                    <span className={`absolute inset-0 -z-10 rounded-full blur-xl opacity-60 ${isSource ? "bg-[color:var(--cream)]/30" : "bg-[color:var(--gold)]/60"}`} />
                  )}
                  <div
                    className={`flex items-center gap-2 rounded-full pl-1.5 pr-3 md:pl-2 md:pr-4 py-1 md:py-1.5 text-[10px] md:text-xs font-medium border backdrop-blur-md transition-all duration-300 hover:scale-[1.06] hover:-translate-y-0.5 cursor-default whitespace-nowrap ${
                      isSource
                        ? "bg-[color:var(--cream)] text-[color:var(--navy)] border-[color:var(--cream)] shadow-[0_8px_24px_-4px_rgba(0,0,0,0.5)]"
                        : isImpact
                        ? "bg-gradient-to-r from-[color:var(--gold)] to-[oklch(0.78_0.12_75)] text-[color:var(--navy)] border-[color:var(--gold)] shadow-[0_10px_30px_-6px_rgba(198,161,91,0.6)]"
                        : isHub
                        ? "bg-[color:var(--navy)] text-[color:var(--cream)] border-[color:var(--gold)]/60 shadow-[0_6px_20px_-4px_rgba(0,0,0,0.45)]"
                        : "bg-white/8 text-[color:var(--cream)] border-[color:var(--cream)]/20 hover:border-[color:var(--gold)] hover:bg-white/12"
                    }`}
                  >
                    <span className={`grid place-items-center h-5 w-5 md:h-6 md:w-6 rounded-full text-[10px] md:text-xs ${
                      isSource
                        ? "bg-[color:var(--navy)] text-[color:var(--gold)]"
                        : isImpact
                        ? "bg-[color:var(--navy)] text-[color:var(--gold)]"
                        : isHub
                        ? "bg-[color:var(--gold)] text-[color:var(--navy)]"
                        : "bg-[color:var(--gold)]/15 text-[color:var(--gold)]"
                    }`}>{n.icon}</span>
                    <span>{n.label}</span>
                  </div>
                </div>
              );
            })}

            {renderSpineLinks()}
          </div>
        </Reveal>

        {/* Stat strip */}
        <Reveal delay={250}>
          <div className="mt-12 grid grid-cols-2 md:grid-cols-4 gap-px rounded-2xl overflow-hidden border border-[color:var(--cream)]/10 bg-[color:var(--cream)]/10">
            {[
              { k: "1", v: "Enhanced video" },
              { k: "10", v: "Social posts" },
              { k: "20", v: "Shorts" },
              { k: "∞", v: "Audience reach" },
            ].map((s) => (
              <div key={s.v} className="bg-[color:var(--navy)] px-6 py-7 text-center">
                <div className="font-serif text-3xl md:text-4xl text-[color:var(--gold)]">{s.k}</div>
                <div className="mt-1 text-xs tracking-wider uppercase text-[color:var(--cream)]/60">{s.v}</div>
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
  const items = [
    { img: workSermon, title: "Sermon Enhancement — Faith Community", tag: "Sermon Enhancement" },
    { img: workAnimation, title: "Faith Based Animation Series", tag: "Faith Based Animation" },
    { img: workPodcast, title: "Ministry Podcast Production", tag: "Podcast Content" },
    { img: workSocial, title: "YouTube Shorts & Social Campaign", tag: "Social Media Content" },
  ];
  return (
    <section className="section-y bg-[color:var(--background)]">
      <div className="container-page">
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

        <div className="mt-16 grid gap-8 md:grid-cols-2">
          {items.map((it, i) => (
            <Reveal key={it.title} delay={i * 100}>
              <a href="#" className="group block relative overflow-hidden rounded-2xl bg-black">
                <div className="aspect-[16/10] overflow-hidden">
                  <img
                    src={it.img}
                    alt={it.title}
                    loading="lazy"
                    className="h-full w-full object-cover transition-transform duration-[1200ms] group-hover:scale-105"
                  />
                </div>
                <div className="absolute inset-0 bg-gradient-to-t from-black/85 via-black/20 to-transparent" />
                <div className="absolute inset-0 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-500">
                  <div className="h-20 w-20 rounded-full bg-[color:var(--gold)] grid place-items-center shadow-2xl scale-90 group-hover:scale-100 transition-transform duration-500">
                    <svg viewBox="0 0 24 24" className="h-8 w-8 fill-[color:oklch(0.15_0_0)] ml-1">
                      <path d="M8 5v14l11-7L8 5z" />
                    </svg>
                  </div>
                </div>
                <div className="absolute bottom-0 left-0 right-0 p-8 text-[color:var(--cream)]">
                  <div className="text-xs tracking-[0.2em] uppercase text-[color:var(--gold)]">{it.tag}</div>
                  <div className="mt-2 font-serif text-2xl md:text-3xl">{it.title}</div>
                </div>
              </a>
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
    <section className="section-y bg-white">
      <div className="container-page">
        <Reveal>
          <div className="flex flex-wrap items-end justify-between gap-6">
            <div className="max-w-2xl">
              <div className="eyebrow">How We Work</div>
              <h2 className="mt-5 font-serif text-4xl md:text-6xl leading-[1.05]">
                A stewardship <em className="not-italic text-[color:var(--gold)]">mindset.</em>
              </h2>
            </div>
            <div className="text-xs tracking-[0.2em] uppercase text-[color:var(--muted-foreground)]">
              Step <span className="text-[color:var(--navy)] font-semibold">{String(active + 1).padStart(2, "0")}</span>
              <span className="mx-2 text-[color:var(--border)]">/</span>
              <span>{String(steps.length).padStart(2, "0")}</span>
            </div>
          </div>
        </Reveal>

        {/* Horizontal stepper rail */}
        <Reveal delay={120}>
          <div className="mt-14 relative">
            {/* base rail */}
            <div className="absolute left-0 right-0 top-5 h-px bg-[color:var(--border)]" />
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
                          : "bg-white border-[color:var(--border)] group-hover:border-[color:var(--gold)]"
                      }`}
                    >
                      <span
                        className={`font-serif text-sm ${
                          isActive
                            ? "text-[color:var(--gold)]"
                            : isDone
                            ? "text-[color:var(--navy)]"
                            : "text-[color:var(--muted-foreground)] group-hover:text-[color:var(--navy)]"
                        }`}
                      >
                        {String(i + 1).padStart(2, "0")}
                      </span>
                    </span>
                    <span
                      className={`mt-4 text-[11px] md:text-xs tracking-[0.14em] uppercase transition-colors ${
                        isActive ? "text-[color:var(--navy)] font-semibold" : "text-[color:var(--muted-foreground)]"
                      }`}
                    >
                      {s.phase}
                    </span>
                    <span
                      className={`mt-1 hidden md:block font-serif text-sm leading-snug transition-colors ${
                        isActive ? "text-[color:var(--navy)]" : "text-[color:var(--muted-foreground)] group-hover:text-[color:var(--navy)]"
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
          <div className="mt-16 grid gap-10 md:grid-cols-[1.1fr_1fr] items-stretch">
            {/* Story card */}
            <div
              key={`story-${active}`}
              className="relative rounded-3xl bg-[color:var(--navy)] text-[color:var(--cream)] p-10 md:p-14 overflow-hidden shadow-[0_30px_80px_-30px_rgba(31,53,86,0.5)] animate-[float-up_0.5s_ease-out]"
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
                <h3 className="mt-10 font-serif text-3xl md:text-5xl leading-[1.08]">{cur.t}</h3>
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

        <div className="mt-16 grid gap-10 md:grid-cols-4 md:gap-8">
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
  const items = [
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
    {
      name: "David Salas",
      church: "Director, Revelation Media",
      img: testimonialDavid,
      poster: testimonialDavid,
      videoUrl: "https://drive.google.com/file/d/1f6wzYMRVZlt4SMg2lmsuSgqY1k2nWfbR/view",
    },
    {
      name: "Mosongo Osong",
      church: "Founder, Catholic Brain",
      img: testimonialMosongo,
      poster: testimonialMosongo,
      videoUrl: "https://drive.google.com/file/d/1xUjr0zmOTqlrBjdB5bwZHKlWs3g2MS6v/view",
    },
  ];
  const [idx, setIdx] = useState(0);
  const cur = items[idx];
  return (
    <section className="section-y bg-white">
      <div className="container-page">
        <Reveal>
          <div className="eyebrow">Testimonials</div>
        </Reveal>
        <Reveal delay={100}>
          <div className="mt-8 grid gap-12 md:grid-cols-[1fr_2fr] items-center">
            <div className="flex md:flex-col items-center md:items-start gap-4">
              <div className="h-44 w-44 md:h-72 md:w-72 shrink-0 overflow-hidden rounded-2xl bg-[color:var(--background)]">
                <img
                  src={cur.img}
                  alt={cur.name}
                  width={640}
                  height={640}
                  loading="lazy"
                  className="h-full w-full object-cover"
                />
              </div>
              <div className="md:mt-6">
                <div className="font-serif text-xl text-[color:var(--navy)]">{cur.name}</div>
                <div className="text-sm text-[color:var(--muted-foreground)]">{cur.church}</div>
              </div>
            </div>
            <div>
              {cur.videoUrl ? (
                <div>
                  <p className="font-serif text-3xl md:text-4xl leading-[1.15] text-[color:var(--navy)]">
                    Hear from {cur.name.split(" ")[0]} about partnering with AVGC Studios.
                  </p>
                  <TestimonialVideo
                    key={cur.videoUrl}
                    videoUrl={cur.videoUrl}
                    poster={"poster" in cur ? cur.poster : cur.img}
                    name={cur.name}
                  />
                </div>
              ) : (
                <div className="font-serif text-4xl md:text-5xl leading-[1.15] text-[color:var(--navy)]">
                  <span className="text-[color:var(--gold)] mr-1">&ldquo;</span>
                  {cur.quote}
                  <span className="text-[color:var(--gold)] ml-1">&rdquo;</span>
                </div>
              )}
              <div className="mt-10 flex gap-3">
                {items.map((_, i) => (
                  <button
                    key={i}
                    onClick={() => setIdx(i)}
                    aria-label={`Testimonial ${i + 1}`}
                    className={`h-1.5 rounded-full transition-all ${
                      i === idx ? "bg-[color:var(--navy)] w-10" : "bg-[color:var(--border)] w-6"
                    }`}
                  />
                ))}
              </div>
            </div>
          </div>
        </Reveal>
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
      <div className="container-page grid gap-16 md:grid-cols-[1fr_2fr]">
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
    <section className="bg-[color:var(--navy)] text-[color:var(--cream)]">
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
