/* eslint-disable react-hooks/exhaustive-deps */
import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import useGetPublice from "../hooks/useGetPublice";
import { CiHeart } from "react-icons/ci";
import { LuEye } from "react-icons/lu";

const ProductDetails = () => {
  const [product, setProduct] = useState();
  const [mainImage, setMainImage] = useState();
  const [selectedColor, setSelectedColor] = useState();
  const [size, setSize] = useState("");
  const [quen, setQuen] = useState(1);
  console.log(size);

  const id = useParams();

  const handleDecreaseQuentity = () => {
    if (quen > 1) {
      setQuen(quen - 1);
    }
  };
  const handleIncreaseQuentity = () => {
    setQuen(quen + 1);
  };

  const publiceInstance = useGetPublice();

  useEffect(() => {
    publiceInstance.get(`/products/${id.id}`).then((res) => {
      setProduct(res.data);
      setMainImage(res.data.available_colors[0]?.image);
      setSelectedColor(res.data.available_colors[0]?.name);
    });
  }, []);

  return (
    <>
      {" "}
      <div className="max-w-7xl mx-auto grid md:grid-cols-2 my-20 gap-10 px-5">
        <div className="grid grid-cols-5 gap-4">
          <div className="col-span-1 space-y-5">
            {product?.available_colors?.map((ig) => (
              <img
                onClick={() => setMainImage(ig?.image)}
                key={ig.name}
                className={`rounded-md cursor-pointer border hover:border-red-500 ${
                  mainImage === ig.image ? "border-red-600 border-2" : ""
                }`}
                src={ig.image}
                alt=""
              />
            ))}
          </div>
          <div className="col-span-4">
            <img
              className="rounded-md"
              src={mainImage ? mainImage : product?.images[3]}
              alt=""
            />
          </div>
        </div>
        <div>
          <p className="text-gray-600">{product?.category}</p>
          <h1 className="text-4xl my-3">{product?.name}</h1>
          <p className="text-black text-2xl my-">
            {"★".repeat(Math.floor(product?.rating || 0))}
            {"☆".repeat(5 - Math.floor(product?.rating || 0))}{" "}
            <span className="text-sm my-2">
              ( {product?.reviews.length} Reviews)
            </span>
          </p>
          <div className="flex gap-5 my-3 items-center">
            <p className="text-2xl font-semibold">${product?.original_price}</p>
            <p className="line-through">{product?.discount_price}</p>
          </div>
          <p className="my-3 text-xl">{product?.description}</p>
          <p className="flex items-center gap-3 my-3">
            <span>
              <LuEye></LuEye>
            </span>
            28 people are viewing this right now
          </p>
          <hr />
          <div className="mt-5">
            <p className="text-sm font-medium my-4">
              Colors: <span className="font-semibold">{selectedColor}</span>
            </p>
            <div className="flex space-x-2 mt-2">
              {product?.available_colors.map((color) => (
                <button
                  key={color.name}
                  className={`w-8 h-8 rounded-full border-2 ${
                    selectedColor === color.name
                      ? "border-red-600"
                      : "border-transparent"
                  }`}
                  style={{ backgroundColor: color.hex }}
                  // onClick={() => setSelectedColor(color.name)}
                  onMouseEnter={() => {
                    setMainImage(color.image);
                    setSelectedColor(color.name);
                  }}
                ></button>
              ))}
            </div>
            {/* size section */}
            <h1 className="mt-5">selected size: {size}</h1>
            <div className="flex gap-5 mt-3">
              {product?.sizes.map((siz) => (
                <p
                  className={`border px-4 py-2 rounded-full cursor-pointer hover:border-black ${
                    size === siz ? "bg-black text-white" : ""
                  }`}
                  key={siz}
                  onClick={() => setSize(siz)}
                >
                  {siz}
                </p>
              ))}
            </div>
            {/* Quentity section */}
            <div className="mt-5">
              <h1>Quantity:</h1>
              <div className="flex mt-3">
                <div></div>
                <div className="flex gap-8 border px-5 py-2">
                  <p
                    className="cursor-pointer"
                    onClick={handleDecreaseQuentity}
                  >
                    -
                  </p>
                  <p>{quen}</p>
                  <p
                    className="cursor-pointer"
                    onClick={handleIncreaseQuentity}
                  >
                    +
                  </p>
                </div>
              </div>
            </div>
            <div className="flex gap-4 mt-5">
              <button className="w-full border py-3 rounded-2xl bg-black text-white transition-all hover:bg-red-700 ">
                Add to cart -$
              </button>
              <button className="border px-3 rounded-full transition-all hover:bg-black hover:text-white">
                <span>
                  <CiHeart className="size-8"></CiHeart>
                </span>
              </button>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default ProductDetails;
