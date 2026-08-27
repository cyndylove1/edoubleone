import React from "react";

interface ServiceCategory {
  title: string;
  items: string[];
}

const serviceCategories: ServiceCategory[] = [
  {
    title: "DIGITAL TRANSFORMATION",
    items: [
      "Cloud Strategy & Infrastructure",
      "Enterprise Systems Integration",
      "Legacy Modernization",
      "Cybersecurity Assessment",
    ],
  },
  {
    title: "PRODUCT INNOVATION",
    items: [
      "MVP Development",
      "User Experience Audit",
      "Custom AI Solutions",
      "Mobile App Ecosystems",
    ],
  },
];

export const FullServiceMenu: React.FC = () => {
  return (
    <section className="text-white md:py-24 px-4 md:px-10 border-t border-[#26252B]">
      {/* Container */}
      <div className="max-w-7xl">
        {/* Main Heading */}
        <h1 className="text-4xl font-[500] tracking-tight mb-16 text-[#E6E5E2]">
          Full Service Menu
        </h1>

        {/* Categories Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 lg:gap-16">
          {serviceCategories.map((category) => (
            <div key={category.title} className="flex flex-col">
              {/* Category Title */}
              <h2 className="text-[13px] leading-[16px] font-[400] tracking-[2.4px] text-[#4C4A52] uppercase pb-4 border-b border-[#26252B]">
                {category.title}
              </h2>

              {/* Items List */}
              <ul className="mt-6 space-y-4">
                {category.items.map((item) => (
                  <li key={item}>
                    <a
                      href="#"
                      className="text-[#8E8C95] hover:text-white transition-colors duration-200 text-[13px] font-[400] leading-[28px] block"
                    >
                      {item}
                    </a>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default FullServiceMenu;
