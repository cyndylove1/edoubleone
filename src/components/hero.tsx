import React from "react";
import Tag from "./tag";
import { Button } from "./button";
import hero from "../assets/photo1.jpeg"
import { Link } from "react-router-dom";

export const Hero: React.FC = () => {
  return (
    <section className="relative w-full flex items-center justify-center overflow-hidden px-4 py-16">
      {/* Background Image Layer with Dark Overlay */}
      <div className="absolute inset-0 z-0">
        <img
          src={hero}
          alt="Dark Futuristic Architecture Background"
          className="w-full object-cover object-center opacity-90"
        />
        {/* Dark Vignette / Gradient Overlay */}
        <div className="absolute inset-0 bg-radial-vignette bg-gradient-to-t from-[#0a0a0a] via-transparent to-[#0a0a0a] opacity-80" />
      </div>

      {/* Content Container */}
      <div className="relative z-10 max-w-5xl w-full flex flex-col items-center text-center space-y-8">
        {/* Tag */}
        <Tag />
        {/* Main Title */}
        <h1 className="text-[#f0f0f0] font-[700] text-6xl md:text-8xl lg:text-9xl lg:leading-[120px] tracking-tight leading-[0.88] select-none">
          CODE
          <br />
          CULTURE
          <br />
          CLARITY
        </h1>

        {/* Subtitle */}
        <p className="max-w-2xl text-[#A1A1A6] text-[15px] md:text-[24px] md:leading-[32px] font-[400] pt-2">
          We design and engineer high-performance digital ecosystems for the
          next generation of global enterprises.
        </p>

        {/* Buttons */}
        <div className="flex items-center space-x-4 pt-4">
          <Link to="/services">
            <Button className="bg-white text-black">View Services</Button>
          </Link>
          <Link to="/about">
            <Button className="bg-transparent border border-[#515154] text-white">
              Our Process
            </Button>
          </Link>
        </div>
      </div>
    </section>
  );
};

export default Hero;
