import { useState } from "react";
import { getDriveEmbedUrl, isEmbedVideoSrc } from "@/lib/video";

export type ProductionVideoItem = {
  title: string;
  tag: string;
  year?: string;
  /** Local file: import from assets or use `/videos/your-file.mp4` in the public folder. */
  videoSrc?: string;
  /** Optional cover image shown before play (import or `/videos/your-poster.jpg`). */
  poster?: string;
  /** Optional object-position for poster image (example: `center 30%`). */
  posterPosition?: string;
};

type ProductionVideoProps = {
  item: ProductionVideoItem;
  large?: boolean;
};

export function ProductionVideo({ item, large = false }: ProductionVideoProps) {
  const [playing, setPlaying] = useState(false);
  const videoSrc = item.videoSrc?.trim() ?? "";
  const poster = item.poster?.trim() ?? "";
  const hasVideo = Boolean(videoSrc);

  if (hasVideo && playing) {
    const frameClass = `w-full overflow-hidden rounded-t-3xl bg-black ${
      large ? "aspect-[21/9]" : "aspect-video"
    }`;

    if (isEmbedVideoSrc(videoSrc)) {
      return (
        <article className="overflow-hidden rounded-3xl border border-[color:var(--border)] bg-[#2A1C14]">
          <div className={frameClass}>
            <iframe
              src={getDriveEmbedUrl(videoSrc)}
              title={item.title}
              allow="autoplay; fullscreen"
              allowFullScreen
              className="h-full w-full border-0"
            />
          </div>
          <VideoMeta item={item} />
        </article>
      );
    }

    return (
      <article className="overflow-hidden rounded-3xl border border-[color:var(--border)] bg-[#2A1C14]">
        <div className={frameClass}>
          <video
            src={videoSrc}
            poster={poster || undefined}
            controls
            autoPlay
            playsInline
            className="h-full w-full object-contain"
          >
            <track kind="captions" />
          </video>
        </div>
        <VideoMeta item={item} />
      </article>
    );
  }

  return (
    <article className="group block overflow-hidden rounded-3xl border border-[color:var(--border)] bg-[#2A1C14]">
      {hasVideo ? (
        <button
          type="button"
          onClick={() => setPlaying(true)}
          className="relative block w-full text-left focus:outline-none focus-visible:ring-2 focus-visible:ring-[color:var(--gold)]"
        >
          <VideoFrame poster={poster} posterPosition={item.posterPosition} large={large} showPlay />
        </button>
      ) : (
        <VideoFrame poster="" large={large} placeholder />
      )}
      <VideoMeta item={item} />
    </article>
  );
}

function VideoMeta({ item }: { item: ProductionVideoItem }) {
  return (
    <div className="border-t border-white/10 bg-[#2A1C14] px-6 py-5 md:px-8 md:py-6">
      <div className="text-xs tracking-[0.2em] uppercase text-[color:var(--gold)]">{item.tag}</div>
      <div className="mt-2 font-serif text-2xl text-[color:var(--cream)] md:text-3xl">{item.title}</div>
      {item.year ? <div className="mt-2 text-sm text-[color:var(--cream)]/60">{item.year}</div> : null}
    </div>
  );
}

function VideoFrame({
  poster,
  posterPosition,
  large,
  showPlay,
  placeholder,
}: {
  poster: string;
  posterPosition?: string;
  large: boolean;
  showPlay?: boolean;
  placeholder?: boolean;
}) {
  return (
    <div className={`relative w-full overflow-hidden ${large ? "aspect-[21/9]" : "aspect-video"}`}>
      {poster ? (
        <img
          src={poster}
          alt=""
          className="h-full w-full scale-[1.02] object-cover"
          style={posterPosition ? { objectPosition: posterPosition } : undefined}
        />
      ) : (
        <div className="flex h-full w-full flex-col items-center justify-center gap-3 bg-gradient-to-br from-[#2A1C14] to-[#1a120c] px-6 text-center">
          <div className="grid h-16 w-16 place-items-center rounded-full border-2 border-dashed border-[color:var(--gold)]/50 text-[color:var(--gold)]">
            <svg viewBox="0 0 24 24" className="ml-1 h-7 w-7 fill-current" aria-hidden>
              <path d="M8 5v14l11-7L8 5z" />
            </svg>
          </div>
          <p className="text-sm font-medium text-[color:var(--cream)]/80">
            {placeholder
              ? "Drop your .mp4 in public/videos/ and set videoSrc below"
              : "Play production"}
          </p>
        </div>
      )}
      {showPlay && poster ? (
        <>
          <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/20 to-transparent" />
          <div className="absolute inset-0 flex items-center justify-center">
            <span className="grid h-20 w-20 place-items-center rounded-full bg-[color:var(--gold)] shadow-2xl transition-transform group-hover:scale-105">
              <svg viewBox="0 0 24 24" className="ml-1 h-8 w-8 fill-[color:oklch(0.15_0_0)]" aria-hidden>
                <path d="M8 5v14l11-7L8 5z" />
              </svg>
            </span>
          </div>
        </>
      ) : null}
      {showPlay && !poster ? (
        <div className="absolute inset-0 flex items-center justify-center bg-black/25">
          <span className="grid h-20 w-20 place-items-center rounded-full bg-[color:var(--gold)] shadow-2xl">
            <svg viewBox="0 0 24 24" className="ml-1 h-8 w-8 fill-[color:oklch(0.15_0_0)]" aria-hidden>
              <path d="M8 5v14l11-7L8 5z" />
            </svg>
          </span>
        </div>
      ) : null}
    </div>
  );
}
