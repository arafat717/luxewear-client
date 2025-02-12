import { Link } from "react-router-dom";

const ModelsBanner = () => {
  return (
    <div className="mx-auto max-w-7xl my-5 grid md:grid-cols-2 gap-8 px-5">
      <div>
        <img
          src="https://modavenextjs.vercel.app/images/collections/banner-collection/banner-cls1.jpg"
          alt=""
        />
        <h1 className="text-4xl text-black mt-5">Crossbody bag</h1>
        <p className="my-4">
          From beach to party: Perfect styles for every occasion.
        </p>
        <Link to="/shop">
          <button className="border-b-2 pb-1 border-black transition-all hover:border-red-700 hover:text-red-700">
            Shop Now
          </button>
        </Link>
      </div>
      <div>
        <div className="min-h-full w-full bg-[url('https://modavenextjs.vercel.app/images/collections/banner-collection/banner-cls2.jpg')] bg-cover bg-center  flex items-center justify-center text-white">
          <div className="text-center py-20">
            <h1 className="text-4xl">Capsule Collection</h1>
            <p className="my-5 font-medium">Reserved for special occasions</p>
            <Link to="/shop">
              <button className="border-b-2 pb-1 border-white transition-all hover:border-red-700 hover:text-red-700">
                Shop Now
              </button>
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ModelsBanner;
