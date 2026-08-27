import React from "react";
import ServicesGrid from "../../components/servicesGrid";
import ReadyCta from "../../components/readyCta";
import FullServiceMenu from "../../components/fullServiceMenu";

const Services: React.FC = () => {
  return (
    <>
      <section className="w-full bg-[#08080a] text-white px-4 md:px-10 py-20 md:py-28">
        <div className="max-w-7xl mx-auto">
          {/* Eyebrow / Category Label */}
          <span className="text-(--primary) text-[12px] font-[400] tracking-[2.4px] leading-[16px] uppercase block mb-6">
            OUR EXPERTISE
          </span>

          {/* Main Heading Stack */}
          <h1 className="text-5xl md:text-7xl lg:text-8xl font-normal tracking-tight leading-[1.05] max-w-4xl mb-12">
            <span className="text-[#F0F0F0] block">Solving</span>
            <span className="text-[#F0F0F0] block">complex</span>
            <span className="text-[#F0F0F0] block">challenges</span>
            <span className="block">
              <span className="text-[#F0F0F0]">with </span>
              <span className="text-[#4C4A52]">precise</span>
            </span>
            <span className="text-[#4C4A52] block">execution.</span>
          </h1>

          {/* Subtext Paragraph */}
          <p className="text-[#8E8C95] text-[15px] md:text-[20px] leading-[28px] md:max-w-[650px] font-[400]">
            We bridge the gap between visionary strategy and technical reality.
            Explore the core pillars of our agency capability.
          </p>
        </div>
      </section>
      <ServicesGrid />
      <FullServiceMenu/>
      <ReadyCta/>
    </>
  );
};

export default Services;
