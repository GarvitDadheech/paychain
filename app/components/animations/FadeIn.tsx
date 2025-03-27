import React from "react";
import { twMerge } from "tailwind-merge";

interface FadeInProps {
  children: React.ReactNode;
  delay?: number;
  direction?: "up" | "down" | "left" | "right";
  duration?: number;
  className?: string;
}

export function FadeIn({
  children,
  delay = 0,
  direction = "up",
  duration = 0.5,
  className = "",
}: FadeInProps) {
  const getDirectionClass = () => {
    switch (direction) {
      case "up": return "animate-fade-in-up";
      case "down": return "animate-fade-in-down";
      case "left": return "animate-fade-in-left";
      case "right": return "animate-fade-in-right";
      default: return "animate-fade-in-up";
    }
  };

  const getDelayClass = () => {
    // Convert delay to closest predefined delay class
    if (delay <= 0.05) return "";
    if (delay <= 0.15) return "delay-100";
    if (delay <= 0.25) return "delay-200";
    if (delay <= 0.35) return "delay-300";
    if (delay <= 0.45) return "delay-400";
    return "delay-500";
  };

  return (
    <div
      className={twMerge(
        "opacity-0",
        getDirectionClass(),
        getDelayClass(),
        className
      )}
    >
      {children}
    </div>
  );
} 