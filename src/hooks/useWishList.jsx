import { useContext } from "react";
import useAxiosSecure from "./useAxiosSecure";
import { AuthContext } from "../Provider/AuthProvider";
import { useQuery } from "@tanstack/react-query";

const useWishList = () => {
  // const publiceInstance = useGetPublice();
  const AxiosSecure = useAxiosSecure();
  const { user } = useContext(AuthContext);
  const { refetch, data: wish = [] } = useQuery({
    queryKey: ["wish", user?.email],
    queryFn: async () => {
      const res = await AxiosSecure.get(`/wishs?email=${user?.email}`);
      return res.data;
    },
  });
  return [wish, refetch];
};

export default useWishList;
