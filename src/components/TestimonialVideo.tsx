import { useState } from "react";

function getDriveEmbedUrl(url: string): string {
  const match = url.match(/\/d\/([^/]+)/);
  if (!match) return url;
  return `https://drive.google.com/file/d/${match[1]}/preview`;
}

type TestimonialVideoProps = {
  videoUrl: string;
  poster: string;
  name: string;
};

export function TestimonialVideo({ videoUrl, poster, name }: TestimonialVideoProps) {
  const [playing, setPlaying] = useState(false);

  if (playing) {
    return (
      <div className="mt-10 aspect-video w-full overflow-hidden rounded-2xl bg-black shadow-[0_20px_60px_-20px_rgba(31,53,86,0.35)]">
        <iframe
          src={getDriveEmbedUrl(videoUrl)}
          title={`${name} video testimonial`}
          allow="autoplay; fullscreen"
          allowFullScreen
          className="h-full w-full border-0"
        />
      </div>
    );
  }

  return (
    <button
      type="button"
      onClick={() => setPlaying(true)}
      className="group relative mt-10 block w-full overflow-hidden rounded-2xl text-left focus:outline-none focus-visible:ring-2 focus-visible:ring-[color:var(--gold)] focus-visible:ring-offset-2"
      aria-label={`Play video testimonial from ${name}`}
    >
      <div className="aspect-video w-full overflow-hidden bg-[color:var(--navy)]">
        <img
          src={poster}
          alt=""
          className="h-full w-full object-contain object-center transition-transform duration-700 group-hover:scale-[1.02]"
        />
      </div>
      <div className="absolute inset-0 bg-gradient-to-t from-black/55 via-black/15 to-black/25 transition-colors group-hover:from-black/65" />
      <div className="absolute inset-0 flex flex-col items-center justify-center gap-4">
        <span className="grid h-20 w-20 place-items-center rounded-full bg-[color:var(--gold)] shadow-2xl transition-transform duration-500 group-hover:scale-105">
          <svg viewBox="0 0 24 24" className="ml-1 h-8 w-8 fill-[color:oklch(0.15_0_0)]" aria-hidden>
            <path d="M8 5v14l11-7L8 5z" />
          </svg>
        </span>
        <span className="rounded-full bg-[color:var(--navy)] px-5 py-2 text-sm font-semibold text-white shadow-lg">
          Watch Video Testimonial
        </span>
      </div>
    </button>
  );
}
