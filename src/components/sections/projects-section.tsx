
import { SectionWrapper } from "@/components/layout/section-wrapper";
import { ProjectCard } from "@/components/ui/project-card";
import { projects } from "@/lib/data";
import type { Project } from "@/types";

export function ProjectsSection() {
  return (
    <SectionWrapper id="projects" className="bg-secondary/30 dark:bg-secondary/20">
      <div className="text-center mb-12 motion-safe:animate-fade-in-up">
        <h2 className="text-3xl font-bold tracking-tight sm:text-4xl md:text-5xl">My Projects</h2>
        <p className="mt-4 text-lg text-muted-foreground" style={{ animationDelay: '0.1s' }}>A Selection of My Work</p>
      </div>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 gap-8">
        {projects.map((project: Project, index: number) => (
          <div 
            key={project.id} 
            className="motion-safe:animate-fade-in-up" 
            style={{ animationDelay: `${0.2 + index * 0.1}s` }}
          >
            <ProjectCard project={project} />
          </div>
        ))}
      </div>
    </SectionWrapper>
  );
}
