"use client";

import Image from "next/image";
import { useEffect, useRef, useState } from "react";
import { isVerticalProject, projectPoster, projectVideo, type Project } from "@/data/projects";
import { hasMedia, videoMimeType } from "@/lib/media";
import { PauseIcon, PlayIcon } from "@/components/icons";

const backdrops = [
  "radial-gradient(120% 90% at 18% 16%, #3c2b66 0%, #14121c 46%, #09090d 100%)",
  "radial-gradient(120% 90% at 82% 8%, #4c314c 0%, #161218 50%, #09090d 100%)",
  "radial-gradient(110% 90% at 50% 100%, #2c2c36 0%, #101014 52%, #07070b 100%)",
  "radial-gradient(120% 90% at 72% 24%, #243056 0%, #12141c 50%, #09090d 100%)",
  "radial-gradient(120% 90% at 24% 84%, #312850 0%, #121018 52%, #09090d 100%)",
  "radial-gradient(120% 90% at 50% 0%, #3d2766 0%, #14101c 48%, #09090d 100%)",
];

const PLAY_EVENT = "portfolio-preview-play";

type ProjectPreviewProps = {
  project: Project;
  tone?: number;
  priority?: boolean;
};

export function ProjectPreview({ project, tone = 0, priority = false }: ProjectPreviewProps) {
  const videoSrc = projectVideo(project);
  const posterSrc = projectPoster(project);
  const hasVideo = hasMedia(videoSrc);
  const hasPoster = hasMedia(posterSrc);
  const vertical = isVerticalProject(project);
  const videoRef = useRef<HTMLVideoElement>(null);
  const [playing, setPlaying] = useState(false);

  useEffect(() => {
    const onOtherPlay = (event: Event) => {
      const id = (event as CustomEvent<string>).detail;
      if (id === project.slug) return;
      videoRef.current?.pause();
    };

    window.addEventListener(PLAY_EVENT, onOtherPlay);
    return () => window.removeEventListener(PLAY_EVENT, onOtherPlay);
  }, [project.slug]);

  function toggle() {
    const video = videoRef.current;
    if (!video) return;

    if (!video.paused) {
      video.pause();
      return;
    }

    window.dispatchEvent(new CustomEvent(PLAY_EVENT, { detail: project.slug }));
    video.muted = true;
    void video.play();
  }

  const ratio = vertical ? "aspect-[4/5]" : "aspect-video";
  const fit = vertical ? "object-contain" : "object-cover";

  return (
    <div className={`group/media relative overflow-hidden bg-black ${ratio}`}>
      {hasVideo ? (
        <video
          ref={videoRef}
          className={`absolute inset-0 h-full w-full bg-black ${fit}`}
          muted
          playsInline
          preload="metadata"
          poster={hasPoster ? posterSrc : undefined}
          aria-label={`${project.title} preview`}
          onPlay={() => setPlaying(true)}
          onPause={() => setPlaying(false)}
          onEnded={() => setPlaying(false)}
        >
          <source src={videoSrc} type={videoMimeType(videoSrc)} />
        </video>
      ) : hasPoster ? (
        <Image
          src={posterSrc}
          alt={`${project.title} still`}
          fill
          priority={priority}
          sizes="(max-width: 640px) 100vw, 50vw"
          className={fit}
        />
      ) : (
        <div className="absolute inset-0" style={{ background: backdrops[tone % backdrops.length] }} aria-hidden="true">
          <div className="absolute inset-0 bg-[linear-gradient(115deg,transparent_30%,rgba(255,255,255,0.05)_48%,transparent_62%)]" />
        </div>
      )}

      <div
        className="pointer-events-none absolute inset-x-0 bottom-0 h-16 bg-gradient-to-t from-black/55 to-transparent"
        aria-hidden="true"
      />

      {hasVideo ? (
        <button
          type="button"
          onClick={toggle}
          aria-pressed={playing}
          aria-label={playing ? `Pause ${project.title} preview` : `Play ${project.title} preview`}
          className="absolute inset-0 flex items-center justify-center focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-[-8px] focus-visible:outline-violet-300"
        >
          <span
            className={`flex h-14 w-14 items-center justify-center rounded-full border border-white/25 bg-black/50 text-white backdrop-blur-md transition duration-200 ${
              playing ? "opacity-0 group-hover/media:opacity-100 group-focus-within/media:opacity-100" : "opacity-100"
            }`}
          >
            {playing ? <PauseIcon className="h-4 w-4" /> : <PlayIcon className="h-5 w-5 translate-x-px" />}
          </span>
        </button>
      ) : null}
    </div>
  );
}
