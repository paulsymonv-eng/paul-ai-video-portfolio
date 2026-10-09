import { processSteps } from "@/data/site";
import { Container } from "@/components/Container";
import { SectionHeading } from "@/components/SectionHeading";

export function Process() {
  return (
    <section id="process" className="scroll-mt-24 py-12 sm:py-14">
      <Container>
        <SectionHeading title="Process" subtitle="A clear path from brief to a platform-ready creative." />
        <ol className="mt-8 grid gap-4 md:grid-cols-4">
          {processSteps.map((step) => (
            <li key={step.number} className="flex h-full flex-col rounded-[20px] border border-white/10 bg-[#121218] p-5">
              <p className="font-display text-sm font-semibold tracking-[0.14em] text-violet-300">{step.number}</p>
              <h3 className="mt-3 font-display text-xl font-semibold text-white">{step.title}</h3>
              <p className="mt-2 text-base leading-relaxed text-zinc-300">{step.description}</p>
            </li>
          ))}
        </ol>
      </Container>
    </section>
  );
}
