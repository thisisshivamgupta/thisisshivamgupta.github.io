import Link from "next/link";
import { Badge } from "@/components/ui/badge";
import { Check, Heart, Sparkles } from "lucide-react";

export const Footer = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="w-full relative z-10">
      {/* Gradient Top Border */}
      <div className="h-[2px] w-full bg-gradient-to-r from-primary via-accent to-primary" />
      
      <div className="w-full bg-background/95 backdrop-blur-sm">
        {/* 1. REDUCED PADDING: Changed py-8 to py-4 */}
        <div className="max-w-[1400px] mx-auto px-6 py-4">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-4 items-center w-full">
            
            {/* Left Side */}
            <div className="flex flex-col items-center md:items-start gap-3">
              <div className="flex items-center gap-2">
                <Sparkles className="w-5 h-5 text-purple-500" />
                <span className="font-bold text-lg bg-gradient-to-r from-blue-500 via-purple-500 to-pink-500 bg-clip-text text-transparent">
                  Shivam Gupta
                </span>
                <Badge variant="secondary" className="shadow-sm">
                  <Check className="w-3 h-3 mr-1" />
                  Pro
                </Badge>
              </div>
              <Link
                href="https://github.com/thisisshivamgupta"
                target="_blank"
                rel="noopener noreferrer"
                className="text-sm text-muted-foreground hover:text-foreground transition-colors font-mono"
              >
                @thisisshivamgupta
              </Link>
            </div>

            {/* Center - Copyright */}
            <div className="flex items-center justify-center text-sm text-muted-foreground">
              {/* Added suppressHydrationWarning to fix date mismatch error */}
              <p suppressHydrationWarning>© {currentYear} All rights reserved</p>
            </div>

            {/* Right Side - Credits */}
            <div className="flex items-center justify-center md:justify-end text-sm text-muted-foreground">
              <p className="flex items-center gap-1.5">
                Crafted with <Heart className="w-4 h-4 text-red-500 fill-red-500 animate-pulse" /> by{" "}
                <Link
                  href="https://almanac.com" // This is a placeholder
                  target="_blank"
                  rel="noopener noreferrer"
                  className="font-semibold text-foreground hover:text-purple-500 transition-colors"
                >
                  Almanac
                </Link>
              </p>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;

// import Link from "next/link";
// import { Badge } from "@/components/ui/badge";
// import { Check, Heart, Sparkles } from "lucide-react"; // Make sure lucide-react is installed
// import { AlertCircleIcon, BadgeCheckIcon, CheckIcon } from "lucide-react"

// export const Footer = () => {
//   const currentYear = new Date().getFullYear();

//   return (
//     <footer className="w-full relative z-10">
//       {/* Gradient Top Border - This will be full-width */}
//       <div className="h-[2px] w-full bg-gradient-to-r from-blue-500 via-purple-500 to-pink-500" />
      
//       <div className="w-full bg-background/95 backdrop-blur-sm">
//         {/* MODIFICATION: Replaced 'container' with 'max-w-[1400px]' to match your layout */}
//         <div className="max-w-[1400px] mx-auto px-6 py-8">
//           <div className="grid grid-cols-1 md:grid-cols-3 gap-6 items-center w-full">
            
//             {/* Left Side */}
//             <div className="flex flex-col items-center md:items-start gap-3">
//               <div className="flex items-center gap-2">
//                 <Sparkles className="w-5 h-5 text-purple-500" />
//                 <span className="font-bold text-lg bg-gradient-to-r from-blue-500 via-purple-500 to-pink-500 bg-clip-text text-transparent">
//                   Shivam Gupta
//                 </span>
                
//               </div>
//               <Link
//                 href="https://github.com/thisisshivamgupta"
//                 target="_blank"
//                 rel="noopener noreferrer"
//                 className="text-sm text-muted-foreground hover:text-foreground transition-colors font-mono"
//               >
//                 @thisisshivamgupta
//               </Link>
//             </div>

//             {/* Center - Copyright */}
//             <div className="flex items-center justify-center text-sm text-muted-foreground">
//               <p>© {currentYear} All rights reserved</p>
//             </div>

//             {/* Right Side - Credits */}
//             <div className="flex items-center justify-center md:justify-end text-sm text-muted-foreground">
//               <p className="flex items-center gap-1.5">
//                 Crafted with <Heart className="w-4 h-4 text-red-500 fill-red-500 animate-pulse" /> by{" "}
//                 <Link
//                   href="https://almanac.com" // This is a placeholder, change if needed
//                   target="_blank"
//                   rel="noopener noreferrer"
//                   className="font-semibold text-foreground hover:text-purple-500 transition-colors"
//                 >
//                   Almanac
//                 </Link>
//               </p>
//             </div>
//           </div>
//         </div>
//       </div>
//     </footer>
//   );
// };

// export default Footer;