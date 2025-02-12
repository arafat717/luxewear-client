/* eslint-disable react/no-unescaped-entities */
import { Link } from "react-router-dom";

const BlogSection = () => {
  return (
    <div className="max-w-7xl mx-auto my-20">
      <div className="my-16 mt-20  text-center">
        <h1 className="text-4xl">News insight</h1>
        <p className="my-5 text-sm">
          Browse our Top Trending: the hottest picks <br /> loved by all.
        </p>
      </div>
      <div className="grid md:grid-cols-3 grid-cols-1 justify-center items-center gap-8 px-5">
        <div className="group">
          <div className="overflow-hidden rounded-lg">
            <img
              className="rounded-lg duration-500 group-hover:scale-110"
              src="https://modavenextjs.vercel.app/images/blog/blog-grid-1.jpg"
              alt=""
            />
          </div>
          <div className="py-5">
            <p className="text-gray-400">13 August</p>
            <Link>
              <h1 className="text-2xl my-3 group-hover:underline hover:text-red-600">
                Top 10 Summer Fashion Trends You Can't Miss in 2024
              </h1>
            </Link>
            <p>
              Lorem ipsum, dolor sit amet consectetur adipisicing elit. Ipsam
              quidem eius
            </p>
          </div>
        </div>
        <div className="group">
          <div className="overflow-hidden rounded-lg">
            <img
              className="rounded-lg duration-500 group-hover:scale-110"
              src="https://modavenextjs.vercel.app/images/blog/blog-grid-8.jpg"
              alt=""
            />
          </div>
          <div className="py-5">
            <p className="text-gray-400">13 August</p>
            <Link>
              <h1 className="text-2xl my-3 group-hover:underline hover:text-red-600">
                Top 10 Summer Fashion Trends You Can't Miss in 2024
              </h1>
            </Link>
            <p>
              Lorem ipsum, dolor sit amet consectetur adipisicing elit. Ipsam
              quidem eius
            </p>
          </div>
        </div>
        <div className="group">
          <div className="overflow-hidden rounded-lg">
            <img
              className="rounded-lg duration-500 group-hover:scale-110"
              src="https://modavenextjs.vercel.app/images/blog/blog-grid-6.jpg"
              alt=""
            />
          </div>
          <div className="py-5">
            <p className="text-gray-400">13 August</p>
            <Link>
              <h1 className="text-2xl my-3 group-hover:underline hover:text-red-600">
                Top 10 Summer Fashion Trends You Can't Miss in 2024
              </h1>
            </Link>
            <p>
              Lorem ipsum, dolor sit amet consectetur adipisicing elit. Ipsam
              quidem eius
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default BlogSection;
