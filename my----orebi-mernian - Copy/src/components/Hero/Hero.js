"use client"

import React from "react";
import Slider from "react-slick";
import { HeroData } from "./HeroData";
import Image from "next/image";

const Hero = () => {
  const settings = {
    dots: false,
    infinite: true,
    autoplay: true,
    arrows: false,
    speed: 1500,
    autoplaySpeed: 1500,
    slidesToShow: 1,
    slidesToScroll: 1,
  };

  return (
    <div>
        <Slider {...settings}>
     {
        HeroData.map((item , i)=>(
            <div key={i} className="w-[500px] h-[500px]">
             <Image src={item.img} alt={item.img} className="w-full h-[500px] "/>
            </div>
        ))
     }
    </Slider>
    </div>
  );
}

export default Hero