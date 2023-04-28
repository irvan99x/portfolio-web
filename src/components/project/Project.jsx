import React from "react";
import { Data } from "./Data";
import "./project.css";

// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/css";
import "swiper/css/pagination";

// import required modules
import { Pagination } from "swiper";

const Project = () => {
  return (
    <section className="project container section" id="project">
      <h2 className="section__title">Project</h2>
      <span className="section__subtitle">Pernah Mengerjakan</span>

      <Swiper
        className="project__container"
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
            <SwiperSlide className="project__card" key={id}>
              <img src={image} alt="" className="project__img" />

              <h3 className="project__name">{title}</h3>
              {/* <p className="testimonial__description">{description}</p> */}
            </SwiperSlide>
          );
        })}
      </Swiper>
    </section>
  );
};

export default Project;
