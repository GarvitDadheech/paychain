import React from "react";
import { twMerge } from "tailwind-merge";

interface ScaleInProps {
  children: React.ReactNode;
  delay?: number;
  duration?: number;
  className?: string;
}

export function ScaleIn({
  children,
  delay = 0,
  duration = 0.5,
  className = "",
}: ScaleInProps) {
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
        "opacity-0 animate-scale-in",
        getDelayClass(),
        className
      )}
    >
      {children}
    </div>
  );
} 