import { Card } from "./Card";
import { twMerge } from "tailwind-merge";

interface StepCardProps {
  number: number;
  title: string;
  description: string;
  className?: string;
}

export function StepCard({ number, title, description, className }: StepCardProps) {
  return (
    <Card className={twMerge("flex items-start p-6 gap-4", className)}>
      <div className="flex-shrink-0 w-12 h-12 rounded-full bg-gradient-to-r from-purple-600 to-blue-500 flex items-center justify-center text-white font-bold text-lg">
        {number}
      </div>
      <div>
        <h3 className="text-xl font-bold mb-2">{title}</h3>
        <p className="text-muted-foreground">{description}</p>
      </div>
    </Card>
  );
} 