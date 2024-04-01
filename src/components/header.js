import React from "react";
import logo from './../assets/logo.svg'
import search from './../assets/search.svg'
import profile from './../assets/profile.svg'
import notification from './../assets/notification.svg'
import logo2 from './../assets/logo-2.svg'

const Header = () => {
  
  return (
    <div className='bg-white w-full h-[100px] fixed top-0 z-10'>
      <div className='lg:ml-[14%] flexBetween mr-7 flex justify-center items-center h-full max-lg:ml-10 max-md:ml-6'>
      <img
          src={logo}
          width={100}
          height={40}
          alt="logo"
          className="lg:ml-20 hidden lg:block "
        />
        <img
          src={logo2}
          width={50}
          height={40}
          alt="logo"
          className="lg:ml-20 block lg:hidden"
        />
        <p className='block bold-20 lg:hidden text-center'>Education</p>
        <div className='flex gap-4 justify-center relative'>
        <img
          src={search}
          width={20}
          height={40}
          alt="search"
          className="absolute right-28 top-3 hidden lg:block"
        />
        <input type='text' placeholder='Search Name, Place and Jobs' className='hidden lg:block border-2 px-6 py-2 w-[400px] rounded-2xl placeholder:regular-12 placeholder:italic'/>
        <img
          src={notification}
          width={30}
          height={40}
          alt="notify"
          className=" hidden lg:block"
        />
        <img
          src={profile}
          width={35}
          height={40}
          alt="profile"
          className=" hidden lg:block"
        />
        </div>
      </div>
    </div>
  )
}

export default Header;