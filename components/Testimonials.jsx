import { features, testimonials } from "@/data/features";
import React from "react";
import { Card, CardContent } from "./ui/card";
import { SpeakerIcon } from "lucide-react";
import Image from "next/image";

export const Testimonials = () => {
  return (
    <section className="w-full py-12 md:py-30 bg-muted/50">
      <div className="container mx-auto px-4 md:px-6">
        <h2 className="text-center text-3xl font-bold tracking-tighter mb-12">
          What Our Users Say <SpeakerIcon className="inline h-8 w-8 text-primary"/>
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 md:px-6">
          {testimonials.map((test, index) => {
            return (
              <Card
                key={index}
                className="bg-background"
              >
                <CardContent className="pt-6">
                  <div className="flex flex-col space-y-8">
                    <div className="flex items-start space-x-4">
                      <div className="flex-shrink-0 h-12 w-12 relative">
                        <Image src={test?.image} alt="customer image" width={50} height={50} className="rounded-full object-cover border-2 border-primary/40"/>
                      </div>
                      <div>
                        <p className="font-semibold">{test.name}</p>
                        <p className="text-sm text-muted-foreground">{test.role}</p>
                      </div>
                    </div>
                    <blockquote>
                      <p className="text-muted-foreground italic relative">
                        <span className="text-3xl text-primary absolute -top-4 -left-2">&quot;</span>
                        {test.feedback}
                        <span className="text-3xl text-primary absolute -bottom-6">&quot;</span>
                      </p>
                    </blockquote>
                  </div>
                </CardContent>
              </Card>
            );
          })}
        </div>
      </div>
    </section>
  );
};
