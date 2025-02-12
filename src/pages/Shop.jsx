/* eslint-disable no-unused-vars */
import { useEffect, useState } from "react";
import { Helmet } from "react-helmet";
import useGetPublice from "../hooks/useGetPublice";
import ProductCard from "../Ui/ProductCard";
import PageCover from "../components/shared/PageCover";
import { CiFilter } from "react-icons/ci";
import { IoIosCheckmarkCircleOutline } from "react-icons/io";

const Shop = () => {
  const [products, setProducts] = useState([]);
  const [isOpen, setIsOpen] = useState(false);
  const [sort, setSort] = useState("");

  const publiceInstance = useGetPublice();
  useEffect(() => {
    publiceInstance
      .get(`/products?sort=${sort}`)
      .then((res) => {
        setProducts(res.data);
      })
      .catch((err) => {
        console.log(err);
      });
  }, [sort]);

  return (
    <div>
      <Helmet>
        <title>LuxeWear || Shop</title>
      </Helmet>
      <PageCover title={"Shop"}></PageCover>
      <div className="flex justify-between max-w-7xl mx-auto px-5 mt-20 ">
        <div>
          <button
            onClick={() => setIsOpen(true)}
            className="flex items-center gap-1 border p-2 hover:border-black"
          >
            <span>
              <CiFilter></CiFilter>
            </span>
            Filters
          </button>
        </div>
        <div className="flex gap-2">
          <div className="mt-2">
            <label>Sort by:</label>
          </div>
          <div>
            <select
              className="border p-2 rounded mb-4 w-full"
              onChange={(e) => setSort(e.target.value)}
              value={sort}
            >
              <option value="default">Sort By</option>
              <option value="title_asc">Title A-Z</option>
              <option value="title_desc">Title Z-A</option>
              <option value="price_asc">Price Low to High</option>
              <option value="price_desc">Price High to Low</option>
              <option value="rating_asc">Rating Low to High</option>
              <option value="rating_desc">Rating High to Low</option>
            </select>
          </div>
        </div>
      </div>

      {/* sidebar filter start */}
      <div className="relative">
        {/* Sidebar Overlay */}
        {isOpen && (
          <div
            className={`fixed inset-0 bg-black bg-opacity-50 z-40 
            }`}
            onClick={() => setIsOpen(false)}
          ></div>
        )}

        {/* Sidebar */}
        <div
          className={`fixed top-0 left-0 h-full w-80 md:w-96 bg-white p-5 shadow-lg z-50 transition-transform transform ${
            isOpen ? "translate-x-0" : "-translate-x-full"
          }`}
        >
          {/* Close Button */}
          <button
            onClick={() => setIsOpen(false)}
            className="text-black text-2xl absolute top-4 right-4"
          >
            ×
          </button>

          <h2 className="text-lg font-semibold mb-4">Filters</h2>

          {/* Product Categories */}
          <div className="mb-4">
            <h3 className="font-medium">Product Categories</h3>
            <ul className="space-y-2 text-gray-700">
              <li>Bags (112)</li>
              <li>Booking (32)</li>
              <li>Clothing (42)</li>
              <li>Women (65)</li>
              <li>Men (13)</li>
              <li>Shoes (52)</li>
            </ul>
          </div>

          {/* Price Range */}
          <div className="mb-4">
            <h3 className="font-medium">Price</h3>
            <input type="range" min="10" max="500" className="w-full" />
            <div className="flex justify-between">
              <span>Min: $20</span>
              <span>Max: $300</span>
            </div>
          </div>

          {/* Size Filter */}
          <div className="mb-4">
            <h3 className="font-medium">Size</h3>
            <div className="flex flex-wrap gap-2">
              {["XS", "S", "M", "L", "XL", "2XL", "3XL", "Free Size"].map(
                (size) => (
                  <button
                    key={size}
                    className="border px-3 py-1 rounded-md hover:bg-gray-200"
                  >
                    {size}
                  </button>
                )
              )}
            </div>
          </div>

          {/* Reset Filters Button */}
          <button className="w-full p-2 mt-4 bg-black text-white rounded-md">
            Reset Filters
          </button>
        </div>
      </div>
      {/* sidebar filter end */}
      <div className="max-w-7xl mx-auto">
        <div className="grid md:grid-cols-4 grid-cols-2 gap-8 my-20 px-5">
          {products.map((item) => (
            <ProductCard key={item._id} item={item}></ProductCard>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Shop;
