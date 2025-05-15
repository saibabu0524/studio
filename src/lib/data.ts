
import type { Project, Skill, SocialLink, NavItem, Certification } from '@/types';
import { Github, Linkedin, Smartphone, Layers, Database, FileCode, Brain, Zap, LayoutGrid, Users, ShieldCheck, BarChart2, TestTube2, GitMerge, Cloud, Settings2, MessageSquare, Video, Award, CalendarDays, Building } from 'lucide-react';

export const navItems: NavItem[] = [
  { label: 'Home', href: '#hero' },
  { label: 'About', href: '#about' },
  { label: 'Skills', href: '#skills' },
  { label: 'Projects', href: '#projects' },
  { label: 'Certifications', href: '#certifications'},
  { label: 'Contact', href: '#contact' },
];

export const skills: Skill[] = [
  { name: 'Kotlin', icon: FileCode, level: 95 },
  { name: 'Java', icon: FileCode, level: 90 },
  { name: 'Python', icon: FileCode, level: 70 },
  { name: 'C', icon: FileCode, level: 60 },
  { name: 'Android SDK', icon: Smartphone, level: 95 },
  { name: 'Jetpack Compose', icon: Layers, level: 90 },
  { name: 'Room Database', icon: Database, level: 85 },
  { name: 'KMM', icon: Layers, level: 70 },
  { name: 'Android NDK', icon: Settings2, level: 65 },
  { name: 'MVVM Architecture', icon: LayoutGrid, level: 90 },
  { name: 'MVP Architecture', icon: LayoutGrid, level: 85 },
  { name: 'Clean Architecture', icon: ShieldCheck, level: 85 },
  { name: 'MVI Architecture', icon: LayoutGrid, level: 75 },
  { name: 'Dagger/Hilt', icon: Settings2, level: 90 },
  { name: 'Retrofit & OkHttp', icon: Zap, level: 90 },
  { name: 'Socket.io', icon: MessageSquare, level: 70 },
  { name: 'RxJava', icon: Brain, level: 80 },
  { name: 'LiveData', icon: Brain, level: 85 },
  { name: 'Coroutines & Flow', icon: Brain, level: 90 },
  { name: 'WebRTC', icon: Video, level: 80 },
  { name: 'Firebase', icon: Cloud, level: 85 },
  { name: 'Git & GitHub', icon: GitMerge, level: 95 },
  { name: 'Jira', icon: Users, level: 80 },
  { name: 'Gradle', icon: Settings2, level: 90 },
  { name: 'Jenkins', icon: Cloud, level: 70 },
  { name: 'Confluence', icon: FileCode, level: 75 },
  { name: 'Espresso', icon: TestTube2, level: 80 },
  { name: 'JUnit', icon: TestTube2, level: 85 },
  { name: 'Mockito', icon: TestTube2, level: 80 },
  { name: 'TensorFlow Lite', icon: Brain, level: 60 },
  { name: 'ML Kit', icon: Brain, level: 65 },
  { name: 'OpenCV', icon: Layers, level: 60 },
];

export const projects: Project[] = [
  {
    id: 'healthpass-hsbc',
    title: 'HealthPass Module (HSBC HK App)',
    description: 'Engineered the HealthPass module for the HSBC HK Mobile Banking app, enabling seamless subscription management and healthcare service access.',
    longDescription: `Engineered the end-to-end HealthPass module within the HSBC HK Mobile Banking app using Kotlin, Jetpack Compose, and Android SDK, enabling seamless subscription management and healthcare service access.
Integrated secure RESTful APIs with Retrofit for real-time data exchange with HSBCs backend, supporting plan validation, membership updates, and service provider information retrieval.
Collaborated with design, product, and QA teams to optimize user workflows, designing a responsive and accessible UI that simplified enrollment and health membership management.
Conducted comprehensive unit testing with JUnit and Mockk, and UI testing, achieving 90% code coverage, ensuring compliance with HSBCs stringent security and data privacy standards.
Implemented Kotlin coroutines for efficient asynchronous operations, enhancing app performance and scalability within the MVP architecture.
Optimized accessibility features to meet global standards, ensuring inclusive user experiences across diverse devices and Android versions.

Key Responsibilities:
• Performed UI audits to ensure alignment with the Mobile Design Library and maintained consistency across Android platforms.
• Wrote unit and integration test cases to ensure high code coverage and app reliability.
• Documented technical specifications, architecture decisions, and feature implementation details for maintainability and team collaboration.
• Met code freeze deadlines by delivering stable, production-ready features on time.

Original achievements also include:
Developed and maintained a comprehensive digital healthcare membership module. Architected a secure, end-to-end solution enabling users to enroll in health plans, access preferential consultation rates, and book in-app video consultations. Engineered RESTful API integrations for real-time plan validation and membership updates, achieving stringent security and data privacy compliance. Overcame challenges in data synchronization by coordinating with cross-disciplinary teams, resulting in a highly responsive and intuitive user interface.`,
    imageUrl: 'https://placehold.co/600x400.png',
    imageHint: 'mobile banking healthcare',
    technologies: ['Kotlin', 'Jetpack Compose', 'Android SDK', 'RESTful APIs', 'Retrofit', 'MVP', 'JUnit', 'Mockk', 'Kotlin Coroutines', 'Live Data', 'CI/CD Workflows', 'Git', 'Agile', 'Security Compliance'],
    date: '2023-Present',
  },
  {
    id: 'playchat-secure-messaging',
    title: 'PlayChat – Secure Messaging & Parental Control',
    description: 'PlayChat is a secure messaging platform for children with complete parental control, featuring live video recordings, speech recognition for behavior detection, and interactive video call features like live drawing.',
    longDescription: `PROJECT SUMMARY:
PlayChat is a secure way of letting your children play with their friends while having complete parental control over it.
• Track your children's calls, and chats with live video recordings with in-built speech recognition used to detect children's behavior when using any vulgar words during a chat.
• PlayChat Is a fun, entertaining application for your children with amazing features like live drawings with children's friends while doing video calls and also security to parents while monitoring children's activities from anywhere, on any device.

COMPLEXITY OF PROJECT:
• Performance: Encountered issues when sending and receiving data through API calls.
• Group Chat: Managing high message volume and diverse participants in group chats.
• Video Call Enhancement: Ensuring precise transmission of emojis and drawn lines during video calls, and managing group video call functionalities.
• Offline Data Management: Synchronizing messages across devices, handling delivery/read receipts, ensuring data security, and managing conflicts.
• Multi-Device Login: Seamless message synchronization, data security, concurrent session management, and consistent user experience.

APPROACH TO TACKLING PROJECT COMPLEXITY:
• Performance: Stored API call data in a local app database (Room) to update UI promptly, then transmitted data to the server, updating the database upon server response.
• Video Call Enhancement: Used FCM for transmitting screen coordinates (X and Y) for accurate emoji placement and line drawing. Implemented a dynamic UI for group video calls adapting to participant numbers.
• Group Chat: Used FCM-based message delivery with a single chat room per group, using timestamp-based sorting for recent messages.
• Multi-Device Login: Managed active devices in the backend and used RESTful APIs for data synchronization across multiple devices based on active account IDs.
• Offline Data Management: Implemented an offline-first approach, fetching data from the backend and storing it locally with Room (SQLite-based library) to manage chats, media, and audio messages efficiently.`,
    imageUrl: 'https://placehold.co/600x400.png',
    imageHint: 'secure chat app',
    technologies: ['Kotlin', 'XML', 'Android SDK', 'Android Architecture Components', 'Retrofit', 'Room', 'Firebase (FCM, Push Notifications)', 'WebRTC', 'Jetpack Compose', 'Constraint Layout', 'Material Design', 'MVVM', 'Clean Architecture', 'Coroutines', 'Hilt', 'Trello', 'Jira', 'Git', 'GitHub'],
    date: '2023-Present',
    githubUrl: 'https://github.com/saibabu0524/playchat-android-app',
  },
  {
    id: 'bookandplay-court-reservation',
    title: 'BookAndPlay – Online Court Reservation',
    description: 'BookAndPlay is an online court booking application allowing users to reserve sports courts, set reminders, make secure online payments via Stripe, track court timings, and receive push notifications.',
    longDescription: `PROJECT SUMMARY:
BookAndPlay is an online court booking application to book and reserve courts for playing sports. Users can book future courts to play, add reminders for future bookings, and use an online Stripe payment system. It includes tracking court timings, up-to-date court schedule reminders, push notifications, and .ics file integration to add multiple events to a calendar.
Users can effortlessly book tennis grounds. Plan ahead with future bookings to secure preferred time slots. Keep track of all bookings and events within the app. Explore available events and bookings without account creation or login, thanks to our guest access feature. Seamlessly pay and book grounds online using credit or debit cards.

COMPLEXITY OF PROJECT:
• UI: Handling a single screen for multiple use cases (user, member, guest-user) and Stripe payment integration.
• Event Status Handling: Managing a transaction's status and displaying different UI based on it.
• Adding Events To Calendar: Handling calendar view and adding multiple events at once using .ics files.
• Data Handling: Managing data from a single source across multiple screens for responsive UI, reducing lag, rendering issues, and redundant API calls.

APPROACH TO TACKLING PROJECT COMPLEXITY:
• Navigation & UI Updates: After a transaction or receiving an FCM notification, navigation to the respective screen is handled using a NotificationCenter hosted from the base view controller, reducing time complexity.
• API Handling: Utilized Retrofit for API communications.
• Asynchronous Tasks: Managed asynchronous tasks using Coroutines.
• Calendar Integration: Added booked events to the calendar and used .ics files for adding multiple bookings at a time.
`,
    imageUrl: 'https://placehold.co/600x400.png',
    imageHint: 'court booking system',
    technologies: ['Kotlin', 'XML', 'Android SDK', 'Retrofit', 'Firebase (FCM, Push Notifications)', 'Stripe', 'Jetpack Compose', 'Constraint Layout', 'Material Design', 'MVVM', 'Coroutines', 'Hilt', 'Trello', 'Jira', 'Git', 'GitHub', 'ICS file integration'],
    date: '2023-Present',
    githubUrl: 'https://github.com/saibabu0524/bookandplay-android-app',
  },
];

export const certifications: Certification[] = [
  {
    id: 'android-associate-developer',
    title: 'Associate Android Developer',
    issuer: 'Google',
    date: 'Expected 2024',
    imageUrl: 'https://placehold.co/300x200.png',
    imageHint: 'certificate android developer',
    description: 'Official certification from Google recognizing core Android development skills.',
    credentialUrl: '#' // Placeholder
  },
  {
    id: 'kotlin-cert',
    title: 'Certified Kotlin Developer',
    issuer: 'JetBrains',
    date: 'Expected 2024',
    imageUrl: 'https://placehold.co/300x200.png',
    imageHint: 'certificate kotlin',
    description: 'Certification demonstrating proficiency in Kotlin programming language.',
    credentialUrl: '#' // Placeholder
  },
   {
    id: 'agile-scrum-master',
    title: 'Certified ScrumMaster (CSM)',
    issuer: 'Scrum Alliance',
    date: 'Completed 2023',
    imageUrl: 'https://placehold.co/300x200.png',
    imageHint: 'certificate scrum agile',
    description: 'Demonstrates understanding of Scrum framework and Agile principles.',
    credentialUrl: '#' // Placeholder
  }
];


export const socialLinks: SocialLink[] = [
  { name: 'GitHub', url: 'https://github.com/saibabu0524', icon: Github },
  { name: 'LinkedIn', url: 'https://www.linkedin.com/in/sai-babu-inukonda/', icon: Linkedin },
];

export const personalInfo = {
  name: "Sai Babu Inukonda",
  title: "Software Developer (Android)",
  profileImageUrl: "https://placehold.co/400x400.png",
  profileImageHint: "profile picture",
  heroSummary: "Experienced Software Developer specializing in Android development with Java and Kotlin. I design, develop, and optimize mobile applications using MVVM, Jetpack Compose, and structured data management for scalable, high-performance solutions. My expertise includes push notifications, API integrations, Android SDK, Firebase, WebRTC, and Agile methodologies.",
  aboutMe: {
    background: "My journey into software development began with a fascination for technology's potential to solve real-world problems, leading me to specialize in the Android ecosystem. I am passionate about creating intuitive and impactful mobile experiences by continuously learning and applying new technologies. I am a Software Developer with experience in Android development using Java and Kotlin. I specialize in designing, developing, and optimizing mobile applications, leveraging technologies like MVVM, Jetpack Compose, and structured data management to deliver scalable and high-performance solutions. My expertise includes push notifications, content providers, and seamless API integrations, ensuring efficient communication between applications and backend services. I am proficient in the Android SDK, Jetpack components, and modern architectural patterns, enabling the development of intuitive and maintainable user interfaces. Additionally, I have hands-on experience with Firebase, WebRTC, and Agile methodologies, contributing to enhanced app performance and user engagement.",
    education: "B.Tech in Computer Science from Jawaharlal Nehru Technological University, Kakinada (2019–2023, GPA: 7.1/10.0).",
    approach: `As an Android Developer at Softsuave (2023-Present), I have been responsible for developing and integrating complex mobile features while ensuring optimal performance, Security and Maintainability. Throughout this role, I have enhanced my expertise in core and advanced Android development concepts, working extensively with technologies such as Jetpack Compose, ViewModel, Flow, Coroutines, and dependency injection frameworks like Dagger/Hilt.
Key contributions and responsibilities include:
• Leading cross-functional Agile teams to design, develop, and deploy secure, high-performance Android applications.
• Architecting robust RESTful API integrations and implementing advanced caching strategies, reducing app load times by up to 20%.
• Gaining deep expertise in core technologies like Jetpack Compose, ViewModel, Flow, and Coroutines for building scalable and efficient UI components.
• Enhancing proficiency in dependency injection with Dagger/Hilt and modular app development to improve code reusability and maintainability.
• Applying SOLID principles to design modular, scalable, and maintainable code architectures.
• Implementing advanced testing methodologies (JUnit, Espresso, Mockito) ensuring high code quality and reliability.
• Collaborating closely with product managers, UX designers, and QA teams to refine user experiences.
• Expanding knowledge of Firebase, WebRTC, and push notification services for real-time features.`
  },
  email: "saibabu2936@gmail.com",
  phone: "+91 93902 48522",
  location: "Bangalore, India"
};
