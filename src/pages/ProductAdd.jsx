/* eslint-disable no-unused-vars */
import { useState } from "react";
import axios from "axios";
import colorNamer from "color-namer";
import useAxiosSecure from "../hooks/useAxiosSecure";

const ProductAdd = () => {
  const axiosSecure = useAxiosSecure();
  const [product, setProduct] = useState({
    id: "",
    name: "",
    brand: "",
    category: "",
    description: "",
    original_price: "",
    discount_price: "",
    currency: "USD",
    best_seller: false,
    on_sale: false,
    isNewArrival: false,
    available_colors: [],
    sizes: [],
    stock: {},
  });

  const [colorName, setColorName] = useState("");
  const [colorImage, setColorImage] = useState(null);
  const [sizes, setSizes] = useState([]);
  const [stock, setStock] = useState({});

  const handleColorNameChange = (e) => {
    setColorName(e.target.value);
  };

  const handleImageUpload = async (file) => {
    if (!file) return;

    const formData = new FormData();
    formData.append("image", file);

    try {
      const response = await axios.post(
        `https://api.imgbb.com/1/upload?key=${
          import.meta.env.VITE_IMG_HOSTING_KEY
        }`,
        formData
      );
      return response.data.data.url;
    } catch (error) {
      console.error("Error uploading image:", error);
      return null;
    }
  };

  const addColor = async () => {
    if (!colorName) return;

    const hexCode = `#${
      colorNamer(colorName).ntc[0]?.hex.replace("#", "") || "000000"
    }`;

    const imageUrl = colorImage ? await handleImageUpload(colorImage) : "";

    setProduct((prev) => ({
      ...prev,
      available_colors: [
        ...prev.available_colors,
        { name: colorName, hex: hexCode, image: imageUrl },
      ],
    }));

    setColorName("");
    setColorImage(null);
  };

  const addSize = (size) => {
    if (!sizes.includes(size)) {
      setSizes([...sizes, size]);
      setStock({ ...stock, [`${size}`]: 0 });
    }
  };

  const updateStock = (size, quantity) => {
    setStock({ ...stock, [size]: quantity });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const finalData = { ...product, sizes, stock };
    const res = axiosSecure.post(`/product/add`, finalData).then((res) => {
      console.log(res);
    });
  };
  return (
    <div className="max-w-7xl mx-auto">
      <form
        onSubmit={handleSubmit}
        className="p-4 space-y-8 bg-white shadow-md rounded-lg w-full pb-8"
      >
        <h1 className="mt-4 text-center text-2xl font-semibold">Add Product</h1>
        <div className="grid md:grid-cols-2 gap-5">
          <input
            type="text"
            placeholder="Product ID"
            onChange={(e) => setProduct({ ...product, id: e.target.value })}
            className="border p-2 w-full"
          />
          <input
            type="text"
            placeholder="Product Name"
            onChange={(e) => setProduct({ ...product, name: e.target.value })}
            className="border p-2 w-full"
          />
        </div>
        <div className="grid md:grid-cols-2 gap-5">
          <input
            type="text"
            placeholder="Brand"
            onChange={(e) => setProduct({ ...product, brand: e.target.value })}
            className="border p-2 w-full"
          />
          <input
            type="text"
            placeholder="Category"
            onChange={(e) =>
              setProduct({ ...product, category: e.target.value })
            }
            className="border p-2 w-full"
          />
        </div>
        <div>
          <textarea
            placeholder="Description"
            onChange={(e) =>
              setProduct({ ...product, description: e.target.value })
            }
            className="border p-2 w-full"
          ></textarea>
        </div>
        <div className="grid md:grid-cols-2 gap-5">
          <input
            type="number"
            placeholder="Original Price"
            onChange={(e) =>
              setProduct({ ...product, original_price: e.target.value })
            }
            className="border p-2 w-full"
          />
          <input
            type="number"
            placeholder="Discount Price"
            onChange={(e) =>
              setProduct({ ...product, discount_price: e.target.value })
            }
            className="border p-2 w-full"
          />
        </div>
        <div>
          <label className="text-xl font-bold">Available Colors</label>
          <div className="grid md:grid-cols-2 gap-5 mt-2">
            <input
              type="text"
              placeholder="Enter Color Name"
              value={colorName}
              onChange={handleColorNameChange}
              className="border p-2 w-full"
            />
            <div className="flex items-center gap-2">
              <input
                type="file"
                onChange={(e) => setColorImage(e.target.files[0])}
                className="border p-2 w-full"
              />
              <button
                type="button"
                onClick={addColor}
                className="bg-blue-500 text-white px-8 rounded-xl py-3"
              >
                Add
              </button>
            </div>
          </div>
          <ul className="flex items-center gap-3">
            {product.available_colors.map((color, index) => (
              <li
                key={index}
                className="border rounded-2xl bg-gray-300 px-3 p-1 mt-2"
              >
                {color.name} - {color.hex}
              </li>
            ))}
          </ul>
        </div>
        <div>
          <label className="text-xl font-bold">Sizes</label>
          <div className="flex gap-2 mt-3">
            {["S", "M", "L", "XL"].map((size) => (
              <button
                key={size}
                type="button"
                onClick={() => addSize(size)}
                className="border-2 text-black px-4 py-2"
              >
                {size}
              </button>
            ))}
          </div>
          <ul className="flex gap-3 mt-2">
            {sizes.map((size, index) => (
              <li key={index}>
                {size} -
                <input
                  type="number"
                  min="0"
                  placeholder="Stock"
                  onChange={(e) => updateStock(size, e.target.value)}
                  className="border p-1 w-20 ml-2"
                />
              </li>
            ))}
          </ul>
        </div>
        <div className="flex items-center gap-6">
          <div>
            <label>Best Seller</label>
            <input
              type="checkbox"
              onChange={(e) =>
                setProduct({ ...product, best_seller: e.target.checked })
              }
              className="ml-2"
            />
          </div>

          <div>
            <label>On Sale</label>
            <input
              type="checkbox"
              onChange={(e) =>
                setProduct({ ...product, on_sale: e.target.checked })
              }
              className="ml-2"
            />
          </div>

          <div>
            <label>New Arrival</label>
            <input
              type="checkbox"
              onChange={(e) =>
                setProduct({ ...product, isNewArrival: e.target.checked })
              }
              className="ml-2"
            />
          </div>
        </div>
        <button
          type="submit"
          className="bg-purple-500 text-white px-6 py-2 w-full "
        >
          Submit
        </button>
      </form>
    </div>
  );
};

export default ProductAdd;
