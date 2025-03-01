import { useEffect, useState } from "react";
import useGetPublice from "../hooks/useGetPublice";
import { MdSystemUpdateAlt } from "react-icons/md";
import { AiFillDelete } from "react-icons/ai";

const AllUsers = () => {
  const publiceInstance = useGetPublice();
  const [users, setusers] = useState([]);
  console.log(users);

  useEffect(() => {
    publiceInstance
      .get(`/users`)
      .then((res) => {
        setusers(res.data);
      })
      .catch((err) => {
        console.log(err);
      });
  }, []);
  return (
    <div className="max-w-7xl mx-auto">
      <div className="overflow-x-auto">
        <table className="min-w-full border border-gray-200 shadow-lg rounded-lg">
          <thead>
            <tr className="bg-gray-100 text-gray-600 uppercase text-sm leading-normal">
              <th className="py-3 px-6 text-left">Image</th>
              <th className="py-3 px-6 text-left">Name</th>
              <th className="py-3 px-6 text-left">Email</th>
              <th className="py-3 px-6 text-left">Phone</th>
              <th className="py-3 px-6 text-left">Nationality</th>
              <th className="py-3 px-6 text-left">Role</th>
              <th className="py-3 px-6 text-left">Delete</th>
            </tr>
          </thead>
          <tbody className="text-gray-700 text-sm font-light">
            {users?.map((pd) => (
              <tr
                key={pd._id}
                className="border-b border-gray-200 hover:bg-gray-100"
              >
                <td className="py-3 px-6">
                  <img
                    src={pd?.image}
                    alt={pd?.name}
                    className="w-20 h-20 object-cover rounded"
                  />
                </td>
                <td className="py-3 px-6">{pd?.name}</td>
                <td className="py-3 px-6">{pd?.email}</td>
                <td className="py-3 px-6">
                  <span className="">{pd?.phone}</span>
                </td>
                <td className="py-3 px-6 ">{pd?.country}</td>
                <td>
                  <button className="p-3 border hover:border-black rounded-2xl transition-all text-white  duration-300 bg-purple-600   hover:bg-white hover:text-black">
                    <MdSystemUpdateAlt className="size-5"></MdSystemUpdateAlt>
                  </button>
                </td>
                <td>
                  <button className="p-3 border border-white hover:border-black rounded-2xl transition-all text-white  duration-300 bg-red-600   hover:bg-white hover:text-red-700">
                    <AiFillDelete className="size-5"></AiFillDelete>
                  </button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default AllUsers;
