import { createFileRoute, Link } from "@tanstack/react-router";
import { SiteHeader } from "@/components/SiteHeader";
import { SiteFooter } from "@/components/SiteFooter";
import { Reveal } from "@/components/Reveal";
import editingHero from "@/assets/service-editing-hero.jpg";
import animHero from "@/assets/service-animation-hero.jpg";
import social from "@/assets/work-social.jpg";

export const Route = createFileRoute("/services")({
  head: () => ({
    meta: [
      { title: "Services — AVGC Studios" },
      { name: "description", content: "Partnership tiers for churches and ministries — Essential, Growth, and Strategic Ministry Partner." },
      { property: "og:title", content: "Services — AVGC Studios" },
      { property: "og:description", content: "Ways we can partner with your ministry." },
    ],
  }),
  component: ServicesPage,
});

const services = [
  {
    id: "essential-ministry",
    eyebrow: "Partnership 01",
    title: "Essential Ministry",
    sub: "For churches publishing weekly sermons and ministries getting started with content expansion.",
    img: editingHero,
    benefits: [
      "Sermon Enhancement",
      "Scripture Callouts",
      "Visual Graphics",
      "Monthly Content Support",
    ],
    workflow: ["Content audit", "Sermon enhancement", "Visual graphics", "Monthly delivery"],
    examples: "Ideal for churches publishing weekly sermons, ministries getting started with content expansion, and organizations looking to repurpose existing content.",
  },
  {
    id: "growth-ministry",
    eyebrow: "Partnership 02",
    title: "Growth Ministry",
    sub: "For ministries seeking stronger engagement across YouTube and social media.",
    img: social,
    benefits: [
      "Everything in Essential",
      "YouTube Shorts",
      "Social Media Content",
      "Enhanced Storytelling",
      "Content Repurposing",
    ],
    workflow: ["Identify key moments", "Create shorts & posts", "Enhanced storytelling", "Multi-channel publish"],
    examples: "Ideal for ministries seeking stronger engagement across YouTube and social media, and organizations looking to repurpose existing content.",
  },
  {
    id: "strategic-partner",
    eyebrow: "Partnership 03",
    title: "Strategic Ministry Partner",
    sub: "For organizations producing content at scale and seeking an ongoing media partner.",
    img: animHero,
    benefits: [
      "Dedicated Production Team",
      "Custom Animation",
      "Bible Visualizations",
      "Content Strategy",
      "Ongoing Creative Partnership",
    ],
    workflow: ["Strategic planning", "Dedicated team assignment", "Custom production", "Ongoing partnership"],
    examples: "Ideal for churches, publishers, discipleship organizations, and mission groups producing content at scale.",
  },
] as const;

function ServicesPage() {
  return (
    <div>
      <SiteHeader />
      <section className="pt-40 pb-24 bg-[color:var(--background)]">
        <div className="container-page max-w-4xl">
          <Reveal>
            <div className="eyebrow">Services</div>
            <h1 className="mt-6 font-serif text-5xl md:text-7xl leading-[1.04]">
              Ways We Can <span className="text-[color:var(--gold)]">Partner.</span>
            </h1>
            <p className="mt-8 text-lg text-[color:var(--muted-foreground)] max-w-2xl leading-relaxed">
              Our production model enables ministries to access high-quality visual storytelling,
              animation, content repurposing, and media production at a fraction of the cost
              typically associated with similar services in North America and Europe.
            </p>
          </Reveal>
        </div>
      </section>

      {services.map((s, i) => (
        <section
          key={s.id}
          id={s.id}
          className={`section-y ${i % 2 === 0 ? "bg-white" : "bg-[color:var(--background)]"}`}
        >
          <div className="container-page">
            <Reveal>
              <div className="grid lg:grid-cols-2 gap-16 items-center">
                <div className={i % 2 === 0 ? "" : "lg:order-2"}>
                  <div className="overflow-hidden rounded-2xl">
                    <img
                      src={s.img}
                      alt={s.title}
                      width={1600}
                      height={900}
                      loading="lazy"
                      className="w-full h-auto object-cover"
                    />
                  </div>
                </div>
                <div>
                  <div className="eyebrow">{s.eyebrow}</div>
                  <h2 className="mt-5 font-serif text-4xl md:text-5xl leading-[1.05]">{s.title}</h2>
                  <p className="mt-4 font-serif italic text-xl text-[color:var(--muted-foreground)]">{s.sub}</p>

                  <div className="mt-10">
                    <div className="eyebrow text-[color:var(--navy)]/60">What&rsquo;s Included</div>
                    <ul className="mt-4 space-y-3">
                      {s.benefits.map((b) => (
                        <li key={b} className="flex gap-3 text-[color:var(--ink)]">
                          <span className="mt-2 h-1.5 w-1.5 rounded-full bg-[color:var(--gold)] flex-none" />
                          <span>{b}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>
              </div>
            </Reveal>

            <Reveal delay={150}>
              <div className="mt-20 grid md:grid-cols-3 gap-px bg-[color:var(--border)] rounded-2xl overflow-hidden border border-[color:var(--border)]">
                <div className="card-elev !rounded-none !border-0">
                  <div className="eyebrow">Workflow</div>
                  <ol className="mt-5 space-y-3">
                    {s.workflow.map((step, j) => (
                      <li key={step} className="flex gap-3 text-sm">
                        <span className="font-serif text-[color:var(--gold)]">0{j + 1}</span>
                        <span>{step}</span>
                      </li>
                    ))}
                  </ol>
                </div>
                <div className="card-elev !rounded-none !border-0">
                  <div className="eyebrow">Ideal For</div>
                  <p className="mt-5 text-[color:var(--muted-foreground)] leading-relaxed">{s.examples}</p>
                </div>
                <div className="card-elev !rounded-none !border-0 flex h-full flex-col items-center justify-center">
                  <Link to="/contact" className="btn-primary">
                    Start with {s.title}
                  </Link>
                </div>
              </div>
            </Reveal>
          </div>
        </section>
      ))}

      <SiteFooter />
    </div>
  );
}
