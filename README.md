# 🚀 Shivam Gupta - Portfolio

[![Deploy Status](https://github.com/thisisshivamgupta/thisisshivamgupta.github.io/actions/workflows/deploy.yml/badge.svg)](https://github.com/thisisshivamgupta/thisisshivamgupta.github.io/actions)
[![Next.js](https://img.shields.io/badge/Next.js-16.0-black?style=flat&logo=next.js)](https://nextjs.org/)
[![TypeScript](https://img.shields.io/badge/TypeScript-5.0-blue?style=flat&logo=typescript)](https://www.typescriptlang.org/)
[![Tailwind CSS](https://img.shields.io/badge/Tailwind-3.4-38bdf8?style=flat&logo=tailwind-css)](https://tailwindcss.com/)

> A modern, responsive portfolio website built with Next.js, featuring a beautiful gradient border design, Notion blog integration, and dark mode support.

🌐 **Live Site:** [thisisshivamgupta.github.io](https://thisisshivamgupta.github.io)

---

## ✨ Features

- 🎨 **Modern Design**: Beautiful gradient border effects and glassmorphism UI
- 🌓 **Dark Mode**: System-aware theme switching with persistent preferences
- 📱 **Fully Responsive**: Optimized for all devices (mobile, tablet, desktop)
- 📝 **Notion Blog Integration**: Dynamic blog powered by Notion API
- ⚡ **Performance Optimized**: Static site generation with Next.js 16
- 🎯 **SEO Friendly**: Optimized meta tags and semantic HTML
- 🔥 **Interactive Components**: Smooth animations and hover effects
- 📊 **Analytics Ready**: Vercel Analytics and Speed Insights integration
- 🎭 **Three-Column Layout**: Organized sidebar navigation
- 🔍 **Visitor Counter**: Real-time visitor tracking

---

## 🛠️ Tech Stack

### Core
- **Framework**: [Next.js 16.0](https://nextjs.org/) (App Router)
- **Language**: [TypeScript](https://www.typescriptlang.org/)
- **Styling**: [Tailwind CSS](https://tailwindcss.com/)
- **UI Components**: [shadcn/ui](https://ui.shadcn.com/)

### Libraries & Tools
- **Notion Integration**: [react-notion-x](https://github.com/NotionX/react-notion-x)
- **Icons**: [Lucide React](https://lucide.dev/)
- **Animations**: [tailwindcss-animate](https://github.com/jamiebuilds/tailwindcss-animate)
- **Theme**: [next-themes](https://github.com/pacocoursey/next-themes)
- **Deployment**: GitHub Pages (via GitHub Actions)

---

## 📁 Project Structure
```
portfolio-app/
├── app/
│ ├── (routes)/
│ │ ├── about/
│ │ ├── blog/
│ │ ├── contact/
│ │ ├── projects/
│ │ └── services/
│ ├── globals.css
│ ├── layout.tsx
│ └── page.tsx
├── components/
│ ├── Layout/
│ │ ├── TopNav.tsx
│ │ ├── LeftSidebar.tsx
│ │ ├── RightSidebar.tsx
│ │ └── Footer.tsx
│ ├── Projects/
│ │ └── ProjectCard.tsx
│ ├── GitHub/
│ │ └── GitHubStreak.tsx
│ ├── ui/
│ │ ├── button.tsx
│ │ ├── card.tsx
│ │ └── badge.tsx
│ ├── ThemeProvider.tsx
│ └── NotionPage.tsx
├── lib/
│ ├── data.ts
│ └── utils.ts
├── public/
│ ├── fonts/
│ └── images/
├── .github/
│ └── workflows/
│ └── deploy.yml
├── next.config.js
├── tailwind.config.ts
├── tsconfig.json
└── package.json
  ```
---
### Deployment
- The site automatically deploys to GitHub Pages when you push to main:

  git add .
  git commit -m "Update portfolio"
  git push origin main

- GitHub Actions will:
```
✅ Build the Next.js site
✅ Export static files
✅ Deploy to GitHub Pages
✅ Update live site (2-3 minutes)
```
---
## Customization
Update Personal Information

Edit lib/data.ts:
export const personalInfo = {
  name: "Your Name",
  title: "Your Title",
  bio: "Your bio...",
  // ... more fields
};

export const socialLinks = [
  // Update your social links
];

---
🤝 Contributing
Contributions, issues, and feature requests are welcome!
```
Fork the project
Create your feature branch (git checkout -b feature/AmazingFeature)
Commit your changes (git commit -m 'Add some AmazingFeature')
Push to the branch (git push origin feature/AmazingFeature)
Open a Pull Request
```
---
## 🗺️ Roadmap

- [ ] Add blog search functionality

- [ ] Implement contact form with email integration

- [ ] Add project filtering by technology

- [ ] Create case studies for major projects

- [ ] Add animations with Framer Motion

- [ ] Implement RSS feed for blog

- [ ] Add language switcher (i18n)

- [ ] Create admin dashboard for content management

---

## 📈 Project Status

🟢 **Active Development** - Regularly maintained and updated

**Version**: 1.0.0  

**Last Updated**: January 2025

---

<div align="center">

Made with ❤️ by [Shivam Gupta](https://github.com/thisisshivamgupta)

⭐ Star this repo if you find it helpful!

</div>
