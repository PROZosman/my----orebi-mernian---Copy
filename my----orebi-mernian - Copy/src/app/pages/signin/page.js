"use client"
import { Layout } from '@/components/Layout/Layout'
import SigninFrom from '@/components/signinFrom'
import React from 'react'
import Link from 'next/link'
import { useRouter } from 'next/navigation'

const signIn = () => {
    const router = useRouter()
  return (
    <Layout>

<div className='container mt-32'>
   <div className='border-b border-[#F0F0F0] pb-[32px]'>
   <h1 className='font-primaryFont text-[49px] font-bold '>Sign In</h1>
    <div>
    <Link href="/">Home</Link> / Sign In
    </div>
    <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Itaque voluptatem similique ratione eveniet dolorem autem dolore repellat ducimus temporibus distinctio maiores, cumque laudantium perferendis labore excepturi aliquid esse illum eaque.</p>
   </div>
   <SigninFrom/>
   </div>

    </Layout>
  )
}

export default signIn;