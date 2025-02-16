/* eslint-disable react-hooks/rules-of-hooks */
/* eslint-disable no-unused-vars */
import { useEffect, useState } from "react";
import { Helmet } from "react-helmet";
import useGetPublice from "../hooks/useGetPublice";
import ProductCard from "../Ui/ProductCard";
import PageCover from "../components/shared/PageCover";
import { CiFilter } from "react-icons/ci";
import { IoMdClose } from "react-icons/io";

const Shop = () => {
  const [products, setProducts] = useState([]);
  const [isOpen, setIsOpen] = useState(false);

  const [sort, setSort] = useState("");

  const allcategory = products.map((prod) => prod.category);
  const allBrands = products.map((brd) => brd.brand);
  // console.log(allBrands);
  // console.log(allcategory);

  let category = [];
  for (let i = 0; i < allcategory.length; i++) {
    let item = allcategory[i];
    if (!category.includes(item)) {
      category.push(item);
    }
  }

  let brands = [];
  for (let i = 0; i < allBrands.length; i++) {
    let item = allBrands[i];
    if (!brands.includes(item)) {
      brands.push(item);
    }
  }
  // console.log(brand);
  // console.log(category);

  let maxPrice = 0;
  for (let i = 0; i < products.length; i++) {
    const currentPrice = products[i].discount_price;
    if (currentPrice > maxPrice) {
      maxPrice = currentPrice;
    }
  }

  let minPrice = Infinity;
  for (let i = 0; i < products.length; i++) {
    const currentPrice = products[i].discount_price;
    if (currentPrice < minPrice) {
      minPrice = currentPrice;
    }
  }

  const [size, setSize] = useState();
  const [brand, setBrand] = useState();
  const [cate, setCate] = useState();
  const [rangePrice, setRangePrice] = useState(maxPrice);
  console.log(brand);
  console.log(size);
  console.log(cate);
  console.log(rangePrice);

  // const arrayoffilter = { brand, size, cate, rangePrice };
  // console.log(arrayoffilter);

  const handleRangeValue = (e) => {
    let value = e.target.value;
    setRangePrice(value);
  };

  const handleCheckbox = (e) => {
    setBrand(e);
  };

  useEffect(() => {
    setRangePrice(maxPrice);
  }, [maxPrice]);

  // console.log(minPrice);
  // console.log(maxPrice);

  const publiceInstance = useGetPublice();
  useEffect(() => {
    let queryParams = `/products?sort=${sort}`;

    // Only append the query parameters if they exist
    if (cate) queryParams += `&category=${cate}`;
    if (brand) queryParams += `&brand=${brand}`;
    if (size) queryParams += `&size=${size}`;
    if (minPrice !== Infinity) queryParams += `&minPrice=${minPrice}`; // Only add minPrice if it's not Infinity
    if (rangePrice > 0) queryParams += `&maxPrice=${rangePrice}`;

    publiceInstance
      .get(queryParams)
      .then((res) => {
        setProducts(res.data);
      })
      .catch((err) => {
        console.log(err);
      });
  }, [sort, cate, brand, size, minPrice, rangePrice]);

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
      <div className="relative z-50 ">
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
          className={`fixed top-0 left-0 h-full w-80 md:w-96 overflow-y-scroll pb-8 bg-white shadow-lg z-50 transition-transform transform ${
            isOpen ? "translate-x-0" : "-translate-x-full"
          }`}
        >
          {/* Close Button */}
          <div className="bg-gray-100 flex items-center justify-between px-5 py-3 mb-5">
            <h2 className="text-lg font-semibold mb-4">Filters</h2>
            <div>
              <button
                onClick={() => setIsOpen(false)}
                className="text-black text-2xl"
              >
                <IoMdClose />
              </button>
            </div>
          </div>

          {/* Product Categories */}
          <div className="mb-4 border-b px-5 pb-10">
            <h3 className="font-semibold text-xl">Product Categories</h3>
            <ul className="space-y-4 mt-4 text-black ">
              {category.slice(0, 10).map((br) => (
                <li
                  onClick={() => setCate(br)}
                  key={br}
                  className="cursor-pointer hover:text-red-600"
                >
                  {br}
                </li>
              ))}
            </ul>
          </div>

          <div className="px-5">
            {/* Price Range */}
            <div className="mb-4 border-b pb-5">
              <h3 className="font-medium">Price</h3>
              <input
                type="range"
                min={minPrice}
                max={maxPrice}
                value={rangePrice}
                // name="rangePrice"
                onChange={handleRangeValue}
                className="w-full text-black"
              />
              <div className="flex justify-between">
                <span>Min: ${minPrice}</span>
                <span>Max: ${rangePrice}</span>
              </div>
            </div>

            {/* Size Filter */}
            <div className="mb-4 border-b pb-4">
              <h3 className="font-medium mb-3 text-xl">Size</h3>
              <div className="flex flex-wrap gap-2">
                {["XS", "S", "M", "L", "XL", "2XL", "3XL", "Free Size"].map(
                  (sz) => (
                    <button
                      onClick={() => setSize(sz)}
                      key={sz}
                      className={`border p-3 rounded-full  hover:bg-black hover:text-white ${
                        size === sz ? "bg-black text-white" : ""
                      }`}
                    >
                      <span>{sz}</span>
                    </button>
                  )
                )}
              </div>
            </div>

            {/* filter by brand section */}
            <div>
              <h3 className="text-xl mb-5">Brands</h3>
              <div className="flex flex-col gap-3 pb-6">
                {brands.slice(0, 6).map((brd) => (
                  <label key={brd}>
                    <input
                      className={`mr-2 cursor-pointer ${
                        brand === brd ? "text-red-600" : ""
                      }`}
                      onChange={() => handleCheckbox(brd)}
                      type="checkbox"
                    />
                    {brd}
                  </label>
                ))}
              </div>
            </div>

            {/* Reset Filters Button */}
            <button className="w-full p-2 mt-4 bg-black text-white rounded-md">
              Reset Filters
            </button>
          </div>
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
