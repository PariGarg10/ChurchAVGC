import { useMemo, useState } from "react";
import { getDriveEmbedUrl, getVideoPosterUrl, isEmbedVideoSrc } from "@/lib/video";

type TestimonialVideoProps = {
  videoSrc: string;
  poster?: string;
  name: string;
  className?: string;
  compact?: boolean;
};

export function TestimonialVideo({
  videoSrc,
  poster,
  name,
  className = "",
  compact = false,
}: TestimonialVideoProps) {
  const [playing, setPlaying] = useState(false);
  const hasVideo = Boolean(videoSrc?.trim());
  const derivedPoster = useMemo(() => poster ?? (hasVideo ? getVideoPosterUrl(videoSrc) : ""), [poster, videoSrc, hasVideo]);
  const useVideoFrameCover = hasVideo && !derivedPoster && !isEmbedVideoSrc(videoSrc);
  const frameClass = `aspect-video w-full overflow-hidden rounded-xl ring-1 ring-[color:var(--gold)]/45 ${compact ? "rounded-lg" : "rounded-2xl"}`;

  if (hasVideo && playing) {
    if (isEmbedVideoSrc(videoSrc)) {
      return (
        <div className={`${frameClass} bg-black shadow-[0_12px_40px_-20px_rgba(31,53,86,0.35)] ${className}`}>
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
      <div className={`${frameClass} bg-black shadow-[0_12px_40px_-20px_rgba(31,53,86,0.35)] ${className}`}>
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

  const posterContent = (
    <div className={`${frameClass} bg-[color:var(--navy)]`}>
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
  );

  if (!hasVideo) {
    return (
      <div className={`relative block w-full ${className}`}>
        {posterContent}
      </div>
    );
  }

  return (
    <button
      type="button"
      onClick={() => setPlaying(true)}
      className={`group relative block w-full text-left focus:outline-none focus-visible:ring-2 focus-visible:ring-[color:var(--gold)] focus-visible:ring-offset-2 ${className}`}
      aria-label={`Play video testimonial from ${name}`}
    >
      {posterContent}
      <div className="absolute inset-0 rounded-xl bg-gradient-to-t from-black/55 via-black/15 to-black/25 transition-colors group-hover:from-black/65" />
      <div className="absolute inset-0 flex flex-col items-center justify-center gap-2 sm:gap-3">
        <span
          className={`grid place-items-center rounded-full bg-[color:var(--gold)] shadow-xl transition-transform duration-500 group-hover:scale-105 ${
            compact ? "h-10 w-10 sm:h-12 sm:w-12" : "h-16 w-16 md:h-20 md:w-20"
          }`}
        >
          <svg
            viewBox="0 0 24 24"
            className={`ml-0.5 fill-[color:oklch(0.15_0_0)] ${compact ? "h-4 w-4 sm:h-5 sm:w-5" : "h-7 w-7 md:h-8 md:w-8"}`}
            aria-hidden
          >
            <path d="M8 5v14l11-7L8 5z" />
          </svg>
        </span>
        {!compact ? (
          <span className="rounded-full bg-[color:var(--navy)] px-4 py-1.5 md:px-5 md:py-2 text-xs md:text-sm font-semibold text-white shadow-lg">
            Watch Video Testimonial
          </span>
        ) : null}
      </div>
    </button>
  );
}
