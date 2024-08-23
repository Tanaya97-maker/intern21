import React from "react";
import { Icons } from "../utils/icons"

import { useRouter } from "next/router";

function SideNavbar() {

const router=useRouter()

  return (
    <div>
      <div className=" px-3 h-screen bg-black opacity-90 fixed top-0 left-0 lg:w-[16rem]  peer-focus:left-0 peer:transition ease-out delay-150 duration-200">
          <div className="flex flex-col ">
            
              <div className="flex items-center py-6 gap-4 pl-4 cursor-pointer">
                <Icons.react className="text-xl text-cyan-300 " />
                <h3 className="text-lg text-white  ">CREATIVE TIM</h3>
              </div><hr className="border-gray-600"/>
              
            <div className=" py-5 space-y-2">

              <button type="button" className="w-full flex items-center gap-4 p-3.5 rounded cursor-pointer bg-amber-500">
                <Icons.dashboard className="text-2xl text-white opacity-70 hover:opacity-100" />
                <h3 className="text-sm font-light text-white">Dashboard</h3>
                
              </button>

              <div className="flex items-center gap-4 p-3.5 rounded cursor-pointer ">
                <Icons.user className="text-2xl text-white opacity-70 hover:opacity-100 " />
                <h3 className="text-sm font-light text-white  ">User Profile</h3>
                
              </div>

              <div className="flex items-center gap-4 p-3.5 rounded cursor-pointer ">
                <Icons.table className="text-2xl text-white opacity-70 focus:opacity-100" />
                <h3 className="text-sm font-light text-white  ">Table List</h3>
                
              </div>

              <div className="flex items-center gap-4 p-3.5 rounded cursor-pointer">
                <Icons.topography className="text-2xl text-white opacity-70 focus:opacity-100 " />
                <h3 className="text-sm font-light text-white  ">Topography</h3>
                
              </div>

              <div className="flex  items-center gap-4 p-3.5 rounded cursor-pointer">
                <Icons.icon className="text-2xl text-white opacity-70 focus:opacity-100" />
                <h3 className="text-sm font-light text-white  ">Icons</h3>
                
              </div>

              <div className="flex  items-center gap-4 p-3.5 rounded cursor-pointer">
                <Icons.map className="text-2xl text-white opacity-70 focus:opacity-100" />
                <h3 className="text-sm font-light text-white  ">Maps</h3>
                              </div>

              <div className="flex items-center gap-4 p-3.5 rounded cursor-pointer ">
                <Icons.bell className="text-2xl text-white opacity-70 focus:opacity-100" />
                <h3 className="text-sm font-light text-white  ">Notifications</h3>
                
              </div>

              <div className="flex w-full mt-5 items-center gap-4 p-3.5 rounded cursor-pointer bg-amber-500">
                <Icons.upgrade className="text-2xl text-white  " />
                <h3 className="text-sm font-light text-white  ">Upgrade to PRO</h3>
                
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default SideNavbar;