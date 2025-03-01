import { useEffect, useState } from "react";
import useGetPublice from "../hooks/useGetPublice";
import { Link } from "react-router-dom";
import { AiFillDelete } from "react-icons/ai";
import { MdSystemUpdateAlt } from "react-icons/md";

const ProductPage = () => {
  const publiceInstance = useGetPublice();
  const [product, setProducts] = useState([]);

  useEffect(() => {
    publiceInstance
      .get(`/products`)
      .then((res) => {
        setProducts(res.data);
      })
      .catch((err) => {
        console.log(err);
      });
  }, []);

  return (
    <div className="max-w-7xl mx-auto">
      <Link to="/myaccount/admin-product-add">
        <button className="flex items-center gap-1 mt-6 px-6 border-black rounded-full py-4 hover:bg-black text-black border font-semibold uppercase transition  hover:text-white">
          <p>Add Product</p>
        </button>
      </Link>
      <div className="mt-10">
        <div className="overflow-x-auto">
          <table className="min-w-full border border-gray-200 shadow-lg rounded-lg">
            <thead>
              <tr className="bg-gray-100 text-gray-600 uppercase text-sm leading-normal">
                <th className="py-3 px-6 text-left">Image</th>
                <th className="py-3 px-6 text-left">Name</th>
                <th className="py-3 px-6 text-left">Original Price</th>
                <th className="py-3 px-6 text-left">Discount Price</th>
                <th className="py-3 px-6 text-left">Action</th>
              </tr>
            </thead>
            <tbody className="text-gray-700 text-sm font-light">
              {product?.map((pd) => (
                <tr
                  key={pd._id}
                  className="border-b border-gray-200 hover:bg-gray-100"
                >
                  <td className="py-3 px-6">
                    <img
                      src={pd?.available_colors[0]?.image}
                      alt={pd?.available_colors[0]?.name}
                      className="w-20 h-20 object-cover rounded"
                    />
                  </td>
                  <td className="py-3 px-6">{pd?.name}</td>
                  <td className="py-3 px-6">
                    <span className="line-through">
                      ${pd?.original_price.toFixed(2)}
                    </span>
                  </td>
                  <td className="py-3 px-6 text-red-600">
                    ${pd?.discount_price.toFixed(2)}
                  </td>
                  <td>
                    <div className="flex gap-3 items-center">
                      <Link to={`/product/${pd?._id}`}>
                        <button className="p-3 border border-black rounded-2xl transition-all text-white  duration-300 bg-black   hover:bg-white hover:text-black">
                          Details
                        </button>
                      </Link>
                      <Link to={`/product/${pd?._id}`}>
                        <button className="p-3 border hover:border-black rounded-2xl transition-all text-white  duration-300 bg-purple-600   hover:bg-white hover:text-black">
                          <MdSystemUpdateAlt className="size-5"></MdSystemUpdateAlt>
                        </button>
                      </Link>

                      <button className="p-3 border border-white hover:border-black rounded-2xl transition-all text-white  duration-300 bg-red-600   hover:bg-white hover:text-red-700">
                        <AiFillDelete className="size-5"></AiFillDelete>
                      </button>
                    </div>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
};

export default ProductPage;
