"use client"

import React from 'react'
import Heading from '../Heading/Heading'
import Flex from '../Flex/Flex'
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import SliderButtons from '../SliderButtons/SliderButtons'
import { ProductSlider} from '../Data/ProductSlider'
import Image from 'next/image'
import Product from '../Product/Products';





const Newarrival = () => {
  return (

    <div className='container mt-32 relative'>

      <Heading titel="New Arrivals"/>
      
      <Swiper
      spaceBetween={15}
      slidesPerView={4}
      onSlideChange={() => console.log('slide change')}
      onSwiper={(swiper) => console.log(swiper)}
    >
     
     {

      ProductSlider.map((item,i)=>(
        <SwiperSlide>
          <div className="items w-[330px] overflow-y-hidden relative group" key={i}>
 
            <div className="box absolute top-4 left-5 bg-black py-[8px] px-[25px] z-10 "><span className="font-primaryFont text-[white] font-bold text-[14px] " >{item.badge}</span></div>
            
            <div className=' relative '>
              <Image src={item.image}/>

            
                <div className='h-40 group-hover:bottom-0 transition duration-300 ease-in-out w-full bg-red absolute bottom-[-70%] left-0 pr-7 bg-white'>
                  <Product />
                </div>
      
            </div>

            <div className="item-info py-2">
                  <Flex className="justify-between">
                    <h5 className="font-primaryFont font-bold text-[20px] text-[#262626]">
                      {item.h5}
                      <p className="font-primaryFont font-normal text-[16px] text-[#767676]">
                        {item.p}
                      </p>
                    </h5>
                    <span className="font-primaryFont font-bold text-[16px] text-[#767676]">
                      {item.span}
                    </span>
                  </Flex>
                </div>

          </div>
       </SwiperSlide>
      ))

     }

     

<SliderButtons className="bg-blue-500 h-12 w-12 z-10 padding-4 rounded-full flex items-center justify-center absolute top-0 left-0" />
      
      ...
      </Swiper>
      

    </div>

  )
}

export default Newarrival





