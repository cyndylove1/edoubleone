import React from "react";
import { IoIosArrowRoundForward } from "react-icons/io";

interface ButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  children: React.ReactNode;
  showIcon?: boolean;
}

export const Button: React.FC<ButtonProps> = ({
  children,
  showIcon = false,
  className = "",
  ...props
}) => {
  return (
    <button
      className={`group leading-[20px] text-[14px] font-[600] h-[48px] px-8 justify-center gap-[6px] rounded-full flex items-center transition-transform duration-300 ease-in-out hover:scale-105 active:scale-95 ${className}`}
      {...props}
    >
      <span>{children}</span>
      {showIcon && (
        <IoIosArrowRoundForward
          size={20}
          className="transition-transform duration-300 ease-in-out group-hover:translate-x-1"
        />
      )}
    </button>
  );
};
