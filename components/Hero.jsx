"use client";

import Link from "next/link";
import React, { useEffect, useRef } from "react";
import { Button } from "./ui/button";
import { Github } from "lucide-react";
import Image from "next/image";

export const HeroSection = () => {
  const imageRef = useRef(null);

  useEffect(() => {
    const image = imageRef.current;
    const handleScrolled = () => {
      const scrollPostion = window.scrollY;
      const scrollThressHold = 500;

      if (scrollPostion > scrollThressHold) {
        image.classList.add("scrolled");
      }else{
        image.classList.remove("scrolled")
      }
    };

    window.addEventListener('scroll',handleScrolled);
    return () => window.removeEventListener('scroll',handleScrolled);
  }, []);

  return (
    <section className="w-full pt-36 md:pt-48 pb-10">
      <div className="space-y-6 text-center">
        <div className="space-y-6 mx-auto">
          <h1 className="gradient-title text-5xl font-bold md:text-6xl lg:text-7xl xl:text-8xl">
            Empowering Careers with Intelligent Growth
            <br />
            Vision AI
          </h1>
          <p className="mx-auto max-w-[600px] text-muted-foreground md:text-lg">
            Unlock your full potential with Vision AI—your personal growth
            companion.AI-powered tools for resume building, interview prep, and
            industry insights—all in one place!
          </p>
        </div>
        <div className="flex justify-center items-center space-x-4">
          <Link href={"/dashboard"}>
            <Button
              className={"cursor-pointer px-8"}
              size={"lg"}
              variant={"outline"}
            >
              Get Started
            </Button>
          </Link>
          <Link href={"https://github.com/Vishesh-21"} target="_blank">
            <Button className={"cursor-pointer px-8"} size={"lg"}>
              <Github />
              GitHub
            </Button>
          </Link>
        </div>
      </div>

      <div className="hero-image-wrapper mt-16 md:mt-12">
        <div ref={imageRef} className="hero-image">
          <Image
            src={"/heroseciton3.webp"}
            className="rounded-lg shadow-2xl border mx-auto"
            height={680}
            width={1180}
            alt="herosection_image"
          />
        </div>
      </div>
    </section>
  );
};
