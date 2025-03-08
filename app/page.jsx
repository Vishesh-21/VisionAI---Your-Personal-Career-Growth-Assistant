import { HeroSection } from "@/components/Hero";
import { features, howItWorks, statsticsData } from "@/data/features";
import React from "react";
import {
  Card,
  CardContent,
} from "@/components/ui/card";
import Footer from "@/components/Footer";
import { Testimonials } from "@/components/Testimonials";
import { Questions } from "@/components/Questions";
import { Banner } from "@/components/Banner";

export default function Home() {
  return (
    <div className="overflow-x-hidden">
      <div className="grid-background"></div>

      {/* hero section with hero image  */}
      <HeroSection />

      {/* section for tools and features insights  */}
      <section className="w-full py-12 md:py-20 lg:py-32">
        <div className="container mx-auto px-4 md:px-6">
          <h2 className="text-center text-3xl font-bold tracking-tighter mb-12">
            Powerfull Features for Your Career Growth
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-4 lg-grid-cols-4 gap-6 md:px-6">
            {features.map((feature, index) => {
              return (
                <Card
                  key={index}
                  className="border-[1.5px] hover:border-primary transition-colors duration-300"
                >
                  <CardContent className="pt-6 text-center flex flex-col items-center">
                    <div className="flex flex-col items-center justify-center">
                      {feature.icon}
                      <h3 className="text-xl font-bold mb-2">
                        {feature.title}
                      </h3>
                      <p className="text-muted-foreground">{feature.desc}</p>
                    </div>
                  </CardContent>
                </Card>
              );
            })}
          </div>
        </div>
      </section>

      {/* statstics features of application  */}
      <section className="w-full py-12 md:py-20 bg-muted/50">
        <div className="container mx-auto px-4 md:px-6">
          <div className="grid grid-cols-1 md:grid-cols-4 lg-grid-cols-4 gap-6 md:px-6">
            {statsticsData.map((item, index) => {
              return (
                <div
                  key={index}
                  className="flex flex-col items-center justify-center space-y-2"
                >
                  <h3 className="text-4xl font-bold">{item.state}</h3>
                  <p className="text-muted-foreground">{item.desc}</p>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* how it works section  */}
      <section className="w-full py-12 md:py-20 lg:py-32 ">
        <div className="container mx-auto px-4 md:px-6">

          <div className="text-center max-w-3xl mx-auto mb-12">
            <h2 className="text-center text-3xl font-bold m4-12">
              How It Works
            </h2>
            <p className="text-muted-foreground">
              Four steps to accelerate your career Growth
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 md:px-6">
            {howItWorks.map((feature, index) => {
              return (
                <Card
                  key={index}
                  className="border-[1.5px] hover:border-primary transition-colors duration-300"
                >
                  <CardContent className="pt-6 text-center flex flex-col items-center">
                    <div className="flex flex-col items-center justify-center">
                      <span className="bg-muted-foreground/50 mb-2 p-4 rounded-full">{feature.icon}</span>
                      <h3 className="text-xl font-bold mb-2">
                        {feature.title}
                      </h3>
                      <p className="text-muted-foreground">{feature.desc}</p>
                      <div>
                        {feature.points.map((item, index) => {
                          return (
                            <ul key={index} className="text-muted-foreground list-disc text-start mt-4">
                              <li>{item.one}</li>
                              <li>{item.two}</li>
                              <li>{item.three}</li>
                            </ul>
                          );
                        })}
                      </div>
                    </div>
                  </CardContent>
                </Card>
              );
            })}
          </div>
        </div>
      </section>

      {/* testimonial section  */}
      <Testimonials/>

      {/* frequent asked question  */}
      <Questions/>

      {/* banner section for applicaton  */}
      <Banner/>

      {/* footer section of application  */}
      <Footer/>
    </div>
  );
}
