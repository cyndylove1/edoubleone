import React from "react";

interface NavigationItem {
  id: string;
  label: string;
}

const items: NavigationItem[] = [
  { id: "01", label: "Architecture" },
  { id: "02", label: "Intelligence" },
  { id: "03", label: "Velocity" },
];

export const MethodSection: React.FC = () => {
  return (
    <section className="bg-[#141417] text-[#565658] md:px-10 py-16 px-4 md:py-24 selection:bg-(--primary) selection:text-white">
      <div className="max-w-5xl mx-auto">
        {/* Section Tagline */}
        <p className="text-[12px] font-[400] leading-[18px] tracking-[3.6px] text-(--primary) uppercase mb-12">
          THE EDOUBLEONE METHOD
        </p>

        {/* List Items */}
        <div className="flex flex-col">
          {items.map((item) => (
            <div
              key={item.id}
              className="group border-b border-[#1E2024] py-4 md:py-8 transition-colors duration-300 cursor-pointer"
            >
              <h2 className="text-4xl md:text-7xl lg:text-[80px] leading-[80px] font-[700] tracking-tight text-[#5A5E65] group-hover:text-white transition-colors duration-300">
                {item.label}
              </h2>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default MethodSection;
