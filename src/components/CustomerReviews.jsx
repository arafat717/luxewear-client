import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/pagination";
import { Pagination } from "swiper/modules";
import { LuQuote } from "react-icons/lu";

const reviews = [
  {
    name: "Sybil Sharp",
    title: "Variety of Styles!",
    review:
      "Fantastic shop! Great selection, fair prices, and friendly staff. Highly recommended. The quality of the products is exceptional, and the prices are very reasonable!",
  },
  {
    name: "Mark G.",
    title: "Quality of Clothing!",
    review:
      "I absolutely love this shop! The products are high-quality and the customer service is excellent. I always leave with exactly what I need and a smile on my face.",
  },
  {
    name: "Emily S.",
    title: "Customer Service!",
    review:
      "I love this shop! The products are always top-quality, and the staff is incredibly friendly and helpful. They go out of their way to make sure that I'm satisfied with my purchase.",
  },
  {
    name: "Sybil Sharp",
    title: "Variety of Styles!",
    review:
      "Fantastic shop! Great selection, fair prices, and friendly staff. Highly recommended. The quality of the products is exceptional, and the prices are very reasonable!",
  },
  {
    name: "Mark G.",
    title: "Quality of Clothing!",
    review:
      "I absolutely love this shop! The products are high-quality and the customer service is excellent. I always leave with exactly what I need and a smile on my face.",
  },
  {
    name: "Emily S.",
    title: "Customer Service!",
    review:
      "I love this shop! The products are always top-quality, and the staff is incredibly friendly and helpful. They go out of their way to make sure that I'm satisfied with my purchase.",
  },
];
export default function CustomerReviews() {
  return (
    <div className="relative  max-w-7xl mx-auto p-6 my-20">
      <h2 className="text-4xl font-semibold text-center mb-8">
        Customer Review
      </h2>
      <Swiper
        modules={[Pagination]}
        spaceBetween={30}
        slidesPerView={1}
        pagination={{ clickable: true, el: ".swiper-pagination" }}
        breakpoints={{
          640: { slidesPerView: 1 },
          768: { slidesPerView: 2 },
          1024: { slidesPerView: 3 },
        }}
        className=""
      >
        {reviews.map((review, index) => (
          <SwiperSlide key={index}>
            <div className="p-6 my-10 border-2 rounded-lg transition-all  bg-white hover:border-black">
              <div className="flex">
                <span className="bg-black p-3 rounded-full mb-4">
                  <LuQuote className="size-5 text-white"></LuQuote>
                </span>
              </div>
              <div className="text-lg font-semibold">{review.title}</div>
              <p className="text-gray-600 mt-4">{review.review}</p>
              <div className="mt-4 font-bold">{review.name}</div>
              <div className="text-red-500 mt-1">★★★★★</div>
            </div>
          </SwiperSlide>
        ))}
      </Swiper>
      <div className="swiper-pagination absolute -bottom-7 left-1/2 transform -translate-x-1/2 "></div>
    </div>
  );
}
