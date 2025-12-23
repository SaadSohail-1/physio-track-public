import React, { useState } from "react";
import { Link, NavLink } from "react-router-dom";
import {X, Menu} from 'lucide-react'

export default function Navbar() {

  const [isOpen, setIsOpen] = useState(false)
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
        <div className="group">
          <Link to="/" className="flex items-center gap-4">
            <img src="/logo.png" alt="Physio30"
            className="h-12 w-auto object-contain rounded-lg group-hover:translate-x-0.5 transition:transform duration-300" />
          <div className="font-semibold tracking-wider text-xl group-hover:translate-x-0.5 duration-300">Physio30</div>
          </Link>
        </div>

        <div className="hidden sm:flex space-x-6">
          {links.map((link) => (
            <NavLink
              key={link.name}
              to={link.path}
              end={link.path === "/"}
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
        {/* mobile menu */}
        <div className='sm:hidden z-50' >
            <button className="font-bold relative z-50" onClick={() => setIsOpen(!isOpen)}>
              {isOpen ? <X size={24} /> : <Menu size={24} />}
            </button>
          <div className={`fixed  top-0 right-0 w-1/2 h-full bg-white flex flex-col gap-6 shadow-2xl pt-20 px-6 transform transition-transform duration-300 ease-in-out z-40
            ${isOpen ? 'translate-x-0': 'translate-x-full'}`}>
            {links.map((link) => (
            <NavLink
              onClick={()=> setIsOpen(false)}
              key={link.name}
              to={link.path}
              end={link.path === "/"}
              className={({ isActive }) =>
                isActive
                  ? "text-blue-700 border-b-2 border-blue-700 w-max font-semibold"
                  : "text-gray-700 hover:text-blue-700 transition w-max"
              }
            >
              {link.name}
            </NavLink>
          ))}
          </div>
          {isOpen && (
            <div
            className="fixed inset-0 bg-black/30 z-30 sm:hidden transition-colors duration-200"
            onClick={() => setIsOpen(false)}
            ></div>
          )}
        </div>
      </div>
    </nav>
  );
}
