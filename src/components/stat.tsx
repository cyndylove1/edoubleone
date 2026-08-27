import React, { useEffect, useState } from "react";

interface StatItem {
  category: string;
  value: string;
  label: string;
}

const statsData: StatItem[] = [
  {
    category: "OPERATIONS",
    value: "150+",
    label: "GLOBAL DEPLOYMENTS",
  },
  {
    category: "SCALE",
    value: "$2B+",
    label: "VALUE ORCHESTRATED",
  },
  {
    category: "INTEGRITY",
    value: "98%",
    label: "CLIENT RETENTION",
  },
  {
    category: "VELOCITY",
    value: "19wk",
    label: "AVERAGE TO MARKET",
  },
];

export const Stats: React.FC = () => {
  const [counts, setCounts] = useState<number[]>(statsData.map(() => 0));

  useEffect(() => {
    const duration = 2000; // 2 seconds
    const startTime = performance.now();

    const targets = statsData.map((stat) => {
      const number = stat.value.replace(/[^0-9.]/g, "");
      return Number(number);
    });

    const animate = (currentTime: number) => {
      const progress = Math.min((currentTime - startTime) / duration, 1);

      // Smooth animation
      const easeOut = 1 - Math.pow(1 - progress, 3);

      setCounts(targets.map((target) => Math.floor(target * easeOut)));

      if (progress < 1) {
        requestAnimationFrame(animate);
      }
    };

    requestAnimationFrame(animate);
  }, []);

  const formatValue = (index: number) => {
    if (index === 1) {
      return `$${counts[index]}B+`;
    }

    if (index === 2) {
      return `${counts[index]}%`;
    }

    if (index === 3) {
      return `${counts[index]}wk`;
    }

    return `${counts[index]}+`;
  };

  return (
    <section className="w-full max-w-7xl mx-auto px-4 py-12 text-white md:px-10">
      <div className="mx-auto grid max-w-7xl grid-cols-2 gap-8 md:grid-cols-4 lg:gap-0">
        {statsData.map((stat, index) => (
          <div
            key={stat.category}
            className="flex flex-col justify-between space-y-2 border-l border-[#222222] pl-6"
          >
            {/* Category */}
            <span className="block text-[12px] font-[400] uppercase tracking-widest text-(--primary)">
              {stat.category}
            </span>

            {/* Animated Number */}
            <h2 className="text-4xl font-[700] leading-[48px] text-[#F0F0F0] sm:text-[48px]">
              {formatValue(index)}
            </h2>

            {/* Label */}
            <span className="text-[12px] font-[400] uppercase leading-[16px] tracking-widest text-[#515154]">
              {stat.label}
            </span>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Stats;
