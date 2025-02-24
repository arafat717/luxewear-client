import { Link, NavLink } from "react-router-dom";
import { FiSearch } from "react-icons/fi";
import { GoPerson } from "react-icons/go";
import { IoMdHeartEmpty } from "react-icons/io";
import { BsBag } from "react-icons/bs";
import { useContext, useState } from "react";
import { FaBars, FaTimes } from "react-icons/fa";
import { AuthContext } from "../../Provider/AuthProvider";
import useCart from "../../hooks/useCart";

const Navbar = () => {
  const { user, handleLogOut } = useContext(AuthContext);
  const [isOpen, setIsOpen] = useState(false);
  const [cart] = useCart();

  return (
    <div className="sticky top-0 bg-white z-50">
      <div className="flex justify-between items-center max-w-7xl mx-auto py-5 px-5">
        {/* logo */}
        <Link to="/">
          <div className="text-3xl font-semibold lobster-two-bold-italic md:pl-0 pl-5">
            LuxeWear
          </div>
        </Link>
        {/* desktop menu */}
        <div className=" hidden md:flex justify-center items-center list-none gap-7  font-semibold text-black">
          <NavLink
            to="/"
            className={({ isActive }) => ` ${isActive ? "text-red-700" : ""}`}
          >
            <li>Home</li>
          </NavLink>
          <NavLink
            to="/shop"
            className={({ isActive }) => ` ${isActive ? "text-red-700" : ""}`}
          >
            <li>Shop</li>
          </NavLink>
          {/* <NavLink>
            <li>Products</li>
          </NavLink> */}
          <NavLink
            to="/blog"
            className={({ isActive }) => `${isActive ? "text-red-700" : ""}`}
          >
            <li>Blog</li>
          </NavLink>
          <NavLink to="/aboutus">
            <li>About Us</li>
          </NavLink>
          <NavLink>
            <li>Contact Us</li>
          </NavLink>
        </div>
        <div className="hidden md:flex justify-center items-center gap-5 text-2xl">
          {user ? (
            <button
              onClick={handleLogOut}
              className="bg-gray-50 border border-gray-400 px-3 py-3"
            >
              <p className="flex items-center gap-2">
                <span className="text-sm">Log Out</span>
              </p>
            </button>
          ) : (
            <button className="bg-gray-50 border border-gray-400 px-3 py-3">
              <Link to="/login">
                <p className="flex items-center gap-2">
                  <GoPerson className="size-5"></GoPerson>
                  <span className="text-sm">Login</span>
                </p>
              </Link>
            </button>
          )}
          <Link>
            <p>
              <FiSearch></FiSearch>
            </p>
          </Link>
          {/* <p>
            <GoPerson></GoPerson>
          </p> */}
          <Link to="/wishlist">
            <p>
              <IoMdHeartEmpty></IoMdHeartEmpty>
            </p>
          </Link>
          <Link to="/myorder">
            <div className="relative">
              <p className="absolute -top-5 -right-2">
                <span className=" bg-red-600 rounded-full px-2 pb-1 text-[12px] text-white">
                  {cart?.length}
                </span>
              </p>
              <BsBag></BsBag>
            </div>
          </Link>
        </div>
        {/* mobile menu button */}
        <div className="md:hidden pr-5">
          <button onClick={() => setIsOpen(!isOpen)} className="text-gray-700">
            {isOpen ? <FaTimes size={24} /> : <FaBars size={24} />}
          </button>
        </div>
      </div>

      {/* mobile menu */}
      {isOpen && (
        <div className="md:hidden fixed z-10 w-full bg-white border-t shadow-md px-5 pb-10">
          <div className="flex flex-col  items-start list-none gap-5 py-5  font-semibold text-black">
            <NavLink
              to="/"
              onClick={() => setIsOpen(false)}
              className="border-b-2 w-full pb-4"
            >
              <li>Home</li>
            </NavLink>
            <NavLink
              to="/shop"
              onClick={() => setIsOpen(false)}
              className="border-b-2 w-full pb-4"
            >
              <li>Shop</li>
            </NavLink>

            <NavLink
              to="/blog"
              onClick={() => setIsOpen(false)}
              className="border-b-2 w-full pb-4"
            >
              <li>Blog</li>
            </NavLink>
            <NavLink
              onClick={() => setIsOpen(false)}
              className="border-b-2 w-full pb-4"
            >
              <li>About Us</li>
            </NavLink>
            <NavLink onClick={() => setIsOpen(false)}>
              <li>Contact Us</li>
            </NavLink>
          </div>

          <div className="flex gap-5">
            <button
              onClick={() => setIsOpen(false)}
              className="bg-gray-50 border border-gray-400 px-3 py-3"
            >
              <Link to="/myorder">
                <div className="relative">
                  <p className="absolute -top-5 -right-2">
                    <span className=" bg-red-600 rounded-full px-2 pb-1 text-[12px] text-white">
                      {cart?.length}
                    </span>
                  </p>
                  <BsBag></BsBag>
                </div>
              </Link>
            </button>

            <button
              onClick={() => setIsOpen(false)}
              className="bg-gray-50 border border-gray-400 px-3 py-3"
            >
              {" "}
              <Link to="/wishlist">
                <p className="flex items-center gap-2">
                  <IoMdHeartEmpty className="size-7"></IoMdHeartEmpty>
                  <span>Wishlist</span>
                </p>
              </Link>
            </button>
            <button
              onClick={() => setIsOpen(false)}
              className="bg-gray-50 border border-gray-400 px-3 py-3"
            >
              {" "}
              <Link to="login">
                <p className="flex items-center gap-2">
                  <GoPerson className="size-7"></GoPerson>
                  <span>Login</span>
                </p>
              </Link>
            </button>
          </div>
        </div>
      )}
    </div>
  );
};

export default Navbar;
