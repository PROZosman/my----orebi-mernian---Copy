"use client"
import { Layout } from '@/components/Layout/Layout'
import SignupFrom from '@/components/signupFrom'



import Link from 'next/link'
import { useRouter } from 'next/navigation'

import React from 'react'

const signUp = () => {
  const router = useRouter()
  return (
   <Layout>
   <div className='container mt-32'>
   <div className='border-b border-[#F0F0F0] pb-[32px]'>
   <h1 className='font-primaryFont text-[49px] font-bold '>Sign Up</h1>
    <div>
      <Link href="/">Home</Link> / Sign Up
    </div>
    <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Itaque voluptatem similique ratione eveniet dolorem autem dolore repellat ducimus temporibus distinctio maiores, cumque laudantium perferendis labore excepturi aliquid esse illum eaque.</p>
   </div>
   <SignupFrom/>
   </div>
   </Layout>
  )
}

export default signUp;