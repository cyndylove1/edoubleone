import { FaTwitter } from "react-icons/fa6";
import card from "../assets/Border.png";
import { RiInstagramLine } from "react-icons/ri";
import { BiLogoLinkedinSquare } from "react-icons/bi";
export default function InfoCard() {
  return (
    <div className="lg:col-span-5 flex pt-10 lg:pt-0 flex-col gap-4">
      {/* Card 1: Global Headquarters */}
      <div className="bg-[#121216] rounded-3xl p-6 border border-neutral-800/50">
        <span className="text-[12px] font-[400] leading-[16px] tracking-[1.2px] text-[#ff5500] uppercase block mb-2">
          GLOBAL HEADQUARTERS
        </span>
        <h3 className="text-[#E6E5E2] font-[500] leading-[28px] text-[20px] mb-1">
          Digital-First Operations
        </h3>
        <p className="text-[16px] text-[#8E8C95] leading-[24px] font-[400]">
          Our core collective operates from distributed technical hubs
          worldwide.
        </p>
      </div>

      {/* Card 2: Direct Communication */}
      <div className="bg-[#121216] rounded-3xl p-6 border border-neutral-800/50">
        <span className="text-[12px] font-[400] leading-[16px] tracking-[1.2px] text-[#ff5500] uppercase block mb-2">
          DIRECT COMMUNICATION
        </span>
        <a
          href="mailto:support@edoubleone.net"
          className="text-[17px] font-[500] text-[#E6E5E2] leading-[32px] hover:text-white transition-colors block mb-2"
        >
          support@edoubleone.net
        </a>
        <div className="space-y-2 text-[17px] text-[#8E8C95] leading-[17px] font-[400]">
          <p>+1 (202)-933-9591</p>
          <p>+1 (202) 971-0392</p>
        </div>
      </div>

      {/* Card 3: Social Ecosystem */}
      <div className="bg-[#121216] rounded-3xl p-6 border border-neutral-800/50">
        <span className="text-[12px] font-[400] tracking-[1.2px] text-(--primary) uppercase block mb-3">
          SOCIAL ECOSYSTEM
        </span>
        <div className="flex items-center gap-4 text-neutral-400">
          <a
            href="#"
            className="hover:text-white transition-colors"
            aria-label="Twitter"
            target="_blank"
            rel="noopener noreferrer"
          >
            <FaTwitter size={20} />
          </a>
          <a
            href="https://www.instagram.com/edoubleone_nextaflow?igsh=MXRlZGoyMHp1ZW0yMQ%3D%3D&utm_source=qr"
            aria-label="Twitter"
            target="_blank"
            rel="noopener noreferrer"
            className="hover:text-white transition-colors"
          >
            <RiInstagramLine size={20} />
          </a>
          <a
            href="https://www.linkedin.com/company/e-double-one-inc/"
            className="hover:text-white transition-colors"
            aria-label="Twitter"
            target="_blank"
            rel="noopener noreferrer"
          >
            <BiLogoLinkedinSquare size={20} />
          </a>
        </div>

        {/* Card 4: Response Time Mesh Banner */}
      </div>
      <div className="h-full w-full px-4 md:px-0">
        <img src={card} alt="" className="h-full w-full" />
      </div>
    </div>
  );
}
