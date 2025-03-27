import { twMerge } from "tailwind-merge";
import { forwardRef } from "react";

interface CardProps extends React.HTMLAttributes<HTMLDivElement> {
  hoverEffect?: boolean;
}

const Card = forwardRef<HTMLDivElement, CardProps>(
  ({ className, hoverEffect = true, ...props }, ref) => {
    return (
      <div
        className={twMerge(
          "rounded-3xl bg-white/5 p-6 backdrop-blur-lg border border-white/10 shadow-lg",
          hoverEffect && "transition-all duration-300 hover:shadow-xl hover:scale-[1.02]",
          className
        )}
        ref={ref}
        {...props}
      />
    );
  }
);
Card.displayName = "Card";

export { Card }; 