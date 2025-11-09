import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  // 1. Enable Static HTML Export
  output: "export",
  
  // 2. Disable Image Optimization (GitHub Pages doesn't support the Next.js image server)
  images: {
    unoptimized: true,
  },
  
  // 3. Set the base path (not required for a User Page, but good practice if you use a Project Page)
  // Since your site is a User Page (username.github.io), the base path is usually '/'
  // If your repository name were different (e.g., 'portfolio-app'), you would set: basePath: '/portfolio-app',
  basePath: "", // Set to empty string for the root User Page domain (thisisshivamgupta.github.io)

  // 4. Optionally suppress the warning about missing trailing slash (Turbopack specific)
  trailingSlash: true,
};

export default nextConfig;