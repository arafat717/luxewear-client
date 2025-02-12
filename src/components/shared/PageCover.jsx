/* eslint-disable react/prop-types */
import { IoIosArrowForward } from "react-icons/io";
import { Link } from "react-router-dom";
const PageCover = ({ title }) => {
  return (
    <div className="bg-gray-300 ">
      <div className="flex flex-col items-center py-24 text-black">
        <h1 className="text-xl font-semibold mb-4 ">{title}</h1>
        <div className="flex items-center gap-2">
          <Link to="/">
            <p>Homepage</p>
          </Link>
          <p>
            <IoIosArrowForward></IoIosArrowForward>
          </p>
          <p>{title}</p>
        </div>
      </div>
    </div>
  );
};

export default PageCover;
