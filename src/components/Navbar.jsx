import React from "react";
import { Link, NavLink } from "react-router-dom";

export default function Navbar() {
  const links = [
    { name: "Home", path: "/" },
    { name: "About", path: "/about" },
    { name: "Quiz", path: "/quiz" },
    { name: "Plans", path: "/plans" },
    { name: "Consultation", path: "/consultation" },
    { name: "Problems", path: "/problems" },
  ];

  return (
    <nav className="bg-white shadow-md sticky top-0 z-50 py-2">
      <div className="max-w-7xl mx-auto px-6 py-4 flex justify-between items-center">
        {/* <div className="text-2xl font-bold text-blue-800">Physio30</div> */}
        <div>
          <Link to="/" className="flex items-center gap-4">
            <img src="/logo.png" alt="Physio30"
            className="h-12 w-auto object-contain rounded-lg" />
          <div className="font-semibold text-xl">Physio30</div>
          </Link>
        </div>

        <div className="flex space-x-6">
          {links.map((link) => (
            <NavLink
              key={link.name}
              to={link.path}
              end={link.path === "/"} // exact match for Home
              className={({ isActive }) =>
                isActive
                  ? "text-blue-700 border-b-2 border-blue-700 font-semibold"
                  : "text-gray-700 hover:text-blue-700 transition"
              }
            >
              {link.name}
            </NavLink>
          ))}
        </div>
      </div>
    </nav>
  );
}
