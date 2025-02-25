import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";

const introduction =
  "Welcome to LuxeWear Store, your premier destination for fashion-forward clothing and accessories. We pride ourselves on offering a curated selection of rare and beautiful items sourced both locally and globally. Our mission is to bring you the latest trends and timeless styles, ensuring every piece reflects quality and elegance. Discover the perfect addition to your wardrobe at LuxeWear Store.";
const vision =
  "Destination for fashion-forward clothing and accessories. We pride ourselves on offering a curated selection of rare and beautiful items sourced both locally and globally. Our mission is to bring you the latest trends and timeless styles, ensuring every piece reflects quality and elegance. Discover the perfect addition to your wardrobe at LuxeWear Store.";
const apart =
  "Welcome to LuxeWear Store, your premier destination for fashion-forward clothing and accessories. We pride ourselves on offering a curated ";
const commitment =
  "Welcome to LuxeWear Store, your premier destination for fashion-forward clothing and accessories. We pride ourselves on offering a curated selection of rare and beautiful items sourced both locally and globally. Our mission is to bring you the latest trends and timeless.";

const Introduction = () => {
  const [activeTab, setActiveTab] = useState("Introduction");
  const [text, setText] = useState(introduction);
  //   console.log(activeTab);

  const handletext = (tab) => {
    if (tab === "Introduction") {
      setText(introduction);
    } else if (tab === "Our Vision") {
      setText(vision);
    } else if (tab === "What Sets Us Apart") {
      setText(apart);
    } else if (tab === "Our Commitment") {
      setText(commitment);
    }
  };

  const tabs = [
    "Introduction",
    "Our Vision",
    "What Sets Us Apart",
    "Our Commitment",
  ];
  return (
    <div className="max-w-7xl mx-auto grid md:grid-cols-2 my-20 gap-10 px-4">
      <div>
        <img
          className="rounded-xl"
          src="https://modavenextjs.vercel.app/images/banner/about-us.jpg"
          alt=""
        />
      </div>
      <div>
        <h1 className="text-2xl md:text-4xl font-semibold leading-normal	">
          LuxeWear – Offering rare and beautiful items worldwide
        </h1>
        <div className=" flex border-b  justify-between gap-3 md:gap-10 mt-8 ">
          {tabs.map((tab) => (
            <h1
              key={tab}
              className={`cursor-pointer font-semibold  transition-all hover:border-b-2 hover:border-red-600 ${
                activeTab === tab
                  ? " border-b-2 border-red-600"
                  : "  border-opacity-0"
              }`}
              onClick={() => {
                setActiveTab(tab), handletext(tab);
              }}
            >
              {tab}
            </h1>
          ))}
        </div>
        <div className="h-36 overflow-hidden">
          <AnimatePresence mode="wait">
            {" "}
            <motion.h1
              key={activeTab}
              initial={{ y: 60, opacity: 0 }}
              exit={{ y: 60, opacity: 0 }}
              animate={{ y: 0, opacity: 1 }}
              transition={{ duration: 0.4, ease: "easeOut" }}
              className="my-4"
            >
              {text}
            </motion.h1>
          </AnimatePresence>
        </div>
        <button className="flex items-center gap-1 mt-6 px-6 border-black rounded-full py-4 bg-black text-white border font-semibold  transition hover:bg-inherit hover:text-black">
          <p>Read More</p>
        </button>
      </div>
    </div>
  );
};

export default Introduction;
