"use client";
import Link from "next/link";
import React from "react";
import { Mail, FileText, BadgeCheckIcon } from "lucide-react";
import { Button } from "@/components/ui/button";
import { professionalProfiles } from "@/lib/data";
import VercelVisitorCounter from "@/components/VercelVisitorCounter";
import { Badge } from "../ui/badge";

export const RightSidebar = () => {
  return (
    <aside className="sticky top-16 h-[calc(100vh-4rem)] overflow-y-auto border-l border-border bg-background p-6">
      <h3 className="mb-4 text-xs font-semibold uppercase text-muted-foreground">
        Quick Access
      </h3>
      <div className="space-y-4">
        {/* Contact CTA */}
        <Button asChild className="w-full">
          <Link href="/contact">
            <Mail className="w-4 h-4 mr-2" />
            Hire Shivam
          </Link>
        </Button>

        {/* Resume Download CTA */}
        <Button asChild variant="secondary" className="w-full">
          <a href="/resume.pdf" target="_blank" rel="noopener noreferrer">
            <FileText className="w-4 h-4 mr-2" />
            Download CV
          </a>
        </Button>

        {/* Professional Profiles */}
        <div className="pt-4 border-t border-border">
          <h3 className="mb-3 text-xs font-semibold uppercase text-muted-foreground">
            Professional Profiles
          </h3>
          <div className="space-y-2">
            {professionalProfiles.map((link) => (
              <RightSidebarLink
                key={link.label}
                href={link.href}
                icon={link.icon}
                label={link.label}
              />
            ))}
          </div>
        </div>

        {/* Visitor Stats Section */}
        <div className="pt-4 border-t border-border">
          <h3 className="mb-3 text-xs font-semibold uppercase text-muted-foreground">
            Stats
          </h3>

          <div className="flex flex-col gap-3">
            {/* Vercel Analytics Badge */}
            <VercelVisitorCounter />
          </div>
        </div>


        <Badge
          variant="secondary"
          className="bg-blue-500 text-white dark:bg-blue-600"
        >
          <BadgeCheckIcon />
          Verified
        </Badge>

        

      </div>
    </aside>
  );
};

const RightSidebarLink = ({ href, icon: Icon, label }: any) => (
  <Link
    href={href}
    target="_blank"
    rel="noopener noreferrer"
    className="flex items-center space-x-3 p-2 rounded-md text-sm text-foreground transition-colors hover:bg-accent"
  >
    <Icon className="h-4 w-4 text-primary shrink-0" />
    <span className="truncate">{label}</span>
  </Link>
);

export default RightSidebar;

// "use client";
// import Link from "next/link";
// // 1. Import React hooks
// import React, { useState, useEffect } from "react";
// import { Mail, FileText, Eye } from "lucide-react";
// import { Button } from "@/components/ui/button";
// import { socialLinks } from "@/lib/data";
// import type { SocialLink } from "@/lib/data";
// import { LucideIcon } from "lucide-react";

// export const RightSidebar = () => {
//   // 2. Add a 'mounted' state
//   const [isMounted, setIsMounted] = useState(false);
//   const [visitorCount, setVisitorCount] = useState<number | null>(null);

//   // 3. Set mounted to true only after the component mounts on the client
//   useEffect(() => {
//     setIsMounted(true);

//     // Try to fetch visitor count (optional - won't block rendering)
//     const controller = new AbortController();
//     const timeoutId = setTimeout(() => controller.abort(), 3000);

//     fetch(`https://api.countapi.xyz/hit/thisisshivamgupta-portfolio/visits`, {
//       signal: controller.signal
//     })
//       .then((res) => res.json())
//       .then((data) => setVisitorCount(data.value))
//       .catch(() => setVisitorCount(null))
//       .finally(() => clearTimeout(timeoutId));

//     return () => {
//       clearTimeout(timeoutId);
//       controller.abort();
//     };
//   }, []);

//   return (
//     <aside className="sticky top-16 h-[calc(100vh-4rem)] overflow-y-auto border-l border-border bg-background p-6">
//       <h3 className="mb-4 text-xs font-semibold uppercase text-muted-foreground">
//         Quick Access
//       </h3>
//       <div className="space-y-4">
//         {/* Contact CTA */}
//         <Button asChild className="w-full">
//           <Link href="/contact">
//             <Mail className="w-4 h-4 mr-2" />
//             Hire Shivam
//           </Link>
//         </Button>

//         {/* Resume Download CTA */}
//         <Button asChild variant="secondary" className="w-full">
//           <a href="/resume.pdf" target="_blank" rel="noopener noreferrer">
//             <FileText className="w-4 h-4 mr-2" />
//             Download CV
//           </a>
//         </Button>

//         {/* Professional Profiles (from lib/data.ts) */}
//         <div className="pt-4 border-t border-border">
//           <h3 className="mb-3 text-xs font-semibold uppercase text-muted-foreground">
//             Professional Profiles
//           </h3>
//           <div className="space-y-2">
//             {socialLinks.map((link) => (
//               <RightSidebarLink
//                 key={link.label}
//                 href={link.href}
//                 icon={link.icon}
//                 label={link.label}
//               />
//             ))}
//           </div>
//         </div>

//         {/* Visitor Badges Section */}
//         <div className="pt-4 border-t border-border">
//           <h3 className="mb-3 text-xs font-semibold uppercase text-muted-foreground">
//             Stats
//           </h3>

//           <div className="flex flex-col gap-3">
//             {/* Custom Visitor Counter - Only if it loaded */}
//             {visitorCount && (
//               <a
//                 href="https://linktr.ee/thisisshivamgupta"
//                 target="_blank"
//                 rel="noopener noreferrer"
//                 className="inline-flex items-center gap-2 px-3 py-2 bg-gradient-to-r from-violet-600 to-indigo-600 text-white rounded-lg hover:shadow-lg transition-all duration-300 hover:scale-[1.02]"
//               >
//                 <Eye className="h-4 w-4" />
//                 <div className="flex flex-col">
//                   <span className="text-xs opacity-90">Portfolio Visits</span>
//                   <span className="text-sm font-bold tabular-nums">
//                     {visitorCount.toLocaleString()}
//                   </span>
//                 </div>
//               </a>
//             )}

//             {/* GitHub Profile Visitor Counter - ALWAYS SHOW */}
//             <a
//               href="https://linktr.ee/thisisshivamgupta"
//               target="_blank"
//               rel="noopener noreferrer"
//               className="block hover:opacity-80 transition-opacity"
//             >
//               <img
//                 alt="GitHub Profile Visitors"
//                 src="https://komarev.com/ghpvc/?username=thisisshivamgupta&color=blueviolet"
//                 className="w-full h-auto"
//               />
//             </a>
//           </div>
//         </div>
//       </div>
//     </aside>
//   );
// };

// // ... (Helper component remains the same) ...
// const RightSidebarLink = ({ href, icon: Icon, label }: any) => (
//   <Link
//     href={href}
//     target="_blank"
//     rel="noopener noreferrer"
//     className="flex items-center space-x-3 p-2 rounded-md text-sm text-foreground transition-colors hover:bg-accent"
//   >
//     <Icon className="h-4 w-4 text-primary shrink-0" />
//     <span className="truncate">{label}</span>
//   </Link>
// );

// export default RightSidebar;

// "use client";

// import Link from "next/link";
// import { Zap, Code, Mail, FileText } from "lucide-react";
// import { Button } from "@/components/ui/button";

// export const RightSidebar = () => {
//   return (
//     // Use semantic colors
//     <aside className="sticky top-16 h-[calc(100vh-4rem)] overflow-y-auto border-l border-border bg-background p-6">
//       <h3 className="mb-4 text-xs font-semibold uppercase text-muted-foreground">
//         Quick Access
//       </h3>

//       <div className="space-y-4">

//         {/* Contact CTA */}
//         <Button asChild className="w-full">
//           <Link href="/contact">
//             <Mail className="w-4 h-4 mr-2" />
//             Hire Shivam
//           </Link>
//         </Button>

//         {/* Resume Download CTA (Re-inforcing the top nav) */}
//         <Button asChild variant="secondary" className="w-full">
//           <a href="/resume.pdf" target="_blank" rel="noopener noreferrer">
//             <FileText className="w-4 h-4 mr-2" />
//             Download CV
//           </a>
//         </Button>

//        <div className="pt-4 border-t border-border">
//         <h3 className="mb-3 text-xs font-semibold uppercase text-muted-foreground">
//           Professional Profiles
//         </h3>
//           <div className="space-y-2">

//             {/* LeetCode Profile */}
//             <RightSidebarLink
//               href="https://leetcode.com/u/thisisshivamgupta/"
//               icon={Zap}
//               label="LeetCode Profile"
//             />

//             {/* GitHub Profile (Already in left nav, but good for prominence here) */}
//             <RightSidebarLink
//               href="https://github.com/thisisshivamgupta"
//               icon={Code}
//               label="GitHub Repos"
//             />

//             {/* Discord Community */}
//             <RightSidebarLink
//               href="https://discord.gg/zu6ENtJRGh"
//               icon={Zap}
//               label="Join Discord"
//             />

//           </div>
//         </div>
// {/* --- THIS IS THE NEW SECTION YOU REQUESTED --- */}
//         <div className="pt-4 border-t border-border">
//           <h3 className="mb-3 text-xs font-semibold uppercase text-muted-foreground">
//             Stats
//           </h3>
//           <div className="flex flex-wrap gap-2">

//             {/* GitHub Profile Visitor Counter (from your example) */}
//             <a href="https://linktr.ee/thisisshivamgupta" target="_blank" rel="noopener noreferrer">
//               <img alt="GitHub Profile Visitors" src="https://komarev.com/ghpvc/?username=thisisshivamgupta&color=blueviolet" />
//             </a>

//             {/* New Website Visitor Counter */}
//             <a href="https://visitor-badge.la" target="_blank" rel="noopener noreferrer">
//               <img alt="Portfolio Visitor Count" src="https://api.visitor-badge.la/api?page=thisisshivamgupta.portfolio&left_text=Visitors&left_color=blueviolet" />
//             </a>

//           </div>
//         </div>
//         {/* --- END OF NEW SECTION --- */}

//       </div>
//     </aside>
//   );
// };

// // Helper component for styled links
// const RightSidebarLink = ({ href, icon: Icon, label }: any) => (
//   <Link
//     href={href}
//     target="_blank"
//     rel="noopener noreferrer"
//     // Use semantic colors
//     className="flex items-center space-x-3 p-2 rounded-md text-sm text-foreground transition-colors hover:bg-accent"
//   >
//     <Icon className="h-4 w-4 text-primary shrink-0" />
//     <span className="truncate">{label}</span>
//   </Link>
// );

// export default RightSidebar;
