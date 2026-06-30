import { useMemo, useState } from "react";
import { getDriveEmbedUrl, getVideoPosterUrl, isEmbedVideoSrc } from "@/lib/video";

type TestimonialVideoProps = {
  videoSrc: string;
  poster?: string;
  name: string;
  className?: string;
};

export function TestimonialVideo({ videoSrc, poster, name, className = "" }: TestimonialVideoProps) {
  const [playing, setPlaying] = useState(false);
  const derivedPoster = useMemo(() => poster ?? getVideoPosterUrl(videoSrc), [poster, videoSrc]);
  const useVideoFrameCover = !derivedPoster && !isEmbedVideoSrc(videoSrc);

  if (playing) {
    if (isEmbedVideoSrc(videoSrc)) {
      return (
        <div
          className={`aspect-video w-full overflow-hidden rounded-2xl bg-black shadow-[0_20px_60px_-20px_rgba(31,53,86,0.35)] ${className}`}
        >
          <iframe
            src={getDriveEmbedUrl(videoSrc)}
            title={`${name} video testimonial`}
            allow="autoplay; fullscreen"
            allowFullScreen
            className="h-full w-full border-0"
          />
        </div>
      );
    }

    return (
      <div
        className={`aspect-video w-full overflow-hidden rounded-2xl bg-black shadow-[0_20px_60px_-20px_rgba(31,53,86,0.35)] ${className}`}
      >
        <video
          src={videoSrc}
          poster={derivedPoster ?? undefined}
          controls
          autoPlay
          playsInline
          className="h-full w-full object-contain"
        >
          <track kind="captions" />
        </video>
      </div>
    );
  }

  return (
    <button
      type="button"
      onClick={() => setPlaying(true)}
      className={`group relative block w-full overflow-hidden rounded-2xl text-left focus:outline-none focus-visible:ring-2 focus-visible:ring-[color:var(--gold)] focus-visible:ring-offset-2 ${className}`}
      aria-label={`Play video testimonial from ${name}`}
    >
      <div className="aspect-video w-full overflow-hidden bg-[color:var(--navy)]">
        {useVideoFrameCover ? (
          <video
            src={`${videoSrc}#t=0.1`}
            preload="metadata"
            muted
            playsInline
            aria-hidden
            className="h-full w-full object-contain object-center transition-transform duration-700 group-hover:scale-[1.02]"
          />
        ) : (
          <img
            src={derivedPoster ?? undefined}
            alt=""
            loading="lazy"
            className="h-full w-full object-contain object-center transition-transform duration-700 group-hover:scale-[1.02]"
          />
        )}
      </div>
      <div className="absolute inset-0 bg-gradient-to-t from-black/55 via-black/15 to-black/25 transition-colors group-hover:from-black/65" />
      <div className="absolute inset-0 flex flex-col items-center justify-center gap-4">
        <span className="grid h-16 w-16 md:h-20 md:w-20 place-items-center rounded-full bg-[color:var(--gold)] shadow-2xl transition-transform duration-500 group-hover:scale-105">
          <svg viewBox="0 0 24 24" className="ml-1 h-7 w-7 md:h-8 md:w-8 fill-[color:oklch(0.15_0_0)]" aria-hidden>
            <path d="M8 5v14l11-7L8 5z" />
          </svg>
        </span>
        <span className="rounded-full bg-[color:var(--navy)] px-4 py-1.5 md:px-5 md:py-2 text-xs md:text-sm font-semibold text-white shadow-lg">
          Watch Video Testimonial
        </span>
      </div>
    </button>
  );
}
