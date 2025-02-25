import { FaFacebookF } from "react-icons/fa";

const OurTeams = () => {
  return (
    <div className="mx-auto max-w-7xl my-20 px-5">
      <div className="text-center">
        <h1 className="text-4xl font-semibold">Meet Our Teams</h1>
        <p className="text-gray-600 my-5">
          Discover exceptional experiences through testimonials from our
          satisfied customers.
        </p>
      </div>
      <div className="grid md:grid-cols-4 gap-8 my-10">
        <div className="group">
          <div className="overflow-hidden rounded-xl">
            <img
              className="transition-all duration-700 group-hover:scale-110"
              src="https://modavenextjs.vercel.app/images/team/team-1.jpg"
              alt=""
            />
          </div>
          <div className="flex justify-between items-center mt-5">
            <div>
              <h1 className="text-xl font-semibold transition-all border-b-2 border-white mb-1 group-hover:text-red-600 cursor-pointer group-hover:border-b-2 group-hover:border-black">
                Annette Black
              </h1>
              <p className="text-gray-600">Founder/CEO</p>
            </div>
            <div className="border p-3 rounded-full transition-all hover:bg-sky-600 hover:text-white">
              <FaFacebookF className="size-6"></FaFacebookF>
            </div>
          </div>
        </div>
        <div className="group">
          <div className="overflow-hidden rounded-xl">
            <img
              className="transition-all duration-700 group-hover:scale-110"
              src="https://modavenextjs.vercel.app/images/team/team-2.jpg"
              alt=""
            />
          </div>
          <div className="flex justify-between items-center mt-5">
            <div>
              <h1 className="text-xl font-semibold transition-all border-b-2 border-white mb-1 group-hover:text-red-600 cursor-pointer group-hover:border-b-2 group-hover:border-black">
                Jane Cooper
              </h1>
              <p className="text-gray-600">Sales Director</p>
            </div>
            <div className="border p-3 rounded-full transition-all hover:bg-sky-600 hover:text-white">
              <FaFacebookF className="size-6"></FaFacebookF>
            </div>
          </div>
        </div>
        <div className="group">
          <div className="overflow-hidden rounded-xl">
            <img
              className="transition-all duration-700 group-hover:scale-110"
              src="https://modavenextjs.vercel.app/images/team/team-3.jpg"
              alt=""
            />
          </div>
          <div className="flex justify-between items-center mt-5">
            <div>
              <h1 className="text-xl font-semibold transition-all border-b-2 border-white mb-1 group-hover:text-red-600 cursor-pointer group-hover:border-b-2 group-hover:border-black">
                Brooklyn Simmons
              </h1>
              <p className="text-gray-600">Manager</p>
            </div>
            <div className="border p-3 rounded-full transition-all hover:bg-sky-600 hover:text-white">
              <FaFacebookF className="size-6"></FaFacebookF>
            </div>
          </div>
        </div>
        <div className="group">
          <div className="overflow-hidden rounded-xl">
            <img
              className="transition-all duration-700 group-hover:scale-110"
              src="https://modavenextjs.vercel.app/images/team/team-4.jpg"
              alt=""
            />
          </div>
          <div className="flex justify-between items-center mt-5">
            <div>
              <h1 className="text-xl font-semibold transition-all border-b-2 border-white mb-1 group-hover:text-red-600 cursor-pointer group-hover:border-b-2 group-hover:border-black">
                Theresa Webb
              </h1>
              <p className="text-gray-600">Product Manager</p>
            </div>
            <div className="border p-3 rounded-full transition-all hover:bg-sky-600 hover:text-white">
              <FaFacebookF className="size-6"></FaFacebookF>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default OurTeams;
