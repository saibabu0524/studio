import Image from "next/image";
import Link from "next/link";
import type { Project } from "@/types";
import { Card, CardContent, CardFooter, CardHeader, CardTitle, CardDescription } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Github, Play } from "lucide-react";

interface ProjectCardProps {
  project: Project;
}

export function ProjectCard({ project }: ProjectCardProps) {
  return (
    <Card className="flex flex-col h-full overflow-hidden shadow-lg hover:shadow-xl transition-all duration-300 ease-in-out transform hover:-translate-y-1">
      <div className="relative w-full aspect-video">
        <Image
          src={project.imageUrl}
          alt={project.title}
          layout="fill"
          objectFit="cover"
          className="transition-transform duration-500 group-hover:scale-105"
          data-ai-hint={project.imageHint || "application screenshot"}
        />
      </div>
      <CardHeader>
        <CardTitle className="text-xl md:text-2xl">{project.title}</CardTitle>
        <CardDescription className="text-sm h-16 overflow-hidden text-ellipsis"> {/* Fixed height for description */}
          {project.description}
        </CardDescription>
      </CardHeader>
      <CardContent className="flex-grow">
        <div className="mb-4">
          <h4 className="text-sm font-semibold mb-2 text-muted-foreground">Technologies Used:</h4>
          <div className="flex flex-wrap gap-2">
            {project.technologies.map((tech) => (
              <Badge key={tech} variant="secondary" className="text-xs">{tech}</Badge>
            ))}
          </div>
        </div>
      </CardContent>
      <CardFooter className="flex flex-col sm:flex-row justify-start gap-2 pt-0 mt-auto">
        {project.githubUrl && (
          <Button variant="outline" size="sm" asChild>
            <Link href={project.githubUrl} target="_blank" rel="noopener noreferrer">
              <Github className="mr-2 h-4 w-4" /> GitHub
            </Link>
          </Button>
        )}
        {project.playStoreUrl && (
          <Button variant="default" size="sm" asChild>
            <Link href={project.playStoreUrl} target="_blank" rel="noopener noreferrer">
              <Play className="mr-2 h-4 w-4" /> Play Store
            </Link>
          </Button>
        )}
      </CardFooter>
    </Card>
  );
}
