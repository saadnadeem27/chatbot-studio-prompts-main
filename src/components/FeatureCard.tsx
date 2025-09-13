import { LucideIcon } from "lucide-react";

interface FeatureCardProps {
  icon: LucideIcon;
  title: string;
  description: string;
}

const FeatureCard = ({ icon: Icon, title, description }: FeatureCardProps) => {
  return (
    <div className="glass-card p-6 glow-hover group">
      <div className="w-12 h-12 rounded-xl bg-electric/20 flex items-center justify-center mb-4 group-hover:bg-electric/30 transition-colors">
        <Icon className="w-6 h-6 text-electric" />
      </div>
      <h3 className="text-xl font-semibold text-foreground mb-2">{title}</h3>
      <p className="text-muted-foreground leading-relaxed">{description}</p>
    </div>
  );
};

export default FeatureCard;