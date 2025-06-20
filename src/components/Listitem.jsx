import { Link, NavLink } from "react-router-dom";

export function Listitem({ title, icon, link }) {
  return (
    <NavLink
      to={link}
      className={({ isActive }) => (isActive ? "animate-pulse" : "")}
    >
      <div className="group flex pl-2 items-center font-head text-[#F4F4FF] text-xl gap-3">
        <div className="w-10">{icon}</div>
        <p className="relative ">
          {title}{" "}
          <span className="absolute -bottom-1 left-0 h-[3px] w-0 bg-white transition-all duration-300 group-hover:w-full"></span>
        </p>
      </div>
    </NavLink>
  );
}
