import React from "react";
import { Card, CardHeader, CardTitle, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";

export const ServicesSection: React.FC = () => {
  const services = [
    {
      icon: "🏋️‍♂️",
      title: "Personal Training (1-on-1)",
      description: "Dedicated attention to posture, progressive overload schedules, safe lift techniques, and injury prevention."
    },
    {
      icon: "🥗",
      title: "Diet & Nutrition Coaching",
      description: "Macro-targeted diet planning crafted by a Certified Fitness & Nutrition Coach suited to vegetarian and non-vegetarian lifestyles."
    },
    {
      icon: "🌐",
      title: "24/7 & Online Classes",
      description: "Full 24-hour access at Amitgram, plus flexible online fitness classes provided through our Opp. Boys Inter College branch."
    },
    {
      icon: "🏆",
      title: "Community Events & HYROX",
      description: "Test your mental and physical fitness in regular club competitions including HYROX battles, Plank Challenges, and lifting meets."
    }
  ];

  return (
    <section id="services" className="py-24 bg-neutral-900/30 border-b border-neutral-800">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center max-w-2xl mx-auto mb-16">
          <Badge variant="outline" className="text-red-500 border-red-900/50 uppercase font-extrabold tracking-widest text-[11px] mb-3">
            Our Services
          </Badge>
          <h2 className="text-3xl sm:text-4xl font-black uppercase text-white">
            Engineered For Transformation
          </h2>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {services.map((service, index) => (
            <Card
              key={index}
              className="bg-neutral-900/60 border-neutral-800 rounded-2xl hover:border-red-600/50 transition-all duration-300"
            >
              <CardHeader className="p-6 pb-2">
                <div className="w-12 h-12 rounded-xl bg-red-600/10 text-red-500 flex items-center justify-center text-2xl mb-2">
                  {service.icon}
                </div>
                <CardTitle className="font-bold text-white text-lg">{service.title}</CardTitle>
              </CardHeader>
              <CardContent className="p-6 pt-0">
                <p className="text-sm text-neutral-400 leading-relaxed">
                  {service.description}
                </p>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};