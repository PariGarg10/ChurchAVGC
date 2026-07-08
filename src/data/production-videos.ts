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
    title: "Sermon with Visual Storytelling -1",
    tag: "Featured Production",
    videoSrc: "/videos/production-1.mp4",
    driveUrl: "https://drive.google.com/file/d/1S97lOt8eXqqD2RLZm4Fyg8ni4j3wLxwW/view?usp=drive_link",
    poster: "/videos/production-1-poster.png",
    posterPosition: "center 40%",
  },
  {
    title: "Sermon with Visual Storytelling -2",
    tag: "Featured Production",
    videoSrc: "/videos/production-2.mp4",
    driveUrl: "https://drive.google.com/file/d/1zKWbWdYp22RzUvbaCrn-CGl3j5ysj9ac/view?usp=drive_link",
    poster: "/videos/production-2-poster.png",
    posterPosition: "center center",
  },
  {
    title: "Sermon with Visual Storytelling -3",
    tag: "Featured Production",
    videoSrc: "/videos/production-3.mp4",
    driveUrl: "https://drive.google.com/file/d/1q7rIgff_eVM-Yrdl_TIXkjqB1ub5vRWq/view?usp=drive_link",
    poster: "/videos/production-3-poster.png",
  },
];
