import { createFileRoute } from "@tanstack/react-router";
import { SiteHeader } from "@/components/SiteHeader";
import { SiteFooter } from "@/components/SiteFooter";
import { Reveal } from "@/components/Reveal";

export const Route = createFileRoute("/resources")({
  head: () => ({
    meta: [
      { title: "Resources — AVGC Studios" },
      { name: "description", content: "Guides and insights to help ministries maximize the impact of their content." },
      { property: "og:title", content: "Resources — AVGC Studios" },
      { property: "og:description", content: "Resources for ministry content creators." },
    ],
  }),
  component: ResourcesPage,
});

const resources = [
  { tag: "Guide", title: "The Reality of Modern Audiences", desc: "Why reaching today's audiences requires meeting them on YouTube, podcasts, social media, and streaming platforms." },
  { tag: "Guide", title: "A Stewardship Mindset for Ministry Media", desc: "How to maximize the impact of every message your ministry faithfully creates." },
  { tag: "Checklist", title: "Content You Already Have", desc: "An audit framework for sermons, Bible studies, podcasts, testimonies, and children's ministry lessons." },
  { tag: "Guide", title: "One Message, Many Touchpoints", desc: "How a single sermon becomes enhanced video, social posts, shorts, and podcast content." },
  { tag: "Essay", title: "Why Visual Storytelling Belongs in Ministry", desc: "How animation and visual content help communicate timeless truths in formats audiences engage with." },
  { tag: "Guide", title: "Choosing the Right Partnership Tier", desc: "Essential, Growth, or Strategic — finding the right level of support for your ministry's content goals." },
];

function ResourcesPage() {
  return (
    <div>
      <SiteHeader />
      <section className="pt-40 pb-16 bg-[color:var(--background)]">
        <div className="container-page max-w-4xl">
          <Reveal>
            <div className="eyebrow">Resources</div>
            <h1 className="mt-6 font-serif text-5xl md:text-7xl leading-[1.04]">
              Insights for ministry <span className="text-[color:var(--gold)]">content creators.</span>
            </h1>
            <p className="mt-8 text-lg text-[color:var(--muted-foreground)] max-w-2xl leading-relaxed">
              Practical guides and frameworks — written to help ministries maximize the impact
              of the content they already create.
            </p>
          </Reveal>
        </div>
      </section>

      <section className="pb-32">
        <div className="container-page grid gap-8 md:grid-cols-2 lg:grid-cols-3">
          {resources.map((r, i) => (
            <Reveal key={r.title} delay={i * 80}>
              <a href="#" className="card-elev block h-full transition-all hover:-translate-y-1 hover:shadow-2xl">
                <div className="eyebrow">{r.tag}</div>
                <h2 className="mt-4 font-serif text-2xl text-[color:var(--navy)] leading-snug">{r.title}</h2>
                <p className="mt-4 text-[color:var(--muted-foreground)] leading-relaxed">{r.desc}</p>
                <div className="mt-8 text-sm font-semibold text-[color:var(--navy)]">
                  Download <span className="text-[color:var(--gold)] ml-1">→</span>
                </div>
              </a>
            </Reveal>
          ))}
        </div>
      </section>

      <SiteFooter />
    </div>
  );
}
