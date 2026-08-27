import React from "react";
import execution from "../assets/Container (1).png"

export const Execution: React.FC = () => {
  return (
    <section className="w-full text-white py-14 px-4 md:px-10">
      <div className="max-w-[1280px] mx-auto">
        {/* Header Section */}
        <div className="flex items-end justify-between mb-8 md:mb-12">
          <h2 className="text-3xl sm:text-5xl md:text-[60px] leading-[60px] text-[#f0f0f0] font-[700] tracking-tight leading-none">
            Selected <br />
            Execution.
          </h2>

          <a
            href="#full-archive"
            className="text-xs md:text-[14px] font-[700] tracking-widest text-(--primary) uppercase underline underline-offset-4 decoration-[#ff5500] transition-colors"
          >
            FULL ARCHIVE
          </a>
        </div>

        {/* Content Cards */}
        <div className="w-full">
          <img src={execution} alt="" className="w-full" />
        </div>
      </div>
    </section>
  );
};

export default Execution;
