
import React from 'react';
import { cn } from '@/lib/utils';
import { LucideIcon } from 'lucide-react';

interface FeatureCardProps {
  title: string;
  description: string;
  icon: LucideIcon;
  delay?: number;
}

const FeatureCard: React.FC<FeatureCardProps> = ({ title, description, icon: Icon, delay = 0 }) => {
  return (
    <div 
      className={cn(
        "bg-white bg-opacity-10 backdrop-blur-lg rounded-xl p-6",
        "border border-white border-opacity-20",
        "shadow-glass hover:shadow-glow transition-all duration-300",
        "hover:-translate-y-1 flex flex-col items-center text-center",
        "animate-fade-in opacity-0"
      )}
      style={{ animationDelay: `${delay}ms` }}
    >
      <div className="p-3 rounded-full bg-resumate-highlight bg-opacity-20 mb-4">
        <Icon className="h-8 w-8 text-white animate-float" />
      </div>
      <h3 className="text-xl font-bold text-white mb-2">{title}</h3>
      <p className="text-gray-200">{description}</p>
    </div>
  );
};

export default FeatureCard;
