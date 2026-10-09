import Image from "next/image";
import type { AspectRatio, Orientation } from "@/data/projects";
import { hasMedia, videoMimeType } from "@/lib/media";
import { PlayIcon } from "@/components/icons";

const backdrops = [
  "radial-gradient(120% 90% at 18% 16%, #3c2b66 0%, #14121c 46%, #09090d 100%)",
  "radial-gradient(120% 90% at 82% 8%, #4c314c 0%, #161218 50%, #09090d 100%)",
  "radial-gradient(110% 90% at 50% 100%, #2c2c36 0%, #101014 52%, #07070b 100%)",
  "radial-gradient(120% 90% at 72% 24%, #243056 0%, #12141c 50%, #09090d 100%)",
  "radial-gradient(120% 90% at 24% 84%, #312850 0%, #121018 52%, #09090d 100%)",
  "radial-gradient(120% 90% at 50% 0%, #3d2766 0%, #14101c 48%, #09090d 100%)",
];

type MediaFrameProps = {
  title: string;
  aspect?: AspectRatio;
  poster?: string;
  video?: string;
  videoSrc?: string;
  posterSrc?: string;
  orientation?: Orientation;
  tone?: number;
  playVideo?: boolean;
  showPlayIcon?: boolean;
  /** Homepage cards use a shorter stage so vertical work stays large without a full-height tower. */
  preview?: boolean;
  priority?: boolean;
  sizes?: string;
};

export function MediaFrame({
  title,
  aspect = "16/9",
  poster = "",
  video = "",
  videoSrc = "",
  posterSrc = "",
  orientation,
  tone = 0,
  playVideo = false,
  showPlayIcon = false,
  preview = false,
  priority = false,
  sizes = "(max-width: 768px) 100vw, 50vw",
}: MediaFrameProps) {
  const source = (videoSrc || video).trim();
  const still = (posterSrc || poster).trim();
  const vertical = orientation ? orientation === "vertical" : aspect === "9/16";
  const ratio = preview
    ? vertical
      ? "aspect-[4/5]"
      : "aspect-video"
    : vertical
      ? "aspect-[9/16]"
      : "aspect-video";
  const backdrop = backdrops[tone % backdrops.length];
  const showPlayer = playVideo && hasMedia(source);
  const showPoster = hasMedia(still);
  const showVideoPreview = !showPlayer && !showPoster && hasMedia(source);
  const fit = "object-contain";

  return (
    <div className={`relative overflow-hidden bg-[#0c0c12] ${ratio}`}>
      {showPlayer ? (
        <video
          className={`h-full w-full bg-black ${fit}`}
          controls
          playsInline
          preload="metadata"
          poster={showPoster ? still : undefined}
          aria-label={title}
        >
          <source src={source} type={videoMimeType(source)} />
        </video>
      ) : showPoster ? (
        <Image
          src={still}
          alt=""
          fill
          priority={priority}
          sizes={sizes}
          className={fit}
        />
      ) : showVideoPreview ? (
        <video
          className={`absolute inset-0 h-full w-full bg-black ${fit}`}
          muted
          playsInline
          preload="metadata"
          aria-label={title}
        >
          <source src={source} type={videoMimeType(source)} />
        </video>
      ) : (
        <Placeholder backdrop={backdrop} />
      )}
      {showPlayIcon && !showPlayer ? (
        <span className="pointer-events-none absolute inset-0 flex items-center justify-center">
          <span className="flex h-16 w-16 items-center justify-center rounded-full border border-white/25 bg-black/45 text-white shadow-[0_12px_40px_-16px_rgba(0,0,0,0.8)] backdrop-blur-md">
            <PlayIcon className="h-5 w-5 translate-x-px" />
          </span>
        </span>
      ) : null}
    </div>
  );
}

function Placeholder({ backdrop }: { backdrop: string }) {
  return (
    <div className="absolute inset-0" style={{ background: backdrop }} aria-hidden="true">
      <div className="absolute inset-0 bg-[linear-gradient(115deg,transparent_30%,rgba(255,255,255,0.05)_48%,transparent_62%)]" />
      <span className="absolute top-4 left-4 h-4 w-4 border-t border-l border-white/30" />
      <span className="absolute top-4 right-4 h-4 w-4 border-t border-r border-white/30" />
      <span className="absolute bottom-4 left-4 h-4 w-4 border-b border-l border-white/30" />
      <span className="absolute right-4 bottom-4 h-4 w-4 border-r border-b border-white/30" />
    </div>
  );
}
