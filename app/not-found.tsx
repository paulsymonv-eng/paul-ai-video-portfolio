import { Button } from "@/components/Button";

export default function NotFound() {
  return (
    <main id="main" className="px-5 py-28 sm:px-8">
      <div className="mx-auto max-w-xl text-center">
        <p className="text-xs tracking-[0.2em] text-violet-300 uppercase">404</p>
        <h1 className="mt-4 font-display text-4xl font-medium tracking-tight text-white">
          This page is not in the reel.
        </h1>
        <p className="mt-4 text-zinc-400">The link may be outdated. The work is still here.</p>
        <div className="mt-8 flex justify-center">
          <Button href="/#work">View My Work</Button>
        </div>
      </div>
    </main>
  );
}
