import axios from "axios";

const publiceInstance = axios.create({
  baseURL: "http://localhost:5000",
});
const useGetPublice = () => {
  return publiceInstance;
};

export default useGetPublice;
