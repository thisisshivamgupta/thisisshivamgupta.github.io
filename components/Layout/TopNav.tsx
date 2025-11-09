"use client";

import Link from "next/link";
import { Button } from "@/components/ui/button";
// 1. Import the new ThemeToggle component
import { ThemeToggle } from "@/components/ThemeToggle";

export const TopNav = () => {
  return (
    // 2. Use semantic color 'bg-background'
    <header className="sticky top-0 z-50 flex h-16 w-full items-center justify-between border-b border-border bg-background px-6">
      {/* Logo/Name */}
      <div className="flex items-center space-x-4">
        <Link href="/" className="text-lg font-bold text-foreground hover:text-primary">
          Almanac
        </Link>
      </div>

      <div className="flex items-center space-x-2">
        {/* 3. Main Links */}
        <nav className="hidden space-x-6 md:flex">
          <NavLink href="/about">About Me</NavLink>
          <NavLink href="/services">Services</NavLink>
          <NavLink href="/contact">Contact</NavLink>
        </nav>

        {/* 4. Add the ThemeToggle component here */}
        <ThemeToggle />

        {/* 5. Resume CTA Button */}
        <Button asChild size="sm">
          <a href="/resume.pdf" target="_blank" rel="noopener noreferrer">
            View Resume
          </a>
        </Button>
      </div>
    </header>
  );
};

// Helper component for cleaner link styling
const NavLink = ({
  href,
  children,
}: {
  href: string;
  children: React.ReactNode;
}) => (
  <Link
    href={href}
    // 6. Use semantic colors
    className="text-sm font-medium text-muted-foreground transition-colors hover:text-foreground"
  >
    {children}
  </Link>
);

export default TopNav;