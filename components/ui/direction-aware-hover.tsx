"use client";

import { useRef, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { cn } from "@/lib/utils";

export const DirectionAwareHover = ({
  imageUrl,
  children,
  className,
  imageClassName,
}: {
  imageUrl: string;
  children: React.ReactNode;
  className?: string;
  imageClassName?: string;
}) => {
  const ref = useRef<HTMLDivElement>(null);
  const [direction, setDirection] = useState<
    "top" | "bottom" | "left" | "right" | string
  >("left");

  const handleMouseEnter = (
    event: React.MouseEvent<HTMLDivElement, MouseEvent>
  ) => {
    if (!ref.current) return;

    const rect = ref.current.getBoundingClientRect();
    const { width, height } = rect;
    const x = (event.clientX - rect.left - width / 2) * (width > height ? height / width : 1);
    const y = (event.clientY - rect.top - height / 2) * (height > width ? width / height : 1);
    const d = Math.round((Math.atan2(y, x) * (180 / Math.PI) + 180) / 90 + 3) % 4;

    switch (d) {
      case 0:
        setDirection("top");
        break;
      case 1:
        setDirection("right");
        break;
      case 2:
        setDirection("bottom");
        break;
      case 3:
        setDirection("left");
        break;
      default:
        setDirection("left");
        break;
    }
  };

  const variants = {
    initial: {
      x:
        direction === "left"
          ? "-100%"
          : direction === "right"
          ? "100%"
          : "0%",
      y:
        direction === "top"
          ? "-100%"
          : direction === "bottom"
          ? "100%"
          : "0%",
    },
    animate: {
      x: "0%",
      y: "0%",
    },
    exit: {
      x:
        direction === "left"
          ? "-100%"
          : direction === "right"
          ? "100%"
          : "0%",
      y:
        direction === "top"
          ? "-100%"
          : direction === "bottom"
          ? "100%"
          : "0%",
    },
  };

  return (
    <div
      onMouseEnter={handleMouseEnter}
      ref={ref}
      className={cn(
        "relative bg-background group/hover w-full h-80 md:h-96 overflow-hidden rounded-lg",
        className
      )}
    >
      <div
        className={cn("w-full h-full", imageClassName)}
        style={{
          backgroundImage: `url(${imageUrl})`,
          backgroundSize: "cover",
          backgroundPosition: "center",
        }}
      />
      <div className="absolute inset-0 w-full h-full bg-black/40 group-hover/hover:bg-black/70 transition-all duration-300" />
      <AnimatePresence>
        <motion.div
          variants={variants}
          initial="initial"
          animate="animate"
          exit="exit"
          transition={{
            duration: 0.3,
            ease: "easeOut",
          }}
          className="absolute inset-0 w-full h-full"
        >
          {children}
        </motion.div>
      </AnimatePresence>
    </div>
  );
};