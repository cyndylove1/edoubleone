import React from "react";
import { Button } from "./button";
import { Link } from "react-router-dom";

interface CtaSectionProps {
  titleLine1?: string;
  titleLine2?: string;
  buttonText?: string;
  onButtonClick?: () => void;
}

export const HomeCta: React.FC<CtaSectionProps> = ({
  titleLine1 = "READY TO",
  titleLine2 = "ASCEND?",
  
}) => {
  return (
    <section className="w-full min-h-[400px] bg-(--primary) flex flex-col items-center justify-center px-6 pt-32 pb-24 text-center ">
      {/* Title Header */}
      <h2 className="text-white text-5xl md:text-8xl lg:text-[120px] font-[700] tracking-tight lg:leading-[120px] uppercase select-none mb-10">
        <div>{titleLine1}</div>
        <div>{titleLine2}</div>
      </h2>

      {/* Action Button */}
      <Link to="/contact">
        <Button className="bg-white text-(--primary)" showIcon>
          Start Blueprint
        </Button>
      </Link>
    </section>
  );
};

export default HomeCta;
