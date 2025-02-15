import React from "react";

const MobileMenu = ({ menuOpen, setMenuOpen }) => {
  return (
    <div
      className={`fixed top-0 left-0 z-40 w-full bg-[rgba(10,10,10,0.8)] flex flex-col justify-center items-center transition-all duration-300 ease-in-out 
        ${
          menuOpen
            ? "h-screen opacity-100 pointer-events-auto"
            : "h-0 opacity-0 pointer-events-none"
        }
      `}
    >
      <button
        onClick={() => setMenuOpen(false)}
        className="absolute top-6 right-6 text-3xl focus:outline-none cursor-pointer"
        aria-label="Close Menu"
      >
        &times;
      </button>
      <a
        href="#home"
        onClick={()=>setMenuOpen(false)}
        className="text-white text-2xl font-semibold my-4 transform transition-transform duration-300 "
      >
        Home
      </a>
      <a
        href="#about"
        onClick={()=>setMenuOpen(false)}
       className="text-white text-2xl font-semibold my-4 transform transition-transform duration-300 "
      >
        About
      </a>
      <a
        href="#projects"
        onClick={()=>setMenuOpen(false)}
        className="text-white text-2xl font-semibold my-4 transform transition-transform duration-300 "
      >
        Projects
      </a>
      <a
        href="#contact"
        onClick={()=>setMenuOpen(false)}
       className="text-white text-2xl font-semibold my-4 transform transition-transform duration-300 "
      >
        Contact
      </a>
    </div>
  );
};

export default MobileMenu;
