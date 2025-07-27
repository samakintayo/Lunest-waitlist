import React, { useState } from "react";

const Header = () => {
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <nav className="w-full h-24 bg-white shadow-sm relative z-50">
      <div className="max-w-7xl mx-auto px-4 flex justify-between items-center h-full">
        {/* Logo */}
        <a href="/"><img
          src="/assets/lunest-main-logo.svg"
          alt="LUNEST"
          className="h-10 sm:h-12 object-contain"
        />
        </a>

        {/* Desktop CTA Button */}
        <div className="hidden md:inline-flex bg-gradient-to-br from-blue-700 to-indigo-200 p-[2px] rounded-[30px]">
          <div className="px-7 py-3.5 rounded-[28px] bg-white inline-flex justify-center items-center gap-3.5">
            <a
              href="/waitlist"
              className="text-center text-blue-800 text-1xl font-medium font-['aeonik']"
            >
              Reserve your Spot now
            </a>
          </div>
        </div>

        {/* Hamburger Icon */}
        <button
          onClick={() => setMenuOpen(!menuOpen)}
          className="md:hidden flex flex-col justify-center items-center gap-1.5"
        >
          {/* Hamburger / Close Icon */}
          {menuOpen ? (
            <>
              <span className="w-6 h-[2px] bg-blue-800 rotate-45 translate-y-[5px] transition-all duration-300"></span>
              <span className="w-6 h-[2px] bg-blue-800 -rotate-45 -translate-y-[5px] transition-all duration-300"></span>
            </>
          ) : (
            <>
              <span className="w-6 h-[2px] bg-blue-800 transition-all duration-300"></span>
              <span className="w-6 h-[2px] bg-blue-800 transition-all duration-300"></span>
              <span className="w-6 h-[2px] bg-blue-800 transition-all duration-300"></span>
            </>
          )}
        </button>
      </div>

      {/* Mobile Menu */}
      {menuOpen && (
        <div className="md:hidden absolute top-24 left-0 w-full bg-white shadow-md px-6 py-5 z-40">
          <div className="bg-gradient-to-br from-blue-700 to-indigo-200 p-[3px] rounded-[30px] w-full">
            <div className="px-6 py-3.5 rounded-[27px] bg-white inline-flex justify-center items-center gap-3.5 w-full">
              <a
                href="/waitlist"
                className="text-blue-800 text-base font-medium text-center w-full font-['aeonik']"
              >
                Reserve your Spot now
              </a>
            </div>
          </div>
        </div>
      )}
    </nav>
  );
};

export default Header;
