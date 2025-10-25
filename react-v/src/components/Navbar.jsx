import { TicketCheck } from "lucide-react";
import { useState } from "react";
import { Link } from "react-router-dom";

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => setIsOpen((prev) => !prev);

  return (
    <nav className="max-w-[1400px] mt-6 flex items-center border justify-between mx-4 max-md:w-full max-md:justify-between border-slate-700 px-6 py-4 rounded-full text-gray-800 text-sm relative">
      <Link to="/" className="flex gap-1 ">
        <TicketCheck width="32" height="32" viewBox="0 0 32 32" fill="none" />
        <h1 className="text-lg font-semibold">My TicketR</h1>
      </Link>

      {/* Desktop Menu */}
      <div className="hidden md:flex items-center gap-6 ml-7">
        {["Products", "Stories", "Pricing", "Docs"].map((item) => (
          <Link
            key={item}
            to="#"
            className="relative overflow-hidden h-6 group"
          >
            <span className="block group-hover:-translate-y-full transition-transform duration-300">
              {item}
            </span>
            <span className="block absolute top-full left-0 group-hover:-translate-y-full transition-transform duration-300">
              {item}
            </span>
          </Link>
        ))}
      </div>

      {/* Buttons */}
      <div className="hidden ml-14 md:flex items-center gap-4">
        <button className="border border-slate-600 hover:bg-slate-800 px-4 py-2 rounded-full text-sm font-medium transition">
          Dashboard
        </button>
        <button className="bg-white hover:shadow-[0px_0px_30px_14px] shadow-[0px_0px_30px_7px] hover:shadow-white/50 shadow-white/50 text-black px-4 py-2 rounded-full text-sm font-medium hover:bg-slate-100 transition duration-300">
          Get Started
        </button>
      </div>

      {/* Mobile Menu Button */}
      <button
        onClick={toggleMenu}
        className="md:hidden text-gray-400 focus:outline-none"
      >
        <svg
          className="w-6 h-6"
          fill="none"
          stroke="currentColor"
          strokeWidth="2"
          viewBox="0 0 24 24"
          strokeLinecap="round"
          strokeLinejoin="round"
        >
          <path d="M4 6h16M4 12h16M4 18h16" />
        </svg>
      </button>

      {/* Mobile Menu */}
      {isOpen && (
        <div className="absolute top-20 left-0 bg-black w-full flex flex-col items-center gap-4 py-6 md:hidden text-base z-50">
          <Link className="hover:text-indigo-600" to="#">
            Products
          </Link>
          <Link className="hover:text-indigo-600" to="#">
            Customer Stories
          </Link>
          <Link className="hover:text-indigo-600" to="#">
            Pricing
          </Link>
          <Link className="hover:text-indigo-600" to="#">
            Docs
          </Link>
          <button className="border border-slate-600 hover:bg-slate-800 px-4 py-2 rounded-full text-sm font-medium transition">
            Contact
          </button>
          <button className="bg-white hover:shadow-[0px_0px_30px_14px] shadow-[0px_0px_30px_7px] hover:shadow-white/50 shadow-white/50 text-black px-4 py-2 rounded-full text-sm font-medium hover:bg-slate-100 transition duration-300">
            Get Started
          </button>
        </div>
      )}
    </nav>
  );
};

export default Navbar;
