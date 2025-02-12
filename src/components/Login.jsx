import { Link, useNavigate } from "react-router-dom";
import PageCover from "./shared/PageCover";
import { FaRegEye } from "react-icons/fa6";
import { FaRegEyeSlash } from "react-icons/fa6";
import { useContext, useState } from "react";
import { AuthContext } from "../Provider/AuthProvider";
import Swal from "sweetalert2";

const Login = () => {
  const [isVisible, setIsVisible] = useState(true);
  const navigate = useNavigate();

  const { loginUser } = useContext(AuthContext);
  const handleLogin = (e) => {
    e.preventDefault();
    const form = e.target;
    const email = form.email.value;
    const password = form.password.value;

    loginUser(email, password)
      .then(() => {
        // const user = currentUser.user;
        navigate("/");
        Swal.fire({
          position: "top-end",
          icon: "success",
          title: "Login successful",
          showConfirmButton: false,
          timer: 1500,
        });
      })
      .catch((error) => {
        console.log(error);
      });
  };

  return (
    <>
      <PageCover title={"Login"}></PageCover>
      <div className="max-w-7xl mx-auto py-20">
        <div className="grid md:grid-cols-2 items-center md:gap-0 gap-10">
          <form onSubmit={handleLogin} className="border-r px-10">
            <h1 className="mb-5 text-2xl font-semibold">Login</h1>
            <div className="flex flex-col gap-5">
              <input
                className="py-3 px-4 rounded-lg bg-inherit border-gray-400 border"
                placeholder="Emter your email*"
                type="email"
                name="email"
                id=""
              />
              <div className="relative">
                <input
                  className="py-3 px-4 rounded-lg bg-inherit border-gray-400 border w-full"
                  placeholder="Password*"
                  type={`${isVisible ? "password" : "text"}`}
                  name="password"
                  id=""
                />
                <p
                  onClick={() => setIsVisible(!isVisible)}
                  className="absolute top-4 right-4 cursor-pointer"
                >
                  {isVisible ? (
                    <FaRegEyeSlash className="size-4"></FaRegEyeSlash>
                  ) : (
                    <FaRegEye className="size-4"></FaRegEye>
                  )}
                </p>
              </div>
            </div>
            <div className="flex items-center justify-between mt-4">
              <div>
                <input
                  type="checkbox"
                  placeholder="Remember Me"
                  name=""
                  id=""
                />
                <label className="ml-2">Remember me</label>
              </div>
              <h1 className="underline cursor-pointer">
                Forget Your Password?
              </h1>
            </div>
            <button
              type="submit"
              className="mt-4 border text-xl px-7 py-3 rounded-full border-black transition-all bg-black text-white hover:text-black hover:bg-white"
            >
              Login
            </button>
          </form>
          <div className="px-10">
            <h1 className="text-2xl font-semibold">New Customer</h1>
            <p className="my-4">
              Be part of our growing family of new customers! Join us today and
              unlock a world of exclusive benefits, offers, and personalized
              experiences.
            </p>
            <Link to="/register">
              <button className="mt-4 border text-xl px-7 py-3 rounded-full border-black transition-all bg-black text-white hover:text-black hover:bg-white">
                Register
              </button>
            </Link>
          </div>
        </div>
      </div>
    </>
  );
};

export default Login;
