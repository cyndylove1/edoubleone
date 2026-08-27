import React from "react";
import { Button } from "./button";
import { Link } from "react-router-dom";

const JoinEcosystem: React.FC = () => {
  return (
    <section className="w-full bg-(--primary) min-h-[400px] text-white  px-6 md:py-32 md:px-12 flex flex-col items-center justify-center text-center">
      {/* Heading */}
      <h1 className="text-5xl font-[500] md:text-7xl lg:text-8xl lg:text-[96px] tracking-tight uppercase leading-[1.05] mb-10 max-w-5xl">
        Join the
        <br />
        Ecosystem
      </h1>

      {/* Action Buttons */}
      <div className="flex flex-row items-center justify-center gap-4 w-full max-w-xs sm:max-w-none">
        {/* Primary Button */}
        <Link to="/contact">
          <Button className="bg-white text-black">Work With Us</Button>
        </Link>
        <Link to="/services">
          <Button className="bg-transparent border border-white text-white">
            Careers
          </Button>
        </Link>
      </div>
    </section>
  );
};

export default JoinEcosystem;
