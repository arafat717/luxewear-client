import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";

const BrandSlider = () => {
  return (
    <div className="w-full bg-gray-100 py-10 px-10 my-20">
      <Swiper
        spaceBetween={50}
        slidesPerView={1}
        breakpoints={{
          640: { slidesPerView: 1 }, // Tablets
          1024: { slidesPerView: 9 }, // Desktop
        }}
        loop={true}
      >
        <SwiperSlide>
          <img
            src="https://modavenextjs.vercel.app/images/brand/shangxi.png"
            alt="Brand 1"
            className=""
          />
        </SwiperSlide>
        <SwiperSlide>
          <img
            src="https://modavenextjs.vercel.app/images/brand/vanfaba.png"
            alt="Brand 2"
            className=""
          />
        </SwiperSlide>
        <SwiperSlide>
          <img
            src="https://modavenextjs.vercel.app/images/brand/anvouge.png"
            alt="Brand 3"
            className=""
          />
        </SwiperSlide>
        <SwiperSlide>
          <img
            src="https://modavenextjs.vercel.app/images/brand/carolin.png"
            alt="Brand 4"
            className=""
          />
        </SwiperSlide>
        <SwiperSlide>
          <img
            src="https://modavenextjs.vercel.app/images/brand/shangxi.png"
            alt="Brand 5"
            className=""
          />
        </SwiperSlide>
        <SwiperSlide>
          <img
            src="https://modavenextjs.vercel.app/images/brand/shangxi.png"
            alt="Brand 1"
            className=""
          />
        </SwiperSlide>
        <SwiperSlide>
          <img
            src="https://modavenextjs.vercel.app/images/brand/ecomife.png"
            alt="Brand 2"
            className=""
          />
        </SwiperSlide>
        <SwiperSlide>
          <img
            src="https://modavenextjs.vercel.app/images/brand/cheryl.png"
            alt="Brand 3"
            className=""
          />
        </SwiperSlide>
        <SwiperSlide>
          <img
            src="https://modavenextjs.vercel.app/images/brand/sopify.png"
            alt="Brand 4"
            className=""
          />
        </SwiperSlide>
        <SwiperSlide>
          <img
            src="https://modavenextjs.vercel.app/images/brand/pennyw.png"
            alt="Brand 5"
            className=""
          />
        </SwiperSlide>
      </Swiper>
    </div>
  );
};

export default BrandSlider;
