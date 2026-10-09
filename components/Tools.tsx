import { primaryTools, supportingTools, toolsNote } from "@/data/site";
import { Container } from "@/components/Container";
import { SectionHeading } from "@/components/SectionHeading";

export function Tools() {
  return (
    <section id="tools" className="scroll-mt-24 py-12 sm:py-14">
      <Container>
        <div className="rounded-[22px] border border-white/10 bg-[#121218] px-6 py-7 sm:px-8 sm:py-8">
          <SectionHeading title="Tools" subtitle={toolsNote} />
          <ul className="mt-8 grid grid-cols-2 gap-2.5 sm:grid-cols-4">
            {primaryTools.map((tool) => (
              <li key={tool}>
                <span className="inline-flex h-11 w-full items-center justify-center rounded-full border border-white/12 bg-white/[0.04] px-3 text-center text-sm font-medium text-white">
                  {tool}
                </span>
              </li>
            ))}
          </ul>
          <p className="mt-8 text-sm font-medium tracking-[0.14em] text-zinc-400 uppercase">Additional</p>
          <ul className="mt-3 grid grid-cols-2 gap-2.5 sm:grid-cols-3">
            {supportingTools.map((tool) => (
              <li key={tool}>
                <span className="inline-flex h-10 w-full items-center justify-center rounded-full border border-white/10 px-3 text-center text-sm text-zinc-200">
                  {tool}
                </span>
              </li>
            ))}
          </ul>
        </div>
      </Container>
    </section>
  );
}
