import React from 'react';
import Slider from "react-slick";
import "slick-carousel/slick/slick-theme.css";
import "slick-carousel/slick/slick.css";
import banner1 from '../../images/banner1.png';
import banner2 from '../../images/banner2.png';
import banner3 from '../../images/banner3.jpg';

const Banner = () => {
const settings = {
  dots: true,
  infinite: true,
  speed: 2000,
  slidesToShow: 1,
  slidesToScroll: 1,
  autoplay: true,
  autoplaySpeed: 3000,
  pauseOnHover: true,
};
    return (
      <div className="mx-8 mb-8  ">
        <Slider {...settings}>
          <div>
            <img className="h-[500px] w-full" src={banner1} alt="" />
          </div>
          <div>
            <img className="h-[500px] w-full" src={banner2} alt="" />
          </div>
          <div>
            <img className="h-[500px] w-full" src={banner3} alt="" />
          </div>
        </Slider>
      </div>
    );
};

export default Banner;