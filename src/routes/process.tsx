import { createFileRoute, Link } from "@tanstack/react-router";
import { SiteHeader } from "@/components/SiteHeader";
import { SiteFooter } from "@/components/SiteFooter";
import { Reveal } from "@/components/Reveal";

export const Route = createFileRoute("/process")({
  head: () => ({
    meta: [
      { title: "Process — AVGC Studios" },
      { name: "description", content: "How AVGC Studios partners with ministries to maximize the impact of their content." },
      { property: "og:title", content: "Our Process — AVGC Studios" },
      { property: "og:description", content: "A stewardship mindset for ministry media." },
    ],
  }),
  component: ProcessPage,
});

const steps = [
  { t: "Understand the Challenge", d: "The challenge isn't creating more content — it's maximizing the impact of the content already being created. We start by auditing what you already have." },
  { t: "A Stewardship Mindset", d: "Every message represents hours of prayer, preparation, and ministry experience. We help you maximize the impact of every message you faithfully create." },
  { t: "Content Repurposing", d: "One sermon becomes an enhanced video, social posts, shorts, podcast content, and more — reaching an unlimited audience across modern platforms." },
  { t: "Review & Refine", d: "Collaborative review on a single link. We iterate quickly so your team can stay focused on ministry." },
  { t: "Extend Your Reach", d: "We deliver and distribute across YouTube, podcasts, social media, streaming platforms, and mobile — meeting audiences where they already are." },
];

function ProcessPage() {
  return (
    <div>
      <SiteHeader />
      <section className="pt-40 pb-16 bg-[color:var(--background)]">
        <div className="container-page max-w-4xl">
          <Reveal>
            <div className="eyebrow">Our Process</div>
            <h1 className="mt-6 font-serif text-5xl md:text-7xl leading-[1.04]">
              A stewardship <span className="text-[color:var(--gold)]">mindset.</span>
            </h1>
            <p className="mt-8 text-lg text-[color:var(--muted-foreground)] max-w-2xl leading-relaxed">
              The Gospel remains timeless. But reaching modern audiences often requires meeting
              them where they already are — through visual storytelling in formats today&rsquo;s
              audiences naturally engage with.
            </p>
          </Reveal>
        </div>
      </section>

      <section className="section-y bg-white">
        <div className="container-page max-w-4xl">
          <ol className="space-y-2">
            {steps.map((s, i) => (
              <Reveal key={s.t} delay={i * 120} as="li">
                <div className="grid md:grid-cols-[140px_1fr] gap-6 md:gap-12 py-10 border-b border-[color:var(--border)] last:border-0">
                  <div className="font-serif text-6xl text-[color:var(--gold)]/40">
                    {String(i + 1).padStart(2, "0")}
                  </div>
                  <div>
                    <h2 className="font-serif text-3xl md:text-4xl text-[color:var(--navy)]">{s.t}</h2>
                    <p className="mt-4 text-[color:var(--muted-foreground)] leading-relaxed max-w-2xl">
                      {s.d}
                    </p>
                  </div>
                </div>
              </Reveal>
            ))}
          </ol>
          <div className="mt-16 text-center">
            <Link to="/contact" className="btn-primary">Start your conversation</Link>
          </div>
        </div>
      </section>

      <SiteFooter />
    </div>
  );
}
