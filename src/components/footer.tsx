import React, { useState } from "react";
import Logo from "./logo";
import { BiLogoLinkedinSquare } from "react-icons/bi";
import { FaTwitter } from "react-icons/fa6";
import { RiInstagramLine } from "react-icons/ri";
import { IoIosArrowRoundForward } from "react-icons/io";

export const Footer: React.FC = () => {
  const [email, setEmail] = useState("");

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Handle newsletter subscription
  };

  return (
    <footer className="w-full bg-black text-[#8E9299] pt-16 pb-12 px-6 md:px-12 border-t border-[#26252B]">
      <div className="max-w-7xl mx-auto">
        {/* Main Content Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-12 gap-10 lg:gap-8 mb-20">
          {/* Brand Column */}
          <div className="lg:col-span-5 flex flex-col justify-between pr-0 lg:pr-12">
            <div>
              {/* Logo */}
              <Logo />

              {/* Tagline */}
              <p className="text-[15px] font-[400] pt-6 pb-12 text-[#A1A1A6] max-w-[360px] leading-[26px]">
                Building the architecture of the future, one intelligent system
                at a time.
              </p>
            </div>

            {/* Social Icons */}
            <div className="flex items-center gap-5">
              <a
                href="https://www.linkedin.com/company/e-double-one-inc/"
                aria-label="LinkedIn"
                target="_blank"
                rel="noopener noreferrer"
                className="text-[#636366] hover:text-white transition-colors"
              >
                <BiLogoLinkedinSquare size={22} />
              </a>

              <a
                href="#twitter"
                aria-label="Twitter"
                target="_blank"
                rel="noopener noreferrer"
                className="text-[#636366] hover:text-white transition-colors"
              >
                <FaTwitter size={20} />
              </a>

              <a
                href="https://www.instagram.com/edoubleone_nextaflow?igsh=MXRlZGoyMHp1ZW0yMQ%3D%3D&utm_source=qr"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="Instagram"
                className="text-[#636366] hover:text-white transition-colors"
              >
                <RiInstagramLine size={22} />
              </a>
            </div>
          </div>

          {/* Navigation Column */}
          <div className="lg:col-span-2">
            <h3 className="text-[12px] font-[600] tracking-[1.5px] text-[#FF5500] uppercase mb-6 leading-[16px]">
              NAVIGATION
            </h3>
            <ul className="space-y-[16px] text-[14px] font-[400] text-[#A1A1A6]">
              <li>
                <a href="/" className="hover:text-white transition-colors">
                  Home
                </a>
              </li>
              <li>
                <a href="/about" className="hover:text-white transition-colors">
                  About
                </a>
              </li>
              <li>
                <a
                  href="/portfolio"
                  className="hover:text-white transition-colors"
                >
                  Portfolio
                </a>
              </li>
              <li>
                <a
                  href="/services"
                  className="hover:text-white transition-colors"
                >
                  Services
                </a>
              </li>
              <li>
                <a
                  href="/contact"
                  className="hover:text-white transition-colors"
                >
                  Contact
                </a>
              </li>
            </ul>
          </div>

          {/* Intelligence Column */}
          <div className="lg:col-span-2">
            <h3 className="text-[12px] font-[600] tracking-[1.5px] text-[#FF5500] uppercase mb-6 leading-[16px]">
              INTELLIGENCE
            </h3>
            <ul className="space-y-[16px] text-[14px] font-[400] text-[#A1A1A6]">
              <li>
                <a
                  href="#koolai"
                  className="hover:text-white transition-colors"
                >
                  KoolAi
                </a>
              </li>
              <li>
                <a
                  href="#academy"
                  className="hover:text-white transition-colors"
                >
                  E1X Academy
                </a>
              </li>
              <li>
                <a href="#docs" className="hover:text-white transition-colors">
                  Documentation
                </a>
              </li>
            </ul>
          </div>

          {/* Stay Connected Column */}
          <div className="lg:col-span-3">
            <h3 className="text-[12px] font-[600] tracking-[1.5px] text-[#FF5500] uppercase mb-6 leading-[16px]">
              STAY CONNECTED
            </h3>
            <form onSubmit={handleSubmit} className="mb-4">
              <div className="relative border-b border-[#3A3A3C] focus-within:border-[#FF5500] transition-colors pb-2">
                <input
                  type="email"
                  placeholder="Email Address"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  className="w-full bg-transparent text-sm text-white placeholder-[#585B62] focus:outline-none pr-8"
                  required
                />
                <button
                  type="submit"
                  aria-label="Submit Email"
                  className="absolute right-0 top-1/2 -translate-y-1/2 text-[#FF5500] hover:text-white transition-colors"
                >
                  <IoIosArrowRoundForward size={26} />
                </button>
              </div>
            </form>
            <p className="text-[10px] tracking-[1px] font-[400] text-[#585B62] uppercase leading-[16px]">
              JOIN 5,000+ TECHNOLOGY LEADERS RECEIVING OUR WEEKLY BLUEPRINT.
            </p>
          </div>
        </div>

        {/* Bottom Bar Divider */}
        <div className="border-t border-[#1C1C1E] pt-8 flex flex-col sm:flex-row items-center justify-between gap-4 text-[10px] leading-[15px] tracking-[2px] text-[#515154] uppercase">
          <div>© 2026 EDOUBLEONE TECHNICAL ARCHITECTURE FIRM.</div>
          <div className="flex items-center gap-6">
            <a
              href="#privacy"
              className="hover:text-[#8E9299] transition-colors"
            >
              PRIVACY
            </a>
            <a href="#terms" className="hover:text-[#8E9299] transition-colors">
              TERMS
            </a>
            <a
              href="#cookies"
              className="hover:text-[#8E9299] transition-colors"
            >
              COOKIES
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
