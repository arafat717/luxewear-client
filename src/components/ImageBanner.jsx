import { useState, useEffect } from "react";
import { MdArrowOutward } from "react-icons/md";
import { motion, AnimatePresence } from "framer-motion";

const ImageBanner = () => {
  const banners = [
    {
      image: "https://modavenextjs.vercel.app/images/slider/slider-women1.jpg",
      title: "Find Your Signature Style",
    },
    {
      image: "https://modavenextjs.vercel.app/images/slider/slider-women2.jpg",
      title: "Flash Sale Madness",
    },
  ];

  const [currentIndex, setCurrentIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentIndex((prevIndex) => (prevIndex === 0 ? 1 : 0));
    }, 3000);

    return () => clearInterval(interval);
  }, []);

  return (
    <div className="relative w-full md:h-[800px] h-80 overflow-hidden">
      <AnimatePresence mode="wait">
        {banners.map((banner, index) =>
          index === currentIndex ? (
            <motion.div
              key={index}
              initial={{ opacity: 1 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 1 }}
              transition={{ duration: 0.5 }}
              className="absolute inset-0 flex flex-col justify-center items-center text-white"
              style={{
                backgroundImage: `url(${banner.image})`,
                backgroundSize: "cover",
                backgroundPosition: "center",
              }}
            >
              <div className="absolute w-[670px] md:left-20 md:bottom-20 left-0 bottom-0 z-10 p-5">
                <motion.h1
                  initial={{ y: 80, opacity: 0 }}
                  animate={{ y: 0, opacity: 1 }}
                  exit={{ y: 80, opacity: 0 }}
                  transition={{ duration: 0.2 }}
                  className="uppercase"
                >
                  Bikinis & swimsuits
                </motion.h1>
                <motion.h2
                  initial={{ y: 80, opacity: 0 }}
                  animate={{ y: 0, opacity: 1 }}
                  exit={{ y: 80, opacity: 0 }}
                  transition={{ duration: 0.2 }}
                  className="text-2xl md:text-7xl md:my-4"
                >
                  {banner.title}
                </motion.h2>
                <motion.button
                  initial={{ y: 30, opacity: 0 }}
                  animate={{ y: 0, opacity: 1 }}
                  exit={{ y: 30, opacity: 0 }}
                  transition={{ duration: 0.1 }}
                  className="flex items-center gap-1 mt-6 px-6 rounded-full py-4 bg-white text-black border-2 font-semibold shadow-lg transition hover:bg-inherit hover:text-white"
                >
                  <p>Explore Collection</p>
                  <MdArrowOutward className="text-xl font-semibold" />
                </motion.button>
              </div>
            </motion.div>
          ) : null
        )}
      </AnimatePresence>
    </div>
  );
};

export default ImageBanner;
