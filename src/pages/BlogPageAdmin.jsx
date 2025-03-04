import { AiFillDelete } from "react-icons/ai";
import { MdSystemUpdateAlt } from "react-icons/md";
import { Link } from "react-router-dom";

const BlogPageAdmin = () => {
  return (
    <div className="max-w-7xl mx-auto">
      <Link to="/myaccount/admin-blog-add">
        <button className="flex items-center gap-1 mt-6 px-6 border-black rounded-full py-4 hover:bg-black text-black border font-semibold uppercase transition  hover:text-white">
          <p>Add Blog</p>
        </button>
      </Link>
      <div className="mt-5">
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
              <tr className="border-b border-gray-200 hover:bg-gray-100">
                <td className="py-3 px-6">
                  <img
                    src={
                      "https://modavenextjs.vercel.app/images/products/womens/women-19.jpg"
                    }
                    alt={"some"}
                    className="w-20 h-20 object-cover rounded"
                  />
                </td>
                <td className="py-3 px-6">name</td>
                <td className="py-3 px-6">
                  <span className="line-through">something</span>
                </td>
                <td className="py-3 px-6 text-red-600">something</td>
                <td>
                  <div className="flex gap-3 items-center">
                    <Link>
                      <button className="p-3 border border-black rounded-2xl transition-all text-white  duration-300 bg-black   hover:bg-white hover:text-black">
                        Details
                      </button>
                    </Link>
                    <Link>
                      <button className="p-3 border hover:border-black rounded-2xl transition-all text-white  duration-300 bg-purple-600   hover:bg-white hover:text-black">
                        <MdSystemUpdateAlt className="size-5"></MdSystemUpdateAlt>
                      </button>
                    </Link>

                    <button
                      // onClick={() => handleDelete(pd?._id)}
                      className="p-3 border border-white hover:border-black rounded-2xl transition-all text-white  duration-300 bg-red-600   hover:bg-white hover:text-red-700"
                    >
                      <AiFillDelete className="size-5"></AiFillDelete>
                    </button>
                  </div>
                </td>
              </tr>
              {/* {product?.map((pd) => (
                    
                    ))} */}
            </tbody>
          </table>
        </div>
        <div className="mt-10"></div>
      </div>
    </div>
  );
};

export default BlogPageAdmin;
