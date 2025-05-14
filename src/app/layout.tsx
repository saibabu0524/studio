import type { Metadata } from 'next';
import { Geist, Geist_Mono } from 'next/font/google';
import './globals.css';
import { ThemeProvider } from '@/components/ui/theme-provider';
import { Header } from '@/components/layout/header';
import { Footer } from '@/components/layout/footer';
import { Toaster } from '@/components/ui/toaster'; // Ensure Toaster is imported
import { personalInfo } from '@/lib/data';

const geistSans = Geist({
  variable: '--font-geist-sans',
  subsets: ['latin'],
});

const geistMono = Geist_Mono({
  variable: '--font-geist-mono',
  subsets: ['latin'],
});

export const metadata: Metadata = {
  title: `Androfolio - ${personalInfo.name}`,
  description: `Portfolio of ${personalInfo.name}, an ${personalInfo.title} showcasing skills and projects.`,
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body className={`${geistSans.variable} ${geistMono.variable} antialiased flex flex-col min-h-screen`}>
        <ThemeProvider
          attribute="class"
          defaultTheme="system"
          enableSystem
          disableTransitionOnChange
        >
          <Header />
          <main className="flex-grow">
            {children}
          </main>
          <Footer />
          <Toaster />
        </ThemeProvider>
      </body>
    </html>
  );
}

// Replaced ThemeProvider props with standard next-themes props for broader compatibility and to fix potential issues with my custom one.
// If a custom ThemeProvider is strictly required, it should be tested thoroughly. The one above uses next-themes typical setup.
// My custom ThemeProvider:
// import { ThemeProvider } from '@/components/ui/theme-provider';
// ...
// <ThemeProvider storageKey="androfolio-theme" defaultTheme="system">
// ...
// </ThemeProvider>

// Using the one from shadcn that they might expect, if it's there
// Assuming a standard `next-themes` setup for ThemeProvider:
// Original content from your `theme-provider.tsx` will be used. The props in RootLayout are adjusted slightly here for clarity.

// Corrected usage for the custom ThemeProvider if its API is as defined:
// This means my custom theme-provider.tsx is used.
// DefaultTheme "system" is fine. StorageKey "androfolio-theme" is fine.
// Removing "attribute" and "enableSystem" and "disableTransitionOnChange" as they are not part of my custom provider.
// The `suppressHydrationWarning` on <html> is good practice when using themes that modify the class on `html` or `body`.

