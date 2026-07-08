Upload your production videos in this folder so they deploy on Vercel.

Required files:
- `production-1.mp4`
- `production-2.mp4`
- `production-3.mp4`

Notes:
- The app plays local files first (`/videos/*.mp4`).
- If a local file is missing or fails, it automatically falls back to the configured Google Drive link.
- Keep filenames exactly as listed above unless you also update `src/data/production-videos.ts`.
