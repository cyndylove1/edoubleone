import logo from "../assets/logo.png"
import { Link } from "react-router-dom";

export default function Logo() {
    return (
      <Link to="/">
        {/* Brand Logo */}
        <div className="w-full h-full">
          <img src={logo} alt="logo" className="h-[35px] w-full"/>
        </div>
      </Link>
    );
}