"use client";

import { useMemo, useState } from "react";
import { byFeaturedOrder, projects, workFilters, type WorkFilterOption } from "@/data/projects";
import { Container } from "@/components/Container";
import { ProjectCard } from "@/components/ProjectCard";
import { SectionHeading } from "@/components/SectionHeading";

export function FeaturedWork() {
  const [filter, setFilter] = useState<WorkFilterOption>("All");
  const visible = useMemo(
    () =>
      byFeaturedOrder(
        projects.filter((project) => {
          if (project.featured === false) return false;
          if (filter === "All") return true;
          return project.filters?.includes(filter) ?? false;
        }),
      ),
    [filter],
  );

  return (
    <section id="work" className="scroll-mt-24 py-12 sm:py-14">
      <Container>
        <div className="reveal">
          <SectionHeading
            title="Selected Work"
            subtitle="AI-powered advertising, product content, UGC, and cinematic video production."
          />
          <div
            className="mt-8 flex gap-2 overflow-x-auto pb-1"
            role="toolbar"
            aria-label="Filter projects"
          >
            {workFilters.map((item) => {
              const selected = filter === item;
              return (
                <button
                  key={item}
                  type="button"
                  aria-pressed={selected}
                  onClick={() => setFilter(item)}
                  className={`inline-flex min-h-11 shrink-0 items-center rounded-full border px-4 text-sm transition ${
                    selected
                      ? "border-violet-400/40 bg-violet-600 text-white"
                      : "border-white/10 bg-white/[0.03] text-zinc-300 hover:border-white/20 hover:text-white"
                  }`}
                >
                  {item}
                </button>
              );
            })}
          </div>
        </div>
        <div className="mt-8 grid grid-cols-1 items-stretch gap-5 sm:grid-cols-2 sm:gap-6">
          {visible.map((project) => {
            const feature = project.slug === "walking-pad-ecommerce-ad";
            return (
              <div key={project.slug} className={feature ? "sm:col-span-2" : ""}>
                <ProjectCard
                  project={project}
                  index={projects.findIndex((entry) => entry.slug === project.slug)}
                  priority={feature}
                  feature={feature}
                />
              </div>
            );
          })}
        </div>
        {visible.length === 0 ? (
          <p className="mt-8 text-sm text-zinc-400">No projects in this category yet.</p>
        ) : null}
      </Container>
    </section>
  );
}
