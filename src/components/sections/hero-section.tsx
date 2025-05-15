
import Image from "next/image";
import Link from "next/link";
import { Button } from "@/components/ui/button";
import { SectionWrapper } from "@/components/layout/section-wrapper";
import { personalInfo } from "@/lib/data";
import { ArrowDown } from "lucide-react";

export function HeroSection() {
  return (
    <SectionWrapper id="hero" className="bg-gradient-to-b from-background to-secondary/30 dark:from-background dark:to-secondary/20 min-h-[calc(100vh-4rem)] flex items-center">
      <div className="grid grid-cols-1 md:grid-cols-2 gap-8 md:gap-12 items-center">
        <div className="space-y-6 text-center md:text-left">
          <h1 
            className="text-4xl font-bold tracking-tight sm:text-5xl md:text-6xl lg:text-7xl motion-safe:animate-fade-in-up"
            style={{ animationDelay: '0.1s' }}
          >
            {personalInfo.name}
          </h1>
          <p 
            className="text-2xl font-medium text-primary sm:text-3xl motion-safe:animate-fade-in-up"
            style={{ animationDelay: '0.2s' }}
          >
            {personalInfo.title}
          </p>
          <p 
            className="text-lg text-muted-foreground max-w-xl mx-auto md:mx-0 motion-safe:animate-fade-in-up"
            style={{ animationDelay: '0.3s' }}
          >
            {personalInfo.heroSummary}
          </p>
          <div 
            className="flex flex-col sm:flex-row gap-4 justify-center md:justify-start motion-safe:animate-fade-in-up"
            style={{ animationDelay: '0.4s' }}
          >
            <Button size="lg" asChild className="shadow-lg hover:shadow-xl transition-shadow motion-safe:hover:-translate-y-0.5">
              <Link href="#projects">View Projects</Link>
            </Button>
            <Button size="lg" variant="outline" asChild className="shadow-lg hover:shadow-xl transition-shadow motion-safe:hover:-translate-y-0.5">
              <Link href="#contact">Contact Me</Link>
            </Button>
          </div>
        </div>
        <div 
          className="relative group aspect-square max-w-md mx-auto md:max-w-none motion-safe:animate-fade-in-up"
          style={{ animationDelay: '0.5s' }}
        >
          <div className="absolute -inset-0.5 bg-gradient-to-r from-primary to-accent rounded-full blur opacity-50 group-hover:opacity-75 transition duration-1000 group-hover:duration-200 motion-safe:animate-pulse"></div>
          <Image
            src={personalInfo.profileImageUrl}
            alt={`${personalInfo.name} - ${personalInfo.title}`}
            width={400}
            height={400}
            priority
            className="rounded-full object-cover shadow-2xl relative z-10 aspect-square"
            data-ai-hint={personalInfo.profileImageHint}
            sizes="(max-width: 448px) 100vw, 400px"
          />
        </div>
      </div>
      <div className="absolute bottom-10 left-1/2 -translate-x-1/2 hidden md:block motion-safe:animate-fade-in-up" style={{ animationDelay: '0.8s' }}>
        <Link href="#about" aria-label="Scroll to About section">
          <ArrowDown className="w-8 h-8 text-muted-foreground motion-safe:animate-bounce" />
        </Link>
      </div>
    </SectionWrapper>
  );
}
