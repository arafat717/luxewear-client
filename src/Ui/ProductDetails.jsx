/* eslint-disable react-hooks/exhaustive-deps */
import { useContext, useEffect, useState } from "react";
import { useNavigate, useParams } from "react-router-dom";
import useGetPublice from "../hooks/useGetPublice";
import { CiHeart } from "react-icons/ci";
import { LuEye } from "react-icons/lu";
import ProductCard from "./ProductCard";
import { AuthContext } from "../Provider/AuthProvider";
import useCart from "../hooks/useCart";
import Swal from "sweetalert2";

const ProductDetails = () => {
  const [product, setProduct] = useState("");
  console.log(product);
  const [mainImage, setMainImage] = useState();
  const [selectedColor, setSelectedColor] = useState();
  const [size, setSize] = useState("S");
  const [quen, setQuen] = useState(1);
  const [relatedProducts, setRelatedProducts] = useState([]);
  const { user } = useContext(AuthContext);
  const navigate = useNavigate();

  // console.log(relatedProducts);

  const totalPrice = quen * product?.discount_price;
  const grandTotal = totalPrice.toFixed(2);
  // console.log(totalPrice);

  const { id } = useParams();
  console.log(id);

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
    publiceInstance.get(`/products/${id}`).then((res) => {
      setProduct(res.data);
      setMainImage(res.data?.available_colors[0]?.image);
      setSelectedColor(res.data?.available_colors[0]?.name);
    });
  }, [id, publiceInstance]);

  useEffect(() => {
    publiceInstance
      .get(`/products`)
      .then((res) => {
        setRelatedProducts(res.data);
      })
      .catch((err) => {
        console.log(err);
      });
  }, []);

  const [, refetch] = useCart();
  const handlecart = async () => {
    if (user && user.email) {
      const cartinfo = {
        email: user.email,
        name: product.name,
        singlePrice: product.discount_price,
        price: grandTotal,
        quentity: quen,
        image: product.available_colors,
        size: size,
        color: selectedColor,
      };
      await publiceInstance.post("/cart/add", cartinfo).then((res) => {
        if (res.data.insertedId) {
          Swal.fire({
            position: "top-end",
            icon: "success",
            title: "Your work has been saved",
            showConfirmButton: false,
            timer: 1500,
          });
          refetch();
        }
      });
      console.log(cartinfo);
    } else {
      Swal.fire({
        title: "Please Login Before Add To Cart",
        text: "You won't be able to add product without login!",
        icon: "",
        showCancelButton: true,
        confirmButtonColor: "#3085d6",
        cancelButtonColor: "#d33",
        confirmButtonText: "Yes, Login!",
      }).then((result) => {
        if (result.isConfirmed) {
          return navigate("/login");
        }
      });
    }
  };

  return (
    <>
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
              src={mainImage ? mainImage : product?.available_colors?.images[3]}
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
              ( {product?.reviews?.length} Reviews)
            </span>
          </p>
          <div className="flex gap-5 my-3 items-center">
            <p className="text-2xl font-semibold">${product?.discount_price}</p>
            <p className="line-through">{product?.original_price}</p>
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
              {product?.available_colors?.map((color) => (
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
              {product?.sizes?.map((siz) => (
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
              <div className="flex mt-3 text-2xl">
                <div></div>
                <div className="flex gap-8 border-2 border-gray-200 px-5 py-2 rounded-2xl">
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
              <button
                onClick={handlecart}
                className="w-full border py-3 rounded-2xl bg-black text-white transition-all hover:bg-red-700 "
              >
                Add to cart -$ {grandTotal}
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
      {/* reviews sections */}
      <div className="max-w-7xl mx-auto border p-10 rounded-xl mb-10">
        <p className="text-6xl">{product?.rating}</p>
        <p className="text-black text-2xl my-">
          {"★".repeat(Math.floor(product?.rating || 0))}
          {"☆".repeat(5 - Math.floor(product?.rating || 0))}{" "}
          <span className="text-sm my-2">
            ( {product?.reviews?.length} Reviews)
          </span>
        </p>
        <h1 className="mt-14 text-2xl">{product?.reviews?.length} Comments</h1>
        <div className="mt-10 ">
          {product?.reviews?.map((rv, index) => (
            <div key={index}>
              <div className="flex items-center gap-4">
                <div>
                  <img
                    className="w-12 h-12 rounded-full"
                    src={
                      rv?.userImage
                        ? rv.userImage
                        : "https://img.freepik.com/free-photo/portrait-smiling-charming-young-man-grey-t-shirt-standing-against-plain-background_23-2148213406.jpg?t=st=1739684770~exp=1739688370~hmac=3ef376773c2417dd77e81b1dfd8ec54b18219192a29a489b1fc2bb72cc45d8c2&w=740"
                    }
                    alt=""
                  />
                </div>
                <div>
                  <p>{rv?.user}</p>
                  <p>{rv?.date}</p>
                </div>
              </div>
              <p className="mt-2">{rv?.comment}</p>
            </div>
          ))}
        </div>
      </div>
      <div className="max-w-7xl mx-auto">
        <h1 className="text-center text-3xl underline">Ralated Products</h1>
        <div className="grid md:grid-cols-4 grid-cols-2 gap-8 mt-10 mb-20 px-5">
          {relatedProducts.slice(2, 6).map((item) => (
            <ProductCard key={item._id} item={item}></ProductCard>
          ))}
        </div>
      </div>
    </>
  );
};

export default ProductDetails;
