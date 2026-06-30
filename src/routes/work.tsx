import { createFileRoute } from "@tanstack/react-router";
import { SiteHeader } from "@/components/SiteHeader";
import { SiteFooter } from "@/components/SiteFooter";
import { Reveal } from "@/components/Reveal";
import { ProductionVideo } from "@/components/ProductionVideo";
import { productionVideos } from "@/data/production-videos";

export const Route = createFileRoute("/work")({
  head: () => ({
    meta: [
      { title: "Work — AVGC Studios" },
      { name: "description", content: "Selected faith-based animation, sermon enhancement, podcast, and social media productions." },
      { property: "og:title", content: "Selected Work — AVGC Studios" },
      { property: "og:description", content: "A portfolio of ministry media production." },
    ],
  }),
  component: WorkPage,
});

function WorkPage() {
  return (
    <div>
      <SiteHeader />
      <section className="pt-40 pb-16 bg-[color:var(--background)]">
        <div className="container-page max-w-4xl">
          <Reveal>
            <div className="eyebrow">Selected Work</div>
            <h1 className="mt-6 font-serif text-5xl md:text-7xl leading-[1.04]">
              Engaging visual experiences.
            </h1>
          </Reveal>
        </div>
      </section>

      <section className="pb-32 bg-[color:var(--background)]">
        <div className="container-page space-y-10">
          {productionVideos.map((item, i) => (
            <Reveal key={item.title + i} delay={i * 80}>
              <ProductionVideo item={item} large />
            </Reveal>
          ))}
        </div>
      </section>

      <SiteFooter />
    </div>
  );
}
