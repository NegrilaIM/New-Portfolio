import "./Testimonials.scss";
import Image1 from "../../assets/testimonial1.png";
import Image2 from "../../assets/testimonial2.png";
import Image3 from "../../assets/testimonial3.png";
import Image4 from "../../assets/testimonial4.png";

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
      title: "Reutchi Dan",
      role: "Frontend Developer",
      description:
        "My collaboration with Iulian has been consistently excellent. His remarkable front-end skills played a essential role in making a significant contribution to the project's success. Efficient communication and his unwavering dedication to details have made our working experience highly productive.",
    },
    {
      id: 2,
      image: Image2,
      title: "Chetan Sharma",
      role: "HCL Tech - SME",
      description:
        "Iulian is highly skilled and reliable. Committed to deadlines and efficient task management. Possesses strong listening skills, facilitating clear understanding. Excellent problem-solving and communication abilities. A positive experience collaborating with him.",
    },
    {
      id: 3,
      image: Image3,
      title: "Iancu Gabriel",
      role: "Frontend Developer",
      description:
        "Working closely with Iulian has been a pleasure. His dedication to excellence is evident in his work. Iulian's technical expertise, combined with his collaborative approach, ensures smooth teamwork. His positive attitude and problem-solving skills make him a valuable teammate.",
    },
    {
      id: 4,
      image: Image4,
      title: "Iulia Apostol",
      role: "HCL Tech - Reporting Manager",
      description:
        "Iulian is a standout team member, consistently delivering exceptional results. His strong work ethic, attention to detail, and proactive approach contribute significantly to project success. I appreciate his positive attitude and dedication to achieving outstanding outcomes.",
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
        {Data.map(({ id, image, title, role, description }) => {
          return (
            <SwiperSlide className="testimonial__card" key={id}>
              <img src={image} alt="" className="testimonial__img" />
              <h3 className="testimonial__name">{title}</h3>
              <h5 className="testimonial__role">{role}</h5>
              <p className="testimonial__description">{description}</p>
            </SwiperSlide>
          );
        })}
      </Swiper>
    </section>
  );
};
