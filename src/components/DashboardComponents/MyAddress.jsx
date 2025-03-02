import { Link } from "react-router-dom";
import useWishList from "../../hooks/useWishList";
import Swal from "sweetalert2";
import useAxiosSecure from "../../hooks/useAxiosSecure";
import { MdDelete } from "react-icons/md";

const MyAddress = () => {
  const [wish, refetch] = useWishList();
  const axiosSecure = useAxiosSecure();

  const handledelete = (id) => {
    Swal.fire({
      title: "Are you sure?",
      text: "You won't be able to revert this!",
      icon: "warning",
      showCancelButton: true,
      confirmButtonColor: "#3085d6",
      cancelButtonColor: "#d33",
      confirmButtonText: "Yes, delete it!",
    }).then((result) => {
      if (result.isConfirmed) {
        axiosSecure.delete(`/wish/${id}`).then(() => {
          refetch();
          Swal.fire({
            title: "Deleted!",
            text: "Your file has been deleted.",
            icon: "success",
          });
        });
      }
    });
  };

  return (
    <div className="overflow-x-auto max-w-7xl mx-auto mt-5">
      {wish?.length > 0 ? (
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
                  <div className="flex items-center gap-6">
                    <Link to={`/product/${pd?._id}`}>
                      <button className="p-3 border border-black rounded-2xl transition-all text-white  duration-300 bg-black   hover:bg-white hover:text-black">
                        Details
                      </button>
                    </Link>
                    <p
                      className="bg-red-600 transition-all border items-center flex p-2 rounded-full cursor-pointer text-white hover:border-black hover:text-red-600 hover:bg-inherit"
                      onClick={() => handledelete(pd?._id)}
                    >
                      <span className="">
                        <MdDelete className="size-7"></MdDelete>
                      </span>
                    </p>
                  </div>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      ) : (
        <div className="text-center mt-40">
          <h1 className="text-2xl font-semibold">No Product added yet</h1>
          <div className="flex items-center justify-center">
            <Link to="/shop">
              <button className="flex items-center gap-1 mt-6 px-6 border-black rounded-full py-4 bg-black text-white border font-semibold  transition hover:bg-inherit hover:text-black">
                <p>Shop Now</p>
              </button>
            </Link>
          </div>
        </div>
      )}
    </div>
  );
};

export default MyAddress;
