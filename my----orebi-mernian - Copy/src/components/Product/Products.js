import Image from 'next/image'
import React from 'react'
import Badge from '../Badge/Badge'
import { BsFillHeartFill } from 'react-icons/bs';
import { TfiReload } from 'react-icons/tfi';
import { BsFillCartFill } from 'react-icons/bs';
import Flex from '../Flex/Flex';
import ProductHeading from './ProductHeading';


const Product = ({badge}) => {
  return (

    


 
 <div >
 
 <Flex className="justify-end items-center pt-6">
     <ProductHeading title="Add to Wish List"/>
     <BsFillHeartFill/>
  </Flex>
  <Flex className="justify-end items-center pt-6">
     <ProductHeading title="Compare"/>
     <TfiReload />
  </Flex>
  <Flex className="justify-end items-center pt-6">
     <ProductHeading title="Add to Cart"/>
     <BsFillCartFill />
  </Flex>


</div>
   
  )
}

export default Product

