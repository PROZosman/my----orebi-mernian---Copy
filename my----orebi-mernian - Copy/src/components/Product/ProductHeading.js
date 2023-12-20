import React from 'react'

const ProductHeading = ({title}) => {
  return (
    <h5 className='pr-3 font-primaryFont text-base font-normal text-gray hover:font-bold hover:text-black transition duration-300 ease-in-out'>
        {title}
    </h5>
  )
}

export default ProductHeading