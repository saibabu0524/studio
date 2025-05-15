
import { SectionWrapper } from "@/components/layout/section-wrapper";
import { Card, CardContent, CardHeader, CardTitle, CardDescription } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { workExperiences } from "@/lib/data";
import type { WorkExperience } from "@/types";
import Image from "next/image";
import { Briefcase, CalendarDays, Building } from "lucide-react";

interface WorkExperienceCardProps {
  experience: WorkExperience;
  index: number;
}

function WorkExperienceCard({ experience, index }: WorkExperienceCardProps) {
  return (
    <Card 
      className="overflow-hidden shadow-lg motion-safe:hover:shadow-xl transition-all duration-300 ease-in-out motion-safe:transform motion-safe:hover:-translate-y-1 group border border-border/40 motion-safe:animate-fade-in-up"
      style={{ animationDelay: `${0.2 + index * 0.15}s` }}
    >
      <CardHeader className="p-4 md:p-6 flex flex-col sm:flex-row items-start sm:items-center gap-4">
        {experience.logoUrl && (
          <div className="relative w-16 h-16 sm:w-20 sm:h-20 shrink-0 rounded-md overflow-hidden border border-border/20 bg-muted/30">
            <Image
              src={experience.logoUrl}
              alt={`${experience.company} logo`}
              fill
              className="object-contain p-1"
              data-ai-hint={experience.logoHint || "company logo"}
              sizes="80px"
            />
          </div>
        )}
        <div className="flex-grow">
          <CardTitle className="text-xl md:text-2xl text-primary group-hover:text-primary/90 transition-colors">
            <Briefcase className="inline-block mr-2 h-5 w-5 align-bottom" />
            {experience.role}
          </CardTitle>
          <CardDescription className="text-base text-foreground/80 mt-1">
            <Building className="inline-block mr-2 h-4 w-4 align-bottom" />
            {experience.company}
          </CardDescription>
          <CardDescription className="text-sm text-muted-foreground mt-1">
            <CalendarDays className="inline-block mr-2 h-4 w-4 align-bottom" />
            {experience.duration}
          </CardDescription>
        </div>
      </CardHeader>
      <CardContent className="p-4 md:p-6 space-y-4">
        <div>
          <h4 className="text-md font-semibold mb-2 text-foreground/90">Responsibilities:</h4>
          <ul className="list-disc list-inside space-y-1 text-muted-foreground text-sm">
            {experience.responsibilities.map((resp, i) => (
              <li key={i}>{resp}</li>
            ))}
          </ul>
        </div>
        {experience.contributions && experience.contributions.length > 0 && (
          <div>
            <h4 className="text-md font-semibold mb-2 text-foreground/90">Key Contributions:</h4>
            <ul className="list-disc list-inside space-y-1 text-muted-foreground text-sm">
              {experience.contributions.map((contrib, i) => (
                <li key={i}>{contrib}</li>
              ))}
            </ul>
          </div>
        )}
        <div>
          <h4 className="text-md font-semibold mb-2 text-foreground/90">Tech Stack:</h4>
          <div className="flex flex-wrap gap-2">
            {experience.techStack.map((tech) => (
              <Badge key={tech} variant="secondary" className="text-xs shadow-sm">{tech}</Badge>
            ))}
          </div>
        </div>
      </CardContent>
    </Card>
  );
}

export function WorkExperienceSection() {
  if (!workExperiences || workExperiences.length === 0) {
    return null; // Don't render the section if there's no experience data
  }

  return (
    <SectionWrapper id="experience" className="bg-secondary/30 dark:bg-secondary/20">
      <div className="text-center mb-12 motion-safe:animate-fade-in-up">
        <h2 className="text-3xl font-bold tracking-tight sm:text-4xl md:text-5xl">Work Experience</h2>
        <p className="mt-4 text-lg text-muted-foreground" style={{ animationDelay: '0.1s' }}>My Professional Journey</p>
      </div>
      <div className="space-y-8 max-w-4xl mx-auto">
        {workExperiences.map((exp: WorkExperience, index: number) => (
          <WorkExperienceCard key={exp.id} experience={exp} index={index} />
        ))}
      </div>
    </SectionWrapper>
  );
}
