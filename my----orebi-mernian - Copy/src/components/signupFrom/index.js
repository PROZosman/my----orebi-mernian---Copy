import { signUp } from '@/validation/validation';
import axios from 'axios';
import { useFormik } from 'formik';
import Link from 'next/link';
import React, { useState } from 'react';
import { BeatLoader } from 'react-spinners';
import ClipLoader from "react-spinners/ClipLoader";

const SignupFrom = () => {

  const [loading, setLoading] = useState(false);
  const [success, setSuccess] = useState('');
  const [error, setError] = useState('');

  const initialValues = {
  firstname : "",
  lastname : "",
  email : "",
  password : "",
  telephon : "",
  address : "",
  city : "",
  postCode : "",
  country : "",
  state : "",
  bYear : new Date().getFullYear(),
  bMonth : new Date().getMonth() + 1,
  bDay: new Date().getDate(),
  }

  const registration = async() =>{
    try {
      setLoading(true);
      let {data} = await axios.post("http://localhost:8000/api/v1/auth/registration", formik.values)
      setLoading(false);
      setSuccess(data.success)
      setError('')
    // let response = await fetch("http://localhost:8000/api/v1/auth/registration", {
    //   method : `POST`,
    //   headers : {
    //     'Content-Type': 'application/json'
    //   },
    //   body : JSON.stringify(formik.values),
    // })
    // let data = awit response.json()
    //  console.log(data);
      console.log(data);

    }catch(error){
     setLoading(false);
     setError("Something Went Wrong Please Try Again");
     setSuccess('')
   }
  }

  const formik = useFormik({
    initialValues,
    validationSchema : signUp,
    onSubmit : values => {
      registration();
    }
  });
  
console.log(loading);
  
  const tempYrs = new Date().getFullYear()
  const years = Array.from(new Array(108),(val, index)=>tempYrs - index);
  const month = Array.from(new Array(12),(val, index)=> index + 1);
  const days = () => {
    return new Date(formik.values.bYear, formik.values.bMonth,0).getDate()
  };
  const getDates = Array.from(new Array(days()),(val, index)=> index + 1);

console.log(formik.errors);

  return (
   <>
    <div className='mt-[57px]'>
      <h2 className='font-primaryFont text-[40px] font-bold '>Your Personal Data</h2>
      <form className='mt-[42px]' onSubmit={formik.handleSubmit}>

        <div className='grid grid-cols-2 gap-12'>

          <div>
           
           <div className='mb-12'>
           <label className='font-primaryFont text-[16px] font-bold'>First Name</label>
            <input className='block w-full focus:outline-none mt-3 font-primaryFont text-[16px] border-b border-black' type='text' placeholder='First Name' onChange={formik.handleChange} name="firstname" value={formik.values.firstname} />
          {
            formik.errors.firstname && formik.touched.firstname ? <p className='text-red-400 font-primaryFont text-base mt-4'>{ formik.errors.firstname}</p> : null
          }
          
           </div>
            
            <div className='mb-12'>
            <label className='font-primaryFont text-[16px] font-bold'>Email Address</label>
            <input className='block w-full focus:outline-none mt-3 font-primaryFont text-[16px] border-b border-black' type='email' placeholder='Email Address' onChange={formik.handleChange} name="email" value={formik.values.email}  />
            {
            formik.errors.email && formik.touched.email ? <p className='text-red-400 font-primaryFont text-base mt-4'>{ formik.errors.email}</p> : null
          }
            </div>
            
           <div className='mb-12'>
           <label className='font-primaryFont text-[16px] font-bold'>Address</label>
            <input className='block w-full focus:outline-none mt-3 font-primaryFont text-[16px]  border-b border-black' type='text' placeholder='Address' onChange={formik.handleChange} name="address" value={formik.values.address}  />
            {
            formik.errors.address && formik.touched.address ? <p className='text-red-400 font-primaryFont text-base mt-4'>{ formik.errors.address}</p> : null
          }
           </div>
            
           <div className='mb-12'>
           <label className='font-primaryFont text-[16px] font-bold'>Post Code</label>
            <input className='block w-full focus:outline-none mt-3 font-primaryFont text-[16px] border-b border-black' type='text' placeholder='Post Code' onChange={formik.handleChange} name="postCode" value={formik.values.postCode} />
            {
            formik.errors.postCode && formik.touched.postCode ? <p className='text-red-400 font-primaryFont text-base mt-4'>{ formik.errors.postCode}</p> : null
          }
           </div>
            
            <div className='mb-12'>
              
            <label className='font-primaryFont text-[16px] font-bold'>State</label>
            <input className='block w-full focus:outline-none mt-3 font-primaryFont text-[16px] border-b border-black' type='text' placeholder='State' onChange={formik.handleChange} name="state" value={formik.values.state}  />
             {
            formik.errors.state && formik.touched.state ? <p className='text-red-400 font-primaryFont text-base mt-4'>{ formik.errors.state}</p> : null
          }
            </div>

          </div>

        <div>
            
            <div className='mb-12'>
            <label className='font-primaryFont text-[16px] font-bold'>Last Name</label>
            <input className='block w-full focus:outline-none mt-3 font-primaryFont text-[16px] border-b border-black' type='text' placeholder='Last Name' onChange={formik.handleChange} name="lastname" value={formik.values.lastname} />
            {
            formik.errors.lastname && formik.touched.lastname ? <p className='text-red-400 font-primaryFont text-base mt-4'>{ formik.errors.lastname}</p> : null
          }
            </div>

            <div className='mb-12'>
            <label className='font-primaryFont text-[16px] font-bold'>Password</label>
            <input className='block w-full focus:outline-none mt-3 font-primaryFont text-[16px] border-b border-black' type='password' placeholder='password' onChange={formik.handleChange} name="password" value={formik.values.password} />
            {
            formik.errors.password && formik.touched.password ? <p className='text-red-400 font-primaryFont text-base mt-4'>{ formik.errors.password}</p> : null
          }
            </div>
            
           <div className='mb-12'>
           <label className='font-primaryFont text-[16px] font-bold'>Telephone Number</label>
            <input className='block w-full focus:outline-none mt-3 font-primaryFont text-[16px] border-b border-black' type='text' placeholder='Telephone Number' onChange={formik.handleChange} name="telephon" value={formik.values.telephon} />
            {
            formik.errors.telephon && formik.touched.telephon ? <p className='text-red-400 font-primaryFont text-base mt-4'>{ formik.errors.telephon}</p> : null
          }
           </div>
           
           <div className='mb-12'>
           <label className='font-primaryFont text-[16px] font-bold'>City</label>
            <input className='block w-full focus:outline-none mt-3 font-primaryFont text-[16px] border-b border-black' type='text' placeholder='City' onChange={formik.handleChange} name="city" value={formik.values.city} />
            {
            formik.errors.city && formik.touched.city ? <p className='text-red-400 font-primaryFont text-base mt-4'>{ formik.errors.city}</p> : null
          }
           </div>
            
            <div className='mb-12'>
            <label className='font-primaryFont text-[16px] font-bold'>Country</label>
            <input className='block w-full focus:outline-none mt-3 font-primaryFont text-[16px]  border-b border-black' type='text' placeholder='Country' onChange={formik.handleChange} name="country" value={formik.values.country} />
            {
            formik.errors.country && formik.touched.country ? <p className='text-red-400 font-primaryFont text-base mt-4'>{ formik.errors.country}</p> : null
          }
            </div>
            
        </div>

        <div className='mb-12'>
              <label className='font-primaryFont text-[16px] font-bold'>Date of Birth</label>

              <div className='mt-[12px] flex gap-4'>

                <select className='w-[30%]' onChange={formik.handleChange} name="bYear" value={formik.values.bYear}>
                {
                  years.map((year, i) =>(
                    <option key={i} value={year}>{year}</option>
                  ))
                }
                </select>

                <select className='w-[30%]' onChange={formik.handleChange} name="bMonth" value={formik.values.bMonth}>
                  {
                    month.map((month, i)=>(
                      <option key={i} value={month}>{month}</option>
                    ))
                  }
                </select>

                <select className='w-[30%]' onChange={formik.handleChange} name="bDay" value={formik.values.bDay}>
                    {
                      getDates.map((date, i)=>(
                        <option key={i} value={date}>{date}</option>
                      ))
                    }
                </select>

              </div>

            </div>

        </div>

        {
          loading ?
         <button  className='mt-16 bg-black font-primaryFont text-base py-3 px-7 text-white rounded-md'><BeatLoader color="#fff" size={10} /></button>
        : <button className='mt-16 bg-black font-primaryFont text-base py-3 px-7 text-white rounded-md' type='submit'>submit</button>
        }

      
      </form>
      <p className='text-black font-primaryFont text-base mt-4'>Already Have and Account Please <Link href='/pages/signin' className='text-red-500 hover:underline' >Sign In</Link></p>
    </div>
   </>
  )
}


export default SignupFrom;



