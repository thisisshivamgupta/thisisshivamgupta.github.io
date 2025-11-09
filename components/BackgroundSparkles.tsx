"use client";
import React from "react";
import { SparklesCore } from "@/components/ui/sparkles";

export function BackgroundSparkles() {
  return (
    <div className="w-full h-full absolute inset-0 z-0">
      <SparklesCore
        id="tsparticlesfullpage"
        background="transparent"
        minSize={0.4}
        maxSize={1.0}
        particleDensity={40} // Reduced density for a subtle effect
        className="w-full h-full"
        particleColor="#FFFFFF"
      />
    </div>
  );
}