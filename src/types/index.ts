
import type { LucideIcon } from 'lucide-react';

export interface NavItem {
  label: string;
  href: string;
}

export interface Skill {
  name: string;
  icon?: LucideIcon | React.FC<React.SVGProps<SVGSVGElement>>; // Allow Lucide icons or custom SVGs
  level?: number; // Optional: 0-100 for progress bar
}

export interface Project {
  id: string;
  title: string;
  description: string;
  longDescription?: string;
  imageUrl: string;
  imageHint?: string; // For data-ai-hint
  technologies: string[];
  playStoreUrl?: string;
  githubUrl?: string;
  date: string;
}

export interface SocialLink {
  name: string;
  url: string;
  icon: LucideIcon;
}

export interface ContactFormData {
  name: string;
  email: string;
  message: string;
}

export interface Certification {
  id: string;
  title: string;
  issuer: string;
  date: string;
  imageUrl?: string;
  imageHint?: string;
  description?: string;
  credentialUrl?: string;
}
