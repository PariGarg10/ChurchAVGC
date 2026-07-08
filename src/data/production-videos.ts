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
const baseUrl = import.meta.env.BASE_URL;

export const productionVideos: ProductionVideoItem[] = [
  {
    title: "Sermon with Visual Storytelling -1",
    tag: "Featured Production",
    videoSrc: "https://res.cloudinary.com/rzfel3mv/video/upload/v1783518421/production-1_ul5dbq.mp4",
    poster: `${baseUrl}videos/production-1-poster.png`,
    posterPosition: "center 40%",
  },
  {
    title: "Sermon with Visual Storytelling -2",
    tag: "Featured Production",
    videoSrc: "https://res.cloudinary.com/rzfel3mv/video/upload/v1783519804/production-2_vrm5m1.mp4",
    poster: `${baseUrl}videos/production-3-poster.png`,
    posterPosition: "center center",
  },
  {
    title: "Sermon with Visual Storytelling -3",
    tag: "Featured Production",
    videoSrc: "https://res.cloudinary.com/rzfel3mv/video/upload/v1783518887/production-3_wb9ayt.mp4",
    poster: `${baseUrl}videos/production-2-poster.png`,
  },
];
