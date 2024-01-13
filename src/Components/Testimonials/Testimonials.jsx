import "./Testimonials.scss";
import Image1 from "../../assets/testimonial1.png";
import Image2 from "../../assets/testimonial2.png";
import Image3 from "../../assets/testimonial3.png";

import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/autoplay";
import "swiper/css/pagination";
import { Pagination } from "swiper/modules";

export const Testimonials = () => {
  const Data = [
    {
      id: 1,
      image: Image1,
      title: "Jhon Doe1",
      description:
        "1a really good job, all aspects of the project were followed step by step and with good results",
    },
    {
      id: 2,
      image: Image2,
      title: "Jhon Doe2",
      description:
        "2a really good job, all aspects of the project were followed step by step and with good results",
    },
    {
      id: 3,
      image: Image3,
      title: "Jhon Doe3",
      description:
        "3a really good job, all aspects of the project were followed step by step and with good results",
    },
  ];

  return (
    <section className="testimonial container section" id="testimonials">
      <h2 className="section__title">Testimonials</h2>
      <span className="section__subtitle">People say</span>
      <Swiper
        className="testimonial__container"
        loop={true}
        autoplay={true}
        grabCursor={true}
        spaceBetween={24}
        pagination={{
          clickable: true,
        }}
        breakpoints={{
          576: {
            slidesPerView: 1,
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
            <SwiperSlide className="testimonial__card" key={id}>
              <img src={image} alt="" className="testimonial__img" />
              <h3 className="testimonial__name">{title}</h3>
              <p className="testimonial__description">{description}</p>
            </SwiperSlide>
          );
        })}
      </Swiper>
    </section>
  );
};
