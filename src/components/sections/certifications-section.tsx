
import { SectionWrapper } from "@/components/layout/section-wrapper";
import { Card, CardContent, CardFooter, CardHeader, CardTitle, CardDescription } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { certifications } from "@/lib/data";
import type { Certification } from "@/types";
import Image from "next/image";
import Link from "next/link";
import { Award, CalendarDays, Building, ExternalLink } from "lucide-react";

interface CertificationCardProps {
  certification: Certification;
  index: number;
}

function CertificationCard({ certification, index }: CertificationCardProps) {
  return (
    <Card 
      className="flex flex-col h-full overflow-hidden shadow-lg motion-safe:hover:shadow-xl transition-all duration-300 ease-in-out motion-safe:transform motion-safe:hover:-translate-y-1 group border border-border/40 motion-safe:animate-fade-in-up"
      style={{ animationDelay: `${0.2 + index * 0.1}s` }}
    >
      {certification.imageUrl && (
        <div className="relative w-full aspect-[16/9] bg-muted/30 overflow-hidden">
          <Image
            src={certification.imageUrl}
            alt={certification.title}
            fill
            className="object-contain transition-transform duration-500 motion-safe:group-hover:scale-105"
            data-ai-hint={certification.imageHint || "certificate image"}
            sizes="(max-width: 767px) 100vw, (max-width: 1023px) 50vw, 33vw"
          />
        </div>
      )}
      <CardHeader className="p-4 md:p-6">
        <CardTitle className="text-xl md:text-2xl text-primary group-hover:text-primary/90 transition-colors">
          <Award className="inline-block mr-2 h-6 w-6 align-bottom" />
          {certification.title}
        </CardTitle>
        <CardDescription className="text-sm text-muted-foreground mt-1">
          <Building className="inline-block mr-2 h-4 w-4 align-bottom" />
          Issued by: {certification.issuer}
        </CardDescription>
        <CardDescription className="text-sm text-muted-foreground mt-1">
          <CalendarDays className="inline-block mr-2 h-4 w-4 align-bottom" />
          Date: {certification.date}
        </CardDescription>
      </CardHeader>
      {certification.description && (
        <CardContent className="flex-grow p-4 md:p-6 pt-0">
          <p className="text-muted-foreground text-sm line-clamp-3">{certification.description}</p>
        </CardContent>
      )}
      {certification.credentialUrl && certification.credentialUrl !== '#' && (
        <CardFooter className="p-4 md:p-6 pt-0 mt-auto">
          <Button variant="outline" size="sm" asChild className="w-full shadow motion-safe:hover:shadow-md transition-shadow motion-safe:hover:-translate-y-px">
            <Link href={certification.credentialUrl} target="_blank" rel="noopener noreferrer">
              <ExternalLink className="mr-2 h-4 w-4" /> View Credential
            </Link>
          </Button>
        </CardFooter>
      )}
    </Card>
  );
}

export function CertificationsSection() {
  return (
    <SectionWrapper id="certifications" className="bg-background">
      <div className="text-center mb-12 motion-safe:animate-fade-in-up">
        <h2 className="text-3xl font-bold tracking-tight sm:text-4xl md:text-5xl">Certifications & Achievements</h2>
        <p className="mt-4 text-lg text-muted-foreground" style={{ animationDelay: '0.1s' }}>My Credentials and Recognitions</p>
      </div>
      {certifications.length > 0 ? (
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {certifications.map((cert: Certification, index: number) => (
            <CertificationCard key={cert.id} certification={cert} index={index} />
          ))}
        </div>
      ) : (
        <p 
          className="text-center text-muted-foreground motion-safe:animate-fade-in-up"
          style={{ animationDelay: '0.2s' }}
        >
          No certifications to display at the moment.
        </p>
      )}
    </SectionWrapper>
  );
}
