import { profile } from "@/data/site";
import { hasMedia, videoMimeType } from "@/lib/media";
import { Button } from "@/components/Button";

export function Hero() {
  const { showreel } = profile;
  const hasVideo = hasMedia(showreel.video);
  const hasPoster = hasMedia(showreel.poster);

  return (
    <section className="relative">
      <div className="mx-auto w-full max-w-[1240px] px-5 pt-8 pb-2 sm:px-6 sm:pt-12 lg:px-16 lg:pt-14">
        <div className={hasVideo ? "grid items-center gap-8 lg:grid-cols-[minmax(0,1.1fr)_minmax(0,0.9fr)]" : ""}>
          <div className="max-w-3xl">
            <p className="text-xs font-medium tracking-[0.18em] text-violet-300 uppercase sm:text-sm">
              {profile.eyebrow}
            </p>
            <h1 className="mt-3 max-w-full font-display text-[clamp(1.7rem,6.4vw,4.25rem)] leading-[1.05] font-semibold tracking-tight text-balance text-white">
              <span className="block">AI Video Editor &</span>
              <span className="block">AI Creative Specialist</span>
            </h1>
            <p className="mt-5 max-w-2xl text-base leading-relaxed text-zinc-300 sm:text-lg">
              {profile.heroDescription}
            </p>
            <div className="mt-6 flex flex-col gap-3 sm:flex-row sm:items-center">
              <Button href="/#work" className="w-full sm:w-auto">
                View Selected Work
              </Button>
              <Button href="/#contact" variant="secondary" className="w-full sm:w-auto">
                Hire Me
              </Button>
            </div>
            <p className="mt-5 flex flex-wrap items-center gap-x-3 gap-y-1.5 text-[15px] leading-relaxed text-zinc-300">
              <span className="inline-flex items-center gap-2">
                <span className="h-1.5 w-1.5 rounded-full bg-emerald-400" aria-hidden="true" />
                {profile.availability}
              </span>
              <span className="text-zinc-500" aria-hidden="true">
                ·
              </span>
              <span>{profile.locationLine}</span>
            </p>
          </div>

          {hasVideo ? (
            <div className="overflow-hidden rounded-[22px] border border-white/10 bg-[#101014]">
              <video
                className="aspect-video w-full bg-black object-contain"
                controls
                playsInline
                preload="metadata"
                poster={hasPoster ? showreel.poster : undefined}
                aria-label="Showreel"
              >
                <source src={showreel.video} type={videoMimeType(showreel.video)} />
              </video>
            </div>
          ) : null}
        </div>
      </div>
    </section>
  );
}
