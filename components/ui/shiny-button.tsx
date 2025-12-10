"use client";

import React from "react";
import { motion, type AnimationProps } from "framer-motion";
import { cn } from "@/lib/utils";

const animationProps = {
  initial: { "--x": "100%", scale: 0.8 },
  animate: { "--x": "-100%", scale: 1 },
  whileTap: { scale: 0.95 },
  transition: {
    repeat: Infinity,
    repeatType: "loop",
    repeatDelay: 1,
    type: "spring",
    stiffness: 20,
    damping: 15,
    mass: 2,
    scale: {
      type: "spring",
      stiffness: 200,
      damping: 5,
      mass: 0.5,
    },
  },
} as AnimationProps;

interface ShinyButtonProps {
  children: React.ReactNode;
  className?: string;
}

const ShinyButton = ({ children, className, ...props }: ShinyButtonProps & React.ButtonHTMLAttributes<HTMLButtonElement>) => {
  return (
    <motion.button
      {...animationProps}
      {...props}
      className={cn(
        "relative rounded-full px-8 py-4 font-bold transition-shadow duration-300 ease-in-out hover:shadow-lg overflow-hidden",
        className,
      )}
    >
      <span className="relative z-20 flex items-center gap-3">
        {children}
      </span>
      <span
        className="absolute inset-0 z-10 block rounded-[inherit] bg-[linear-gradient(-75deg,rgba(255,255,255,0)_calc(var(--x)+20%),rgba(255,255,255,0.3)_calc(var(--x)+25%),rgba(255,255,255,0)_calc(var(--x)+100%))]"
      ></span>
    </motion.button>
  );
};

export { ShinyButton };
