"use client";

import Link from "next/link";
import { navLinks, socialLinks } from "@/lib/data";
import { LucideIcon } from "lucide-react";
// 1. Import your new CalendarDemo component
import { CalendarDemo } from "@/components/CalendarDemo";

export const LeftSidebar = () => {
  return (
    <aside className="sticky top-16 h-[calc(100vh-4rem)] overflow-y-auto border-r border-border bg-background p-6">
      <h3 className="mb-4 text-xs font-semibold uppercase text-muted-foreground">
        Navigation
      </h3>

      {/* Navigation Links */}
      <nav className="space-y-1">
        {navLinks.map((link) => (
          <SidebarLink
            key={link.label}
            href={link.href}
            icon={link.icon}
          >
            {link.label}
          </SidebarLink>
        ))}
      </nav>

      {/* Connect Links */}
      <div className="mt-8 border-t border-border pt-6">
        <h3 className="mb-4 text-xs font-semibold uppercase text-muted-foreground">
          Connect
        </h3>
        <div className="space-y-1">
          {socialLinks.map((link) => (
            <SidebarLink
              key={link.label}
              href={link.href}
              icon={link.icon}
              target="_blank"
            >
              {link.label}
            </SidebarLink>
          ))}
        </div>
      </div>

     {/* Calendar Section */}
      <div className="mt-8 border-t border-border pt-6">
        <h3 className="mb-4 text-xs font-semibold uppercase text-muted-foreground">
          Calendar
        </h3>
        {/* FIX: Removed the scale-90 div. The component is now natively small. */}
        <div>
          <CalendarDemo />
        </div>
      </div>
      

    </aside>
  );
};

// Helper component
interface SidebarLinkProps {
  href: string;
  icon: LucideIcon;
  children: React.ReactNode;
  target?: string;
}

const SidebarLink = ({ href, icon: Icon, children, target }: SidebarLinkProps) => (
  <Link
    href={href}
    target={target}
    className="flex items-center space-x-3 rounded-md p-2 text-sm text-foreground transition-colors hover:bg-accent"
  >
    <Icon className="h-4 w-4 text-primary" />
    <span>{children}</span>
  </Link>
);

export default LeftSidebar;


// "use client";

// import Link from "next/link";
// // 1. Import your data from the central data file
// import { navLinks, socialLinks } from "@/lib/data";
// // 2. Import the type for the icons
// import { LucideIcon } from "lucide-react";

// export const LeftSidebar = () => {
//   return (
//     <aside className="sticky top-16 h-[calc(100vh-4rem)] overflow-y-auto border-r border-border bg-background p-6">
//       <h3 className="mb-4 text-xs font-semibold uppercase text-muted-foreground">
//         Navigation
//       </h3>

//       {/* 3. Map over the 'navLinks' data */}
//       <nav className="space-y-1">
//         {navLinks.map((link) => (
//           <SidebarLink
//             key={link.label}
//             href={link.href}
//             icon={link.icon}
//           >
//             {link.label}
//           </SidebarLink>
//         ))}
//       </nav>

//       <div className="mt-8 border-t border-border pt-6">
//         <h3 className="mb-4 text-xs font-semibold uppercase text-muted-foreground">
//           Connect
//         </h3>
//         {/* 4. Map over the 'socialLinks' data */}
//         <div className="space-y-1">
//           {socialLinks.map((link) => (
//             <SidebarLink
//               key={link.label}
//               href={link.href}
//               icon={link.icon}
//               target="_blank"
//             >
//               {link.label}
//             </SidebarLink>
//           ))}
//         </div>
//       </div>
//     </aside>
//   );
// };

// // 5. Updated helper component with proper types
// interface SidebarLinkProps {
//   href: string;
//   icon: LucideIcon;
//   children: React.ReactNode;
//   target?: string;
// }

// const SidebarLink = ({ href, icon: Icon, children, target }: SidebarLinkProps) => (
//   <Link
//     href={href}
//     target={target}
//     className="flex items-center space-x-3 rounded-md p-2 text-sm text-foreground transition-colors hover:bg-accent"
//   >
//     <Icon className="h-4 w-4 text-primary" />
//     <span>{children}</span>
//   </Link>
// );

// export default LeftSidebar;