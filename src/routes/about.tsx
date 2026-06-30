import { createFileRoute, Link } from "@tanstack/react-router";
import { SiteHeader } from "@/components/SiteHeader";
import { SiteFooter } from "@/components/SiteFooter";
import { Reveal } from "@/components/Reveal";
import team from "@/assets/team.jpg";

export const Route = createFileRoute("/about")({
  head: () => ({
    meta: [
      { title: "About — AVGC Studios" },
      { name: "description", content: "AVGC Studios is a creative production company serving ministries worldwide." },
      { property: "og:title", content: "About AVGC Studios" },
      { property: "og:description", content: "Who we are and our core competencies." },
    ],
  }),
  component: AboutPage,
});

function AboutPage() {
  return (
    <div>
      <SiteHeader />
      <section className="pt-40 pb-16 bg-[color:var(--background)]">
        <div className="container-page max-w-4xl">
          <Reveal>
            <div className="eyebrow">About</div>
            <h1 className="mt-6 font-serif text-5xl md:text-7xl leading-[1.04]">
              Who We Are &amp; Our <span className="text-[color:var(--gold)]">Core Competencies.</span>
            </h1>
          </Reveal>
        </div>
      </section>

      <section className="pb-24">
        <div className="container-page">
          <Reveal>
            <div className="overflow-hidden rounded-2xl">
              <img src={team} alt="Our team" width={1600} height={1000} loading="lazy" className="w-full h-auto" />
            </div>
          </Reveal>
        </div>
      </section>

      <section className="section-y bg-white">
        <div className="container-page grid md:grid-cols-2 gap-16">
          <Reveal>
            <div>
              <div className="eyebrow">Who We Are</div>
              <h2 className="mt-5 font-serif text-4xl md:text-5xl leading-[1.05]">
                A creative production company serving the global church.
              </h2>
            </div>
          </Reveal>
          <Reveal delay={120}>
            <div className="space-y-6 text-[color:var(--muted-foreground)] leading-relaxed text-lg">
              <p>
                AVGC Studios is a creative production company serving clients
                across the globe through a highly skilled team of artists, animators, editors,
                instructional designers, and creative specialists.
              </p>
              <p>
                We view ourselves not merely as a production vendor, but as a ministry partner.
                Through collaborations with faith-based organizations, churches, ministries,
                and mission-focused initiatives, we help transform valuable teachings into engaging
                visual experiences.
              </p>
              <p>
                Our goal is simple: to help faithful messages travel farther, engage deeper,
                and impact more lives.
              </p>
            </div>
          </Reveal>
        </div>
      </section>

      <section className="section-y bg-[color:var(--background)]">
        <div className="container-page">
          <Reveal>
            <div className="max-w-3xl">
              <div className="eyebrow">Core Competencies</div>
              <h2 className="mt-5 font-serif text-4xl md:text-5xl leading-[1.05]">
                Craft is reverence made visible.
              </h2>
            </div>
          </Reveal>
          <div className="mt-12 grid md:grid-cols-3 gap-8">
            {[
              { t: "Faith Based Animation", d: "Hand-crafted visual storytelling that brings Scripture and faith narratives to life." },
              { t: "E-Learning Videos", d: "Instructional content designed for clarity, retention, and discipleship." },
              { t: "Kids Animation", d: "Engaging animated content crafted specifically for younger audiences." },
              { t: "Explainer Videos", d: "Clear, compelling videos that make complex ministry concepts accessible." },
              { t: "Book Illustrations / Animations", d: "Visual adaptations that extend the reach of published ministry resources." },
              { t: "Game Art Creation", d: "Creative assets for faith-based games and interactive experiences." },
              { t: "Concept Development", d: "From initial idea to creative brief — shaping stories before production begins." },
              { t: "Game Animation", d: "Character and environment animation for interactive ministry platforms." },
              { t: "Live Shoot", d: "On-location production capturing sermons, events, and ministry moments." },
            ].map((b) => (
              <div key={b.t} className="card-elev">
                <h3 className="font-serif text-2xl text-[color:var(--navy)]">{b.t}</h3>
                <p className="mt-4 text-[color:var(--muted-foreground)] leading-relaxed">{b.d}</p>
              </div>
            ))}
          </div>
          <div className="mt-16">
            <Link to="/contact" className="btn-primary">Start a conversation</Link>
          </div>
        </div>
      </section>

      <SiteFooter />
    </div>
  );
}
