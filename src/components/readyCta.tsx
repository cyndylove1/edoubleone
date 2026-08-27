import React from "react";
import { Button } from "./button";
import { Link } from "react-router-dom";

export const ReadyCta: React.FC = () => {
  return (
    <section className="text-white h-[550px] flex flex-col justify-between px-6 md:py-24 py-20 border-b border-t border-[#26252B]">
      {/* Main CTA Content */}
      <div className="flex-1 flex flex-col items-center justify-center text-center max-w-5xl mx-auto">
        <h2 className=" text-5xl md:text-8xl lg:text-[96px] font-[500] tracking-[-2.56px]  leading-[1.05] uppercase lg:leading-[96px] text-[#F0F0F0] mb-10">
          READY TO
          <br />
          UPGRADE?
        </h2>

        {/* Action Button */}
        <Link to="/contact">
          <Button
            className="bg-(--primary) text-white"
            showIcon
          >
            Start a Conversation
          </Button>
        </Link>
      </div>
    </section>
  );
};

export default ReadyCta;
