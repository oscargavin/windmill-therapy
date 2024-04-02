import { Link } from "react-router-dom";
import React, { useState, useEffect, useCallback } from "react"; // Import useCallback

function Nav() {
  const [lastScrollY, setLastScrollY] = useState(0);
  const [navbarHidden, setNavbarHidden] = useState(false);

  // Memoize controlNavbar using useCallback
  const controlNavbar = useCallback(() => {
    if (typeof window !== "undefined") {
      // Scrolling down
      if (window.scrollY > lastScrollY) {
        setNavbarHidden(true);
      } else {
        // Scrolling up
        setNavbarHidden(false);
      }
      setLastScrollY(window.scrollY);
    }
  }, [lastScrollY]); // lastScrollY is a dependency of controlNavbar

  useEffect(() => {
    window.addEventListener("scroll", controlNavbar);

    return () => {
      window.removeEventListener("scroll", controlNavbar);
    };
  }, [controlNavbar]); // controlNavbar is now stable and can be a dependency
  return (
    <div className={`navbar ${navbarHidden ? "navbar-hidden" : ""}`}>
      <div className="navbar backdrop-blur-lg bg-white/50 rounded-lg drop-shadow-lg">
        <div className="navbar-start">
          <div className="dropdown z-50">
            <div tabIndex={0} role="button" className="btn btn-ghost lg:hidden">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-5 w-5"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M4 6h16M4 12h8m-8 6h16"
                />
              </svg>
            </div>
            <ul
              tabIndex={0}
              className="menu menu-sm z-50 dropdown-content mt-3 p-2 shadow bg-gray-50 text-gray-700 rounded-sm w-52 space-y-2 font-roboto"
            >
              <Link to="/">
                <li className="text-gray-700">Home</li>
              </Link>

              <Link to="/services">
                <li className="text-gray-700">Services</li>
              </Link>

              <Link to="/about">
                <li className="text-gray-700">About</li>
              </Link>
            </ul>
          </div>
          <Link className="flex flex-row items-center" to="/">
            <Link to="/" className="w-full">
              <img src="/logo.png" className="w-12" alt="logo" />
            </Link>
            <p className="btn btn-ghost font-pacifico text-gray-700 hidden md:flex text-2xl">
              Windmill Hypnotherapy
            </p>
          </Link>
        </div>
        <div className="navbar-center hidden lg:flex">
          <ul className="menu menu-horizontal px-1 text-xl md:space-x-6">
            <Link to="/">
              <li className="text-gray-700 font-messiri font-light">Home</li>
            </Link>

            <Link to="/services">
              <li className="text-gray-700 font-messiri font-light">
                Services
              </li>
            </Link>

            <Link to="/about">
              <li className="text-gray-700 font-messiri font-light">About</li>
            </Link>
          </ul>
        </div>
        <div className="navbar-end">
          <Link
            to="/contact"
            className="btn btn-accent font-messiri font-light text-lg border-none drop-shadow-md bg-cyan-400 hover:bg-cyan-700 hover:text-gray-100 transition duration-300 ease-in-out"
          >
            Contact
          </Link>
        </div>
      </div>
    </div>
  );
}

export default Nav;
