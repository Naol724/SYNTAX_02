import type { Metadata } from "next";
import "./globals.css";
import Providers from "@/components/providers";
import Navbar from "@/components/layout/Navbar";
import Footer from "@/components/layout/Footer";
import { ScrollProgress } from "@/components/ui/scroll-progress";
import { PageLoader } from "@/components/ui/page-loader";
import { AnimatedBackground } from "@/components/ui/animated-background";
import { FloatingActionButton } from "@/components/ui/floating-action-button";

export const metadata: Metadata = {
  metadataBase: new URL('https://syntaxsoftwaresolution.com'),
  title: {
    default: "Syntax Software Solutions — Building the Digital Future of Ethiopia",
    template: "%s | Syntax Software Solutions"
  },
  description: "Full-stack software company delivering websites, mobile apps, gaming platforms, enterprise systems, and AI-powered bots. Based in Addis Ababa, Ethiopia.",
  keywords: [
    "Software Development Ethiopia",
    "Web Development Addis Ababa",
    "Mobile App Development",
    "Enterprise Software",
    "Gaming Platforms",
    "AI Chatbots",
    "Full Stack Development",
    "Next.js Development",
    "React Native Apps",
    "Ethiopia Tech Company"
  ],
  authors: [{ name: "Syntax Software Solutions" }],
  creator: "Syntax Software Solutions",
  publisher: "Syntax Software Solutions",
  formatDetection: {
    email: false,
    address: false,
    telephone: false,
  },
  openGraph: {
    type: 'website',
    locale: 'en_US',
    url: 'https://syntaxsoftwaresolution.com',
    title: 'Syntax Software Solutions — Building the Digital Future of Ethiopia',
    description: 'Full-stack software company delivering websites, mobile apps, gaming platforms, enterprise systems, and AI-powered bots.',
    siteName: 'Syntax Software Solutions',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Syntax Software Solutions',
    description: 'Full-stack software company in Addis Ababa, Ethiopia',
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      'max-video-preview': -1,
      'max-image-preview': 'large',
      'max-snippet': -1,
    },
  },
  verification: {
    google: 'your-google-verification-code',
  },
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en" className="scroll-smooth">
      <body className="antialiased">
        <Providers>
          <AnimatedBackground />
          <ScrollProgress />
          <PageLoader />
          <FloatingActionButton />
          <div className="relative min-h-screen flex flex-col">
            <Navbar />
            <main className="flex-1 relative z-10">
              {children}
            </main>
            <div className="relative z-20">
              <Footer />
            </div>
          </div>
        </Providers>
      </body>
    </html>
  );
}
