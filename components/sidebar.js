import React from 'react'
import { Icons } from "../utils/icons"
import { Disclosure } from "@headlessui/react"

const Sidebar = () => {
  return (
    <div>
      <Disclosure as="nav">
        {({ open }) => (
          <>
            <Disclosure.Button className="fixed top-28 right-0 flex items-center justify-center rounded-s-md px-3.5 py-2 text-white bg-stone-600 bg-opacity-50 ">
              <Icons.setting className=" h-8 w-8 "/>
            </Disclosure.Button>
            <Disclosure.Panel className="py-1 fixed bg-stone-50 px-3 h-[32rem] top-12 right-[4.5rem] w-[19.5rem]  text-center btn rounded-sm">
              <p className="font-bold text-xs">SIDEBAR FILTERS</p>
              <div className="grid grid-cols-5 gap-2 px-16 py-3">
                <button className="bg-fuchsia-700 rounded-full hover:ring-2 hover:ring-cyan-500 hover:transition hover:delay-150 hover:duration-300 hover:ease-in-out focus:ring-2 w-[1.4rem] h-[1.4rem]" />
                <button className="bg-cyan-500 rounded-full hover:ring-2 hover:ring-cyan-500 hover:transition hover:delay-150 hover:duration-300 hover:ease-in-out focus:ring-2  w-[1.4rem] h-[1.4rem]" />
                <button className="bg-green-500 rounded-full hover:ring-2 hover:ring-cyan-500 hover:transition hover:delay-150 hover:duration-300 hover:ease-in-out focus:ring-2 w-[1.4rem] h-[1.4rem]" />
                <button className="bg-red-500 rounded-full hover:ring-2 hover:ring-cyan-500 hover:transition hover:delay-150 hover:duration-300 hover:ease-in-out focus:ring-2 w-[1.4rem] h-[1.4rem]" />
                <button className="bg-amber-500 rounded-full hover:ring-2 hover:ring-cyan-500 hover:transition hover:delay-150 hover:duration-300 hover:ease-in-out focus:ring-2 w-[1.4rem] h-[1.4rem]" />
              </div>

              <p className="font-bold text-xs mt-4">IMAGES</p>
              <div className="grid grid-cols-4 gap-1 mt-5">
                <img src="./images/horse.jpg " className="w-full rounded-lg hover:ring-2 hover:ring-cyan-500 hover:transition hover:delay-150 hover:duration-300 hover:ease-in-out focus:ring-2  h-[6.3rem]" />
                <img src="./images/city.jpg " className="w-full rounded-lg hover:ring-2 hover:ring-cyan-500 hover:transition hover:delay-150 hover:duration-300 hover:ease-in-out focus:ring-2  h-[6.3rem]" />
                <img src="./images/tree.jpg " className="w-full rounded-lg hover:ring-2 hover:ring-cyan-500 hover:transition hover:delay-150 hover:duration-300 hover:ease-in-out focus:ring-2  h-[6.3rem]" />
                <img src="./images/mountain.jpg " className="w-full rounded-lg hover:ring-2 hover:ring-cyan-500 hover:transition hover:delay-150 hover:duration-300 hover:ease-in-out focus:ring-2  h-[6.3rem]" />
              </div>

              <button className="bg-green-500 text-white text-xs font-medium py-3 my-1 mt-3  hover:!shadow-green w-full rounded hover:transition hover:delay-150 hover:duration-300 hover:ease-in-out">DOWNLOAD FREE!</button>
              <button className="bg-amber-500 text-white text-xs font-medium py-3 my-1  hover:!shadow-amber w-full rounded hover:transition hover:delay-150 hover:duration-300 hover:ease-in-out">GET PRO VERSION</button>
              <button className="bg-cyan-500 text-white text-xs font-medium py-3 my-1  hover:!shadow-cyan w-full rounded hover:transition hover:delay-150 hover:duration-300 hover:ease-in-out">DOCUMENTATION</button>

              <p className="font-bold text-xs p-3">THANK YOU FOR SHARING!</p>
  
              <div className="space-x-0.5 mt-2">
                <button className="bg-blue-800 rounded-full w-8 h-8" ><Icons.facebook className="text-white inline-flex justify-center items-center text-2xl"/></button>
                <button className="bg-cyan-400 rounded-full w-8 h-8" ><Icons.twitter className="text-white inline-flex justify-center items-center text-2xl"/></button>
              </div>

              <div className="grid grid-cols-4 gap-1 px-14 mt-6 text-[0.7rem] ">
                <button className="border bg-gradient-to-t from-stone-200 rounded p-0.5 font-medium hover:bg-slate-300 " ><Icons.github className=" inline-flex justify-center items-center"/><span className="pl-[0.12rem]">Star</span></button>
                <button className="border bg-gradient-to-t from-stone-200 rounded p-0.5 font-medium hover:text-blue-500">2809</button>
                <button className="border bg-gradient-to-t from-stone-200 rounded p-0.5 font-medium hover:bg-slate-300 "><Icons.github className=" inline-flex justify-center items-center"/><span className="pl-[0.12rem]">Fork</span></button>
                <button className="border bg-gradient-to-t from-stone-200 rounded p-0.5 font-medium hover:text-blue-500">4088</button>
              </div>
            </Disclosure.Panel>
          </>
        )}
      </Disclosure>
    </div>
  )
}

export default Sidebar
