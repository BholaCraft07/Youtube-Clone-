import 'react'
import { MdOutlineMenu } from "react-icons/md";
import { CiSearch } from "react-icons/ci";
import { IoIosNotificationsOutline } from "react-icons/io";
import logo from '../../assets/logo.svg'
import profilelog from '../../assets/BHOLA_KUMAR.jpg'
import { useContext, useState } from 'react';
import { SearchContext } from '../../Layout/ContextApi/ContextApi';
function Navbar({toggleSlidebar}) {
  const{ search, setSearch }=useContext(SearchContext);
  console.log(search)
  return (
    <div className="flex justify-between px-4 items-center  py-4 bg-slate-300 sticky" >
      {/* logo section */}
      <div className="flex sm:gap-4 gap-2 items-center ">
        <div className="sm:text-2xl text-xl cursor-pointer" onClick={toggleSlidebar}><MdOutlineMenu /></div>
        <div className="flex items-center sm:w-full w-14">
          <img src={logo} alt="" />
          <sup>IN</sup>
        </div>
      </div>
      {/* Search Section for larger screens */}
      <div className="flex items-center rounded-full shadow-md w-full md:max-w-xs lg:max-w-md sm:max-w-[200px] cursor-pointer xl:max-w-2xl max-w-40  hidden sm:flex">
        <div className="bg-white rounded-s-full w-full">
          <input
            type="text"
            placeholder="Search"
            className="flex-grow w-full px-6 py-2 bg-transparent outline-none rounded-l-full text-gray-700 placeholder-gray-500"
            onChange={(e) => setSearch(e.target.value)}
          />
        </div>
        <div className="bg-slate-100 rounded-e-full">
          <button className="text-2xl py-2 px-5">
            <CiSearch />
          </button>
        </div>
      </div>

      {/* Search Section for mobile screens */}
      <div className="flex bg-white items-center rounded-full shadow-md w-full sm:hidden max-w-[40%]">
        <div className="bg-white rounded-s-full w-full">
          <input
            type="text"
            className="flex-grow w-full px-6 py-1 bg-transparent outline-none rounded-l-full text-gray-700 placeholder-gray-500 text-"
          />
        </div>
        <div className="bg-slate-100 rounded-e-full">
          <button className="text-2xl py-1 px-2">
            <CiSearch />
          </button>
        </div>
      </div>

      {/* profle section */}
      <div className="flex text-center items-center justify-between gap-4 px-3 hidden sm:flex">
        <div className="text-md text-center justify-center p-2 px-4 rounded-full bg-white cursor-pointer"><button>+ create</button></div>
        <div className="text-2xl flex items-center cursor-pointer">
          <IoIosNotificationsOutline />
          <sup className="text-xs">3</sup>
        </div>
        <div className="w-10 h-10 ">
          <img src={profilelog} alt="" className='w-full object-cover rounded-full' />
        </div>
      </div>
      {/* profile for mobile */}
      <div className="flex text-center items-center justify-between gap-2 px-3 sm:hidden">
        <div className="w-8 h-8 ">
          <img src={profilelog} alt="" className='w-full object-cover rounded-full' />
        </div>
      </div>
    </div>
  )
}

export default Navbar