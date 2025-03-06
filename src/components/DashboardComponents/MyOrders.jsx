import { useContext } from "react";
import { AuthContext } from "../../Provider/AuthProvider";
import { useQuery } from "@tanstack/react-query";
import useAxiosSecure from "../../hooks/useAxiosSecure";
import PageCover from "../shared/PageCover";
import { Link } from "react-router-dom";

const MyOrders = () => {
  const { user } = useContext(AuthContext);
  const axiosSecure = useAxiosSecure();
  const { data: payments = [] } = useQuery({
    queryKey: ["payments", user.email],
    queryFn: async () => {
      const res = await axiosSecure.get(`/payments/${user?.email}`);
      return res.data;
    },
  });
  console.log(payments);
  return (
    <>
      <PageCover title={"My History"}></PageCover>
      <div className="overflow-x-auto max-w-7xl mx-auto mt-5">
        {payments?.length > 0 ? (
          <table className="min-w-full border border-gray-200 shadow-lg rounded-lg">
            <thead>
              <tr className="bg-gray-100 text-gray-600 uppercase text-sm leading-normal">
                <th className="py-3 px-6 text-left">#</th>
                <th className="py-3 px-6 text-left"> Price</th>
                <th className="py-3 px-6 text-left">Transaction Id</th>
                <th className="py-3 px-6 text-left">Status</th>
                <th className="py-3 px-6 text-left">Action</th>
              </tr>
            </thead>
            <tbody className="text-gray-700 text-sm font-light">
              {payments?.map((pd, index) => (
                <tr
                  key={pd._id}
                  className="border-b border-gray-200 hover:bg-gray-100"
                >
                  <td className="pl-7 text-xl">{index + 1}</td>
                  <td className="py-3 px-6">{pd?.price?.toFixed(2)}</td>
                  <td className="py-3 px-6">
                    <h1>{pd?.transactionId}</h1>
                  </td>
                  <td className="py-3 px-6">
                    <h1>{pd?.status}</h1>
                  </td>
                  <td className="py-3 px-6">
                    <Link to="">
                      <button className="flex items-center gap-1 mt-6 px-6 border-black rounded-full py-4 bg-black text-white border font-semibold  transition hover:bg-inherit hover:text-black">
                        <p>Details</p>
                      </button>
                    </Link>
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
    </>
  );
};

export default MyOrders;
