import React, { useState } from "react";
import {
  Check,
  Smartphone,
  GraduationCap,
  Scale,
  Building,
  Sparkles,
} from "lucide-react";
import {
  Card,
  CardContent,
  CardHeader,
  CardTitle,
  CardDescription,
  CardFooter,
} from "./ui/card";
import { Button } from "./ui/button";
import ContactSalesModal from "./ContactSalesModal";
import { openPlatformAppStore } from "../utils/platformDetection";

const pricingPlans = [
  {
    name: "Free",
    monthlyPrice: "PKR 0",
    yearlyPrice: "PKR 0",
    description: "For individuals & beginners",
    icon: Smartphone,
    features: [
      "25 Daily Legal Queries",
      "3 Daily Chats with Legal PDF Documents",
      "Basic Legal Information",
      "Know Your Rights Guide",
      "Community Support",
      "Mobile Access",
    ],
    popular: false,
    contactSales: false,
  },
  {
    name: "Students",
    monthlyPrice: "PKR 199",
    yearlyPrice: "PKR 1,999",
    description: "For law students & learners",
    icon: GraduationCap,
    features: [
      "Includes Free Plan Features",
      "50 Daily Legal Queries",
      "50 Legal Document Templates",
      "10 Daily Chats with Legal PDF Documents",
      "Advanced Legal Research",
      "Study Resources & Guides",
      "Case Analysis Tools",
      "Community Support",
      "Mobile & Web Access",
    ],
    popular: true,
    contactSales: false,
  },
  {
    name: "Professionals",
    monthlyPrice: "PKR 4,999",
    yearlyPrice: "PKR 49,999",
    description: "For lawyers, judges & advocates",
    icon: Scale,
    features: [
      "Includes Students Plan Features",
      "Expanded Document Templates",
      "Premium Legal Research",
      "Case Management Tools",
      "Advanced Case Analytics",
      "Client Portal Access",
      "Priority Support",
      "API Access",
      "Document Automation",
      "Precedent Database",
    ],
    popular: false,
    contactSales: false,
  },
  {
    name: "Organizations",
    monthlyPrice: "Starting from\nPKR 9,999",
    yearlyPrice: "Custom Pricing",
    description: "For firms & institutions",
    icon: Building,
    features: [
      "Everything in Professionals Plan",
      "Team Member Access",
      "Branding Options",
      "Dedicated Account Manager",
      "Custom Workflows",
      "Advanced Analytics Dashboard",
      "Custom Deployment Discussion",
      "Support response targets",
      "Priority organization support",
    ],
    popular: false,
    contactSales: true,
  },
];

const Pricing = () => {
  const [billingCycle, setBillingCycle] = useState("monthly"); // 'monthly' or 'yearly'
  const [isContactSalesOpen, setIsContactSalesOpen] = useState(false);

  const handleSelectPlan = (plan) => {
    if (plan.contactSales) {
      setIsContactSalesOpen(true);
    } else {
      openPlatformAppStore();
    }
  };

  return (
    <section className="py-20 sm:py-24 px-4 sm:px-6 lg:px-8 bg-background">
      <div className="container max-w-7xl mx-auto">
        <div className="text-center mb-16">
          <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded border-2 border-primary/30 bg-primary/5 text-primary mb-6">
            <Sparkles className="w-4 h-4" />
            <span className="font-mono text-xs font-bold uppercase tracking-wider">
              Simple, Transparent Pricing
            </span>
          </div>
          <h2 className="font-display text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl mb-6">
            Choose Your Plan
          </h2>
          <p className="text-base sm:text-lg text-muted-foreground max-w-[900px] mx-auto leading-relaxed mb-8">
            Select the perfect plan for your legal needs. All paid plans include
            a 7-day free trial with no credit card required.
          </p>

          {/* Billing Cycle Toggle */}
          <div className="inline-flex items-center gap-1 p-1 bg-muted rounded-lg">
            <button
              onClick={() => setBillingCycle("monthly")}
              className={`px-4 sm:px-6 py-2 rounded-md text-xs sm:text-sm font-medium transition-all ${
                billingCycle === "monthly"
                  ? "bg-background text-foreground border-2 border-foreground/20"
                  : "text-muted-foreground hover:text-foreground border-2 border-transparent"
              }`}
            >
              Monthly
            </button>
            <button
              onClick={() => setBillingCycle("yearly")}
              className={`px-4 sm:px-6 py-2 rounded-md text-xs sm:text-sm font-medium transition-all relative ${
                billingCycle === "yearly"
                  ? "bg-background text-foreground border-2 border-foreground/20"
                  : "text-muted-foreground hover:text-foreground border-2 border-transparent"
              }`}
            >
              Yearly
              <span className="absolute -top-2 -right-1 sm:-right-2 bg-verified text-white font-mono text-[10px] sm:text-xs px-1.5 sm:px-2 py-0.5 rounded">
                Save 17%
              </span>
            </button>
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-12">
          {pricingPlans.map((plan, index) => (
            <Card
              key={index}
              className={`flex flex-col relative overflow-hidden group transition-all duration-500 shadow-none ${
                plan.popular
                  ? "border-primary border-[3px] z-10 bg-card"
                  : "border-2 border-foreground/15 bg-card hover:border-foreground/50"
              }`}
              style={{ animationDelay: `${index * 150}ms` }}
            >
              {plan.popular && (
                <div className="absolute top-0 right-0 bg-primary text-primary-foreground font-mono text-[11px] font-bold uppercase tracking-wider px-4 py-1.5 flex items-center gap-1">
                  <Sparkles className="w-3 h-3" />
                  Popular
                </div>
              )}

              <CardHeader className="text-center pb-8">
                <div
                  className={`w-16 h-16 mx-auto rounded-lg border-2 flex items-center justify-center mb-6 transition-all duration-300 ${
                    plan.popular
                      ? "border-primary bg-primary text-primary-foreground"
                      : "border-primary/30 bg-primary/5 text-primary"
                  }`}
                >
                  <plan.icon className="w-8 h-8" />
                </div>
                <CardTitle className="text-2xl sm:text-3xl">
                  {plan.name}
                </CardTitle>
                <CardDescription className="text-sm mt-2">
                  {plan.description}
                </CardDescription>
                <div className="mt-6">
                  <span className="font-display text-4xl sm:text-5xl font-bold text-foreground whitespace-pre-line">
                    {billingCycle === "monthly"
                      ? plan.monthlyPrice
                      : plan.yearlyPrice}
                  </span>
                </div>
              </CardHeader>

              <CardContent className="flex-grow px-6 pb-6">
                <ul className="space-y-4">
                  {plan.features.map((feature, i) => (
                    <li
                      key={i}
                      className="flex items-start gap-3 text-sm animate-fadeIn"
                      style={{ animationDelay: `${index * 150 + i * 50}ms` }}
                    >
                      <Check
                        className={`w-5 h-5 mt-0.5 shrink-0 ${
                          plan.popular ? "text-primary" : "text-primary/70"
                        }`}
                      />
                      <span className="text-muted-foreground leading-relaxed">
                        {feature}
                      </span>
                    </li>
                  ))}
                </ul>
              </CardContent>

              <CardFooter className="pt-6">
                <Button
                  className="w-full text-base py-6 transition-all duration-300"
                  variant={
                    plan.popular
                      ? "default"
                      : plan.monthlyPrice === "PKR 0"
                      ? "outline"
                      : "outline"
                  }
                  onClick={() => handleSelectPlan(plan)}
                >
                  {plan.contactSales
                    ? "Contact Sales"
                    : plan.monthlyPrice === "PKR 0"
                    ? "Get Started Free"
                    : "Get Started"}
                </Button>
              </CardFooter>
            </Card>
          ))}
        </div>

        <div className="text-center">
          <Card className="inline-block bg-muted/50 border-2 border-foreground/15 shadow-none">
            <CardContent className="px-8 py-4">
              <p className="text-sm text-muted-foreground">
                <span className="font-semibold text-foreground">
                  All paid plans include:
                </span>{" "}
                7-day free trial • No credit card required • Cancel anytime
              </p>
            </CardContent>
          </Card>
        </div>
      </div>

      {/* Contact Sales Modal */}
      <ContactSalesModal
        isOpen={isContactSalesOpen}
        onClose={() => setIsContactSalesOpen(false)}
      />
    </section>
  );
};

export default Pricing;
