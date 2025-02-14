import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import useGetPublice from "../hooks/useGetPublice";

const ProductDetails = () => {
  const [product, setProduct] = useState();
  const [mainImage, setMainImage] = useState();

  const id = useParams();

  const publiceInstance = useGetPublice();

  useEffect(() => {
    publiceInstance
      .get(`/products/${id.id}`)
      .then((res) => setProduct(res.data));
  }, []);

  return (
    <div className="max-w-7xl mx-auto grid grid-cols-2 my-20 gap-5 px-5">
      <div className="grid grid-cols-5 gap-4">
        <div className="col-span-1 space-y-5">
          {product?.images?.map((ig) => (
            <img
              onClick={() => setMainImage(ig)}
              key={ig}
              className={`rounded-md cursor-pointer border hover:border-red-500 ${
                mainImage === ig ? "border-red-600 border-2" : ""
              }`}
              src={ig}
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
        <p>{product?.category}</p>
        <h1>{product?.name}</h1>
        <p>{product?.rating}</p>
        <p>{product?.description}</p>
        <hr />
      </div>
    </div>
  );
};

export default ProductDetails;
