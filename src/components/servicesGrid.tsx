import React from "react";
import Ai from "../assets/photo2.jpeg";
import Software from "../assets/photo3.jpeg";
import Product from "../assets/photo4.jpeg";
import Growth from "../assets/photo7.png";
import Education from "../assets/photo6.jpeg";
import { IoIosArrowRoundForward, IoIosCheckmark } from "react-icons/io";
import Analytics from "./analytics";

interface CardData {
  tags: string[];
  title: string;
  description: string;
  features: string[];
  linkText: string;
  linkHref?: string;
  backgroundImage: string;
}

const topCards: CardData[] = [
  {
    tags: ["GENERATIVE AI", "PREDICTIVE ANALYTICS"],
    title: "AI & Machine Learning",
    description:
      "Developing intelligent systems that automate complex processes, predict market shifts, and personalize customer experiences at scale.",
    features: [
      "LLM Integration & Fine-tuning",
      "Computer Vision Solutions",
      "Natural Language Processing",
    ],
    linkText: "View Case Studies",
    backgroundImage: Ai,
  },
  {
    tags: ["FULL STACK", "CLOUD NATIVE"],
    title: "Software Engineering",
    description:
      "Building robust, scalable applications using modern architectures. We prioritize performance, security, and maintainability in every line of code.",
    features: [
      "Enterprise Web Applications",
      "API & Microservices Design",
      "Legacy System Modernization",
    ],
    linkText: "Technical Approach",
    backgroundImage: Software,
  },
  {
    tags: ["UX STRATEGY", "DESIGN SYSTEMS"],
    title: "Product Design",
    description:
      "Creating intuitive user experiences that convert. We combine user-centric design principles with high-end aesthetic polish.",
    features: [
      "UI/UX Design & Prototyping",
      "Cross-platform Design Systems",
      "User Research & Testing",
    ],
    linkText: "Design Ethos",
    backgroundImage: Product,
  },
];

const bottomCards = {
  growth: {
    tags: ["DATA INTELLIGENCE", "ROI TRACKING"],
    title: "Growth & Analytics",
    description:
      "Transforming raw data into actionable business intelligence. We help you measure what matters and optimize for sustainable growth.",
    features: [
      "Performance Dashboards",
      "Conversion Rate Optimization",
      "Data Warehousing & ETL",
    ],
    backgroundImage: Growth,
  },
  education: {
    tags: ["CORPORATE TRAINING", "E1X ACADEMY"],
    title: "Education",
    description:
      "Empowering your team with the technical skills needed to master the future. From custom workshops to E1X Academy programs.",
    features: [
      "AI Literacy Workshops",
      "Tech Stack Upskilling",
      "Strategic Consulting",
    ],
    linkText: "Explore E1X Academy",
    backgroundImage: Education,
  },
};

const Tags = ({ tags }: { tags: string[] }) => {
  return (
    <div className="flex flex-wrap items-center gap-2">
      {tags.map((tag) => (
        <span
          key={tag}
          className="
            rounded-full
            border border-white/10
            bg-[#26252B]
            px-3 py-1 h-[24px]
            leading-[16.5px]
            text-[8px]
            font-[400]
            uppercase
            tracking-[1.1px]
            text-[#8E8C95]
            backdrop-blur-sm
          "
        >
          {tag}
        </span>
      ))}
    </div>
  );
};

const FeatureList = ({ features }: { features: string[] }) => {
  return (
    <ul className="mt-6 space-y-2.5">
      {features.map((feature) => (
        <li
          key={feature}
          className="flex items-center pb-2 gap-2 text-[14px] leading-[20px] font-[400] text-[#F0F0F0]"
        >
          <span className="text-[14px] text-(--primary)"><IoIosCheckmark size={24}/></span>
          <span>{feature}</span>
        </li>
      ))}
    </ul>
  );
};

interface ServiceCardProps {
  card: CardData;
  className?: string;
}

const ServiceCard = ({ card, className = "" }: ServiceCardProps) => {
  return (
    <article
      className={`
        group
        relative
        h-full
        md:h-[450px]
        overflow-hidden
        rounded-[22px]
        border
        border-white/[0.09]
        bg-[#0b0b0e]
        ${className}
      `}
    >
      {/* Dynamic Background image */}
      <img
        src={card.backgroundImage}
        alt={card.title}
        className="
          absolute
          inset-0
          h-full
          w-full
          object-cover
          object-center
          transition-transform
          duration-700
          group-hover:scale-105
        "
      />

      {/* Orange atmospheric glow */}
      <div
        className="
          pointer-events-none
          absolute
          -right-20
          -top-20
          h-48
          w-48
          rounded-full
          bg-orange-500/10
          blur-[70px]
        "
      />

      {/* Content */}
      <div className="relative z-10 flex h-full flex-col p-6 md:p-7">
        <Tags tags={card.tags} />

        <div className="mt-6">
          <h3
            className="
              text-[25px]
              font-[500]
              leading-[30px]
              tracking-tight
              text-[#E6E5E2]
              
            "
          >
            {card.title}
          </h3>

          <p
            className="
              mt-3
              max-w-[360px]
              text-[13px]
              leading-[1.7]
              text-[#8E8C95]
            "
          >
            {card.description}
          </p>
        </div>

        <FeatureList features={card.features} />

        <a
          href={card.linkHref ?? "#"}
          className="
            mt-auto
            inline-flex
            w-fit
            items-center
            gap-2
            py-6
            text-[12px]
            font-[500]
            text-[#E6E5E2]
            transition-colors
            duration-200
            hover:text-(--primary)
          "
        >
          {card.linkText}
          <span className="text-inherit transition-transform duration-200 group-hover:translate-x-1">
            <IoIosArrowRoundForward size={20} />
          </span>
        </a>
      </div>
    </article>
  );
};

const GrowthCard = () => {
  const card = bottomCards.growth;

  return (
    <article
      className="
        group
        relative
        md:h-[450px]
        h-full
        overflow-hidden
        rounded-[22px]
        border
        border-white/[0.09]
        lg:col-span-2"
    >
      {/* Background */}
      <img
        src={card.backgroundImage}
        alt={card.title}
        className="
          absolute
          inset-0
          h-full
          w-full
          object-cover
          object-center
          transition-transform
          duration-700
          group-hover:scale-105
        "
      />

      {/* Content */}
      <div
        className="
          relative
          z-10
          flex
          h-full
          flex-col
          justify-between
          gap-8
          p-6
          md:p-8
          md:flex-row
          lg:items-center
        "
      >
        {/* Left content */}
        <div className="flex flex-1 flex-col">
          <Tags tags={card.tags} />
          <div className="mt-7">
            <h3
              className="text-[25px]
              font-[500]
              leading-[30px]
              tracking-tight
              text-[#E6E5E2]"
            >
              {card.title}
            </h3>
            <p
              className="
              mt-3
              max-w-[360px]
              text-[13px]
              leading-[1.7]
              text-[#8E8C95]
              "
            >
              {card.description}
            </p>
          </div>
          <FeatureList features={card.features} />
          <div className="py-6">
            <Analytics />
          </div>
        </div>
      </div>
    </article>
  );
};

const EducationCard = () => {
  const card = bottomCards.education;

  return (
    <article
      className="
        group
        relative
        h-full
        md:h-[450px]
        overflow-hidden
        rounded-[22px]
        border
        border-white/[0.09]
        bg-[#0b0b0e]
      "
    >
      {/* Dynamic Background image */}
      <img
        src={card.backgroundImage}
        alt={card.title}
        className="
          absolute
          inset-0
          h-full
          w-full
          object-cover
          object-center
          transition-transform
          duration-700
          group-hover:scale-105
        "
      />

      {/* Dark overlay */}
      <div className="absolute inset-0" />

      <div
        className="
          absolute
          inset-0"
      />

      {/* Content */}
      <div className="relative z-10 flex h-full flex-col p-6 md:p-7">
        <Tags tags={card.tags} />

        <div className="mt-6">
          <h3
            className=" font-[500]
              leading-[30px]
              tracking-tight
              text-[#E6E5E2]"
          >
            {card.title}
          </h3>

          <p
            className="
              mt-3
              max-w-[360px]
              text-[13px]
              leading-[1.7]
              text-[#8E8C95]
            "
          >
            {card.description}
          </p>
        </div>

        <FeatureList features={card.features} />

        <a
          href="#"
          className="
            mt-auto
            inline-flex
            w-fit
            items-center
            gap-2
            py-6
            text-[12px]
            font-[500]
            text-[#E6E5E2]
            transition-colors
            hover:text-orange-500
          "
        >
          {card.linkText}
          <span className="text-inherit transition-transform duration-200 group-hover:translate-x-1">
            <IoIosArrowRoundForward size={20} />
          </span>
        </a>
      </div>
    </article>
  );
};

const ServicesGrid: React.FC = () => {
  return (
    <section className="w-full px-4 pt-16 pb-32 text-white md:px-10">
      <div className="mx-auto w-full max-w-7xl">
        {/* Top row */}
        <div className="grid grid-cols-1 space-y-6 gap-5 lg:grid-cols-3 md:grid-cols-2">
          {topCards.map((card) => (
            <ServiceCard key={card.title} card={card} />
          ))}
        </div>

        {/* Bottom row */}
        <div className="mt-5 space-y-6 grid grid-cols-1 lg:grid-cols-2 gap-5 lg:grid-cols-3">
          <GrowthCard />
          <EducationCard />
        </div>
      </div>
    </section>
  );
};

export default ServicesGrid;
