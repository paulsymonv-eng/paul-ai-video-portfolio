import Link from "next/link";
import type { Project } from "@/data/projects";
import { ArrowIcon } from "@/components/icons";
import { ProjectPreview } from "@/components/ProjectPreview";

type ProjectCardProps = {
  project: Project;
  index?: number;
  priority?: boolean;
  feature?: boolean;
  showTags?: boolean;
};

export function ProjectCard({
  project,
  index = 0,
  priority = false,
  feature = false,
  showTags = true,
}: ProjectCardProps) {
  const tags = project.chips.slice(0, 4);

  const media = (
    <div className="overflow-hidden bg-black">
      <div className="transition duration-200 ease-out group-hover:scale-[1.015]">
        <ProjectPreview project={project} tone={index} priority={priority} />
      </div>
    </div>
  );

  const copy = (
    <div className={`flex flex-1 flex-col px-5 py-5 sm:px-6 ${feature ? "md:h-full md:justify-center" : ""}`}>
      <p className="text-xs font-medium tracking-[0.16em] text-violet-300 uppercase">{project.category}</p>
      <h3
        className={`mt-2 font-display font-semibold tracking-tight text-white ${
          feature
            ? "text-[1.7rem] leading-tight sm:text-4xl"
            : "min-h-[3.5rem] text-[22px] leading-tight sm:min-h-[3.75rem] sm:text-[24px]"
        }`}
      >
        <Link href={`/work/${project.slug}`} className="transition duration-200 hover:text-white/80">
          {project.title}
        </Link>
      </h3>
      <p
        className={`mt-3 text-[15px] leading-relaxed text-zinc-300 ${
          feature ? "" : "line-clamp-2 min-h-[3.05rem]"
        }`}
      >
        {project.summary}
      </p>
      {showTags && tags.length > 0 ? (
        <ul className={`mt-4 flex flex-wrap content-start gap-2 ${feature ? "" : "min-h-16"}`}>
          {tags.map((chip) => (
            <li
              key={chip}
              className="inline-flex h-7 items-center rounded-full border border-white/10 bg-white/[0.04] px-2.5 text-xs text-zinc-200"
            >
              {chip}
            </li>
          ))}
        </ul>
      ) : null}
      <Link
        href={`/work/${project.slug}`}
        className={`${feature ? "" : "mt-auto"} inline-flex min-h-11 items-center gap-2 pt-4 text-sm font-medium text-white`}
      >
        View Project
        <ArrowIcon className="h-4 w-4 shrink-0 transition duration-200 group-hover:translate-x-1" />
      </Link>
    </div>
  );

  return (
    <article
      className={`group h-full overflow-hidden rounded-[22px] border border-white/10 bg-[#121218] transition duration-200 hover:-translate-y-0.5 hover:border-violet-300/45 ${
        feature ? "grid md:grid-cols-[minmax(240px,420px)_minmax(0,1fr)]" : "flex flex-col"
      }`}
    >
      {media}
      {copy}
    </article>
  );
}
