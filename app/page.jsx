import { HeroSection } from "@/components/Hero";
import { features } from "@/data/features";
import React from "react";
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";

export default function Home() {
  return (
    <div className="overflow-x-hidden">
      <div className="grid-background"></div>

      {/* hero section with hero image  */}
      <HeroSection />

      {/* section for tools and features insights  */}
      <section className="w-full py-12 md:py-20 lg:py-32 bg-background">
        <div className="container mx-auto px-4 md:px-6">
          <h2 className="text-center text-3xl font-bold tracking-tighter mb-12">Powerfull Features for Your Career Growth</h2>
          <div className="grid grid-cols-1 md:grid-cols-4 lg-grid-cols-4 gap-6 md:px-6">
            {features.map((feature, index) => {
              return (
                <Card key={index} className='border-[1.5px] hover:border-primary transition-colors duration-300'>
                  <CardContent className='pt-6 text-center flex flex-col items-center'>
                    <div className="flex flex-col items-center justify-center">
                      {feature.icon}
                      <h3 className="text-xl font-bold mb-2">{feature.title}</h3>
                      <p className="text-muted-foreground">{feature.desc}</p>
                    </div>
                  </CardContent>
                </Card>
              );
            })}
          </div>
        </div>
      </section>
    </div>
  );
}
