import { createFileRoute } from "@tanstack/react-router";
import { SiteHeader } from "@/components/SiteHeader";
import { SiteFooter } from "@/components/SiteFooter";
import { Reveal } from "@/components/Reveal";
import workSermon from "@/assets/work-sermon.jpg";
import workAnimation from "@/assets/work-animation.jpg";
import workPodcast from "@/assets/work-podcast.jpg";
import workSocial from "@/assets/work-social.jpg";

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

const projects = [
  { img: workSermon, title: "Sermon Enhancement — Weekly Series", tag: "Sermon Enhancement", year: "2024–25" },
  { img: workAnimation, title: "Faith Based Animation — Bible Visualizations", tag: "Faith Based Animation", year: "2024" },
  { img: workPodcast, title: "Ministry Podcast Production", tag: "Podcast Content", year: "2023–25" },
  { img: workSocial, title: "YouTube Shorts & Social Campaign", tag: "Social Media Content", year: "2025" },
  { img: workSermon, title: "E-Learning Video Series", tag: "E-Learning Videos", year: "2025" },
  { img: workAnimation, title: "Kids Animation — Scripture Stories", tag: "Kids Animation", year: "2023" },
];

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
        <div className="container-page space-y-8">
          {projects.map((p, i) => (
            <Reveal key={p.title + i} delay={i * 80}>
              <a href="#" className="group block relative overflow-hidden rounded-3xl bg-black">
                <div className="aspect-[21/9] overflow-hidden">
                  <img
                    src={p.img}
                    alt={p.title}
                    loading="lazy"
                    className="h-full w-full object-cover transition-transform duration-[1400ms] group-hover:scale-105"
                  />
                </div>
                <div className="absolute inset-0 bg-gradient-to-t from-black/85 via-black/15 to-transparent" />
                <div className="absolute inset-0 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-500">
                  <div className="h-24 w-24 rounded-full bg-[color:var(--gold)] grid place-items-center shadow-2xl scale-90 group-hover:scale-100 transition-transform duration-500">
                    <svg viewBox="0 0 24 24" className="h-10 w-10 fill-[color:oklch(0.15_0_0)] ml-1">
                      <path d="M8 5v14l11-7L8 5z" />
                    </svg>
                  </div>
                </div>
                <div className="absolute bottom-0 left-0 right-0 p-10 text-[color:var(--cream)] flex flex-wrap items-end justify-between gap-4">
                  <div>
                    <div className="text-xs tracking-[0.2em] uppercase text-[color:var(--gold)]">{p.tag}</div>
                    <div className="mt-2 font-serif text-3xl md:text-4xl">{p.title}</div>
                  </div>
                  <div className="text-sm text-[color:var(--cream)]/70">{p.year}</div>
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
