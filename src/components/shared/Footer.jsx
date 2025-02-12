import { MdOutlineMail } from "react-icons/md";
import { HiOutlinePhone } from "react-icons/hi";
import { FaFacebookF } from "react-icons/fa";
import { FaXTwitter } from "react-icons/fa6";
import { FaInstagram } from "react-icons/fa";
import { FaTiktok } from "react-icons/fa";
import { Link } from "react-router-dom";
import { MdArrowOutward } from "react-icons/md";

const Footer = () => {
  return (
    <div className="border-t-2 ">
      <div className="max-w-7xl mx-auto px-5 ">
        <div className="grid md:grid-cols-6 gap-6 my-20">
          <div className="md:col-span-2 flex flex-col gap-3">
            <h1 className="text-3xl font-semibold lobster-two-bold-italic">
              LuxeWear
            </h1>
            <p className="text-xl">549 Oak St.Crystal Lake, IL 60014</p>
            <div className="flex items-center gap-2">
              <p>
                <MdOutlineMail></MdOutlineMail>
              </p>
              <p>themesflat@gmail.com</p>
            </div>
            <div className="flex items-center gap-2">
              <p>
                <HiOutlinePhone></HiOutlinePhone>
              </p>
              <p>315-666-6688</p>
            </div>
            <div className="flex items-center gap-3">
              <p>
                <span>
                  <FaFacebookF className="border border-black size-11 p-2 rounded-full cursor-pointer hover:bg-sky-700 hover:text-white hover:border-none"></FaFacebookF>
                </span>
              </p>
              <p>
                <span>
                  <FaXTwitter className="border border-black size-11 p-2 rounded-full cursor-pointer hover:bg-gray-700 hover:text-white hover:border-none"></FaXTwitter>
                </span>
              </p>
              <p>
                <span>
                  <FaInstagram className="border border-black size-11 p-2 rounded-full cursor-pointer hover:bg-orange-700 hover:text-white hover:border-none"></FaInstagram>
                </span>
              </p>
              <p>
                <span>
                  <FaTiktok className="border border-black size-11 p-2 rounded-full cursor-pointer hover:bg-sky-700 hover:text-white hover:border-none"></FaTiktok>
                </span>
              </p>
            </div>
          </div>
          <div className="md:col-span-1">
            <h1 className=" font-semibold mb-5">Information</h1>
            <ul>
              <Link>
                <li className="hover:text-red-500 mb-2">About us</li>
              </Link>
              <Link>
                <li className="hover:text-red-500 mb-2">Our Stories</li>
              </Link>
              <Link>
                <li className="hover:text-red-500 mb-2">Size Guide</li>
              </Link>
              <Link>
                <li className="hover:text-red-500 mb-2">Contact us</li>
              </Link>
              <Link>
                <li className="hover:text-red-500 mb-2">Career</li>
              </Link>
              <Link>
                <li className="hover:text-red-500 mb-2">My Account</li>
              </Link>
            </ul>
          </div>
          <div className="md:col-span-1">
            <h1 className=" font-semibold mb-5">Customer Services</h1>
            <ul>
              <Link>
                <li className="hover:text-red-500 mb-2">Shipping</li>
              </Link>
              <Link>
                <li className="hover:text-red-500 mb-2">Return & Refund</li>
              </Link>
              <Link>
                <li className="hover:text-red-500 mb-2">Privacy Policy</li>
              </Link>
              <Link>
                <li className="hover:text-red-500 mb-2">Terms & Conditions</li>
              </Link>
              <Link>
                <li className="hover:text-red-500 mb-2">Orders FAQs</li>
              </Link>
              <Link>
                <li className="hover:text-red-500 mb-2">My Wishlist</li>
              </Link>
            </ul>
          </div>
          <div className="md:col-span-2">
            <h1 className=" font-semibold mb-5">Newletter</h1>
            <p>
              Sign up for our newsletter and get 10% off your first purchase
            </p>
            <div className="relative">
              <input
                className="border mt-6 w-full pl-3 py-[14px] rounded-3xl border-black"
                type="email"
                name=""
                id=""
                placeholder="Enter your e-mail"
              />
              <p className="absolute top-[29px] right-[7px]">
                <span>
                  <MdArrowOutward className="border border-black bg-black text-white size-11 p-2 rounded-full cursor-pointer hover:bg-white hover:text-black"></MdArrowOutward>
                </span>
              </p>
            </div>
          </div>
        </div>
        <div>
          <hr />
          <div className="md:flex  gap-4 items-center justify-between py-3">
            <div className="md:mb-0 mb-5">
              <p>©2025 Modave. All Rights Reserved.</p>
            </div>
            <div className="flex items-center gap-1 md:gap-3">
              <p>Payment:</p>
              <img
                className="w-10"
                src="https://modavenextjs.vercel.app/images/payment/img-1.png"
                alt=""
              />
              <img
                className="w-10"
                src="https://modavenextjs.vercel.app/images/payment/img-2.png"
                alt=""
              />
              <img
                className="w-10"
                src="https://modavenextjs.vercel.app/images/payment/img-3.png"
                alt=""
              />
              <img
                className="w-10"
                src="https://modavenextjs.vercel.app/images/payment/img-4.png"
                alt=""
              />
              <img
                className="w-10"
                src="https://modavenextjs.vercel.app/images/payment/img-5.png"
                alt=""
              />
              <img
                className="w-10"
                src="https://modavenextjs.vercel.app/images/payment/img-6.png"
                alt=""
              />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Footer;
