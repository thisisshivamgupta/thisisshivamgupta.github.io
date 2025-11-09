"use client";

import React from 'react';
import { useTheme } from 'next-themes';

// FINAL FIX: Add 'main' branch reference to the light mode path
const snakeLight = "https://raw.githubusercontent.com/thisisshivamgupta/thisisshivamgupta/main/github-contribution-grid-snake.svg";
const snakeDark = "https://raw.githubusercontent.com/thisisshivamgupta/thisisshivamgupta/output/github-contribution-grid-snake-dark.svg";

export const GitHubSnakeGraph = () => {
  const { theme, resolvedTheme } = useTheme();
  const [isMounted, setIsMounted] = React.useState(false);

  React.useEffect(() => setIsMounted(true), []);

  if (!isMounted) {
    return <div className="h-32 w-full rounded-lg bg-accent" />;
  }

  const currentTheme = theme === 'system' ? resolvedTheme : theme;
  // This logic is correct and relies on the paths above
  const imgSrc = currentTheme === 'dark' ? snakeDark : snakeLight;

  return (
    <div className="mt-4">
      <img 
        alt="GitHub contribution grid snake animation" 
        src={imgSrc} 
        key={currentTheme} 
        className="w-full"
      />
    </div>
  );
};

export default GitHubSnakeGraph;