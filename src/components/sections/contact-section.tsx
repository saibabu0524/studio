import { SectionWrapper } from "@/components/layout/section-wrapper";
import { ContactForm } from "@/components/ui/contact-form";
import { personalInfo, socialLinks } from "@/lib/data";
import { Mail, Smartphone } from "lucide-react";
import Link from "next/link";
import { Button } from "../ui/button";

export function ContactSection() {
  return (
    <SectionWrapper id="contact">
      <div className="text-center mb-12">
        <h2 className="text-3xl font-bold tracking-tight sm:text-4xl md:text-5xl">Get in Touch</h2>
        <p className="mt-4 text-lg text-muted-foreground">
          Have a project in mind or just want to say hi? Feel free to reach out.
        </p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
        <div className="space-y-6">
          <h3 className="text-2xl font-semibold">Contact Details</h3>
          <div className="flex items-center space-x-3">
            <Mail className="w-6 h-6 text-primary" />
            <a href={`mailto:${personalInfo.email}`} className="text-lg hover:text-primary transition-colors">
              {personalInfo.email}
            </a>
          </div>
          {/* Optional: Add phone number if desired
          <div className="flex items-center space-x-3">
            <Smartphone className="w-6 h-6 text-primary" />
            <a href="tel:+1234567890" className="text-lg hover:text-primary transition-colors">
              +1 (234) 567-890
            </a>
          </div> 
          */}
          <h3 className="text-2xl font-semibold pt-4">Connect With Me</h3>
          <div className="flex space-x-4">
            {socialLinks.map((link) => (
              <Button key={link.name} variant="outline" size="icon" asChild className="transition-transform hover:scale-110">
                <Link href={link.url} target="_blank" rel="noopener noreferrer" aria-label={link.name}>
                  <link.icon className="h-6 w-6" />
                </Link>
              </Button>
            ))}
          </div>
        </div>
        
        <div>
          <h3 className="text-2xl font-semibold mb-6">Send Me a Message</h3>
          <ContactForm />
        </div>
      </div>
    </SectionWrapper>
  );
}
