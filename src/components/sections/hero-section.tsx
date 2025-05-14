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
          <h1 className="text-4xl font-bold tracking-tight sm:text-5xl md:text-6xl lg:text-7xl">
            {personalInfo.name}
          </h1>
          <p className="text-2xl font-medium text-primary sm:text-3xl">
            {personalInfo.title}
          </p>
          <p className="text-lg text-muted-foreground max-w-xl mx-auto md:mx-0">
            {personalInfo.heroSummary}
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center md:justify-start">
            <Button size="lg" asChild className="shadow-lg hover:shadow-xl transition-shadow">
              <Link href="#projects">View Projects</Link>
            </Button>
            <Button size="lg" variant="outline" asChild className="shadow-lg hover:shadow-xl transition-shadow">
              <Link href="#contact">Contact Me</Link>
            </Button>
          </div>
        </div>
        <div className="relative group aspect-square max-w-md mx-auto md:max-w-none">
          <div className="absolute -inset-0.5 bg-gradient-to-r from-primary to-accent rounded-full blur opacity-50 group-hover:opacity-75 transition duration-1000 group-hover:duration-200"></div>
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
      <div className="absolute bottom-10 left-1/2 -translate-x-1/2 hidden md:block">
        <Link href="#about" aria-label="Scroll to About section">
          <ArrowDown className="w-8 h-8 text-muted-foreground animate-bounce" />
        </Link>
      </div>
    </SectionWrapper>
  );
}
