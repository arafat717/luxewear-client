import { useEffect, useState } from "react";
import { MdArrowOutward } from "react-icons/md";
import { Link } from "react-router-dom";

/* eslint-disable react/no-unescaped-entities */
const LimitedTime = () => {
  const targetDate = new Date("2025-07-01T00:00:00").getTime();

  const calculateTimeLeft = () => {
    const now = new Date().getTime();
    const difference = targetDate - now;

    if (difference <= 0) {
      return { days: 0, hours: 0, minutes: 0, seconds: 0 };
    }

    return {
      days: Math.floor(difference / (1000 * 60 * 60 * 24)),
      hours: Math.floor((difference / (1000 * 60 * 60)) % 24),
      minutes: Math.floor((difference / (1000 * 60)) % 60),
      seconds: Math.floor((difference / 1000) % 60),
    };
  };

  const [timeLeft, setTimeLeft] = useState(calculateTimeLeft());

  useEffect(() => {
    const timer = setInterval(() => {
      setTimeLeft(calculateTimeLeft());
    }, 1000);

    return () => clearInterval(timer);
  }, []);

  return (
    <div className=" bg-gray-100 my-24">
      <div className="max-w-7xl mx-auto  grid md:grid-cols-5 justify-between items-center ">
        <div className="col-span-2 py-5 px-5">
          <h1 className="text-4xl">Limited-Time Deals On!</h1>
          <p className="my-4">Up to 50% Off Selected Styles. Don't Miss Out.</p>
          <Link to="/shop">
            <button className="flex items-center gap-1 mt-6 px-6 rounded-full py-4 border bg-black text-white  font-semibold  transition-all hover:bg-transparent hover:text-black hover:border border-black">
              <p>Shop Now</p>
              <MdArrowOutward className="text-xl font-semibold" />
            </button>
          </Link>
        </div>
        <div className="">
          <img
            className="w-full hidden md:block"
            src="https://modavenextjs.vercel.app/images/banner/img-countdown1.png"
            alt=""
          />
        </div>
        <div className="col-span-2 text-center px-5 pb-20 pt-10">
          <div>
            <div className="flex items-center justify-center md:gap-5 gap-2 text-black text-5xl font-semibold ">
              <div className="flex flex-col items-center">
                <span>{timeLeft.days}</span>
                <span className="text-[18px] mt-4">Days</span>
              </div>
              <span>:</span>
              <div className="flex flex-col items-center">
                <span>{timeLeft.hours}</span>
                <span className="text-[18px] mt-4">Hours</span>
              </div>
              <span>:</span>
              <div className="flex flex-col items-center">
                <span>{timeLeft.minutes}</span>
                <span className="text-[18px] mt-4">Mins</span>
              </div>
              <span>:</span>
              <div className="flex flex-col items-center ">
                <span>{timeLeft.seconds}</span>
                <span className="text-[18px] mt-4">Secs</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default LimitedTime;
