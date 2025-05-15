
// src/app/projects/[id]/page.tsx
import { projects } from '@/lib/data';
import type { Project } from '@/types';
import Image from 'next/image';
import Link from 'next/link';
import { notFound } from 'next/navigation';
import { Badge } from '@/components/ui/badge';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardFooter, CardHeader, CardTitle } from '@/components/ui/card';
import { Github, Play, ArrowLeft } from 'lucide-react';
import { SectionWrapper } from '@/components/layout/section-wrapper';
import { personalInfo } from '@/lib/data';

interface ProjectDetailPageProps {
  params: {
    id: string;
  };
}

export async function generateStaticParams() {
  return projects.map((project) => ({
    id: project.id,
  }));
}

export async function generateMetadata({ params }: ProjectDetailPageProps) {
  await Promise.resolve(); // Ensure params properties are accessed after a microtask tick
  const project = projects.find((p) => p.id === params.id);

  if (!project) {
    return {
      title: `Project Not Found | ${personalInfo.name}`,
      description: `The requested project could not be found.`,
    };
  }

  return {
    title: `${project.title} - Project Details | ${personalInfo.name}`,
    description: project.longDescription || project.description,
    openGraph: {
        title: `${project.title} - Project Details | ${personalInfo.name}`,
        description: project.longDescription || project.description,
        images: [
          {
            url: project.imageUrl,
            width: 1200,
            height: 630,
            alt: project.title,
          },
        ],
      },
  };
}

export default async function ProjectDetailPage({ params }: ProjectDetailPageProps) {
  await Promise.resolve(); // Ensure params properties are accessed after a microtask tick
  const project = projects.find((p) => p.id === params.id);

  if (!project) {
    notFound();
  }

  return (
    <SectionWrapper className="py-12 md:py-16 lg:py-20 bg-background motion-safe:animate-fade-in-up">
      <div className="container mx-auto px-4 md:px-6 max-w-4xl">
        <div className="mb-8 motion-safe:animate-fade-in-up" style={{ animationDelay: '0.1s' }}>
          <Button variant="outline" asChild>
            <Link href="/#projects" className="inline-flex items-center">
              <ArrowLeft className="mr-2 h-4 w-4" />
              Back to All Projects
            </Link>
          </Button>
        </div>

        <Card className="overflow-hidden shadow-xl border border-border/40 motion-safe:animate-fade-in-up" style={{ animationDelay: '0.2s' }}>
          <div className="relative w-full aspect-[16/9] md:aspect-[2/1] bg-muted/30">
            <Image
              src={project.imageUrl}
              alt={project.title}
              fill
              className="object-cover"
              data-ai-hint={project.imageHint || "application interface"}
              priority={true}
              sizes="(max-width: 896px) 100vw, 896px"
            />
          </div>
          <CardHeader className="p-6">
            <CardTitle className="text-3xl md:text-4xl font-bold mb-2 text-primary">{project.title}</CardTitle>
            <p className="text-sm text-muted-foreground">Completed: {project.date}</p>
          </CardHeader>
          <CardContent className="p-6 space-y-6">
            <div className="motion-safe:animate-fade-in-up" style={{ animationDelay: '0.3s' }}>
              <h3 className="text-xl font-semibold mb-3 text-foreground/90">About this Project</h3>
              <p className="text-muted-foreground leading-relaxed whitespace-pre-line text-justify">
                {project.longDescription || project.description}
              </p>
            </div>

            <div className="motion-safe:animate-fade-in-up" style={{ animationDelay: '0.4s' }}>
              <h4 className="text-lg font-semibold mb-3 text-foreground/90">Core Technologies</h4>
              <div className="flex flex-wrap gap-2">
                {project.technologies.map((tech) => (
                  <Badge key={tech} variant="secondary" className="text-sm px-3 py-1 shadow-sm">
                    {tech}
                  </Badge>
                ))}
              </div>
            </div>
          </CardContent>
          {(project.githubUrl || project.playStoreUrl) && (
            <CardFooter className="p-6 flex flex-col sm:flex-row justify-start gap-3 border-t border-border/40 motion-safe:animate-fade-in-up" style={{ animationDelay: '0.5s' }}>
              {project.githubUrl && (
                <Button variant="outline" asChild className="w-full sm:w-auto shadow motion-safe:hover:shadow-md transition-shadow motion-safe:hover:-translate-y-px">
                  <Link href={project.githubUrl} target="_blank" rel="noopener noreferrer">
                    <Github className="mr-2 h-4 w-4" /> View on GitHub
                  </Link>
                </Button>
              )}
              {project.playStoreUrl && (
                <Button variant="default" asChild className="w-full sm:w-auto shadow motion-safe:hover:shadow-md transition-shadow motion-safe:hover:-translate-y-px">
                  <Link href={project.playStoreUrl} target="_blank" rel="noopener noreferrer">
                    <Play className="mr-2 h-4 w-4" /> View on Play Store
                  </Link>
                </Button>
              )}
            </CardFooter>
          )}
        </Card>
      </div>
    </SectionWrapper>
  );
}
