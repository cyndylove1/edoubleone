import React from "react";
import vector from "../assets/Vector.png";
import { IoIosArrowRoundForward } from "react-icons/io";

interface BaseCardItem {
  id: string;
  title: string;
  description: string;
  icon: React.ReactNode;
}

interface StandardCardItem extends BaseCardItem {
  type?: "standard";
  tags: string[];
  linkText: string;
  linkHref?: string;
}

interface ProgressCardItem extends BaseCardItem {
  type: "progress";
  subtitle?: string;
  progressLabel: string;
  progressPercentage: number;
}

type CardItem = StandardCardItem | ProgressCardItem;

const cardData: CardItem[] = [
  {
    id: "nextaflow",
    title: "Nextaflow",
    description:
      "An intelligent business automation platform helping businesses capture leads, automate customer interactions, and grow effortlessly.",
    tags: ["AI AUTOMATION", "LEAD GEN"],
    linkText: "Explore Platform",
    icon: (
      <svg
        width="49"
        height="40"
        viewBox="0 0 49 40"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        <path
          d="M0 4.28571C0 1.91964 1.82899 0 4.08333 0H12.25C14.5043 0 16.3333 1.91964 16.3333 4.28571V5.71429H32.6667V4.28571C32.6667 1.91964 34.4957 0 36.75 0H44.9167C47.171 0 49 1.91964 49 4.28571V12.8571C49 15.2232 47.171 17.1429 44.9167 17.1429H36.75C34.4957 17.1429 32.6667 15.2232 32.6667 12.8571V11.4286H16.3333V12.8571C16.3333 13.0089 16.3248 13.1607 16.3078 13.3036L23.1389 22.8571H31.3056C33.5599 22.8571 35.3889 24.7768 35.3889 27.1429V35.7143C35.3889 38.0804 33.5599 40 31.3056 40H23.1389C20.8845 40 19.0556 38.0804 19.0556 35.7143V27.1429C19.0556 26.9911 19.0641 26.8393 19.0811 26.6964L12.25 17.1429H4.08333C1.82899 17.1429 0 15.2232 0 12.8571V4.28571Z"
          fill="white"
        />
      </svg>
    ),
  },
  {
    id: "koolai",
    title: "KoolAi",
    description:
      "An AI-powered platform designed to make intelligent technology more accessible, useful, and effortless.",
    tags: ["AI PLATFORM", "SMART TOOLS"],
    linkText: "Explore KoolAi",
    icon: (
      <svg
        width="36"
        height="36"
        viewBox="0 0 36 36"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        <path
          d="M12.9375 0C15.1102 0 16.875 1.76484 16.875 3.9375V32.0625C16.875 34.2352 15.1102 36 12.9375 36C10.9055 36 9.23203 34.4602 9.02109 32.4773C8.65547 32.5758 8.26875 32.625 7.875 32.625C5.39297 32.625 3.375 30.607 3.375 28.125C3.375 27.6047 3.46641 27.0984 3.62812 26.6344C1.50469 25.8328 0 23.7797 0 21.375C0 19.132 1.31484 17.1914 3.22031 16.2914C2.60859 15.525 2.25 14.5547 2.25 13.5C2.25 11.3414 3.76875 9.54141 5.79375 9.09844C5.68125 8.71172 5.625 8.29688 5.625 7.875C5.625 5.77266 7.07344 4.00078 9.02109 3.50859C9.23203 1.53984 10.9055 0 12.9375 0ZM23.0625 0C25.0945 0 26.7609 1.53984 26.9789 3.50859C28.9336 4.00078 30.375 5.76562 30.375 7.875C30.375 8.29688 30.3187 8.71172 30.2062 9.09844C32.2313 9.53438 33.75 11.3414 33.75 13.5C33.75 14.5547 33.3914 15.525 32.7797 16.2914C34.6852 17.1914 36 19.132 36 21.375C36 23.7797 34.4953 25.8328 32.3719 26.6344C32.5336 27.0984 32.625 27.6047 32.625 28.125C32.625 30.607 30.607 32.625 28.125 32.625C27.7313 32.625 27.3445 32.5758 26.9789 32.4773C26.768 34.4602 25.0945 36 23.0625 36C20.8898 36 19.125 34.2352 19.125 32.0625V3.9375C19.125 1.76484 20.8898 0 23.0625 0Z"
          fill="#F0F0F0"
        />
      </svg>
    ),
  },
  {
    id: "e1x-academy",
    title: "E1X Academy",
    description:
      "Training the next generation of engineers in the architecture of intelligent systems.",
    tags: ["CERTIFICATION", "LIVE LAB"],
    linkText: "Explore Curriculum",
    icon: (
      <svg
        width="45"
        height="36"
        viewBox="0 0 45 36"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        <path
          d="M22.5011 2.25C21.9316 2.25 21.3691 2.34844 20.8347 2.53828L1.11202 9.66094C0.444051 9.90703 0.00108227 10.5398 0.00108227 11.25C0.00108227 11.9602 0.444051 12.593 1.11202 12.8391L5.18311 14.3086C4.02999 16.1227 3.37608 18.2672 3.37608 20.5242V22.5C3.37608 24.4969 2.61671 26.557 1.80811 28.1812C1.35108 29.0953 0.83077 29.9953 0.226082 30.825C0.00108227 31.1273 -0.062199 31.5211 0.0643635 31.8797C0.190926 32.2383 0.486239 32.5055 0.851864 32.5969L5.35186 33.7219C5.64718 33.7992 5.96358 33.743 6.22374 33.5812C6.48389 33.4195 6.66671 33.1523 6.72296 32.85C7.32764 29.8406 7.0253 27.1406 6.5753 25.207C6.3503 24.2086 6.04796 23.1891 5.62608 22.2539V20.5242C5.62608 18.4008 6.34327 16.3969 7.5878 14.7937C8.49483 13.7039 9.66905 12.825 11.0472 12.2836L22.0862 7.94531C22.6628 7.72031 23.3167 8.00156 23.5417 8.57812C23.7667 9.15469 23.4855 9.80859 22.9089 10.0336L11.8698 14.3719C10.998 14.7164 10.2316 15.2437 9.60577 15.8906L20.8276 19.9406C21.362 20.1305 21.9245 20.2289 22.4941 20.2289C23.0636 20.2289 23.6261 20.1305 24.1605 19.9406L43.8901 12.8391C44.5581 12.6 45.0011 11.9602 45.0011 11.25C45.0011 10.5398 44.5581 9.90703 43.8901 9.66094L24.1675 2.53828C23.6331 2.34844 23.0706 2.25 22.5011 2.25ZM9.00108 28.6875C9.00108 31.1695 15.048 33.75 22.5011 33.75C30 33.75 36.0011 31.1695 36.0011 28.6875L34.9253 18.4641L24.9269 22.0781C24.1464 22.3594 23.3237 22.5 22.5011 22.5C21.6785 22.5 20.8487 22.3594 20.0753 22.0781L10.0769 18.4641L9.00108 28.6875Z"
          fill="#F0F0F0"
        />
      </svg>
    ),
  },
  {
    id: "scriply-ai",
    title: "Scriply Ai",
    description:
      "AI-powered tools designed to transform ideas into compelling content, scripts, and creative experiences.",
    tags: ["AI CONTENT", "CREATIVE TOOLS"],
    linkText: "Try Scriply",
    icon: (
      <img
        src={vector}
        alt="Scriply AI Vector Icon"
        className="w-9 h-9 object-contain"
      />
    ),
  },
  {
    id: "roadersmap",
    title: "Roadersmap",
    description:
      "A smart digital platform designed to make navigation, discovery, and journey planning simpler and more connected.",
    tags: ["SMART NAVIGATION", "DISCOVERY"],
    linkText: "Explore Roadmap",
    icon: (
      <svg
        width="36"
        height="36"
        viewBox="0 0 36 36"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        <path
          d="M12.9375 0C15.1102 0 16.875 1.76484 16.875 3.9375V32.0625C16.875 34.2352 15.1102 36 12.9375 36C10.9055 36 9.23203 34.4602 9.02109 32.4773C8.65547 32.5758 8.26875 32.625 7.875 32.625C5.39297 32.625 3.375 30.607 3.375 28.125C3.375 27.6047 3.46641 27.0984 3.62812 26.6344C1.50469 25.8328 0 23.7797 0 21.375C0 19.132 1.31484 17.1914 3.22031 16.2914C2.60859 15.525 2.25 14.5547 2.25 13.5C2.25 11.3414 3.76875 9.54141 5.79375 9.09844C5.68125 8.71172 5.625 8.29688 5.625 7.875C5.625 5.77266 7.07344 4.00078 9.02109 3.50859C9.23203 1.53984 10.9055 0 12.9375 0ZM23.0625 0C25.0945 0 26.7609 1.53984 26.9789 3.50859C28.9336 4.00078 30.375 5.76562 30.375 7.875C30.375 8.29688 30.3187 8.71172 30.2062 9.09844C32.2313 9.53438 33.75 11.3414 33.75 13.5C33.75 14.5547 33.3914 15.525 32.7797 16.2914C34.6852 17.1914 36 19.132 36 21.375C36 23.7797 34.4953 25.8328 32.3719 26.6344C32.5336 27.0984 32.625 27.6047 32.625 28.125C32.625 30.607 30.607 32.625 28.125 32.625C27.7313 32.625 27.3445 32.5758 26.9789 32.4773C26.768 34.4602 25.0945 36 23.0625 36C20.8898 36 19.125 34.2352 19.125 32.0625V3.9375C19.125 1.76484 20.8898 0 23.0625 0Z"
          fill="#F0F0F0"
        />
      </svg>
    ),
  },
  {
    id: "e1x-community",
    title: "E1X Community",
    subtitle: "Upcoming modules in collaborative workspace intelligence.",
    description:
      "An always-on community platform connecting students and alumni through real-time conversations, support, collaboration, and shared growth.",
    type: "progress",
    progressLabel: "E1 FLOW",
    progressPercentage: 40,
    icon: (
      <svg
        width="36"
        height="36"
        viewBox="0 0 36 36"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        <path
          d="M11.0154 27.0635L8.84274 24.8909C8.24509 24.2932 8.03415 23.4284 8.30134 22.6268C8.51227 22.001 8.79353 21.1854 9.13103 20.2502H1.69196C1.08728 20.2502 0.524775 19.9268 0.222431 19.3995C-0.0799123 18.8721 -0.072881 18.2252 0.236494 17.7049L3.9279 11.4823C4.84196 9.94242 6.49431 9.00024 8.28024 9.00024H14.067C14.2357 8.71899 14.4045 8.45883 14.5732 8.2057C20.3318 -0.288045 28.9099 -0.569296 34.0287 0.372892C34.8443 0.520548 35.4771 1.16039 35.6318 1.97602C36.574 7.1018 36.2857 15.6729 27.799 21.4315C27.5529 21.6002 27.2857 21.769 27.0045 21.9377V27.7245C27.0045 29.5104 26.0623 31.1698 24.5224 32.0768L18.2998 35.7682C17.7795 36.0776 17.1326 36.0846 16.6052 35.7823C16.0779 35.4799 15.7545 34.9245 15.7545 34.3127V26.7752C14.7631 27.1198 13.8982 27.401 13.2443 27.612C12.4568 27.8651 11.599 27.6471 11.0084 27.0635H11.0154ZM27.0045 11.8127C28.5567 11.8127 29.817 10.5525 29.817 9.00024C29.817 7.44797 28.5567 6.18774 27.0045 6.18774C25.4522 6.18774 24.192 7.44797 24.192 9.00024C24.192 10.5525 25.4522 11.8127 27.0045 11.8127Z"
          fill="#F0F0F0"
        />
      </svg>
    ),
  },
];

export const Cards: React.FC = () => {
  return (
    <section className="w-full py-12 px-4 md:px-10">
      <div className="max-w-7xl mx-auto overflow-x-auto scrollbar-thin scrollbar-thumb-neutral-800 scrollbar-track-transparent pb-6">
        <div className="flex space-x-6 min-w-max">
          {cardData.map((card) => (
            <div
              key={card.id}
              className="w-full md:w-[350px] h-[400px] md:h-[450px] bg-[#0D0D0F] border border-[#1F1F21] rounded-[20px] p-8 flex flex-col justify-between shadow-xl shrink-0 transition-transform duration-300 hover:border-[#333338]"
            >
              {/* Top Content: Icon, Title, Subtitle, Description */}
              <div className="space-y-4">
                <div className="mb-6">{card.icon}</div>

                <h3 className="text-white text-[30px] font-[700] tracking-tight leading-[30px]">
                  {card.title}
                </h3>

                {"subtitle" in card && card.subtitle && (
                  <p className="text-[#A1A1A6] text-[15px] leading-[22px]">
                    {card.subtitle}
                  </p>
                )}

                <p className="text-[#A1A1A6] text-[15px] leading-[24px] font-[400]">
                  {card.description}
                </p>
              </div>

              {/* Bottom Content: Conditional rendering based on card type */}
              {"type" in card && card.type === "progress" ? (
                <div className="space-y-3 pt-4">
                  <div className="flex items-center justify-between text-xs font-mono tracking-wider">
                    <span className="text-neutral-300 uppercase">
                      {card.progressLabel}
                    </span>
                    <span className="text-[#ff5500] uppercase">
                      {card.progressPercentage}% READIED
                    </span>
                  </div>
                  <div className="w-full bg-[#1c1c1f] h-1.5 rounded-full overflow-hidden">
                    <div
                      className="bg-[#ff5500] h-full transition-all duration-500"
                      style={{ width: `${card.progressPercentage}%` }}
                    />
                  </div>
                </div>
              ) : (
                <div className="space-y-6 pt-4">
                  {/* Tags */}
                  <div className="flex flex-wrap items-center justify-center gap-2">
                    {(card as StandardCardItem).tags.map((tag, idx) => (
                      <span
                        key={idx}
                        className="px-3 py-1 border border-[#1F1F21] rounded-full text-[10px] font-[400] leading-[15px] tracking-wider text-[#F0F0F0] uppercase"
                      >
                        {tag}
                      </span>
                    ))}
                  </div>

                  {/* Arrow Link */}
                  <a
                    href={(card as StandardCardItem).linkHref || "#"}
                    className="inline-flex items-center space-x-2 text-(--primary) hover:text-[#e04b00] text-sm font-semibold transition-colors duration-200"
                  >
                    <span className="">
                      {(card as StandardCardItem).linkText}
                    </span>
                    <IoIosArrowRoundForward size={20}/>
                  </a>
                </div>
              )}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Cards;
