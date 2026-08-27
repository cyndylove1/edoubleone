import React from "react";

export const ProductEcosystem: React.FC = () => {
  return (
    <section className="w-full text-white py-16 px-4 md:px-10">
      <div className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-12 gap-12 items-start">
        {/* Left Column - Headline & Description */}
        <div className="lg:col-span-8 space-y-6">
          {/* Section Tag */}
          <span className="text-(--primary) text-[12px] font-[400] leading-[16px] uppercase tracking-widest block">
            Product Ecosystem
          </span>

          {/* Heading */}
          <h2 className="text-4xl md:text-[60px] font-bold tracking-tight leading-none text-[#F0F0F0]">
            Interconnected <br />
            Intelligence.
          </h2>

          {/* Subtitle */}
          <p className="text-[#A1A1A6] text-sm sm:text-[20px] leading-[32px] max-w-xl font-normal leading-relaxed pt-2">
            We don't just build client tools; we architect our own future. Our
            ecosystem products power our agency and your ambition.
          </p>
        </div>

        {/* Right Column - Feature Card */}
        <div className="lg:col-span-4 lg:pt-8">
          <div className="bg-[#121214] border border-[#222226] rounded-2xl p-6 sm:p-8 space-y-4 shadow-xl">
            {/* Git Branch / Node Icon */}
            <div className="text-[#ff5500]">
              <svg
                className="w-7 h-7"
                fill="none"
                stroke="currentColor"
                strokeWidth={2}
                viewBox="0 0 24 24"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M6 3v12M6 15a3 3 0 100 6 3 3 0 000-6zm0 0h6a3 3 0 003-3V9m0 0a3 3 0 100-6 3 3 0 000 6z"
                />
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M6 3v12M6 15a3 3 0 100 6 3 3 0 000-6zm0 0h6a3 3 0 003-3V9m0 0a3 3 0 100-6 3 3 0 000 6z"
                />
              </svg>
            </div>

            {/* Card Title */}
            <h3 className="text-[#F0F0F0] text-[20px] font-[600] leading-[28px] tracking-wide">
              Shared Architecture
            </h3>

            {/* Card Description */}
            <p className="text-[#A1A1A6] max-w-2xl font-[400] text-sm md:text-[14px] leading-[22px]">
              Every product we launch shares a unified core of security, speed,
              and intelligence protocols.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ProductEcosystem;
