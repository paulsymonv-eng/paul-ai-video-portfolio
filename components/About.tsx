import { aboutHeading, aboutParagraphs, skills } from "@/data/site";
import { Container } from "@/components/Container";

export function About() {
  return (
    <section id="about" className="scroll-mt-24 py-12 sm:py-14">
      <Container>
        <div className="max-w-3xl">
          <h2 className="font-display text-4xl font-semibold tracking-tight text-white sm:text-5xl">
            {aboutHeading}
          </h2>
          <div className="mt-4 space-y-4 text-base leading-relaxed text-zinc-300">
            {aboutParagraphs.map((paragraph) => (
              <p key={paragraph}>{paragraph}</p>
            ))}
          </div>
        </div>
        <h3 className="mt-8 font-display text-2xl font-semibold tracking-tight text-white">Core Skills</h3>
        <ul className="mt-4 grid grid-cols-2 gap-3 lg:grid-cols-4">
          {skills.map((skill) => (
            <li
              key={skill}
              className="rounded-[18px] border border-white/10 bg-[#121218] px-4 py-4 text-base font-medium leading-snug text-white"
            >
              {skill}
            </li>
          ))}
        </ul>
      </Container>
    </section>
  );
}
