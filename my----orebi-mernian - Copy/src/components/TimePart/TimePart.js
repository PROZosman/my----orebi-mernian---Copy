import React from 'react'
import timepic from "../../img/timepic.png"
import Image from 'next/image'

const TimePart = () => {
  return (
    <div>
    <Image className='w-[1601px] h-[370px] mt-[130px] mb-[128px]' src={timepic} />
    </div>
  )
}

export default TimePart