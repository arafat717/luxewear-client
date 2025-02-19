import { useContext } from "react";
import useGetPublice from "./useGetPublice";
import { useQuery } from "@tanstack/react-query";
import { AuthContext } from "../Provider/AuthProvider";

const useCart = () => {
  const publiceInstance = useGetPublice();
  const { user } = useContext(AuthContext);
  const { refetch, data: cart = [] } = useQuery({
    queryKey: ["cart", user?.email],
    queryFn: async () => {
      const res = await publiceInstance.get(`/carts/${user?.email}`);
      return res.data;
    },
  });
  return [cart, refetch];
};

export default useCart;
