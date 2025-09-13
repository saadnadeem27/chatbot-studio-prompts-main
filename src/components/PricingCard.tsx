import { Check } from "lucide-react";
import { PremiumButton } from "./ui/premium-button";

interface PricingCardProps {
  title: string;
  price: string;
  period: string;
  features: string[];
  featured?: boolean;
}

const PricingCard = ({ title, price, period, features, featured = false }: PricingCardProps) => {
  return (
    <div className={`glass-card p-8 glow-hover ${featured ? "border-electric glow-blue" : ""}`}>
      {featured && (
        <div className="text-center mb-4">
          <span className="bg-electric text-primary-foreground px-3 py-1 rounded-full text-sm font-medium">
            Most Popular
          </span>
        </div>
      )}
      
      <div className="text-center mb-6">
        <h3 className="text-2xl font-bold text-foreground mb-2">{title}</h3>
        <div className="flex items-baseline justify-center gap-1">
          <span className="text-4xl font-bold text-electric">{price}</span>
          <span className="text-muted-foreground">/{period}</span>
        </div>
      </div>

      <ul className="space-y-3 mb-8">
        {features.map((feature, index) => (
          <li key={index} className="flex items-center gap-3">
            <Check className="w-5 h-5 text-electric shrink-0" />
            <span className="text-muted-foreground">{feature}</span>
          </li>
        ))}
      </ul>

      <PremiumButton 
        variant={featured ? "primary" : "outline"} 
        className="w-full"
        size="lg"
      >
        Get Started
      </PremiumButton>
    </div>
  );
};

export default PricingCard;