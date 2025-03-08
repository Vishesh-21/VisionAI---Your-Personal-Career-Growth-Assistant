import Link from "next/link";
import React from "react";
import { Button } from "./ui/button";
import { ArrowRight } from "lucide-react";

export const Banner = () => {
  return (
    <section className="w-full">
      <div className="mx-auto py-24 gradient">
        <div className="flex flex-col items-center justify-center space-y-4 text-center max-w-3xl mx-auto">
          <h2 className="text-3xl font-bold tracking-tighter text-primary-foreground sm:text-4xl md:text-5xl">
            Ready to Accelerate Your Career ?
          </h2>
          <p className="text-muted/70 mx-auto max-w-[700px] ">
            Join thousands of professionals who are advancing their career with
            AI - Powered Guidance.Unlock your potential with AI-powered career
            tools. Get expert insights, prepare for interviews, and build a
            winning resume—all in one platform!
          </p>

          <Link href={"/dashboard"} passHref>
            <Button
              size={"lg"}
              variant={"secondary"}
              className={"h-11 mt-5 animate-bounce cursor-pointer"}
            >
              Start Your Journey Today <ArrowRight className="ml-2 h-4 w-4" />
            </Button>
          </Link>
        </div>
      </div>
    </section>
  );
};
