import ReviewCard from "../components/ReviewCard";
import { reviews } from "../constants/index";
import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/css";
import "swiper/css/free-mode";
import "swiper/css/pagination";

// import required modules
import { FreeMode } from "swiper/modules";

const CustomerReviews = () => {
  return (
    <>
      <section className="max-container">
        <h3 className="font-palanquin text-center text-4xl font-bold">
          What Our
          <span className="text-coral-red"> Customers </span>
          Say?
        </h3>
        <p className="m-auto mt-4 max-w-lg  text-center info-text">
          Hear genuine stories from our satisfied customers about their
          exceptional experiences with us.
        </p>

        <Swiper
          slidesPerView={1}
          spaceBetween={30}
          freeMode={true}
          modules={[FreeMode]}
          className="mySwiper"
        >
          <SwiperSlide>
            <div className="mt-24 flex flex-1 justify-evenly items-center max-lg:flex-col gap-14">
              {reviews.map((review, index) => (
                <ReviewCard
                  key={index}
                  imgURL={review.imgURL}
                  customerName={review.customerName}
                  rating={review.rating}
                  feedback={review.feedback}
                />
              ))}
            </div>
          </SwiperSlide>
          <SwiperSlide>
            <div className="mt-24 flex flex-1 justify-evenly items-center max-lg:flex-col gap-14">
              {reviews.map((review, index) => (
                <ReviewCard
                  key={index}
                  imgURL={review.imgURL}
                  customerName={review.customerName}
                  rating={review.rating}
                  feedback={review.feedback}
                />
              ))}
            </div>
          </SwiperSlide>
        </Swiper>
      </section>
    </>
  );
};

export default CustomerReviews;
