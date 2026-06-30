import type { ProductionVideoItem } from "@/components/ProductionVideo";

/**
 * Add your downloaded videos:
 * 1. Put files in `public/videos/` (e.g. `public/videos/production-1.mp4`)
 * 2. Set `videoSrc` to `/videos/production-1.mp4`
 * 3. Optional: add a cover image as `poster` (e.g. `/videos/production-1-poster.jpg`)
 *
 * Or import from src/assets:
 *   import production1 from "@/assets/videos/production-1.mp4";
 *   videoSrc: production1,
 */
export const productionVideos: ProductionVideoItem[] = [
  {
    title: "Production Video 1",
    tag: "Featured Production",
    videoSrc: "/videos/production-1.mp4",
    poster: "/videos/production-1-poster.png",
  },
  {
    title: "Production Video 2",
    tag: "Featured Production",
    videoSrc: "/videos/production-2.mp4",
    poster: "/videos/production-2-poster.png",
    posterPosition: "center 28%",
  },
];
