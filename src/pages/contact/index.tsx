import React, { useState } from "react";
import InfoCard from "../../components/infoCard";

interface FormData {
  name: string;
  email: string;
  interest: string;
  timeline: string;
  message: string;
}

export const Contact: React.FC = () => {
  const [formData, setFormData] = useState<FormData>({
    name: "",
    email: "",
    interest: "",
    timeline: "",
    message: "",
  });

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>,
  ) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Handle form submission logic
    console.log("Form Submitted:", formData);
  };

  return (
    <section className="text-white min-h-screen py-16 px-4 md:px-10">
      <div className="max-w-7xl mx-auto">
        {/* Header Section */}
        <div className="mb-12">
          <span className="text-[12px] font-[400] tracking-[2.4px] text-(--primary) uppercase block mb-3">
            CONTACT US
          </span>
          <h1 className="text-5xl md:text-7xl lg:text-8xl font-[500] tracking-tight text-white md:leading-[70px]">
            <span className="block">Start a</span>
            <span className="text-[#4C4A52] block">conversation.</span>
          </h1>
        </div>

        {/* Grid Layout */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
          {/* Contact Form Card */}
          <div className="lg:col-span-7 bg-[#121216] rounded-3xl p-6 md:p-10 border border-neutral-800/50">
            <form onSubmit={handleSubmit} className="space-y-8">
              {/* Row 1: Name & Email */}
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                <div>
                  <label className="block text-[10px] leading-[16px] font-[400] tracking-[1px] text-[#4C4A52] uppercase mb-2">
                    YOUR FULL NAME
                  </label>
                  <input
                    type="text"
                    name="name"
                    value={formData.name}
                    onChange={handleChange}
                    className="w-full bg-transparent border-b border-[#26252B] pb-2 text-[#F0F0F0] text-[15px] placeholder-neutral-600 focus:outline-none focus:border-(--primary) transition-colors resize-none"
                  />
                </div>
                <div>
                  <label className="block text-[10px] leading-[16px] font-[400] tracking-[1px] text-[#4C4A52] uppercase mb-2">
                    EMAIL ADDRESS
                  </label>
                  <input
                    type="email"
                    name="email"
                    value={formData.email}
                    onChange={handleChange}
                    className="w-full bg-transparent border-b border-[#26252B] pb-2 text-[#F0F0F0] text-[15px] placeholder-neutral-600 focus:outline-none focus:border-(--primary) transition-colors resize-none"
                  />
                </div>
              </div>

              {/* Row 2: Interest & Timeline */}
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                <div>
                  <label className="block text-[10px] leading-[16px] font-[400] tracking-[1px] text-[#4C4A52] uppercase mb-2">
                    INTEREST
                  </label>
                  <input
                    type="text"
                    name="interest"
                    value={formData.interest}
                    onChange={handleChange}
                    className="w-full bg-transparent border-b border-[#26252B] pb-2 text-[#F0F0F0] text-[15px] placeholder-neutral-600 focus:outline-none focus:border-(--primary) transition-colors resize-none"
                  />
                </div>
                <div>
                  <label className="block text-[10px] leading-[16px] font-[400] tracking-[1px] text-[#4C4A52] uppercase mb-2">
                    TIMELINE
                  </label>
                  <input
                    type="text"
                    name="timeline"
                    value={formData.timeline}
                    onChange={handleChange}
                    className="w-full bg-transparent border-b border-[#26252B] pb-2 text-[#F0F0F0] text-[15px] placeholder-neutral-600 focus:outline-none focus:border-(--primary) transition-colors resize-none"
                  />
                </div>
              </div>

              {/* Row 3: Project Overview */}
              <div>
                <label className="block text-[10px] leading-[16px] font-[400] tracking-[1px] text-[#4C4A52] uppercase mb-2">
                  PROJECT OVERVIEW
                </label>
                <textarea
                  name="message"
                  rows={4}
                  value={formData.message}
                  onChange={handleChange}
                  placeholder="Tell us about your ambition..."
                  className="w-full bg-transparent border-b border-[#26252B] pb-2 text-[#F0F0F0] text-[15px] placeholder-neutral-600 focus:outline-none focus:border-(--primary) transition-colors resize-none"
                />
              </div>

              {/* Submit Button */}
              <div className="pt-4">
                <button className="bg-(--primary) w-full text-[#F0F0F0] flex items-center justify-center gap-2 px-6 py-3 rounded-full">
                  <span>Send Message</span>
                  <span className="flex items-center justify-center">
                    <svg
                      width="14"
                      height="14"
                      viewBox="0 0 14 14"
                      fill="none"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path
                        d="M13.6202 0.15323C13.8964 0.344636 14.0413 0.675495 13.9893 1.00635L12.2393 12.3814C12.1983 12.6466 12.037 12.879 11.8018 13.0103C11.5667 13.1415 11.2851 13.1579 11.0362 13.054L7.76591 11.695L5.89286 13.7212C5.6495 13.9864 5.26669 14.0739 4.93036 13.9427C4.59403 13.8114 4.37528 13.486 4.37528 13.1251V10.8392C4.37528 10.7298 4.4163 10.6259 4.49013 10.5466L9.07294 5.54542C9.23153 5.37315 9.22607 5.10792 9.062 4.94385C8.89794 4.77979 8.63271 4.76885 8.46044 4.92471L2.89872 9.86573L0.484269 8.65714C0.194425 8.51221 0.00848792 8.22237 0.0002848 7.89971C-0.00791832 7.57706 0.161613 7.27628 0.440519 7.11495L12.6905 0.114948C12.9831 -0.0518486 13.344 -0.0354423 13.6202 0.15323Z"
                        fill="white"
                      />
                    </svg>
                  </span>
                </button>
              </div>
            </form>
          </div>
          {/* Right Info Cards */}
          <InfoCard />
        </div>
      </div>
    </section>
  );
};

export default Contact;
