import React from 'react'
import { Icons } from "../utils/icons"
import { useState, useEffect, useRef } from "react";

const Header = () => {

    const [noti, setNoti] = useState(false);
    const [user, setUser] = useState(false);
  
    const toggleDropdown1 = () => setNoti(!noti);
    const toggleDropdown2 = () => setUser(!user);

  return (
    <div className='relative ml-auto'>
        <div className="flex py-1  ">
        <div className="flex-1 flex justify-end">
            <input
              type="text"
              placeholder="Search"
              className="bg-inherit border-b border-gray-300 focus:border-purple-600 focus:border-b-2 outline-none transition duration-300 delay-150 ease-in-out w-full sm:w-auto"
            />
            <button
              type="button"
              className=" relative top-1 bg-white cursor-pointer h-11 w-11 text-xl text-gray-400 shadow-sm hover:shadow-[0_2px_12px_0_rgba(0,0,0,0.2)] border flex items-center justify-center  rounded-full hover:transition-shadow hover:ease-in-out hover: duration-300 hover:delay-50"
            >
              <Icons.search/>
            </button>
            <button
              type="button"
              className="relative text-lg cursor-pointer text-gray-600 active:bg-gray-300 p-2 "
            >
              <Icons.dashboard/>
            </button>
            <button
              type="button"
              onClick={toggleDropdown1}
              className="relative text-lg cursor-pointer text-gray-600 active:bg-gray-300 p-2"
            >
              <div class="absolute top-1.5 border border-white right-0 bg-red-500 text-white rounded-full text-[0.6rem] h-4 w-4 flex items-center font-medium justify-center p-1">5</div>
              <Icons.bell />
            </button>
            <button
              type="button"
              onClick={toggleDropdown2}
              className="relative text-lg cursor-pointer text-gray-600 active:bg-gray-300 p-2"
            >
              <Icons.user />
            </button>

            {noti && (
              <div className="absolute z-10 mt-10 w-[17rem] py-1 bg-white border rounded-md shadow-gray-400 shadow-sm text-sm">
                <div className="notification">Mike John responded to your email</div>
                <div className="notification">You have 5 new tasks</div>
                <div className="notification">You're now friend with Andrew</div>
                <div className="notification">Another Notification</div>
                <div className="notification">Another One</div>
              </div>
            )}

            {user && (
              <div className="absolute z-10 mt-10 w-[6rem] py-1 bg-white border rounded-md shadow-gray-400 shadow-sm text-sm">
                <div className="notification">Profile</div>
                <div className="notification">Settings</div>
                <hr />
                <div className="notification">Logout</div>
              </div>
            )}
        </div>
        </div>
    </div>
  )
}

export default Header