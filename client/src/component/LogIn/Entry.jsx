import React, {useState} from 'react'
// import LogIn from './logIn'
import {Link, Outlet} from 'react-router-dom';

export default function Entry() {
  const [isLogin,setIsLogin]=useState(false);

  return (
    <>
      <div className="hidden md:block container"></div>
      <div className="flex flex-col md:flex-row justify-center space-around h-screen items-center">
      <div className="flex flex-col items-center gap-5 md:gap-0 md:justify-between md:h-[90%] md:text-black w-1/2">
        <h1 className="text-xl font-bold tracking-widest pl-5 uppercase">Altiushub</h1>
        <p className='m-auto md:w-1/2 text-4xl text-center lg:text-6xl font-bold tracking-wide'>Join our place</p>
      </div>
      <div className="flex-col-center h-[90%] w-full md:w-1/2">
        <Outlet/>
        <p className='text-center'>
          {!isLogin?`Already have an account?`:`Don't have an account?`} <span className='font-semibold underline hover:font-bold'>
            <Link onClick={()=>setIsLogin(prev=>!prev)} to={isLogin?`register`:'login'}>{!isLogin?'Log In':'Sign Up'}</Link></span>
        </p>
      </div>
    </div>
    </>
  )
}
