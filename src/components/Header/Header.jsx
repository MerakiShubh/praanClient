import { Link, NavLink } from "react-router-dom";
import PraanLogo from "../../assets/praan.svg";

export default function Header() {
  return (
    <header className="shadow sticky z-50 top-0">
      <nav className="bg-white border-gray-200 px-4 lg:px-6 py-2.5">
        <div className="flex flex-wrap justify-between items-center mx-auto max-w-screen-xl">
          <Link to="/" className="flex items-center">
            <img src={PraanLogo} className="mr-3 h-[90px]" alt="Logo" />
          </Link>
          <div className="flex items-center lg:order-2">
            <NavLink
              to="/createuser"
              className="text-white bg-slate-800 hover:bg-slate-600 focus:ring-4 focus:ring-black font-medium rounded-lg text-sm px-4 lg:px-5 py-2 lg:py-2.5 mr-2 focus:outline-none"
            >
              Create User
            </NavLink>
          </div>
          <div
            className="hidden justify-between items-center w-full lg:flex lg:w-auto lg:order-1"
            id="mobile-menu-2"
          >
            <ul className="flex flex-col mt-4 font-medium lg:flex-row lg:space-x-8 lg:mt-0">
              <li>
                <NavLink
                  to="/"
                  className={({ isActive }) =>
                    `block py-2 pr-4 pl-3 duration-200 ${
                      isActive ? "text-black" : "text-gray-500"
                    } border-b border-gray-100 hover:translate-x-2 lg:hover:bg-transparent lg:border-0 hover:text-black lg:p-0`
                  }
                >
                  Dashboard
                </NavLink>
              </li>
              <li>
                <NavLink
                  to="/createuser"
                  className={({ isActive }) =>
                    `block py-2 pr-4 pl-3 duration-200 ${
                      isActive ? "text-black" : "text-gray-500"
                    } border-b border-gray-100 hover:translate-x-2 lg:hover:bg-transparent lg:border-0 hover:text-black lg:p-0`
                  }
                >
                  Create User
                </NavLink>
              </li>

              <li>
                <NavLink
                  to="/adddevice"
                  className={({ isActive }) =>
                    `block py-2 pr-4 pl-3 duration-200 ${
                      isActive ? "text-black" : "text-gray-500"
                    } border-b border-gray-100 hover:translate-x-2 lg:hover:bg-transparent lg:border-0 hover:text-black lg:p-0`
                  }
                >
                  Add Device
                </NavLink>
              </li>
              <li>
                <NavLink
                  to="/about"
                  className={({ isActive }) =>
                    `block py-2 pr-4 pl-3 duration-200 ${
                      isActive ? "text-black" : "text-gray-500"
                    } border-b border-gray-100 hover:translate-x-2 lg:hover:bg-transparent lg:border-0 hover:text-black lg:p-0`
                  }
                >
                  About
                </NavLink>
              </li>
            </ul>
          </div>
        </div>
      </nav>
    </header>
  );
}
