import { Link } from "react-router-dom";

export default function Logo() {
    return (
      <Link to="/">
        {/* Brand Logo */}
        <div className="flex items-center space-x-1 cursor-pointer select-none">
          <span className="text-white font-[700] text-[20px] md:text-[24px] tracking-tight">
            EDOUBLE
          </span>
          <span className="text-(--primary) font-[700] text-[20px] md:text-[24px] tracking-tight">
            ONE
          </span>
        </div>
      </Link>
    );
}