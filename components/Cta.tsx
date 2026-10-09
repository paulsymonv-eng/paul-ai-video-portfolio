import { profile } from "@/data/site";
import { Button } from "@/components/Button";

export function Cta() {
  return (
    <section id="contact" className="scroll-mt-24 px-5 py-12 sm:px-6 sm:py-14 lg:px-16">
      <div className="mx-auto w-full max-w-[1240px] rounded-[22px] border border-violet-400/20 bg-[#121218] px-6 py-8 sm:px-10 sm:py-9">
        <h2 className="max-w-3xl font-display text-4xl font-semibold tracking-tight text-white sm:text-5xl">
          Have a project in mind?
        </h2>
        <p className="mt-4 max-w-2xl text-base leading-relaxed text-zinc-300 sm:text-lg">
          Let&apos;s create AI-powered content that looks polished, realistic, and ready to publish.
        </p>
        <div className="mt-6 flex flex-col gap-3 sm:flex-row">
          <Button href="/#contact">Hire Me</Button>
          <Button href="mailto:paulsymonv@gmail.com" variant="secondary">
            Email Me
          </Button>
        </div>
        <a
          href="mailto:paulsymonv@gmail.com"
          className="mt-5 inline-flex min-h-11 items-center text-base text-white underline decoration-violet-400/70 underline-offset-4"
        >
          {profile.email}
        </a>
      </div>
    </section>
  );
}
