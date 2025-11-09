"use client";

import React from 'react';
import { useTheme } from 'next-themes';

// URLs for your snake graphs
const snakeLight = "https://raw.githubusercontent.com/thisisshivamgupta/thisisshivamgupta/github-contribution-grid-snake.svg";
const snakeDark = "https://raw.githubusercontent.com/thisisshivamgupta/thisisshivamgupta/output/github-contribution-grid-snake-dark.svg";

export const GitHubSnakeGraph = () => {
  const { theme } = useTheme();

  // We need to wait for the component to mount to know the theme
  const [isMounted, setIsMounted] = React.useState(false);
  React.useEffect(() => setIsMounted(true), []);

  if (!isMounted) {
    // Render a placeholder or nothing while waiting for theme
    return <div className="h-32 w-full rounded-lg bg-accent" />;
  }

  const imgSrc = theme === 'dark' ? snakeDark : snakeLight;

  return (
    <div className="mt-4">
      <img 
        alt="github contribution grid snake animation" 
        src={imgSrc} 
        className="w-full"
      />
    </div>
  );
};

export default GitHubSnakeGraph;