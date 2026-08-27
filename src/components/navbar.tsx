import React, { useState } from "react";
import Logo from "./logo";
import { Button } from "./button";
import { Menu, X } from "lucide-react";
import { Link, useLocation } from "react-router-dom";

interface NavItem {
  label: string;
  href: string;
}

const navItems: NavItem[] = [
  { label: "HOME", href: "/" },
  { label: "ABOUT", href: "/about" },
  { label: "PORTFOLIO", href: "/portfolio" },
  { label: "SERVICES", href: "/services" },
  { label: "CONTACT", href: "/contact" },
];

export const Navbar: React.FC = () => {
  const [isOpen, setIsOpen] = useState(false);
  const location = useLocation();

  const toggleMenu = () => setIsOpen((prev) => !prev);

  return (
    <header className="w-full border-b border-gray-700 px-6 md:px-10 md:py-4 py-6 flex items-center justify-between text-xs tracking-[0.35px] relative bg-[#080a0b]">
      <Logo />

      {/* Desktop Navigation Links */}
      <nav className="hidden lg:flex items-center space-x-8 text-[14px] text-[#f0f0f0] font-[500] leading-[20px]">
        {navItems.map((item) => {
          const isActive = location.pathname === item.href;
          return (
            <Link
              key={item.label}
              to={item.href}
              className={`relative py-1 uppercase transition-colors duration-200 hover:text-white ${
                isActive ? "text-white font-semibold" : ""
              }`}
            >
              {item.label}
              {isActive && (
                <span className="absolute bottom-0 left-0 w-full h-[2px] bg-[#FF5500]" />
              )}
            </Link>
          );
        })}
      </nav>

      {/* Desktop Action Button */}
      <div className="hidden lg:block">
        <Link to="/contact">
          <Button className="bg-(--primary) text-white" showIcon>
            Let's Scale
          </Button>
        </Link>
      </div>

      {/* Mobile Hamburger Toggle */}
      <button
        onClick={toggleMenu}
        aria-label="Toggle Menu"
        className="lg:hidden text-white focus:outline-none p-1"
      >
        <Menu size={24} />
      </button>

      {/* Overlay Backdrop */}
      {isOpen && (
        <div
          onClick={toggleMenu}
          className="fixed inset-0 bg-black/60 z-40 lg:hidden backdrop-blur-sm"
        />
      )}

      {/* Mobile Right Drawer */}
      <aside
        className={`fixed top-0 right-0 h-full w-[280px] border-l border-[#121115] z-50 p-6 flex flex-col justify-between transform transition-transform duration-300 ease-in-out lg:hidden ${
          isOpen ? "translate-x-0" : "translate-x-full"
        }`}
      >
        <div>
          {/* Drawer Header */}
          <div className="flex items-center justify-between border-b border-[#121115] pb-4 bg-[#080a0b]">
            <Logo />
            <button
              onClick={toggleMenu}
              aria-label="Close Menu"
              className="text-[#f0f0f0] hover:text-white p-1"
            >
              <X size={24} />
            </button>
          </div>

          {/* Mobile Links */}
          <nav className="flex flex-col space-y-6 pt-8 text-[15px] font-[500] text-[#f0f0f0]">
            {navItems.map((item) => {
              const isActive = location.pathname === item.href;
              return (
                <Link
                  key={item.label}
                  to={item.href}
                  onClick={toggleMenu}
                  className={`relative w-fit py-1 uppercase transition-colors duration-200 hover:text-white ${
                    isActive ? "text-white font-semibold" : ""
                  }`}
                >
                  {item.label}
                  {isActive && (
                    <span className="absolute bottom-0 left-0 w-full h-[2px] bg-[#FF5500]" />
                  )}
                </Link>
              );
            })}
          </nav>
        </div>

        {/* Mobile Action Button */}
        <div className="pt-6 border-t border-[#121115]">
          <Link to="/contact" onClick={toggleMenu}>
            <Button
              className="w-full bg-(--primary) hover:bg-(--primary)/60 text-white justify-center"
              showIcon
            >
              Let's Scale
            </Button>
          </Link>
        </div>
      </aside>
    </header>
  );
};

export default Navbar;
