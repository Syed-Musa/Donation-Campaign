import { NavLink } from "react-router-dom";
import Logo from "./logo";

const Navbar = () => {
  return (
    <div>
      <nav className="flex justify-between items-center py-12">
        <Logo></Logo>

        <ul className="flex gap-4">
          <li className="">
            <NavLink to="/"
              className={({ isActive, isPending }) =>
                isPending ? "pending" : isActive ? "text-red-500 underline font-bold" : ""
              }
            >
              Home
            </NavLink>
          </li>

          <li className="">
            <NavLink to="/donation"
              className={({ isActive, isPending }) =>
                isPending ? "pending" : isActive ? "text-red-500 underline font-bold" : ""
              }
            >
              Donation
            </NavLink>
          </li>

          <li className="">
            <NavLink to="/statistics"
              className={({ isActive, isPending }) =>
                isPending ? "pending" : isActive ? "text-red-500 underline font-bold" : ""
              }
            >
              Statistics
            </NavLink>
          </li>
        </ul>
      </nav>
    </div>
  );
};

export default Navbar;
