import { Link } from "react-router-dom";

function Nav() {
  return (
    <>
      <div className="navbar bg-gray-50 bg-opacity-45 drop-shadow-lg">
        <div className="navbar-start">
          <div className="dropdown">
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
              className="menu menu-sm dropdown-content mt-3 z-[0] p-2 shadow bg-gray-50 text-gray-700 rounded-sm w-52"
            >
              <Link to="/">
                <li className="text-gray-700">
                  <a>Home</a>
                </li>
              </Link>

              <Link to="/services">
                <li className="text-gray-700">
                  <a>Services</a>
                </li>
              </Link>

              <Link to="/about">
                <li className="text-gray-700">
                  <a>About Us</a>
                </li>
              </Link>
            </ul>
          </div>
          <Link className="flex flex-row items-center" to="/">
            <img src="/logo.png" className="w-20" alt="logo" />
            <a className="btn btn-ghost font-pacifico text-gray-700 hidden md:flex text-2xl">
              Windmill Hypnotherapy
            </a>
          </Link>
        </div>
        <div className="navbar-center hidden lg:flex">
          <ul className="menu menu-horizontal px-1 text-xl">
            <Link to="/">
              <li className="text-gray-700">
                <a>Home</a>
              </li>
            </Link>

            <Link to="/services">
              <li className="text-gray-700">
                <a>Services</a>
              </li>
            </Link>

            <Link to="/about">
              <li className="text-gray-700">
                <a>About Us</a>
              </li>
            </Link>
          </ul>
        </div>
        <div className="navbar-end">
          <Link to="/contact" className="text-gray-50">
            <a className="btn btn-accent font-normal border-none drop-shadow-md bg-cyan-400 hover:bg-cyan-700">
              Contact
            </a>
          </Link>
        </div>
      </div>
    </>
  );
}

export default Nav;
