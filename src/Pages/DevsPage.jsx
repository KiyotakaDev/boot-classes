import React from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import { devs } from '../constants'
import DevCard from "../components/DevCard";

const CarouselPage = () => {
  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 3,
    slidesToScroll: 1,
    centerMode: true,
  };

  return (
    <main className="relative h-screen">
      <div className="w-[95%] absolute top-[5%]">
      <h1 className="text-center text-3xl font-bold mb-[5%]">Developers</h1>
        <Slider {...settings}>
          {devs .map((dev) => (
            <div key={dev.name}>
              <DevCard dev={dev} />
            </div>
          ))}
        </Slider>
      </div>
    </main>
  );
};

export default CarouselPage;
