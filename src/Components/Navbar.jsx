import { useState } from "react";
import { Link } from "react-router-dom";

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <nav className="navbar bg-zinc-900 py-4 px-4 sm:py-4 sm:px-4 lg:py-8 lg:px-8 lg:mx-16 text-white rounded-lg relative top-5 flex justify-between items-center gap-3.5 z-10">
      {/* Logo */}
      <img src="Nav.png" alt="Logo" className="sm:h-6" />

      {/* Desktop Nav Links (visible on lg and above) */}
      <ul className="hidden lg:flex items-center justify-center w-full space-x-8 font-semibold">
        <li className="hover:text-yellow-400 transition cursor-pointer">
          <Link to="/about">About Us</Link>
        </li>
        <li className="hover:text-yellow-400 transition cursor-pointer">
          <Link to="/">How it works</Link>
        </li>
        <li className="hover:text-yellow-400 transition cursor-pointer">
          <Link to="/our-work">Our Work</Link>
        </li>
        <li className="hover:text-yellow-400 transition cursor-pointer">
          <Link to="/pricing">Pricing</Link>
        </li>
        <li className="hover:text-yellow-400 transition cursor-pointer">
          <Link to="/reviews">Reviews</Link>
        </li>
      </ul>

      {/* Hamburger Menu (visible below lg) */}
      <div className="flex">
        <button
          onClick={(e) => {
            e.stopPropagation();
            setIsOpen(!isOpen);
          }}
        >
          <i
            className={`ri-${
              isOpen ? "close-line md:hidden" : "menu-line md:hidden"
            } text-2xl`}
          ></i>
        </button>
      </div>

      {/* Dropdown Menu (visible only when isOpen is true, below md) */}
      {isOpen && (
        <div className="absolute top-16 right-0 left-0 h-screen bg-zinc-800 w-full rounded-lg shadow-lg md:hidden">
          <ul className="flex flex-col text-center py-4 space-y-3">
            <li className="hover:text-yellow-400 transition cursor-pointer sm:text-2xl text-start px-3">
              <Link to="/about" onClick={() => setIsOpen(false)}>
                About Us
              </Link>
            </li>
            <li className="hover:text-yellow-400 transition cursor-pointer sm:text-2xl text-start px-3">
              <Link to="/" onClick={() => setIsOpen(false)}>
                How it works
              </Link>
            </li>
            <li className="hover:text-yellow-400 transition cursor-pointer sm:text-2xl text-start px-3">
              <Link to="/our-work" onClick={() => setIsOpen(false)}>
                Our Work
              </Link>
            </li>
            <li className="hover:text-yellow-400 transition cursor-pointer sm:text-2xl text-start px-3">
              <Link to="/pricing" onClick={() => setIsOpen(false)}>
                Pricing
              </Link>
            </li>
            <li className="hover:text-yellow-400 transition cursor-pointer sm:text-2xl text-start px-3">
              <Link to="/reviews" onClick={() => setIsOpen(false)}>
                Reviews
              </Link>
            </li>
          </ul>
        </div>
      )}
    </nav>
  );
};

export default Navbar;
