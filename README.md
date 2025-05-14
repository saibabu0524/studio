# Androfolio

Androfolio is a Next.js application designed to serve as a personal portfolio for Android developers. It allows you to showcase your projects, skills, and experience in a clean, modern web interface.

This template is built with Next.js, TypeScript, Tailwind CSS, and ShadCN UI components.

## Getting Started

To customize this portfolio for your use:

1.  **Update Personal Information**: Edit the `personalInfo`, `projects`, `skills`, and `socialLinks` exports in `src/lib/data.ts`.
    *   Replace placeholder values like "Your Name", project details, and image URLs with your actual information.
2.  **Review Content**: 
    *   The main page structure is defined in `src/app/page.tsx`.
    *   Individual sections (Hero, About, Skills, Projects, Contact) are located in `src/components/sections/`.
3.  **Run Locally**: 
    ```bash
    npm run dev
    ```
    Open [http://localhost:9002](http://localhost:9002) (or the port specified in your `dev` script) in your browser.
4.  **Build for Production**:
    ```bash
    npm run build
    ```
5.  **Deploy**: Deploy the contents of the `.next` folder (after building) or connect your Git repository to your preferred hosting provider (e.g., Vercel, Netlify, Firebase Hosting).

This project uses "Androfolio" as its operational name, which is reflected in the site title and header.
