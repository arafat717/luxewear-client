/* eslint-disable react/no-unescaped-entities */
import { Link, useNavigate } from "react-router-dom";
import PageCover from "./shared/PageCover";
import { useContext, useState } from "react";
import { FaRegEye, FaRegEyeSlash } from "react-icons/fa";
import { AuthContext } from "../Provider/AuthProvider";
import Swal from "sweetalert2";

const Register = () => {
  const { CreateUserWithEmailPass } = useContext(AuthContext);
  const [isVisible, setIsVisible] = useState(true);
  const [isVisibleto, setIsVisibleto] = useState(true);
  const [error, setError] = useState("");
  console.log(error);
  const navigate = useNavigate();

  const handleRegister = (e) => {
    e.preventDefault();
    const form = e.target;
    const email = form.email.value;
    const password = form.password.value;
    const confirmpass = form.confirmpass.value;

    if (password !== confirmpass) {
      setError("Confirm Password not Matched");
      return;
    }
    CreateUserWithEmailPass(email, password)
      .then(() => {
        // const user = currentUser.user;
        navigate("/");
        Swal.fire({
          position: "top-end",
          icon: "success",
          title: "SignUp successful",
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
      <PageCover title={"Register"}></PageCover>
      <div className="max-w-7xl mx-auto py-20">
        <div className="grid md:grid-cols-2 items-center md:gap-0 gap-10">
          <form onSubmit={handleRegister} className="border-r px-10">
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
              <div className="relative">
                <input
                  className="py-3 px-4 rounded-lg bg-inherit border-gray-400 border w-full"
                  placeholder="Password*"
                  type={`${isVisibleto ? "password" : "text"}`}
                  name="confirmpass"
                  id=""
                />
                <p
                  onClick={() => setIsVisibleto(!isVisibleto)}
                  className="absolute top-4 right-4 cursor-pointer"
                >
                  {isVisibleto ? (
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
                <label className="ml-2">I agree to the Terms of User</label>
              </div>
            </div>
            <button
              type="submit"
              className="mt-4 border text-xl px-7 py-3 rounded-full border-black transition-all bg-black text-white hover:text-black hover:bg-white"
            >
              Register
            </button>
          </form>
          <div className="px-10">
            <h1 className="text-2xl font-semibold">Already have an account?</h1>
            <p className="my-4">
              Welcome back. Sign in to access your personalized experience,
              saved preferences, and more. We're thrilled to have you with us
              again!
            </p>
            <Link to="/Login">
              <button className="mt-4 border text-xl px-7 py-3 rounded-full border-black transition-all bg-black text-white hover:text-black hover:bg-white">
                Login
              </button>
            </Link>
          </div>
        </div>
      </div>
    </>
  );
};

export default Register;
