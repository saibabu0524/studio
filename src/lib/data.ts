import type { Project, Skill, SocialLink, NavItem } from '@/types';
import { Github, Linkedin, Smartphone, Layers, Database, FileCode, Brain, Zap, LayoutGrid, Users, ShieldCheck, BarChart2, TestTube2, GitMerge, Cloud, Settings2, MessageSquare, Video } from 'lucide-react'; // Added more icons

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
  { name: 'Android SDK', icon: Smartphone, level: 95 },
  { name: 'Jetpack Compose', icon: Layers, level: 90 },
  { name: 'MVVM Architecture', icon: LayoutGrid, level: 90 },
  { name: 'Room Database', icon: Database, level: 85 },
  { name: 'Dagger/Hilt', icon: Settings2, level: 90 }, // Changed icon
  { name: 'Coroutines & Flow', icon: Brain, level: 90 },
  { name: 'Retrofit & OkHttp', icon: Zap, level: 85 },
  { name: 'WebRTC', icon: Video, level: 80 },
  { name: 'Firebase', icon: Cloud, level: 85 },
  { name: 'Git & GitHub', icon: GitMerge, level: 95 }, // Changed icon
];

export const projects: Project[] = [
  {
    id: 'healthpass-hsbc',
    title: 'HealthPass Module (HSBC HK App)',
    description: 'Digital healthcare membership module in HSBC HK Mobile Banking app, enabling health plan enrollment and in-app video consultations.',
    longDescription: 'Developed and maintained a comprehensive digital healthcare membership module integrated within the HSBC HK Mobile Banking app. Architected a secure, end-to-end solution enabling users to enroll in health plans, access preferential consultation rates, and book in-app video consultations. Engineered RESTful API integrations for real-time plan validation and membership updates, achieving stringent security and data privacy compliance. Overcame challenges in data synchronization by coordinating with cross-disciplinary teams, resulting in a highly responsive and intuitive user interface.',
    imageUrl: 'https://picsum.photos/seed/healthpass/600/400',
    imageHint: 'mobile banking healthcare',
    technologies: ['Kotlin', 'Android SDK', 'RESTful APIs', 'Agile', 'Security Compliance'],
    date: '2023-Present',
  },
  {
    id: 'playdate-chat',
    title: 'PlayDate – Secure Chat',
    description: 'End-to-end encrypted messaging platform with parental controls, real-time video calling, and interactive features.',
    longDescription: 'Designed and implemented an end-to-end encrypted messaging platform with robust parental controls. Integrated WebRTC and Firebase to deliver seamless real-time video calling with interactive features such as emoji tracking and live drawing. Adopted an offline-first design with advanced local caching, significantly reducing latency and enhancing user engagement. Addressed network resiliency challenges by iterating on interface designs in close collaboration with UX teams, ensuring consistent performance across variable network conditions.',
    imageUrl: 'https://picsum.photos/seed/playdate/600/400',
    imageHint: 'secure chat app',
    technologies: ['Kotlin', 'WebRTC', 'Firebase', 'Offline-first', 'Caching'],
    date: '2023-Present',
  },
  {
    id: 'mrc-court-booking',
    title: 'MRC Court Booking',
    description: 'Dynamic court booking system with real-time scheduling, automated reminders, and secure Stripe payment integration.',
    longDescription: 'Architected a dynamic court booking system featuring real-time scheduling, automated reminders, and comprehensive multi-user support. Integrated Stripe for secure payment processing, resulting in a seamless and reliable transaction experience. Leveraged the MVVM architectural pattern to achieve enhanced code modularity and maintainability, supporting efficient future updates. Directed the project lifecycle from conceptualization through deployment, optimizing performance, real-time data synchronization, and proactive notification systems that improved user satisfaction.',
    imageUrl: 'https://picsum.photos/seed/mrccourt/600/400',
    imageHint: 'court booking system',
    technologies: ['Kotlin', 'Stripe', 'MVVM', 'Real-time Sync'],
    date: '2023-Present',
  },
];

export const socialLinks: SocialLink[] = [
  { name: 'GitHub', url: 'https://github.com/saibabu0524', icon: Github },
  { name: 'LinkedIn', url: 'https://www.linkedin.com/in/sai-babu-inukonda/', icon: Linkedin },
];

export const personalInfo = {
  name: "Sai Babu",
  title: "Software Developer (Android)",
  profileImageUrl: "https://picsum.photos/seed/saibabu/400/400",
  profileImageHint: "profile picture",
  heroSummary: "Experienced Software Developer specializing in Android development with Java and Kotlin. I design, develop, and optimize mobile applications using MVVM, Jetpack Compose, and robust data management for scalable, high-performance solutions. Expertise in push notifications, API integrations, Android SDK, Firebase, WebRTC, and Agile methodologies.",
  aboutMe: {
    background: "My journey into software development began with a fascination for technology's potential to solve real-world problems, leading me to specialize in the Android ecosystem. I am passionate about creating intuitive and impactful mobile experiences by continuously learning and applying new technologies.",
    education: "B.Tech in Computer Science from Jawaharlal Nehru Technological University, Kakinada (2019–2023, GPA: 7.1/10.0).",
    approach: "As an Android Developer at Softsuave (2023-Present), I focus on user experience, performance, and code quality. I lead cross-functional Agile teams, architect RESTful API integrations with advanced caching (reducing load times by up to 20%), and apply SOLID principles for modular, scalable code. My expertise includes Jetpack Compose, ViewModel, Flow, Coroutines, Dagger/Hilt, and comprehensive testing (JUnit, Espresso, Mockito). I collaborate closely with product, UX, and QA teams to refine applications and enhance user engagement, leveraging Firebase and WebRTC for real-time features."
  },
  email: "saibabu2936@gmail.com",
  phone: "+91 93902 48522",
  location: "Bangalore, India"
};
