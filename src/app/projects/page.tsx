import BlurFade from "@/components/magicui/blur-fade";
import { ProjectCard } from "@/components/project-card";
import { DATA } from "@/data/resume";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Projects",
  description: "A showcase of my recent work and projects.",
};

const BLUR_FADE_DELAY = 0.04;

export default function ProjectsPage() {
  return (
    <main className="flex flex-col min-h-[100dvh] gap-y-10 pt-12 md:pt-24 pb-24">
      <section id="projects">
        <div className="flex min-h-0 flex-col gap-y-8">
          <BlurFade delay={BLUR_FADE_DELAY}>
            <div className="flex flex-col gap-y-3 items-center justify-center">
              <h1 className="text-3xl font-bold tracking-tighter sm:text-4xl text-center">All Projects</h1>
              <p className="text-muted-foreground md:text-lg/relaxed lg:text-base/relaxed xl:text-lg/relaxed text-balance text-center max-w-xl mx-auto">
                A complete list of my past work, client projects, and personal applications.
              </p>
            </div>
          </BlurFade>
          
          <div className="grid grid-cols-1 gap-4 sm:grid-cols-2 max-w-[800px] mx-auto auto-rows-fr">
            {DATA.projects.map((project, id) => (
              <BlurFade
                key={project.title}
                delay={BLUR_FADE_DELAY * 3 + id * 0.05}
                className="h-full"
              >
                <ProjectCard
                  href={project.href}
                  key={project.title}
                  title={project.title}
                  description={project.description}
                  dates={project.dates}
                  tags={project.technologies}
                  image={project.image}
                  video={project.video}
                  links={project.links}
                />
              </BlurFade>
            ))}
          </div>
        </div>
      </section>
    </main>
  );
}
