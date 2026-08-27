import React from "react";

const partnerLogos: string[] = [
  "AWS",
  "GOOGLE CLOUD",
  "MICROSOFT",
  "STRIPE",
  "OPENAI",
  "DATADOG",
];

const Partners: React.FC = () => {
  return (
    <section className="w-full text-white border-t border-[#26252B] py-16 px-4 md:px-10">
      <div className="max-w-7xl mx-auto flex flex-col items-center">
        {/* Eyebrow / Label */}
        <p className="text-[#4C4A52] text-[12px] font-[400] tracking-[3.6px] leading-[16px] uppercase mb-12 text-center">
          GLOBAL NETWORK & PARTNERS
        </p>

        {/* Partners Grid / Flex Row */}
        <div className="w-full flex flex-wrap items-center justify-center gap-8 md:gap-12 lg:gap-16">
          {partnerLogos.map((name) => (
            <span
              key={name}
              className="text-[#666666] font-[700] hover:text-[#999999] transition-colors duration-200 md:text-[24px] text-[20px] tracking-[-1.2px] md:leading-[32px] uppercase select-none"
            >
              {name}
            </span>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Partners;
