import { Card } from "./Card";
import { twMerge } from "tailwind-merge";
import { LucideIcon } from "lucide-react";

interface FeatureCardProps {
  title: string;
  description: string;
  icon: LucideIcon;
  className?: string;
}

export function FeatureCard({ title, description, icon: Icon, className }: FeatureCardProps) {
  return (
    <Card className={twMerge("flex flex-col items-center text-center p-8", className)}>
      <div className="w-16 h-16 rounded-full bg-purple-500/20 flex items-center justify-center mb-6">
        <Icon className="w-8 h-8 text-purple-500" />
      </div>
      <h3 className="text-xl font-bold mb-3">{title}</h3>
      <p className="text-muted-foreground">{description}</p>
    </Card>
  );
} 