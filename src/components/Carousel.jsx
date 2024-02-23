import React from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import { games } from "../constants";

const Carousel = () => {
  const settings = {
    dots: true,
    infinite: true,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true,
    speed: 4000,
    autoplaySpeed: 4000,
  };

  return (
    <div className="w-1/2 h-auto m-auto">
      <Slider {...settings}>
        {games.map((game) => (
          <div key={game.name}>
            <div className="bg-leveled-700 rounded-[2rem] h-auto">
              <div className="flex flex-col items-center h-[400px] justify-center gap-5 p-5">
                <div className="flex flex-col justify-center items-center text-xl text-white">
                  <img src={game.img} className="w-96 rounded-2xl" />
                  <h1 className="font-bold text-2xl">{game.name}</h1>
                  <p>Language: {game.language}</p>
                  <p>Release: {game.release}</p>
                  <p>Genres: {game.genres}</p>
                </div>
              </div>
            </div>
          </div>
        ))}
      </Slider>
    </div>
  );
};

export default Carousel;
