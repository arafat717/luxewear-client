/* eslint-disable no-unused-vars */
import { useEffect, useState } from "react";
import useGetPublice from "../hooks/useGetPublice";
import ProductCard from "../Ui/ProductCard";
import { Link } from "react-router-dom";

const OurProduct = () => {
  const publiceInstance = useGetPublice();
  const [products, setProducts] = useState([]);
  const [activeTab, setActiveTab] = useState("");

  const tabs = ["New Arrivals", "Best Seller", "On Sale"];

  useEffect(() => {
    let sort;
    if (activeTab === "New Arrivals") sort = "new-arrivals";
    else if (activeTab === "Best Seller") sort = "best-seller";
    else if (activeTab === "On Sale") sort = "on-sale";
    publiceInstance
      .get(`/products?filterType=${sort}`)
      .then((res) => {
        setProducts(res.data);
      })
      .catch((err) => {
        console.log(err);
      });
  }, [activeTab]);
  return (
    <div className="max-w-7xl mx-auto">
      {/* filter data feild */}
      <div className="flex items-center justify-center gap-3 md:gap-10 mt-20 pb-2">
        {tabs.map((tab) => (
          <h1
            key={tab}
            className={`text-2xl cursor-pointer pb-1 transition-all hover:border-b-2 hover:border-black ${
              activeTab === tab
                ? " border-b-2 border-black"
                : "border-b-2  border-opacity-0"
            }`}
            onClick={() => setActiveTab(tab)}
          >
            {tab}
          </h1>
        ))}
      </div>

      {/* show product data by card */}
      <div className="grid md:grid-cols-4 grid-cols-2 gap-8 mt-10 mb-20 px-5">
        {products.slice(0, 12).map((item) => (
          <ProductCard key={item._id} item={item}></ProductCard>
        ))}
      </div>

      {/* show all button  */}
      <div className="mb-20 text-center ">
        <Link to="/shop">
          <button className="border-b-2 pb-1 border-black transition-all hover:border-red-700 hover:text-red-700">
            View All Products
          </button>
        </Link>
      </div>
    </div>
  );
};

export default OurProduct;
