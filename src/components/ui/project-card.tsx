import Image from "next/image";
import Link from "next/link";
import type { Project } from "@/types";
import { Card, CardContent, CardFooter, CardHeader, CardTitle, CardDescription } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Github, Eye } from "lucide-react";

interface ProjectCardProps {
  project: Project;
}

export function ProjectCard({ project }: ProjectCardProps) {
  return (
    <Card className="flex flex-col h-full overflow-hidden shadow-lg hover:shadow-xl transition-all duration-300 ease-in-out transform hover:-translate-y-1 group border border-border/40">
      <Link href={`/projects/${project.id}`} className="block cursor-pointer" aria-label={`View details for ${project.title}`}>
        <div className="relative w-full aspect-video overflow-hidden bg-muted/30">
          <Image
            src={project.imageUrl}
            alt={project.title}
            fill
            className="object-cover transition-transform duration-500 group-hover:scale-105"
            data-ai-hint={project.imageHint || "application screenshot"}
            sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
          />
        </div>
      </Link>
      <CardHeader className="p-4 md:p-6">
        <Link href={`/projects/${project.id}`} className="hover:text-primary transition-colors">
          <CardTitle className="text-xl md:text-2xl line-clamp-1">{project.title}</CardTitle>
        </Link>
        <CardDescription className="text-sm h-12 md:h-16 overflow-hidden text-ellipsis mt-1 line-clamp-2 md:line-clamp-3">
          {project.description}
        </CardDescription>
      </CardHeader>
      <CardContent className="flex-grow p-4 md:p-6">
        <div className="mb-4">
          <h4 className="text-xs font-semibold mb-2 text-muted-foreground uppercase tracking-wider">Technologies:</h4>
          <div className="flex flex-wrap gap-2">
            {project.technologies.slice(0, 4).map((tech) => ( // Show up to 4 technologies
              <Badge key={tech} variant="secondary" className="text-xs shadow-sm">{tech}</Badge>
            ))}
            {project.technologies.length > 4 && (
              <Badge variant="outline" className="text-xs shadow-sm">+{project.technologies.length - 4} more</Badge>
            )}
          </div>
        </div>
      </CardContent>
      <CardFooter className="flex flex-col sm:flex-row justify-start gap-2 p-4 md:p-6 pt-0 mt-auto">
        <Button variant="default" size="sm" asChild className="w-full sm:w-auto shadow hover:shadow-md transition-shadow">
          <Link href={`/projects/${project.id}`}>
            <Eye className="mr-2 h-4 w-4" /> View Details
          </Link>
        </Button>
        {project.githubUrl && (
          <Button variant="outline" size="sm" asChild className="w-full sm:w-auto shadow hover:shadow-md transition-shadow">
            <Link href={project.githubUrl} target="_blank" rel="noopener noreferrer">
              <Github className="mr-2 h-4 w-4" /> GitHub
            </Link>
          </Button>
        )}
      </CardFooter>
    </Card>
  );
}
