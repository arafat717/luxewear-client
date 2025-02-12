import { IoEyeOutline } from "react-icons/io5";

const InstragramShop = () => {
  return (
    <div className="max-w-7xl mx-auto md:px-0 px-5 my-20">
      <div className="my-16 mt-20  text-center">
        <h1 className="text-4xl">Shop Instagram</h1>
        <p className="my-5 text-sm">
          Elevate your wardrobe with fresh finds today!
        </p>
      </div>
      <div className="grid md:grid-cols-5 grid-cols-2 gap-5">
        <div className="rounded-2xl group relative">
          <div className="overflow-hidden rounded-2xl group">
            <img
              className="rounded-2xl group-hover:scale-110 duration-500"
              src="https://modavenextjs.vercel.app/images/gallery/gallery-1.jpg"
              alt=""
            />
          </div>
          <div className="">
            <p className="bg-white opacity-0 duration-300 group-hover:opacity-100 md:top-24 top-14 left-14 md:left-24 absolute p-2 rounded-full cursor-pointer transition-all hover:bg-black hover:text-white">
              <IoEyeOutline className="size-6"></IoEyeOutline>
            </p>
          </div>
        </div>
        <div className="rounded-2xl group relative">
          <div className="overflow-hidden rounded-2xl group">
            <img
              className="rounded-2xl group-hover:scale-110 duration-500"
              src="https://modavenextjs.vercel.app/images/gallery/gallery-2.jpg"
              alt=""
            />
          </div>
          <div className="">
            <p className="bg-white opacity-0 duration-300 group-hover:opacity-100 md:top-24 top-14 left-14 md:left-24 absolute p-2 rounded-full cursor-pointer transition-all hover:bg-black hover:text-white">
              <IoEyeOutline className="size-6"></IoEyeOutline>
            </p>
          </div>
        </div>
        <div className="rounded-2xl group relative">
          <div className="overflow-hidden rounded-2xl group">
            <img
              className="rounded-2xl group-hover:scale-110 duration-500"
              src="https://modavenextjs.vercel.app/images/gallery/gallery-3.jpg"
              alt=""
            />
          </div>
          <div className="">
            <p className="bg-white opacity-0 duration-300 group-hover:opacity-100 md:top-24 top-14 left-14 md:left-24 absolute p-2 rounded-full cursor-pointer transition-all hover:bg-black hover:text-white">
              <IoEyeOutline className="size-6"></IoEyeOutline>
            </p>
          </div>
        </div>
        <div className="rounded-2xl group relative">
          <div className="overflow-hidden rounded-2xl group">
            <img
              className="rounded-2xl group-hover:scale-110 duration-500"
              src="https://modavenextjs.vercel.app/images/gallery/gallery-4.jpg"
              alt=""
            />
          </div>
          <div className="">
            <p className="bg-white opacity-0 duration-300 group-hover:opacity-100 md:top-24 top-14 left-14 md:left-24 absolute p-2 rounded-full cursor-pointer transition-all hover:bg-black hover:text-white">
              <IoEyeOutline className="size-6"></IoEyeOutline>
            </p>
          </div>
        </div>
        <div className="rounded-2xl group relative">
          <div className="overflow-hidden rounded-2xl group">
            <img
              className="rounded-2xl group-hover:scale-110 duration-500"
              src="https://modavenextjs.vercel.app/images/gallery/gallery-5.jpg"
              alt=""
            />
          </div>
          <div className="">
            <p className="bg-white opacity-0 duration-300 group-hover:opacity-100 md:top-24 top-14 left-14 md:left-24 absolute p-2 rounded-full cursor-pointer transition-all hover:bg-black hover:text-white">
              <IoEyeOutline className="size-6"></IoEyeOutline>
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default InstragramShop;
