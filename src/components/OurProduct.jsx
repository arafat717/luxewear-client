import { useEffect, useState } from "react";
import useGetPublice from "../hooks/useGetPublice";
import ProductCard from "../Ui/ProductCard";

const OurProduct = () => {
  const [products, setProducts] = useState([]);
  console.log(products);
  const publiceInstance = useGetPublice();
  useEffect(() => {
    publiceInstance
      .get("/products")
      .then((res) => {
        setProducts(res.data);
      })
      .catch((err) => {
        console.log(err);
      });
  }, []);
  return (
    <div className="max-w-7xl mx-auto">
      <h1>this is our product {products.length}</h1>
      <div className="grid md:grid-cols-4 grid-cols-2 gap-8 my-20 px-5">
        {products.map((item) => (
          <ProductCard key={item._id} item={item}></ProductCard>
        ))}
      </div>
    </div>
  );
};

export default OurProduct;
