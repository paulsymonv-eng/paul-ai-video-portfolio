import type { Metadata } from "next";
import Link from "next/link";
import { notFound } from "next/navigation";
import { Suspense } from "react";
import { Button } from "@/components/Button";
import { Container } from "@/components/Container";
import { MediaFrame } from "@/components/MediaFrame";
import { ProjectCard } from "@/components/ProjectCard";
import { getProject, isVerticalProject, moreProjects, projects } from "@/data/projects";
import { profile } from "@/data/site";

type ProjectPageProps = {
  params: Promise<{ slug: string }>;
};

export function generateStaticParams() {
  return projects.map((project) => ({ slug: project.slug }));
}

export async function generateMetadata({ params }: ProjectPageProps): Promise<Metadata> {
  const { slug } = await params;
  const project = getProject(slug);

  if (!project) {
    return { title: "Project" };
  }

  return {
    title: project.title,
    description: project.description,
  };
}

export default function ProjectPage({ params }: ProjectPageProps) {
  return (
    <Suspense fallback={<ProjectFallback />}>
      <ProjectContent params={params} />
    </Suspense>
  );
}

function ProjectFallback() {
  return (
    <main id="main" className="px-5 py-12 sm:px-6 lg:px-16">
      <div className="mx-auto w-full max-w-[1240px]">
        <div className="h-4 w-40 rounded-full bg-white/10" />
        <div className="mt-8 h-12 w-2/3 max-w-xl rounded-xl bg-white/10" />
        <div className="mt-8 aspect-[4/5] max-w-[480px] rounded-[22px] border border-white/10 bg-[#121218]" />
      </div>
    </main>
  );
}

async function ProjectContent({ params }: ProjectPageProps) {
  const { slug } = await params;
  const project = getProject(slug);

  if (!project) {
    notFound();
  }

  const index = projects.findIndex((item) => item.slug === project.slug);
  const more = moreProjects(project.slug);
  const vertical = isVerticalProject(project);
  const summary = project.summary || project.description;
  const overview = project.fullDescription || project.description;
  const showOverview = overview.trim() !== summary.trim();
  const tools = project.tools ?? [];
  const services = project.filters?.length ? project.filters.join(" · ") : project.category;
  const aspect = project.aspectRatio ?? project.aspect;

  return (
    <main id="main" className="py-10 sm:py-12">
      <Container>
        <Link
          href="/#work"
          className="inline-flex min-h-11 items-center text-sm text-zinc-300 transition hover:text-white"
        >
          Back to Selected Work
        </Link>
        <p className="mt-6 text-xs font-medium tracking-[0.16em] text-violet-300 uppercase sm:text-sm">
          {project.category}
        </p>
        <h1 className="mt-3 max-w-4xl font-display text-4xl font-semibold tracking-tight text-white sm:text-5xl lg:text-6xl">
          {project.title}
        </h1>
        <p className="mt-4 max-w-3xl text-base leading-relaxed text-zinc-300 sm:text-lg">{summary}</p>

        <div
          className={`mt-8 items-start gap-6 lg:gap-10 ${
            vertical ? "grid lg:grid-cols-[480px_minmax(0,1fr)]" : "flex flex-col"
          }`}
        >
          <div className={vertical ? "mx-auto w-full max-w-[480px] lg:mx-0 lg:max-w-none" : "w-full"}>
            <div className="overflow-hidden rounded-[22px] border border-white/10 bg-[#101014]">
              <MediaFrame
                title={project.title}
                videoSrc={project.videoSrc || project.video}
                posterSrc={project.posterSrc || project.poster}
                orientation={project.orientation}
                aspect={aspect}
                tone={index}
                playVideo
                priority
                sizes={vertical ? "(max-width: 1024px) 100vw, 480px" : "(max-width: 1240px) 100vw, 1100px"}
              />
            </div>
          </div>
          <OverviewPanel
            format={vertical ? "9:16 Vertical" : "16:9 Landscape"}
            type={project.category}
            tools={tools}
            services={services}
            wide={!vertical}
          />
        </div>

        <div className="mt-10 grid gap-8 border-t border-white/10 pt-8 lg:grid-cols-2 lg:gap-12">
          {showOverview ? (
            <section className="lg:col-span-2">
              <SectionLabel>Overview</SectionLabel>
              <p className="mt-3 max-w-3xl text-base leading-relaxed text-zinc-300 sm:text-lg">{overview}</p>
            </section>
          ) : null}

          <section className={showOverview ? "" : "lg:col-span-2"}>
            <SectionLabel>What I Handled</SectionLabel>
            <ul className="mt-4 grid gap-x-8 sm:grid-cols-2">
              {project.handled.map((item) => (
                <li key={item} className="border-b border-white/8 py-3 text-base leading-relaxed text-zinc-200">
                  {item}
                </li>
              ))}
            </ul>
          </section>

          {project.approach && project.approach.length > 0 ? (
            <section className="lg:col-span-2">
              <SectionLabel>Creative Approach</SectionLabel>
              <ul className="mt-4 grid gap-x-8 sm:grid-cols-2">
                {project.approach.map((item) => (
                  <li key={item} className="border-b border-white/8 py-3 text-base leading-relaxed text-zinc-200">
                    {item}
                  </li>
                ))}
              </ul>
            </section>
          ) : null}

          {tools.length > 0 ? (
            <section>
              <SectionLabel>Tools Used</SectionLabel>
              <ul className="mt-4 flex flex-wrap gap-2">
                {tools.map((tool) => (
                  <li
                    key={tool}
                    className="rounded-full border border-white/10 bg-white/[0.04] px-3 py-1.5 text-sm text-zinc-100"
                  >
                    {tool}
                  </li>
                ))}
              </ul>
            </section>
          ) : null}

          <section>
            <SectionLabel>Skills</SectionLabel>
            <ul className="mt-4 flex flex-wrap gap-2">
              {project.chips.map((chip) => (
                <li
                  key={chip}
                  className="rounded-full border border-white/10 bg-white/[0.04] px-3 py-1.5 text-sm text-zinc-100"
                >
                  {chip}
                </li>
              ))}
            </ul>
          </section>
        </div>

        <div className="mt-10 flex flex-col gap-3 sm:flex-row">
          <Button href="/#contact">Hire Me</Button>
          <Button href={`mailto:${profile.email}`} variant="secondary">
            Email Me
          </Button>
        </div>

        {more.length > 0 ? (
          <div className="mt-12 border-t border-white/10 pt-8">
            <h2 className="font-display text-3xl font-semibold tracking-tight text-white sm:text-4xl">
              More Selected Work
            </h2>
            <div className="mt-6 grid grid-cols-1 gap-5 sm:grid-cols-2 sm:gap-6">
              {more.map((item) => (
                <ProjectCard
                  key={item.slug}
                  project={item}
                  index={projects.findIndex((entry) => entry.slug === item.slug)}
                  showTags={false}
                />
              ))}
            </div>
          </div>
        ) : null}
      </Container>
    </main>
  );
}

function OverviewPanel({
  format,
  type,
  tools,
  services,
  wide = false,
}: {
  format: string;
  type: string;
  tools: string[];
  services: string;
  wide?: boolean;
}) {
  const facts = [
    { label: "Role", value: "AI Video Editor / AI Creative Specialist" },
    { label: "Format", value: format },
    { label: "Type", value: type },
    ...(tools.length > 0 ? [{ label: "Tools", value: tools.join(", ") }] : []),
    { label: "Services", value: services },
  ];

  return (
    <aside className="rounded-[22px] border border-white/10 bg-[#121218] p-6 sm:p-8">
      <h2 className="font-display text-2xl font-semibold tracking-tight text-white">Project overview</h2>
      <dl className={`mt-6 ${wide ? "grid gap-x-10 sm:grid-cols-2" : "divide-y divide-white/10"}`}>
        {facts.map((fact) => (
          <div key={fact.label} className="grid gap-1 py-4 sm:grid-cols-[7.5rem_minmax(0,1fr)] sm:gap-4">
            <dt className="text-xs font-medium tracking-[0.14em] text-violet-300 uppercase">{fact.label}</dt>
            <dd className="text-base leading-relaxed text-zinc-100">{fact.value}</dd>
          </div>
        ))}
      </dl>
    </aside>
  );
}

function SectionLabel({ children }: { children: React.ReactNode }) {
  return <h2 className="font-display text-2xl font-semibold tracking-tight text-white">{children}</h2>;
}
