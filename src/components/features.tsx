import React from "react";

interface FeatureItem {
  number: string;
  category: string;
  title: string;
  description: string;
}

const features: FeatureItem[] = [
  {
    number: "01",
    category: "THE MISSION",
    title: "Empowering Evolution",
    description:
      "We exist to help businesses navigate the complexities of the digital age by providing the tools and intelligence they need to thrive.",
  },
  {
    number: "02",
    category: "THE VISION",
    title: "Intelligent Futures",
    description:
      "A world where technology is a seamless extension of human ambition, driving sustainable growth and meaningful innovation.",
  },
  {
    number: "03",
    category: "THE CULTURE",
    title: "Radical Integrity",
    description:
      "We believe in transparent communication, technical excellence, and long-term partnerships over short-term gains.",
  },
];

const Features: React.FC = () => {
  return (
    <section className="w-full bg-[#121115] border border-[#26252B] text-white px-4 md:px-10 py-20">
      <div className="grid grid-cols-1 md:grid-cols-3 gap-12 lg:gap-16">
        {features.map((feature) => (
          <div key={feature.number} className="flex flex-col space-y-4">
            {/* Tagline / Subtitle */}
            <span className="text-(--primary) text-[12px] leading-[16px] font-[400] tracking-[1.2px] uppercase">
              {feature.number}. {feature.category}
            </span>

            {/* Main Title */}
            <h3 className="text-[#E6E5E2] text-[20PX] font-[500] tracking-tight">
              {feature.title}
            </h3>

            {/* Description */}
            <p className="text-[#8E8C95] text-[16px] leading-[24px] font-[400]">
              {feature.description}
            </p>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Features;
