import axios from "axios";
const AxiosSecureInstance = axios.create({
  baseURL: "http://localhost:5000",
  withCredentials: true,
});
const useAxiosSecure = () => {
  return AxiosSecureInstance;
};

export default useAxiosSecure;
