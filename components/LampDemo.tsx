
"use client";
import React from "react";
import { motion } from "framer-motion"; // Correct import
import { LampContainer } from "@/components/ui/lamp"; 



export function LampDemo() {
  return (
    <LampContainer>
      <motion.h1
        initial={{ opacity: 0.5, y: 150 }}
        whileInView={{ opacity: 1, y: 200 }}
        transition={{
          delay: 0.3,
          duration: 0.8,
          ease: "easeInOut",
        }}
        // Use semantic colors
        className="mt-8 bg-gradient-to-br from-foreground to-muted-foreground py-4 bg-clip-text text-center text-4xl font-medium tracking-tight text-transparent md:text-7xl"
      >
        Welcome to <br />Shivam's Almanac

        
      </motion.h1>
    </LampContainer>
  );
}