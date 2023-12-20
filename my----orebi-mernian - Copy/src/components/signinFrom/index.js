
import { loginUser } from '@/features/slices/userSlice';
import { signIn, signUp } from '@/validation/validation';
import axios from 'axios';
import { useFormik } from 'formik';
import Link from 'next/link';
import React from 'react';
// import { useDispatch } from 'react-redux';
// import { BeatLoader } from 'react-spinners';
// import ClipLoader from "react-spinners/ClipLoader";

const SiginFrom = () => {

// const dispatch =  useDispatch();    

  const initialValues = {
  email : "",
  password : "",
  }

  const handleLogin = async() =>{
    try {
      let {data} = await axios.post("http://localhost:8000/api/v1/auth/login", formik.values)
      console.log(data);
      // dispatch(loginUser(data));
    }
    catch(error){
    console.log(error.response.data);
   }
  }

  const formik = useFormik({
    initialValues,
    validationSchema : signIn,
    onSubmit : values => {
        handleLogin();
    }
  });
  
console.log(formik.errors);

  return (
   <>
    <div className='mt-[57px]'>
      <h2 className='font-primaryFont text-[40px] font-bold '>Your Personal Data</h2>
      <form className='mt-[42px]' onSubmit={formik.handleSubmit}>

        <div className='grid grid-cols-2 gap-12'>

          <div>
          <div className='mb-12'>
            <label className='font-primaryFont text-[16px] font-bold'>Email</label>
            <input className='block w-full focus:outline-none mt-3 font-primaryFont text-[16px] border-b border-black' type='email' placeholder='Email Address' onChange={formik.handleChange} name="email" value={formik.values.email}  />
            {
            formik.errors.email && formik.touched.email ? <p className='text-red-400 font-primaryFont text-base mt-4'>{ formik.errors.email}</p> : null
          }
            </div>
          </div>

          <div>
          <div className='mb-12'>
            <label className='font-primaryFont text-[16px] font-bold'>Password</label>
            <input className='block w-full focus:outline-none mt-3 font-primaryFont text-[16px] border-b border-black' type='password' placeholder='password' onChange={formik.handleChange} name="password" value={formik.values.password} />
            {
            formik.errors.password && formik.touched.password ? <p className='text-red-400 font-primaryFont text-base mt-4'>{ formik.errors.password}</p> : null
          }
            </div>
          </div>

        </div>

        {/* {
          loading ?
         <button  className='mt-16 bg-black font-primaryFont text-base py-3 px-7 text-white rounded-md'><BeatLoader color="#fff" size={10} /></button>
        : <button className='mt-16 bg-black font-primaryFont text-base py-3 px-7 text-white rounded-md' type='submit'>submit</button>
        } */}

<button className='mt-16 bg-black font-primaryFont text-base py-3 px-7 text-white rounded-md' type='submit'>submit</button>
     
      </form>
      <p className='text-black font-primaryFont text-base mt-4'>Dont Have and Account Please <Link href='/pages/signup' className='text-red-500 hover:underline' >Sign Up</Link></p>
    </div>
   </>
  )
}


export default SiginFrom;



