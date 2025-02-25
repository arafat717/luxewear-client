import { FaArrowRightArrowLeft } from "react-icons/fa6";
import { TfiHeadphoneAlt } from "react-icons/tfi";
import { MdOutlineVerified } from "react-icons/md";
import { BsBusFrontFill } from "react-icons/bs";

const OurShipping = () => {
  return (
    <div className="border-b">
      <div className="max-w-7xl mx-auto grid md:grid-cols-4 gap-5 items-center justify-center my-20 ">
        <div className="flex items-start gap-4">
          <div className="border-2 p-5 rounded-full">
            <span>
              <FaArrowRightArrowLeft className="size-6 "></FaArrowRightArrowLeft>
            </span>
          </div>
          <div>
            <h1 className="text-2xl mb-2 font-semibold">14-Day Returns</h1>
            <p>Risk-free shopping with easy returns.</p>
          </div>
        </div>
        <div className="flex items-start gap-4">
          <div className="border-2 p-5 rounded-full">
            <span>
              <BsBusFrontFill className="size-6"></BsBusFrontFill>
            </span>
          </div>
          <div>
            <h1 className="text-2xl mb-2 font-semibold">Free Shipping</h1>
            <p>No extra costs, just the price you see.</p>
          </div>
        </div>
        <div className="flex items-start gap-4">
          <div className="border-2 p-5 rounded-full">
            <span>
              <TfiHeadphoneAlt className="size-6"></TfiHeadphoneAlt>
            </span>
          </div>
          <div>
            <h1 className="text-2xl mb-2 font-semibold">24/7 Support</h1>
            <p>24/7 Support, always here just for you.</p>
          </div>
        </div>
        <div className="flex items-start gap-4">
          <div className="border-2 p-5 rounded-full">
            <span>
              <MdOutlineVerified className="size-6"></MdOutlineVerified>
            </span>
          </div>
          <div>
            <h1 className="text-2xl mb-2 font-semibold">Member Discounts</h1>
            <p>Special prices for our loyal customers.</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default OurShipping;
