import type { Metadata } from "next";
import { Inter } from "next/font/google"; 
import "./globals.css"; // Correct path

import TopNav from "@/components/Layout/TopNav";
import LeftSidebar from "@/components/Layout/LeftSidebar";
import RightSidebar from "@/components/Layout/RightSidebar"; 

import Footer from "@/components/Layout/Footer";
import { ThemeProvider } from "@/components/ThemeProvider";
import { LampDemo } from "@/components/LampDemo";
// 1. Import your new Sparkles component
import { BackgroundSparkles } from "@/components/BackgroundSparkles";



const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Shivam Gupta | Professional Portfolio",
  description: "A portfolio showcasing professional work and services.",
  icons: {
    icon: "/public/me.jpg", // Path to your new icon in the 'public' folder
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" suppressHydrationWarning>
      {/* 2. Add 'relative' to the body */}
      <body className={`${inter.className} bg-gradient-light dark:bg-gradient-dark relative`}>
        <ThemeProvider
          attribute="class"
          defaultTheme="system"
          enableSystem
          disableTransitionOnChange
        >
          {/* 3. Add the Sparkles component here */}
          <BackgroundSparkles />
          <TopNav />
        
          <div className="grid grid-cols-1 lg:grid-cols-[240px_1fr_240px] max-w-[1400px] mx-auto border-x border-border bg-background shadow-2xl relative z-10">
            
            <div className="hidden lg:block">
              <LeftSidebar />
            </div>

            <main className="min-h-screen">
              {children}
            </main>
            
            <div className="hidden lg:block"> 
              <RightSidebar />
            </div>
            {/* 4. Add your Footer at the end */}
            
          </div>
          <Footer />
          
        </ThemeProvider>
      </body>
    </html>
  );
}
