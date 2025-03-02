/* eslint-disable no-unused-vars */
import { useEffect, useState } from "react";
import { MdSystemUpdateAlt } from "react-icons/md";
import { AiFillDelete } from "react-icons/ai";
import useAxiosSecure from "../hooks/useAxiosSecure";
import Swal from "sweetalert2";
import { useQuery } from "@tanstack/react-query";
import { FaUsers } from "react-icons/fa";

const AllUsers = () => {
  const axiosSecure = useAxiosSecure();

  const { data: users = [], refetch } = useQuery({
    queryKey: ["users"],
    queryFn: async () => {
      const res = await axiosSecure.get("/users");
      return res.data;
    },
  });

  const handleUserDelete = (id) => {
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
        axiosSecure.delete(`/user/${id}`).then((res) => {
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

  const handleMakeAdmin = (id) => {
    axiosSecure.patch(`/user/admin/${id}`).then((res) => {
      refetch();
      Swal.fire({
        position: "top-end",
        icon: "success",
        title: "Your work has been saved",
        showConfirmButton: false,
        timer: 1500,
      });
    });
  };

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
                  {pd?.role ? (
                    "admin"
                  ) : (
                    <button
                      onClick={() => handleMakeAdmin(pd?._id)}
                      className="p-3 border hover:border-black rounded-2xl transition-all text-white  duration-300 bg-purple-600   hover:bg-white hover:text-black"
                    >
                      <FaUsers className="size-5"></FaUsers>
                    </button>
                  )}
                </td>
                <td>
                  <button
                    onClick={() => handleUserDelete(pd?._id)}
                    className="p-3 border border-white hover:border-black rounded-2xl transition-all text-white  duration-300 bg-red-600   hover:bg-white hover:text-red-700"
                  >
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
