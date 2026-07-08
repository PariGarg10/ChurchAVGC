/** True when the source should play in an iframe (YouTube, Vimeo, Google Drive, etc.). */
export function isEmbedVideoSrc(src: string): boolean {
  return /drive\.google\.com|youtube\.com|youtu\.be|vimeo\.com/i.test(src);
}

export function getDriveFileId(url: string): string | null {
  const match = url.match(/\/d\/([^/]+)/);
  return match ? match[1] : null;
}

export function getDriveEmbedUrl(url: string): string {
  const id = getDriveFileId(url);
  if (!id) return url;
  return `https://drive.google.com/file/d/${id}/preview`;
}

/** Direct file URL for Drive videos (used for native <video> playback). */
export function getDriveDirectVideoUrl(url: string): string {
  const id = getDriveFileId(url);
  if (!id) return url;
  return `https://drive.google.com/uc?export=download&id=${id}`;
}

/** Converts known hosted links into playable file URLs for native video elements. */
export function getPlayableVideoSrc(url: string): string {
  if (/drive\.google\.com/i.test(url)) {
    return getDriveDirectVideoUrl(url);
  }
  return url;
}

/** Thumbnail pulled from a Google Drive video file (first-frame style cover). */
export function getDriveThumbnailUrl(url: string, width = 1280): string | null {
  const id = getDriveFileId(url);
  if (!id) return null;
  return `https://drive.google.com/thumbnail?id=${id}&sz=w${width}`;
}

/** Best-effort poster URL for a video source (Drive/YouTube); null when the player should use the file itself. */
export function getVideoPosterUrl(videoSrc: string): string | null {
  if (/drive\.google\.com/i.test(videoSrc)) {
    return getDriveThumbnailUrl(videoSrc);
  }
  if (/youtube\.com\/watch\?v=([^&]+)|youtu\.be\/([^?&]+)/i.test(videoSrc)) {
    const match = videoSrc.match(/(?:youtube\.com\/watch\?v=|youtu\.be\/)([^?&]+)/i);
    if (match) return `https://img.youtube.com/vi/${match[1]}/hqdefault.jpg`;
  }
  return null;
}
