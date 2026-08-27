import React from "react";
import Ceo from "../assets/Ceo.png"

interface TeamMember {
  name: string;
  role: string;
  image: string;
}

const teamMembers: TeamMember[] = [
  {
    name: "Mr Tomiwa",
    role: "FOUNDER & CEO",
    image:
      Ceo
  },
  {
    name: "Miss Promise",
    role: "HEAD OF ENGINEERING",
    image:
      "https://images.unsplash.com/photo-1534528741775-53994a69daeb?q=80&w=600&auto=format&fit=crop",
  },
  {
    name: "Mr Gbenga",
    role: "CREATIVE DIRECTOR",
    image:
      "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?q=80&w=600&auto=format&fit=crop",
  },
  {
    name: "Miss Deborah",
    role: "PRODUCT STRATEGY",
    image:
      "https://images.unsplash.com/photo-1517841905240-472988babdf9?q=80&w=600&auto=format&fit=crop",
  },
];

const Core: React.FC = () => {
  return (
    <section className="w-full text-white px-4 md:px-10 py-20">
      <div className="max-w-7xl mx-auto">
        {/* Header Grid */}
        <div className="grid grid-cols-1 md:grid-cols-12 gap-6 items-start mb-12">
          <div className="md:col-span-8">
            <h2 className="text-4xl md:text-5xl font-[500] tracking-tight text-[#F0F0F0]">
              Core Collective
            </h2>
          </div>
          <div className="md:col-span-4">
            <p className="text-[#8E8C95] text-sm md:text-[14px] leading-[20px] font-[400]">
              Our multidisciplinary team brings decades of combined experience
              from the world's leading tech hubs.
            </p>
          </div>
        </div>

        {/* Team Cards Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {teamMembers.map((member, index) => (
            <div
              key={index}
              className="relative aspect-square rounded-3xl overflow-hidden group border border-white/5"
            >
              {/* Profile Image */}
              <img
                src={member.image}
                alt={member.name}
                className="w-full h-full object-cover grayscale-[20%] group-hover:scale-105 transition-transform duration-300"
              />

              {/* Bottom Gradient Overlay */}
              <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/30 to-transparent flex flex-col justify-end p-6">
                <h3 className="text-[#F0F0F0] text-[20px] leading-[28px] font-[500] tracking-wide">
                  {member.name}
                </h3>
                <span className="text-(--primary) text-[12px] font-[400] tracking-wider leading-[16px] uppercase mt-1">
                  {member.role}
                </span>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Core;
