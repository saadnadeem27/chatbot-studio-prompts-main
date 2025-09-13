import { Bot, Zap, Shield, Clock, Brain, Sparkles, MessageSquare, ChevronDown, BarChart3, Globe, Users, Lock, Cpu, Database, Settings, TrendingUp, Award, CheckCircle } from "lucide-react";
import { PremiumButton } from "@/components/ui/premium-button";
import ChatDemo from "@/components/ChatDemo";
import FeatureCard from "@/components/FeatureCard";
import PricingCard from "@/components/PricingCard";
import heroImage from "@/assets/ai-assistant-hero.jpg";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";

const Index = () => {
  const features = [
    {
      icon: Brain,
      title: "Advanced AI Intelligence",
      description: "Powered by cutting-edge language models with multi-modal capabilities for comprehensive assistance across all business domains."
    },
    {
      icon: Zap,
      title: "Lightning Fast Responses",
      description: "Sub-second response times with our globally distributed AI infrastructure and optimized processing engines."
    },
    {
      icon: Shield,
      title: "Enterprise Security",
      description: "SOC 2 Type II compliant with end-to-end encryption, zero-trust architecture, and comprehensive audit trails."
    },
    {
      icon: Clock,
      title: "24/7 Global Availability",
      description: "99.9% uptime SLA with redundant systems across multiple regions ensuring continuous service availability."
    },
    {
      icon: Sparkles,
      title: "Personalized AI Models",
      description: "Custom-trained models that learn your business context, terminology, and workflows for maximum relevance."
    },
    {
      icon: MessageSquare,
      title: "Natural Conversations",
      description: "Context-aware dialogue with memory retention, emotional intelligence, and multi-turn conversation handling."
    },
    {
      icon: Database,
      title: "Knowledge Integration",
      description: "Seamlessly connects with your existing databases, documents, and knowledge systems for informed responses."
    },
    {
      icon: Settings,
      title: "Advanced Automation",
      description: "Workflow automation, task scheduling, and intelligent routing to streamline your business processes."
    },
    {
      icon: BarChart3,
      title: "Analytics & Insights",
      description: "Comprehensive analytics dashboard with usage metrics, performance insights, and ROI tracking."
    },
    {
      icon: Globe,
      title: "Multi-Language Support",
      description: "Native support for 50+ languages with cultural context awareness and localized responses."
    },
    {
      icon: Lock,
      title: "Compliance Ready",
      description: "GDPR, HIPAA, and SOX compliant with data residency controls and regulatory reporting features."
    },
    {
      icon: Cpu,
      title: "Edge Computing",
      description: "Distributed processing across edge nodes for ultra-low latency and enhanced data privacy."
    }
  ];

  const pricingPlans = [
    {
      title: "Starter",
      price: "$0",
      period: "month",
      features: [
        "100 messages per month",
        "Basic AI responses",
        "Email support",
        "Standard response time"
      ]
    },
    {
      title: "Professional",
      price: "$29",
      period: "month",
      featured: true,
      features: [
        "Unlimited messages",
        "Advanced AI capabilities",
        "Priority support",
        "Custom integrations",
        "Analytics dashboard",
        "API access"
      ]
    },
    {
      title: "Enterprise",
      price: "$99",
      period: "month",
      features: [
        "Everything in Professional",
        "Dedicated account manager",
        "Custom AI training",
        "White-label solution",
        "SLA guarantee",
        "Advanced security features"
      ]
    }
  ];

  const testimonials = [
    {
      name: "Sarah Chen",
      role: "Product Manager",
      company: "TechCorp",
      content: "This AI assistant has revolutionized our workflow. The responses are incredibly accurate and it saves us hours every day."
    },
    {
      name: "Michael Rodriguez",
      role: "CTO",
      company: "StartupXYZ",
      content: "The best investment we've made this year. The AI's ability to understand context and provide relevant solutions is remarkable."
    },
    {
      name: "Emily Johnson",
      role: "Marketing Director",
      company: "GrowthCo",
      content: "Outstanding customer support and an AI that actually understands our business needs. Highly recommended!"
    }
  ];

  const faqs = [
    {
      question: "How accurate are the AI responses?",
      answer: "Our AI assistant maintains a 95% accuracy rate across various domains, continuously learning and improving from interactions."
    },
    {
      question: "Is my data secure and private?",
      answer: "Absolutely. We use end-to-end encryption and follow strict privacy protocols. Your data is never stored permanently or used for training without consent."
    },
    {
      question: "Can I integrate this with my existing tools?",
      answer: "Yes! We offer API access and pre-built integrations with popular platforms like Slack, Teams, and various CRM systems."
    },
    {
      question: "What kind of support do you provide?",
      answer: "We offer 24/7 email support for all plans, with priority support and dedicated account managers for Professional and Enterprise tiers."
    }
  ];

  return (
    <div className="min-h-screen bg-background">
      {/* Header */}
      <header className="glass-card sticky top-0 z-50 px-6 py-4" role="banner">
        <nav aria-label="Primary" className="max-w-7xl mx-auto flex items-center justify-between">
          <a href="#" className="flex items-center gap-2" aria-label="AI Assistant Pro Home">
            <Bot className="w-8 h-8 text-electric animate-pulse-glow" />
            <span className="text-xl font-bold text-foreground">AI Assistant Pro</span>
          </a>
          <div className="hidden md:flex items-center gap-8">
            <a href="#features" className="text-muted-foreground hover:text-electric transition-colors">Features</a>
            <a href="#pricing" className="text-muted-foreground hover:text-electric transition-colors">Pricing</a>
            <a href="#faq" className="text-muted-foreground hover:text-electric transition-colors">FAQ</a>
            <PremiumButton variant="outline" size="sm" aria-label="Sign In">Sign In</PremiumButton>
            <PremiumButton size="sm" aria-label="Get Started">Get Started</PremiumButton>
          </div>
        </nav>
      </header>
      <main id="main-content" role="main">
      {/* Hero Section */}
      <section className="relative px-6 py-20 lg:py-32">
        <div className="max-w-7xl mx-auto">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div className="text-center lg:text-left animate-slide-up">
              <h1 className="text-4xl lg:text-6xl font-bold text-foreground mb-6 leading-tight">
                Your <span className="text-electric font-semibold">Intelligent AI</span> Assistant for the Future
              </h1>
              <p className="text-xl text-muted-foreground mb-8 leading-relaxed">
                Experience next-generation AI assistance that understands, learns, and adapts to your needs. 
                Boost productivity with intelligent conversations and instant solutions.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center lg:justify-start">
                <PremiumButton size="lg" className="text-base">
                  Start Free Trial
                </PremiumButton>
                <PremiumButton variant="glass" size="lg" className="text-base">
                  Watch Demo
                </PremiumButton>
              </div>
            </div>
            
            <div className="relative">
              <div className="absolute inset-0 bg-electric/20 rounded-3xl blur-3xl animate-pulse-glow"></div>
              <img
                src={heroImage}
                alt="AI Assistant Pro interface illustration"
                className="relative z-10 w-full h-auto rounded-3xl animate-float"
                loading="eager"
                decoding="async"
                fetchPriority="high"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Stats Section */}
      <section className="px-6 py-20 bg-muted/20">
        <div className="max-w-7xl mx-auto">
          <div className="grid md:grid-cols-4 gap-8 text-center">
            <div className="glass-card p-6 glow-hover">
              <div className="text-3xl lg:text-4xl font-bold text-electric mb-2">99.9%</div>
              <p className="text-muted-foreground">Uptime SLA</p>
            </div>
            <div className="glass-card p-6 glow-hover">
              <div className="text-3xl lg:text-4xl font-bold text-electric mb-2">50+</div>
              <p className="text-muted-foreground">Languages Supported</p>
            </div>
            <div className="glass-card p-6 glow-hover">
              <div className="text-3xl lg:text-4xl font-bold text-electric mb-2">10M+</div>
              <p className="text-muted-foreground">Conversations Daily</p>
            </div>
            <div className="glass-card p-6 glow-hover">
              <div className="text-3xl lg:text-4xl font-bold text-electric mb-2">95%</div>
              <p className="text-muted-foreground">Accuracy Rate</p>
            </div>
          </div>
        </div>
      </section>

      {/* Chat Demo Section */}
      <section className="px-6 py-20">
        <div className="max-w-7xl mx-auto text-center">
          <h2 className="text-3xl lg:text-4xl font-bold text-foreground mb-4">
            Experience AI Conversations
          </h2>
          <p className="text-xl text-muted-foreground mb-12">
            Try our interactive demo to see how intelligent conversations feel
          </p>
          <ChatDemo />
        </div>
      </section>

      {/* Features Section */}
      <section id="features" className="px-6 py-20 bg-muted/20">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-3xl lg:text-4xl font-bold text-foreground mb-4">
              Enterprise-Grade AI Capabilities
            </h2>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
              Comprehensive AI solutions designed for enterprise needs with advanced security, scalability, and integration capabilities
            </p>
          </div>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
            {features.map((feature, index) => (
              <FeatureCard key={index} {...feature} />
            ))}
          </div>
        </div>
      </section>

      {/* Use Cases Section */}
      <section className="px-6 py-20">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-3xl lg:text-4xl font-bold text-foreground mb-4">
              Trusted Across Industries
            </h2>
            <p className="text-xl text-muted-foreground">
              Empowering businesses across various sectors with intelligent AI solutions
            </p>
          </div>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            <div className="glass-card p-8 glow-hover text-center">
              <Users className="w-12 h-12 text-electric mx-auto mb-4" />
              <h3 className="text-xl font-semibold text-foreground mb-3">Customer Support</h3>
              <p className="text-muted-foreground">Automate 80% of customer inquiries with intelligent responses and seamless escalation to human agents.</p>
            </div>
            <div className="glass-card p-8 glow-hover text-center">
              <TrendingUp className="w-12 h-12 text-electric mx-auto mb-4" />
              <h3 className="text-xl font-semibold text-foreground mb-3">Sales & Marketing</h3>
              <p className="text-muted-foreground">Generate qualified leads, personalize customer interactions, and optimize sales processes with AI insights.</p>
            </div>
            <div className="glass-card p-8 glow-hover text-center">
              <Award className="w-12 h-12 text-electric mx-auto mb-4" />
              <h3 className="text-xl font-semibold text-foreground mb-3">Healthcare</h3>
              <p className="text-muted-foreground">HIPAA-compliant AI for patient communication, appointment scheduling, and medical information assistance.</p>
            </div>
          </div>
        </div>
      </section>

      {/* Security & Compliance Section */}
      <section className="px-6 py-20 bg-muted/20">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-3xl lg:text-4xl font-bold text-foreground mb-4">
              Enterprise Security & Compliance
            </h2>
            <p className="text-xl text-muted-foreground">
              Built with security-first architecture to meet the most stringent enterprise requirements
            </p>
          </div>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            <div className="glass-card p-6 text-center glow-hover">
              <CheckCircle className="w-8 h-8 text-electric mx-auto mb-3" />
              <h4 className="font-semibold text-foreground mb-2">SOC 2 Type II</h4>
              <p className="text-sm text-muted-foreground">Certified compliance</p>
            </div>
            <div className="glass-card p-6 text-center glow-hover">
              <CheckCircle className="w-8 h-8 text-electric mx-auto mb-3" />
              <h4 className="font-semibold text-foreground mb-2">GDPR Ready</h4>
              <p className="text-sm text-muted-foreground">Data protection compliance</p>
            </div>
            <div className="glass-card p-6 text-center glow-hover">
              <CheckCircle className="w-8 h-8 text-electric mx-auto mb-3" />
              <h4 className="font-semibold text-foreground mb-2">HIPAA Compliant</h4>
              <p className="text-sm text-muted-foreground">Healthcare data security</p>
            </div>
            <div className="glass-card p-6 text-center glow-hover">
              <CheckCircle className="w-8 h-8 text-electric mx-auto mb-3" />
              <h4 className="font-semibold text-foreground mb-2">ISO 27001</h4>
              <p className="text-sm text-muted-foreground">Information security</p>
            </div>
          </div>
        </div>
      </section>

      {/* Testimonials Section */}
      <section className="px-6 py-20 bg-muted/20">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-3xl lg:text-4xl font-bold text-foreground mb-4">
              Trusted by Industry Leaders
            </h2>
            <p className="text-xl text-muted-foreground">
              See what our clients say about their AI assistant experience
            </p>
          </div>
          
          <div className="grid md:grid-cols-3 gap-8">
            {testimonials.map((testimonial, index) => (
              <div key={index} className="glass-card p-6 glow-hover">
                <p className="text-muted-foreground mb-6 italic">"{testimonial.content}"</p>
                <div>
                  <h4 className="font-semibold text-foreground">{testimonial.name}</h4>
                  <p className="text-sm text-muted-foreground">{testimonial.role} at {testimonial.company}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Pricing Section */}
      <section id="pricing" className="px-6 py-20">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-3xl lg:text-4xl font-bold text-foreground mb-4">
              Choose Your Plan
            </h2>
            <p className="text-xl text-muted-foreground">
              Flexible pricing for teams of all sizes
            </p>
          </div>
          
          <div className="grid md:grid-cols-3 gap-8 max-w-6xl mx-auto">
            {pricingPlans.map((plan, index) => (
              <PricingCard key={index} {...plan} />
            ))}
          </div>
        </div>
      </section>

      {/* FAQ Section */}
      <section id="faq" className="px-6 py-20 bg-muted/20">
        <div className="max-w-4xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-3xl lg:text-4xl font-bold text-foreground mb-4">
              Frequently Asked Questions
            </h2>
            <p className="text-xl text-muted-foreground">
              Get answers to common questions about our AI assistant
            </p>
          </div>
          
          <Accordion type="single" collapsible className="space-y-4">
            {faqs.map((faq, index) => (
              <AccordionItem key={index} value={`item-${index}`} className="glass-card px-6">
                <AccordionTrigger className="text-left text-foreground hover:text-electric">
                  {faq.question}
                </AccordionTrigger>
                <AccordionContent className="text-muted-foreground">
                  {faq.answer}
                </AccordionContent>
              </AccordionItem>
            ))}
          </Accordion>
        </div>
      </section>

      {/* CTA Section */}
      <section className="px-6 py-20">
        <div className="max-w-4xl mx-auto text-center">
          <div className="glass-card p-12 glow-hover">
            <h2 className="text-3xl lg:text-4xl font-bold text-foreground mb-4">
              Ready to Transform Your Workflow?
            </h2>
            <p className="text-xl text-muted-foreground mb-8">
              Join thousands of professionals already using AI Assistant Pro to boost their productivity
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <PremiumButton size="lg" className="text-base">
                Start Your Free Trial
              </PremiumButton>
              <PremiumButton variant="outline" size="lg" className="text-base">
                Contact Sales
              </PremiumButton>
            </div>
          </div>
        </div>
      </section>

      </main>

      {/* Footer */}
      <footer className="glass-card px-6 py-12">
        <div className="max-w-7xl mx-auto">
          <div className="grid md:grid-cols-4 gap-8">
            <div>
              <div className="flex items-center gap-2 mb-4">
                <Bot className="w-6 h-6 text-electric" />
                <span className="text-lg font-bold text-foreground">AI Assistant Pro</span>
              </div>
              <p className="text-muted-foreground">
                The future of AI-powered assistance for modern businesses.
              </p>
            </div>
            
            <div>
              <h4 className="font-semibold text-foreground mb-4">Product</h4>
              <ul className="space-y-2 text-muted-foreground">
                <li><a href="#" className="hover:text-electric transition-colors">Features</a></li>
                <li><a href="#" className="hover:text-electric transition-colors">Pricing</a></li>
                <li><a href="#" className="hover:text-electric transition-colors">API</a></li>
                <li><a href="#" className="hover:text-electric transition-colors">Integrations</a></li>
              </ul>
            </div>
            
            <div>
              <h4 className="font-semibold text-foreground mb-4">Company</h4>
              <ul className="space-y-2 text-muted-foreground">
                <li><a href="#" className="hover:text-electric transition-colors">About</a></li>
                <li><a href="#" className="hover:text-electric transition-colors">Blog</a></li>
                <li><a href="#" className="hover:text-electric transition-colors">Careers</a></li>
                <li><a href="#" className="hover:text-electric transition-colors">Contact</a></li>
              </ul>
            </div>
            
            <div>
              <h4 className="font-semibold text-foreground mb-4">Support</h4>
              <ul className="space-y-2 text-muted-foreground">
                <li><a href="#" className="hover:text-electric transition-colors">Help Center</a></li>
                <li><a href="#" className="hover:text-electric transition-colors">Documentation</a></li>
                <li><a href="#" className="hover:text-electric transition-colors">Status</a></li>
                <li><a href="#" className="hover:text-electric transition-colors">Privacy</a></li>
              </ul>
            </div>
          </div>
          
          <div className="border-t border-border mt-12 pt-8 text-center text-muted-foreground">
            <p>&copy; 2024 AI Assistant Pro. All rights reserved.</p>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default Index;