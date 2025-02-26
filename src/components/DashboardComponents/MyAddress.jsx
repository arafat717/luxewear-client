import { Link } from "react-router-dom";
import useWishList from "../../hooks/useWishList";

const MyAddress = () => {
  const [wish] = useWishList();
  const product = wish.map((item) => item);
  console.log(product);
  return (
    <div className="overflow-x-auto max-w-7xl mx-auto mt-5">
      <table className="min-w-full border border-gray-200 shadow-lg rounded-lg">
        <thead>
          <tr className="bg-gray-100 text-gray-600 uppercase text-sm leading-normal">
            <th className="py-3 px-6 text-left">Image</th>
            <th className="py-3 px-6 text-left">Color Name</th>
            <th className="py-3 px-6 text-left">Original Price</th>
            <th className="py-3 px-6 text-left">Discount Price</th>
            <th className="py-3 px-6 text-left">Action</th>
          </tr>
        </thead>
        <tbody className="text-gray-700 text-sm font-light">
          {wish?.map((pd) => (
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
              <td className="py-3 px-6">{pd?.available_colors[0]?.name}</td>
              <td className="py-3 px-6">
                <span className="line-through">
                  ${pd?.original_price.toFixed(2)}
                </span>
              </td>
              <td className="py-3 px-6 text-red-600">
                ${pd?.discount_price.toFixed(2)}
              </td>
              <td>
                <Link to={`/product/${pd?._id}`}>
                  <button className="p-3 border border-black rounded-2xl transition-all text-white  duration-300 bg-black   hover:bg-white hover:text-black">
                    Show Details
                  </button>
                </Link>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default MyAddress;
