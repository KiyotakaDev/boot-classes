import React from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import { devs } from "../constants";
import DevCard from "../components/DevCard";

const CarouselPage = () => {
  const settings = {
    dots: true,
    infinite: true,
    speed: 4000,
    autoplaySpeed: 1000,
    ccsEase: "ease-in",
    autoplay: true,
    slidesToShow: 2,
    slidesToScroll: 1,
    initialSlide: 0,
    responsive: [
      {
        breakpoint: 1920,
        settings: {
          slidesToShow: 3,
          slidesToScroll: 1,
          infinite: true,
          dots: true,
        },
      },
      {
        breakpoint: 1536,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 1,
          infinite: true,
          dots: true,
        },
      },
      {
        breakpoint: 1200,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
          initialSlide: 0,
        },
      }
    ],
  };

  return (
    <main className="relative h-auto">
      <div className="w-full lg:w-[95%] absolute">
        <h1 className="page-title">
          Developers
        </h1>
        <Slider {...settings}>
          {devs.map((dev) => (
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
