import React from "react";
import { Data } from "./Data";
import "./certificate.css";

// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/css";
import "swiper/css/pagination";

// import required modules
import { Pagination } from "swiper";

const Certificate = () => {
  return (
    <section className="certificate container section" id="certificate">
      <h2 className="section__title">Sertifikat</h2>
      <span className="section__subtitle">Beberapa Sertifikat Saya</span>

      <Swiper
        className="certificate__container"
        loop={true}
        grabCursor={true}
        spaceBetween={24}
        pagination={{
          clickable: true,
        }}
        breakpoints={{
          576: {
            slidesPerView: 2,
          },
          768: {
            slidesPerView: 2,
            spaceBetween: 48,
          },
        }}
        modules={[Pagination]}
      >
        {Data.map(({ id, image, title, description }) => {
          return (
            <SwiperSlide className="certificate__card" key={id}>
              <img src={image} alt="" className="certificate__img" />

              <h3 className="certificate__name">{title}</h3>
              {/* <p className="certificate__description">{description}</p> */}
            </SwiperSlide>
          );
        })}
      </Swiper>
    </section>
  );
};

export default Certificate;
