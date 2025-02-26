import { useState } from "react";
import { NavLink, Outlet } from "react-router-dom";
import { FiMenu, FiX } from "react-icons/fi";
import { MdDashboardCustomize } from "react-icons/md";
import { IoHome } from "react-icons/io5";
import { FaShop } from "react-icons/fa6";
import { FaBlogger } from "react-icons/fa";
import { FcAbout } from "react-icons/fc";
import { RiContactsBook3Fill } from "react-icons/ri";
import { MdLogout } from "react-icons/md";
import { RiAccountCircleFill } from "react-icons/ri";
import { FaShoppingBag } from "react-icons/fa";
import { FaLocationDot } from "react-icons/fa6";
import { IoCart } from "react-icons/io5";
import useCart from "../hooks/useCart";

const MyAccount = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [cart] = useCart();

  return (
    <div className="flex h-screen">
      {/* Sidebar */}
      <aside
        className={`bg-gray-900 text-white p-5 fixed h-full transition-all duration-300 ${
          isOpen ? "w-64 left-0" : "w-0 -left-64 md:w-64 md:left-0"
        }`}
      >
        <div className="flex justify-between items-start mb-5">
          <h2 className="text-2xl font-bold flex items-center gap-2 pb-5 ">
            <span>
              <MdDashboardCustomize></MdDashboardCustomize>
            </span>
            <p> Dashboard</p>
          </h2>
          <button
            className="md:hidden text-white mt-2"
            onClick={() => setIsOpen(false)}
          >
            <FiX size={24} />
          </button>
        </div>

        <nav className="space-y-4">
          <NavLink
            to=""
            end
            className={({ isActive }) =>
              ` px-4 py-2 rounded-lg flex items-center gap-2 ${
                isActive ? "bg-blue-600" : "hover:bg-blue-600"
              }`
            }
          >
            <span>
              <RiAccountCircleFill className="size-5"></RiAccountCircleFill>
            </span>
            <p>My Account</p>
          </NavLink>
          <NavLink
            to="/myaccount/orders"
            className={({ isActive }) =>
              ` px-4 py-2 rounded-lg flex items-center gap-2 ${
                isActive ? "bg-blue-600" : "hover:bg-blue-600"
              }`
            }
          >
            <span>
              <FaShoppingBag className="size-5"></FaShoppingBag>
            </span>
            <p>My Orders</p>
          </NavLink>
          <NavLink
            to="/myaccount/address"
            className={({ isActive }) =>
              ` px-4 py-2 rounded-lg flex items-center gap-2 ${
                isActive ? "bg-blue-600" : "hover:bg-blue-600"
              }`
            }
          >
            <span>
              <FaLocationDot className="size-5"></FaLocationDot>
            </span>
            <p>My Wish-list</p>
          </NavLink>
          <NavLink
            to="/myaccount/cart"
            className={({ isActive }) =>
              ` px-4 py-2 rounded-lg flex items-center gap-2 ${
                isActive ? "bg-blue-600" : "hover:bg-blue-600"
              }`
            }
          >
            <span>
              <IoCart className="size-5"></IoCart>
            </span>
            <p>
              Cart
              <span className="bg-red-700 px-1 ml-1 rounded-full">
                {cart?.length}
              </span>
            </p>
          </NavLink>

          <hr />
          <NavLink
            to="/"
            className={({ isActive }) =>
              ` px-4 py-2 rounded-lg flex items-center gap-2 ${
                isActive ? "bg-blue-600" : "hover:bg-blue-600"
              }`
            }
          >
            <span>
              <IoHome className="size-5"></IoHome>
            </span>
            <p>Home</p>
          </NavLink>
          <NavLink
            to="/shop"
            className={({ isActive }) =>
              ` px-4 py-2 rounded-lg flex items-center gap-2 ${
                isActive ? "bg-blue-600" : "hover:bg-blue-600"
              }`
            }
          >
            <span>
              <FaShop className="size-5"></FaShop>
            </span>
            <p>Shop</p>
          </NavLink>
          <NavLink
            to="/blog"
            className={({ isActive }) =>
              ` px-4 py-2 rounded-lg flex items-center gap-2 ${
                isActive ? "bg-blue-600" : "hover:bg-blue-600"
              }`
            }
          >
            <span>
              <FaBlogger className="size-5"></FaBlogger>
            </span>
            <p>Blog</p>
          </NavLink>
          <NavLink
            to="/aboutus"
            className={({ isActive }) =>
              ` px-4 py-2 rounded-lg flex items-center gap-2 ${
                isActive ? "bg-blue-600" : "hover:bg-blue-600"
              }`
            }
          >
            <span>
              <FcAbout className="size-5 text-white"></FcAbout>
            </span>
            <p>About Us</p>
          </NavLink>
          <NavLink
            to="/contact"
            className={({ isActive }) =>
              ` px-4 py-2 rounded-lg flex items-center gap-2 ${
                isActive ? "bg-blue-600" : "hover:bg-blue-600"
              }`
            }
          >
            <span>
              <RiContactsBook3Fill className="size-5"></RiContactsBook3Fill>
            </span>
            <p> Contact</p>
          </NavLink>
          <NavLink
            to="/blog"
            className={({ isActive }) =>
              ` px-4 py-2 rounded-lg flex items-center gap-2 ${
                isActive ? "bg-blue-600" : "hover:bg-blue-600"
              }`
            }
          >
            <span>
              <MdLogout className="size-5"></MdLogout>
            </span>
            <p>Logout</p>
          </NavLink>
        </nav>
      </aside>

      {/* Main Content */}
      <main className="flex-1 p-6 w-full md:ml-64">
        {/* Mobile menu button */}
        <button
          className={`md:hidden ${
            isOpen ? "hidden" : ""
          } bg-gray-800 text-white p-2 rounded-full fixed top-4 left-4`}
          onClick={() => setIsOpen(true)}
        >
          <FiMenu size={24} />
        </button>
        <Outlet /> {/* This renders the nested route content */}
      </main>
    </div>
  );
};

export default MyAccount;
