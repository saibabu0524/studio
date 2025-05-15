
import Link from "next/link";
import { socialLinks, personalInfo } from "@/lib/data";
import type { SocialLink } from "@/types";
import { Button } from "@/components/ui/button";

export function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="border-t border-border/40 bg-background/95">
      <div className="container mx-auto flex flex-col items-center justify-between gap-4 px-4 py-8 md:flex-row md:px-6">
        <div className="flex space-x-4">
          {socialLinks.map((link: SocialLink) => (
            <Button 
              key={link.name} 
              variant="ghost" 
              size="icon" 
              asChild
              className="transition-all duration-300 ease-in-out motion-safe:hover:scale-125 motion-safe:hover:text-primary"
            >
              <Link href={link.url} target="_blank" rel="noopener noreferrer" aria-label={link.name}>
                <link.icon className="h-5 w-5" />
              </Link>
            </Button>
          ))}
        </div>
        <p className="text-sm text-muted-foreground">
          &copy; {currentYear} {personalInfo.name}. All rights reserved.
        </p>
      </div>
    </footer>
  );
}
