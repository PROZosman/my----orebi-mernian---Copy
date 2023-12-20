"use client"

import React from 'react'
import Flex from '../Flex/Flex'
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import SliderButtons from '../SliderButtons/SliderButtons'
import Image from 'next/image'
import Product from '../Product/Products';
import { ProductSliderOld } from '../Data/ProductSlider';




export const Newarrival2 = () => {
  return (
    <>

    <div className='container mt-32 relative'>
      
      <Swiper
      spaceBetween={15}
      slidesPerView={4}
      autoplay={true}
      speed={300}
      onSlideChange={() => console.log('slide change')}
      onSwiper={(swiper) => console.log(swiper)}
    >
     
     {

        ProductSliderOld.map((item,i)=>(
                <SwiperSlide>
                  <div className="items w-[330px] relative" key={i}>
        
                    
                    
                    <div className='image relative overflow-y-hidden'>
                      <Image src={item.image}/>

                    <div className='h-40 group-hover:bottom-0 transition duration-300 ease-in-out w-full bg-red absolute bottom-[-52%] left-0 pr-7'>
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

    
      ...
      </Swiper>
      

    </div>
    
    </>
  )
}
