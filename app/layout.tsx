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
  title: "Syntax Software Solutions — Building the Digital Future of Ethiopia",
  description: "Full-stack software company delivering websites, mobile apps, gaming platforms, enterprise systems, and AI-powered bots. Based in Addis Ababa, Ethiopia.",
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
          <div className="relative min-h-screen flex flex-col bg-white dark:bg-gray-950">
            <Navbar />
            <main className="flex-1">
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
