/* eslint-disable react/prop-types */
import "./ProductCard.css";
import { IoEyeOutline } from "react-icons/io5";
import { FaRegHeart } from "react-icons/fa";
import { Link } from "react-router-dom";
import { useState } from "react";
const ProductCard = ({ item }) => {
  const [selectImage, setSelectImage] = useState(
    item?.available_colors[0]?.image
  );
  console.log(item?.available_colors);
  return (
    <div className="group ">
      <div>
        <div className="relative cursor-pointer overflow-hidden">
          <Link to={`/product/${item._id}`}>
            <div>
              <img
                className="rounded-lg transition-opacity duration-500 opacity-100 group-hover:opacity-0"
                src={item?.available_colors[1]?.image}
                alt=""
              />
              <img
                className="rounded-lg absolute top-0 left-0 transition-opacity duration-500 opacity-0 group-hover:opacity-100 "
                src={selectImage}
                alt=""
              />
            </div>
          </Link>

          {/* Add to Cart Button (Hidden initially, appears on hover) */}
          <button className="bg-white absolute bottom-5 left-6 w-5/6 py-2 rounded-2xl transition-all  duration-300 opacity-0 translate-y-5 group-hover:opacity-100 group-hover:translate-y-0 hover:bg-black hover:text-white">
            ADD TO CART
          </button>

          {/* Icons (Hidden initially, appear on hover) */}
          <div className="absolute top-6 right-3 translate-x-5  duration-300 group-hover:translate-x-0 opacity-0 group-hover:opacity-100 transition-all">
            <p className="bg-white p-2 rounded-full  cursor-pointer transition-all hover:bg-black hover:text-white">
              <FaRegHeart className="size-6"></FaRegHeart>
            </p>
            <Link to={`/product/${item._id}`}>
              <p className="bg-white p-2 mt-3 rounded-full cursor-pointer transition-all hover:bg-black hover:text-white">
                <IoEyeOutline className="size-6"></IoEyeOutline>
              </p>
            </Link>
          </div>
        </div>

        {/* Product Info */}
        <div>
          <p className="mt-4 font-semibold text-sm">{item.name}</p>
          <div className="flex gap-3">
            <p className="line-through">${item.original_price}</p>
            <p>${item.discount_price}</p>
          </div>
        </div>
      </div>
      <div className="mt-2">
        {/* <span className="text-sm font-medium">Colors: </span> */}
        {item?.available_colors?.map((color) => (
          <span
            key={color.name}
            className="mr-1 rounded-full border-2 border-gray-200 px-3 cursor-pointer hover:border-red-600"
            style={{ backgroundColor: color.hex }}
            onMouseEnter={() => setSelectImage(color?.image)}
          ></span>
        ))}
      </div>
    </div>
  );
};

export default ProductCard;
