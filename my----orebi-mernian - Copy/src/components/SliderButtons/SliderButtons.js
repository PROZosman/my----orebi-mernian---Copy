import React from 'react'
import { useSwiper } from 'swiper/react';
import { FaAngleLeft } from 'react-icons/fa';
import { FaAngleRight } from 'react-icons/fa';

const SliderButtons = ({className}) => {
    const swiper = useSwiper();
  return (
    <>
    <button onClick={() => swiper.slidePrev()}>
        <div className="prev-arrow absolute top-[35%] left-[0] z-10 text-[40px] text-[#979797] cursor-pointer">
        
        <FaAngleLeft />
        </div>
      </button>

      <button onClick={() => swiper.slideNext()}>
        <div className="next-arrow absolute top-[35%] right-[15px]  z-10 text-[40px] text-[#979797] cursor-pointer">
        <FaAngleRight />
        </div>
      </button>
    </>
  )
}

export default SliderButtons

