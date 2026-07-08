import { useState } from "react";
import { getDriveEmbedUrl, getPlayableVideoSrc } from "@/lib/video";

export type ProductionVideoItem = {
  title: string;
  tag: string;
  year?: string;
  /** Local file: import from assets or use `/videos/your-file.mp4` in the public folder. */
  videoSrc?: string;
  /** Optional Google Drive link used as fallback and for "Open in Drive". */
  driveUrl?: string;
  /** Optional cover image shown before play (import or `/videos/your-poster.jpg`). */
  poster?: string;
  /** Optional object-position for poster image (example: `center 30%`). */
  posterPosition?: string;
};

type ProductionVideoProps = {
  item: ProductionVideoItem;
  large?: boolean;
  showMeta?: boolean;
};

export function ProductionVideo({ item, large = false, showMeta = true }: ProductionVideoProps) {
  const [playing, setPlaying] = useState(false);
  const [nativeFailed, setNativeFailed] = useState(false);
  const videoSrc = item.videoSrc?.trim() ?? "";
  const driveUrl = item.driveUrl?.trim() ?? (/drive\.google\.com/i.test(videoSrc) ? videoSrc : "");
  const playableSrc = getPlayableVideoSrc(videoSrc);
  const embedSrc = driveUrl ? getDriveEmbedUrl(driveUrl) : "";
  const poster = item.poster?.trim() ?? "";
  const hasVideo = Boolean(videoSrc);
  const hasDriveFallback = Boolean(driveUrl);
  const framed = !showMeta;

  const frameClass = `w-full overflow-hidden bg-[#2A1C14] ${
    large ? "aspect-[21/9]" : "aspect-video"
  } ${showMeta ? "rounded-t-3xl" : "rounded-3xl"}`;

  const articleClass = framed
    ? "overflow-hidden rounded-3xl border-[3px] border-[#5A3B28] bg-[#2A1C14]"
    : "overflow-hidden border border-[color:var(--border)] bg-[#2A1C14] rounded-3xl";

  if (hasVideo && playing) {
    return (
      <article className={articleClass}>
        <div className={frameClass}>
          {hasDriveFallback && nativeFailed ? (
            <div className="relative h-full w-full overflow-hidden bg-black">
              <div className="absolute left-1/2 top-1/2 h-[104%] w-[104%] -translate-x-1/2 -translate-y-1/2 overflow-hidden rounded-2xl">
                <iframe
                  src={embedSrc}
                  title={item.title}
                  allow="autoplay; encrypted-media; picture-in-picture; fullscreen"
                  allowFullScreen
                  className="h-full w-full border-0"
                />
              </div>
            </div>
          ) : (
            <video
              src={playableSrc}
              poster={poster || undefined}
              controls
              autoPlay
              playsInline
              onError={() => {
                if (hasDriveFallback) setNativeFailed(true);
              }}
              className="h-full w-full object-cover"
              style={item.posterPosition ? { objectPosition: item.posterPosition } : undefined}
            >
              <track kind="captions" />
            </video>
          )}
          {hasDriveFallback ? (
            <a
              href={driveUrl}
              target="_blank"
              rel="noreferrer"
              className="absolute right-3 top-3 z-20 rounded-full bg-black/65 px-3 py-1.5 text-xs font-medium text-white transition hover:bg-black/80"
            >
              Open in Drive
            </a>
          ) : null}
        </div>
        {showMeta ? <VideoMeta item={item} /> : null}
      </article>
    );
  }

  return (
    <article
      className={
        framed
          ? "group block overflow-hidden rounded-3xl border-[3px] border-[#5A3B28] bg-[#2A1C14] transition-colors duration-300 hover:border-[color:var(--gold)]"
          : "group block overflow-hidden rounded-3xl border border-[color:var(--border)] bg-[#2A1C14]"
      }
    >
      {hasVideo ? (
        <button
          type="button"
          onClick={() => {
            setNativeFailed(false);
            setPlaying(true);
          }}
          className="relative block w-full text-left focus:outline-none focus-visible:ring-2 focus-visible:ring-[color:var(--gold)]"
        >
          <VideoFrame
            poster={poster}
            posterPosition={item.posterPosition}
            title={framed ? item.title : undefined}
            large={large}
            showPlay
            centerPoster={framed}
          />
        </button>
      ) : (
        <VideoFrame poster="" large={large} placeholder centerPoster={framed} />
      )}
      {showMeta ? <VideoMeta item={item} /> : null}
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
  title,
  large,
  showPlay,
  placeholder,
  centerPoster,
}: {
  poster: string;
  posterPosition?: string;
  title?: string;
  large: boolean;
  showPlay?: boolean;
  placeholder?: boolean;
  centerPoster?: boolean;
}) {
  return (
    <div className={`relative w-full overflow-hidden ${large ? "aspect-[21/9]" : "aspect-video"} bg-[#2A1C14]`}>
      {title ? (
        <div className="pointer-events-none absolute inset-x-0 top-0 z-20 bg-gradient-to-b from-black/75 via-black/35 to-transparent px-4 py-3 sm:px-5 sm:py-4 opacity-0 transition-opacity duration-300 group-hover:opacity-100">
          <span className="font-serif text-base sm:text-lg text-white">{title}</span>
        </div>
      ) : null}
      {poster ? (
        <img
          src={poster}
          alt=""
          className={`h-full w-full object-cover ${centerPoster ? "" : "scale-[1.02]"}`}
          style={{ objectPosition: posterPosition ?? "center center" }}
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
          <div className="absolute inset-0 bg-gradient-to-t from-black/50 via-transparent to-transparent" />
          <div className="absolute inset-0 flex items-center justify-center">
            <span className="grid h-14 w-14 sm:h-16 sm:w-16 md:h-20 md:w-20 place-items-center rounded-full bg-[color:var(--gold)] shadow-2xl transition-transform group-hover:scale-105">
              <svg viewBox="0 0 24 24" className="ml-1 h-6 w-6 sm:h-7 sm:w-7 md:h-8 md:w-8 fill-[color:oklch(0.15_0_0)]" aria-hidden>
                <path d="M8 5v14l11-7L8 5z" />
              </svg>
            </span>
          </div>
        </>
      ) : null}
      {showPlay && !poster ? (
        <div className="absolute inset-0 flex items-center justify-center bg-black/25">
          <span className="grid h-14 w-14 sm:h-16 sm:w-16 md:h-20 md:w-20 place-items-center rounded-full bg-[color:var(--gold)] shadow-2xl">
            <svg viewBox="0 0 24 24" className="ml-1 h-6 w-6 sm:h-7 sm:w-7 md:h-8 md:w-8 fill-[color:oklch(0.15_0_0)]" aria-hidden>
              <path d="M8 5v14l11-7L8 5z" />
            </svg>
          </span>
        </div>
      ) : null}
    </div>
  );
}
