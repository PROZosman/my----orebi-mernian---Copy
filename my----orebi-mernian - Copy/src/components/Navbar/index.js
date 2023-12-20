"use client"

import { Logo } from '@/svg/Logo'
import React, { useEffect, useRef, useState } from 'react'
import Flex from '../Flex/Flex'
import { menuData } from './menuData'
import Lists from '../Lists/Lists'
import Listitems from '../Lists/Listitems'
import TopBar from './TopBar'
import { FaBars } from 'react-icons/fa';
import useClickOutside from '@/helpers/clickOutside'

const Navbar = () => {
    let [show, setShow] = useState(true);

    let nav_ref = useRef();

    // useEffect (()=>{
    //    document.body.addEventListener("click", (e)=>{
    //        if (nav_ref.current.contains(e.target)) {setShow(true);}
    //        else {setShow(false);}
    //     });
    //     },[])

    useClickOutside(nav_ref,()=>{
        setShow(false);
    })

    return (
        <>
            <div className='container py-8'>
                <Flex className="items-center justify-between "> 
                    <div className='w-1/3'>
                        <Logo />
                    </div>

                    <div className='w-[67%]' >
                        <FaBars  className='lg:hidden block absolute top-8 right-3' onClick={()=>setShow(true)}/>

                      <div className='lg:block hidden'>
                      <Lists className="lg:flex z-10 lg:gap-x-10 lg:justify-end  absolute top-14 right-0 lg:top-5 rounded-lg bg-zinc-400 lg:bg-transparent ">
                            {
                                menuData.map((item, i) => (
                                    <Listitems key={i} links={item.link} className="lg:text-gray p-2 text-white font-normal text-sm text-sm hover:font-bold hover:text-black ">{item.title}</Listitems>
                                ))
                            }
                        </Lists>
                      </div>

                    </div>

                    <div ref={nav_ref}>
                    {show && 
                        <Lists className="lg:flex z-10 lg:gap-x-10 lg:justify-end absolute top-14 right-0 lg:top-0 rounded-lg bg-zinc-400 lg:bg-transparent ">
                            {
                                menuData.map((item, i) => (
                                    <Listitems key={i} links={item.link} className="lg:text-gray p-2 text-white font-normal text-sm hover:font-bold hover:text-black">{item.title}</Listitems>
                                ))
                            }
                        </Lists>
                        }
                    </div>

                </Flex>
            </div>
            <div className='bg-white-100 py-[25px]'>
                <TopBar />
            </div>
        </>
    )
}

export default Navbar