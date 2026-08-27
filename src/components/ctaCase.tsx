import React from "react";
import { Button } from "./button";
import { Link } from "react-router-dom";

export const CtaCase: React.FC = () => {
  return (
    <section className="w-full py-16 px-4 md:px-10 flex justify-center items-center">
      <div className="w-full max-w-7xl bg-[#121115] border-t border-[#26252B] rounded-3xl p-8 md:p-8 lg:p-16 flex flex-col md:flex-row md:items-center md:justify-between gap-8 shadow-2xl">
        {/* Left Column: Heading & Subheading */}
        <div className="space-y-4 py-4 max-w-xl text-center md:text-start">
          <h2 className="text-white text-[35px] lg:text-[54px] font-[500] leading-[54px] mb-4 leading-tight">
            Next level awaits.
          </h2>
          <p className="text-[#8E8C95] text-[15px] md:text-[20px] max-w-[500px] font-[400] leading-[28px]">
            Have a project that requires this level of technical and creative
            precision? Let's talk about it.
          </p>
        </div>

        {/* Right Column: CTA Button */}
        <div className="flex justify-center md:justify-start">
          <Link to="/contact">
            <Button className="bg-(--primary) text-white">
              Start a Project
            </Button>
          </Link>
        </div>
      </div>
    </section>
  );
};

export default CtaCase;
