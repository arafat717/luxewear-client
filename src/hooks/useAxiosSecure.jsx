import axios from "axios";
import { useContext, useEffect } from "react";
import { AuthContext } from "../Provider/AuthProvider";
import { useNavigate } from "react-router-dom";
const AxiosSecureInstance = axios.create({
  baseURL: "http://localhost:5000",
  withCredentials: true,
});
const useAxiosSecure = () => {
  const { handleLogOut } = useContext(AuthContext);
  const navigate = useNavigate();
  useEffect(() => {
    AxiosSecureInstance.interceptors.response.use(
      function (response) {
        return response;
      },
      function (error) {
        // console.log("error from interceptor:", error);
        if (error.status === 401 || error.status === 403) {
          handleLogOut()
            .then(() => {
              console.log("loggedOut");
              navigate("/login");
            })
            .catch((error) => console.log(error));
        }

        return Promise.reject(error);
      }
    );
  }, []);

  return AxiosSecureInstance;
};

export default useAxiosSecure;
