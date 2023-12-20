'use client'
import React, { useRef, useState } from 'react'
import Flex from '../Flex/Flex'
import { HiMiniBars3BottomLeft } from 'react-icons/hi2';
import { FaUserAlt } from 'react-icons/fa';
import { AiOutlineCaretDown } from 'react-icons/ai';
import { FaShoppingCart } from 'react-icons/fa';
import Lists from '../Lists/Lists';
import Listitems from '../Lists/Listitems';
import { categoryData, dropdownData } from './menuData';
import useClickOutside from "@/helpers/clickOutside";
import Search from '../Search/Search';

const TopBar = () => {

    const [showCategory, setShowCategory] = useState(false)
    const [showDropdown, setShowDropdown] = useState(false)
    const  clickOutside  = useRef(null)

    // // this is category part

    const handleCategoryShow = () => {
        setShowCategory(true)
    }

    useClickOutside(clickOutside, () => {
        setShowCategory(false)
    })

    // this is drop down part
    const handleDropdownShow  = () => {
        setShowDropdown(true)
    }

    useClickOutside(clickOutside, () => {
        setShowDropdown(false)
    })


    return (

        // this is category part

        <div className='container'>
            <Flex className='items-center justify-between'>

                <div className='w-1/5 cursor-pointer relative' onClick={handleCategoryShow}>
                    <Flex>
                        <HiMiniBars3BottomLeft className="text-2xl mr-3 cursor-pointer" />
                        <span className="font-primaryFont text-black lg:block hidden font-norma">Shop by Category</span>
                    </Flex>
                    {
                        showCategory &&
                        <div className='w-full z-10 bg-white shadow-[0px_20px_60px_0px_rgba(40,_40,_40,_0.15)] absolute top-[155%] left-0' ref={clickOutside}>
                            <Lists>
                                {
                                    categoryData.map((item, i) => (
                                        <Listitems key={i} links={item.link} className="font-primaryFont last:border-b-0 font-normal text-sm text-black py-4 px-5 border-b border-solid hover:pl-6 transition-all duration-150 ease-in border-white-100" >{item.title}</Listitems>
                                    ))
                                }
                            </Lists>
                        </div>


                    }
                </div>
                
                 {/* // this is search part  */}

                <div><Search /></div>

                {/* // this is topper icons and drop down   */}

               <div>
                <Flex className="items-center gap-x-[40px]">
                    <div className='flex cursor-pointer text-[18px] relative' onClick={handleDropdownShow} ><FaUserAlt className='text-sm lg:text-lg ' /> <AiOutlineCaretDown className='text-sm lg:text-lg ' />
                    {
                        showDropdown&&
                        <div className='w-[200px] z-10 bg-white shadow-[0px_20px_60px_0px_rgba(40,_40,_40,_0.15)] absolute top-[155%] right-0'ref={clickOutside} >
                            <Lists>
                                {
                                    dropdownData.map((item, i) => (
                                        <Listitems key={i} links={item.link} className="font-primaryFont last:border-b-0 font-normal text-sm text-black py-4 px-5 border-b border-solid hover:pl-6 transition-all duration-150 ease-in border-white-100">{item.title}</Listitems>
                                    ))
                                }
                            </Lists>
                        </div>
                    }
                    </div>
                    <div className='flex cursor-pointer text-[18px] relative'><FaShoppingCart className='text-sm lg:text-lg ' /></div>
                </Flex>
               </div>

            </Flex>
        </div>
    )
}

export default TopBar;
