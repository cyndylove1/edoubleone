import logo from "../assets/logo.png";
import { Link } from "react-router-dom";

export default function Logo() {
  return (
    <Link to="/" className="inline-block">
      <img src={logo} alt="logo" className="h-[35px] w-auto object-contain" />
    </Link>
  );
}
