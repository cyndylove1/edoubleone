import React, { useState } from "react";
import CtaCase from "../../components/ctaCase";
import fintech from "../../assets/Container (3).png";
import logistics from "../../assets/Container (6).png";
import healthcare from "../../assets/Container (4).png";
import retail from "../../assets/Container (5).png";

interface Project {
  id: string;
  category: string;
  title: string;
  description: string;
  metricValue: string;
  metricLabel: string;
  imageSrc: string;
}

const categories = [
  "ALL PROJECTS",
  "AI & AUTOMATION",
  "ENTERPRISE SAAS",
  "MOBILE APPS",
  "DESIGN SYSTEMS",
];

const projectsData: Project[] = [
  {
    id: "1",
    category: "FINTECH",
    title: "Pulse Wealth Management",
    description:
      "Redesigning the digital experience for a global wealth management firm, focusing on high-net-worth individual engagement.",
    metricValue: "+240%",
    metricLabel: "USER ENGAGEMENT",
    imageSrc: fintech,
  },
  {
    id: "2",
    category: "LOGISTICS",
    title: "Roadersmap",
    description:
      "A smart digital platform designed to make navigation, discovery, and journey planning simpler and more connected.",
    metricValue: "-35%",
    metricLabel: "LATENCY REDUCTION",
    imageSrc: logistics,
  },
  {
    id: "3",
    category: "HEALTHCARE",
    title: "Scriply Ai",
    description:
      "AI-powered tools designed to transform ideas into compelling content, scripts, and creative experiences.",
    metricValue: "1.2M",
    metricLabel: "ACTIVE PATIENTS",
    imageSrc: healthcare,
  },
  {
    id: "4",
    category: "RETAIL",
    title: "Luxe Commerce Intelligence",
    description:
      "A data-driven retail platform that utilizes computer vision to optimize physical store layouts and inventory.",
    metricValue: "4.8x",
    metricLabel: "CONVERSION LIFT",
    imageSrc: retail,
  },
];

export const Portfolio: React.FC = () => {
  const [activeCategory, setActiveCategory] = useState("ALL PROJECTS");

  return (
    <>
      <section className="w-full min-h-screen text-white py-20 px-4 md:px-10">
        <div className="max-w-7xl mx-auto">
          {/* Subtitle / Eyebrow */}
          <p className="text-[12px] font-[400] tracking-[2.4px] leading-[16px] text-(--primary) uppercase mb-4">
            SELECTED WORK
          </p>

          {/* Hero Title */}
          <h1 className="text-5xl md:text-7xl lg:text-8xl font-[500] tracking-tight mb-16 max-w-3xl leading-[1.05]">
            <span className="text-[#f0f0f0] block">Proof of</span>
            <span className="text-[#4C4A52] block">concept &</span>
            <span className="text-[#4C4A52] block">execution.</span>
          </h1>

          {/* Filter Navigation */}
          <div className="border-b border-[#181A1E] mb-16">
            <div className="flex items-center gap-8 overflow-x-auto pb-4 scrollbar-none">
              {categories.map((cat) => (
                <button
                  key={cat}
                  onClick={() => setActiveCategory(cat)}
                  className={`text-[12px] font-[400] leading-[16px] tracking-[1.2px] whitespace-nowrap transition-colors relative pb-4 -mb-[17px] ${
                    activeCategory === cat
                      ? "text-(--primary) border-b-2 border-(--primary)"
                      : "text-[#4C4A52] hover:text-white"
                  }`}
                >
                  {cat}
                </button>
              ))}
            </div>
          </div>

          {/* Projects Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-x-10 gap-y-16 mb-20">
            {projectsData.map((project) => (
              <div
                key={project.id}
                className="group cursor-pointer flex flex-col w-full"
              >
                {/* Card Thumbnail Area with Image */}
                <div className="w-full h-full rounded-2xl mb-6 relative overflow-hidden flex items-center justify-center transition-all duration-300">
                  <img
                    src={project.imageSrc}
                    alt={project.title}
                    className="w-full h-full md:h-[300px] lg:h-[500px] object-cover group-hover:scale-105 transition-transform duration-500"
                  />
                </div>

                {/* Project Info - Strictly aligned to match image width */}
                <div className="flex items-start justify-between gap-4 w-full">
                  <div className="flex-1 max-w-[75%]">
                    <h3 className="text-xl md:text-[20px] font-[500] leading-[25px] text-[#E6E5E2] mb-2 group-hover:text-(--primary) transition-colors">
                      {project.title}
                    </h3>
                    <p className="text-xs md:text-[16px] leading-[20px] text-[#8E8C95] font-[400]">
                      {project.description}
                    </p>
                  </div>

                  {/* Metric Badge */}
                  <div className="text-right flex-shrink-0">
                    <div className="text-lg md:text-[20px] font-[500] text-(--primary)">
                      {project.metricValue}
                    </div>
                    <div className="text-[10px] text-[#4C4A52] font-[400] tracking-[1px] leading-[15px] uppercase mt-0.5">
                      {project.metricLabel}
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>

          {/* Load More Button */}
          <div className="flex justify-center">
            <button className="px-8 py-3.5 bg-[#121115] leading-[20px] rounded-full border border-gray-700 text-[16px] font-[500] tracking-wider text-[#E6E5E2] hover:bg-white hover:text-black transition-all duration-300">
              Load More Work
            </button>
          </div>
        </div>
      </section>
      <CtaCase />
    </>
  );
};

export default Portfolio;
