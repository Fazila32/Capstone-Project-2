import React from "react";
import "../../styling/testimonial.css";
import { Pagination } from "swiper";
import { Swiper, SwiperSlide } from "swiper/react/swiper-react";

import "swiper/swiper.min.css";
import "swiper/modules/pagination/pagination.min.css";
import profilePic1 from "../../images/adeel.jpeg";
import profilePic2 from "../../images/awais.jpeg";
import profilePic3 from "../../images/Adnan.jpg";
import profilePic4 from "../../images/profile.png";

const Testimonial = () => {
  const clients = [
    {
      img: profilePic1,
      review:
        "Anila has been exceptional and extra ordinary with her graphic designing skills. I am so amazed by her work. I will definately come back to her for more work.",
    },
    {
      img: profilePic2,
      review:
        "I was pleased to work with Anilaadnan. she was prompt and courteous and once she understood what i was asking for, delivered above what I could hoped. I will be using her services again",
    },
    {
      img: profilePic3,
      review:
        "Excellent design and delivery! Great communication! worked around the clock to get my project just right. Can't wait to hire Anilaadnan again. ",
    },
    {
      img: profilePic4,
      review:
        "Lorem ipsum dolor, sit amet consectetur adipisicing elit. Ex officiis molestiae quod tempora laudantium, cumque error a nisi placeat quae exercitationem, maiores reiciendis! Eaque dicta minima, iure maiores dolorum sed.",
    },
  ];

  return (
    <div className="t-wrapper">
      <Swiper
        modules={[Pagination]}
        slidesPerView={1}
        pagination={{ clickable: true }}
      >
        {clients.map((client, index) => {
          return (
            <SwiperSlide key={index}>
              <div className="testimonial">
                <img src={client.img} alt="" />
                <span>{client.review}</span>
              </div>
            </SwiperSlide>
          );
        })}
      </Swiper>
    </div>
  );
};

export default Testimonial;
