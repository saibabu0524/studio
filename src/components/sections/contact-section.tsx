
import { SectionWrapper } from "@/components/layout/section-wrapper";
import { ContactForm } from "@/components/ui/contact-form";
import { personalInfo, socialLinks } from "@/lib/data";
import { Mail, Smartphone } from "lucide-react";
import Link from "next/link";
import { Button } from "../ui/button";

export function ContactSection() {
  return (
    <SectionWrapper id="contact">
      <div className="text-center mb-12 motion-safe:animate-fade-in-up">
        <h2 className="text-3xl font-bold tracking-tight sm:text-4xl md:text-5xl">Get in Touch</h2>
        <p className="mt-4 text-lg text-muted-foreground" style={{ animationDelay: '0.1s' }}>
          Have a project in mind or just want to say hi? Feel free to reach out.
        </p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
        <div className="space-y-6 motion-safe:animate-fade-in-up" style={{ animationDelay: '0.2s' }}>
          <h3 className="text-2xl font-semibold">Contact Details</h3>
          <div className="flex items-center space-x-3">
            <Mail className="w-6 h-6 text-primary" />
            <a href={`mailto:${personalInfo.email}`} className="text-lg hover:text-primary transition-colors">
              {personalInfo.email}
            </a>
          </div>
          {personalInfo.phone && (
            <div className="flex items-center space-x-3">
              <Smartphone className="w-6 h-6 text-primary" />
              <a href={`tel:${personalInfo.phone.replace(/\s/g, '')}`} className="text-lg hover:text-primary transition-colors">
                {personalInfo.phone}
              </a>
            </div>
           )}
           {personalInfo.location && (
            <div className="flex items-center space-x-3">
              <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="w-6 h-6 text-primary"><path d="M20 10c0 6-8 12-8 12s-8-6-8-12a8 8 0 0 1 16 0Z"/><circle cx="12" cy="10" r="3"/></svg>
              <p className="text-lg text-muted-foreground">{personalInfo.location}</p>
            </div>
           )}
          <h3 className="text-2xl font-semibold pt-4">Connect With Me</h3>
          <div className="flex space-x-4">
            {socialLinks.map((link) => (
              <Button 
                key={link.name} 
                variant="outline" 
                size="icon" 
                asChild 
                className="transition-all duration-300 ease-in-out motion-safe:hover:scale-110 motion-safe:hover:rotate-[-5deg] motion-safe:hover:shadow-md"
              >
                <Link href={link.url} target="_blank" rel="noopener noreferrer" aria-label={link.name}>
                  <link.icon className="h-6 w-6" />
                </Link>
              </Button>
            ))}
          </div>
        </div>
        
        <div className="motion-safe:animate-fade-in-up" style={{ animationDelay: '0.3s' }}>
          <h3 className="text-2xl font-semibold mb-6">Send Me a Message</h3>
          <ContactForm />
        </div>
      </div>
    </SectionWrapper>
  );
}
