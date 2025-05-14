import type { Project, Skill, SocialLink, NavItem } from '@/types';
import { Github, Linkedin, Twitter, Smartphone, Layers, Database, FileCode, Brain, Zap, LayoutGrid } from 'lucide-react';

export const navItems: NavItem[] = [
  { label: 'Home', href: '#hero' },
  { label: 'About', href: '#about' },
  { label: 'Skills', href: '#skills' },
  { label: 'Projects', href: '#projects' },
  { label: 'Contact', href: '#contact' },
];

export const skills: Skill[] = [
  { name: 'Kotlin', icon: FileCode, level: 95 },
  { name: 'Java', icon: FileCode, level: 90 },
  { name: 'Android SDK', icon: Smartphone, level: 90 },
  { name: 'Jetpack Compose', icon: Layers, level: 85 },
  { name: 'MVVM Architecture', icon: LayoutGrid, level: 80 },
  { name: 'Room Database', icon: Database, level: 75 },
  { name: 'Dagger/Hilt', icon: Zap, level: 70 },
  { name: 'Retrofit & OkHttp', icon: Zap, level: 85 },
  { name: 'Coroutines & Flow', icon: Brain, level: 80 },
  { name: 'Git & GitHub', icon: Github, level: 90 },
];

export const projects: Project[] = [
  {
    id: 'project-1',
    title: 'ConnectSphere Messenger',
    description: 'A real-time chat application built with modern Android technologies.',
    longDescription: 'ConnectSphere Messenger is a feature-rich chat application demonstrating proficiency in real-time communication, local data persistence, and clean architecture. It includes features like one-on-one messaging, group chats, and push notifications.',
    imageUrl: 'https://picsum.photos/seed/project1/600/400',
    imageHint: 'chat app',
    technologies: ['Kotlin', 'Jetpack Compose', 'Firebase', 'MVVM', 'Room'],
    playStoreUrl: 'https://play.google.com/store/apps/details?id=com.example.app1',
    githubUrl: 'https://github.com/yourusername/project1',
    date: '2023',
  },
  {
    id: 'project-2',
    title: 'FitTrack Activity Logger',
    description: 'Track your fitness activities and monitor progress with detailed stats.',
    longDescription: 'FitTrack helps users log workouts, track calories, and visualize their fitness journey. It leverages background services for activity tracking and provides insightful charts and summaries.',
    imageUrl: 'https://picsum.photos/seed/project2/600/400',
    imageHint: 'fitness tracker',
    technologies: ['Java', 'XML Layouts', 'Android SDK', 'SQLite', 'Google Fit API'],
    playStoreUrl: 'https://play.google.com/store/apps/details?id=com.example.app2',
    githubUrl: 'https://github.com/yourusername/project2',
    date: '2022',
  },
  {
    id: 'project-3',
    title: 'RecipeFinder App',
    description: 'Discover new recipes based on ingredients you have at home.',
    longDescription: 'RecipeFinder allows users to search for recipes using various filters and save their favorites. It integrates with a third-party recipe API and offers a smooth, intuitive user experience.',
    imageUrl: 'https://picsum.photos/seed/project3/600/400',
    imageHint: 'recipe app',
    technologies: ['Kotlin', 'Jetpack Compose', 'Retrofit', 'Coroutines', 'Hilt'],
    playStoreUrl: 'https://play.google.com/store/apps/details?id=com.example.app3',
    githubUrl: 'https://github.com/yourusername/project3',
    date: '2023-Present',
  },
  {
    id: 'project-4',
    title: 'TaskMaster Pro',
    description: 'A productivity app to manage tasks and boost efficiency.',
    longDescription: 'TaskMaster Pro is a comprehensive task management solution with features like reminders, sub-tasks, project categorization, and collaboration. It showcases advanced UI/UX design and robust data handling.',
    imageUrl: 'https://picsum.photos/seed/project4/600/400',
    imageHint: 'task manager',
    technologies: ['Kotlin', 'MVVM', 'Room', 'WorkManager', 'Material Design'],
    githubUrl: 'https://github.com/yourusername/project4',
    date: '2021',
  },
];

export const socialLinks: SocialLink[] = [
  { name: 'GitHub', url: 'https://github.com/yourusername', icon: Github },
  { name: 'LinkedIn', url: 'https://linkedin.com/in/yourusername', icon: Linkedin },
  // { name: 'Twitter', url: 'https://twitter.com/yourusername', icon: Twitter },
];

export const personalInfo = {
  name: "Your Name", // Replace with your name
  title: "Android Developer",
  profileImageUrl: "https://picsum.photos/seed/profile/300/300",
  profileImageHint: "profile picture",
  heroSummary: "Passionate Android Developer with 5+ years of experience crafting high-quality, user-centric mobile applications. Proficient in Kotlin, Java, and modern Android frameworks.",
  aboutMe: {
    background: "From a young age, I was fascinated by technology and its potential to solve real-world problems. This passion led me to pursue a career in software development, with a special focus on the Android ecosystem. I thrive on learning new technologies and applying them to create intuitive and impactful mobile experiences.",
    education: "I hold a Bachelor's degree in Computer Science from [Your University Name]. Throughout my academic journey, I focused on mobile development courses and projects, solidifying my foundation in Android app development.",
    approach: "My approach to Android development is centered around user experience, performance, and code quality. I believe in writing clean, maintainable, and testable code following best practices like MVVM or MVI. I enjoy collaborating with designers and product managers to transform ideas into polished, functional applications. Continuous learning and staying updated with the latest Android trends are integral to my development philosophy."
  },
  email: "your.email@example.com" // Replace with your email
};
