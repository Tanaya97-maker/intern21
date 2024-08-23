import React from 'react'
import Link from 'next/link'
import Header from '../components/Header'
import { BiSolidBellPlus } from "react-icons/bi";

const notifications= () => {
  return (
    <div className="ml-64 w-full">
      <div className="flex px-8 py-4">
          <Link
            className="absolute text-gray-500 cursor-pointer px-3 py-1 text-xl active:bg-gray-300"
            href="/"
          >
            Notifications
          </Link>
          <Header/>
      </div>

            <section class="m-4 font-thin">
              <div class="btn w-full p-2">
                <div class=" p-2">
                  <div class="text-white text-lg rounded  p-3 bg-gradient-to-r from-fuchsia-600 to-fuchsia-700 shadow-fuchsia-300 shadow-md -mt-10">
                  Notifications<br/><sub class="text-slate-100">Handcrafted by our friends from <span class="font-medium">Material UI</span> and styled by <span class="font-medium">Creative Tim</span>. Please checkout the <span class="font-medium">full documentation</span>.</sub>
                  </div>

                  <div class="pt-10 grid grid-cols-2 gap-8 ">
                    <div class="space-y-6">
                      <p class="text-lg ">Notifications Style</p>
                      <div class="p-4 shadow-lg border shadow-gray-200 rounded">
                        <p>This is a plain notification</p>
                      </div>
                      <div class="p-4 shadow-lg border shadow-gray-200 flex space-x-2 items-center justify-between rounded">
                        <p>This is a notification with close button.</p>
                        <button type="button" class="  hover:bg-gray-200 active:bg-gray-300 p-1 hover:rounded-full h-6 w-6 flex items-center justify-center" >x</button>
                      </div>
                      <div class="p-4 shadow-lg border shadow-gray-200 flex space-x-2 items-center justify-between rounded">
                        <BiSolidBellPlus/>
                        <p>This is a notification with close button and icon.</p>
                        <button type="button" class="  hover:bg-gray-200 active:bg-gray-300 p-1 hover:rounded-full h-6 w-6 flex items-center justify-center" > x </button>
                      </div>
                      <div class="p-4 shadow-lg border shadow-gray-200 flex space-x-2 items-center justify-between rounded">
                        <BiSolidBellPlus/>
                        <p>This is a notification with close button and icon and have many lines. You can see that the icon and the close button are always vertically aligned. This is a beautiful notification. So you don't have to worry about the style.</p>
                        <button type="button" class="  hover:bg-gray-200 active:bg-gray-300 p-1 hover:rounded-full h-6 w-6 flex items-center justify-center " >x</button>
                      </div>
                    </div>

                    <div class="space-y-6">
                      <div class="space-y-6">
                      <p class="text-lg ">Notifications Style</p>
                      <div class="p-4 shadow-lg border shadow-gray-200 flex space-x-2 rounded items-center justify-between bg-cyan-400 text-white">
                        <p>INFO - This is a regular notification made with color="info"</p>
                        <button type="button" class="  hover:bg-cyan-500 active:bg-gray-300 p-1 hover:rounded-full h-6 w-6 flex items-center justify-center" >x</button>
                      </div>
                      <div class="p-4 shadow-lg border shadow-gray-200 flex rounded space-x-2 items-center justify-between text-white bg-lime-500">
                        <p>SUCCESS - This is a regular notification made with color="success"</p>
                        <button type="button" class="  hover:bg-lime-600 active:bg-gray-300 p-1 hover:rounded-full h-6 w-6 flex items-center justify-center " >x</button>
                      </div>
                      <div class="p-4 shadow-lg border shadow-gray-200 flex space-x-2 items-center justify-between rounded text-white bg-amber-500">
                        <p>WARNING - This is a regular notification made with color="warning"</p>
                        <button type="button" class="  hover:bg-amber-600 active:bg-gray-300 p-1 hover:rounded-full h-6 w-6 flex items-center justify-center" > x </button>
                      </div>
                      <div class="p-4 shadow-lg border shadow-gray-200 flex space-x-2 items-center justify-between rounded text-white bg-red-500">
                        <p>DANGER - This is a regular notification made with color="danger"</p>
                        <button type="button" class="  hover:bg-red-600 active:bg-gray-300 p-1 hover:rounded-full h-6 w-6 flex items-center justify-center " >x</button>
                      </div>
                      <div class="p-4 shadow-lg border shadow-gray-200 flex space-x-2 items-center justify-between rounded text-white bg-fuchsia-600">
                        <p>PRIMARY - This is a regular notification made with color="primary"</p>
                        <button type="button" class="  hover:bg-fuchsia-700 active:bg-gray-300 p-1 hover:rounded-full h-6 w-6 flex items-center justify-center " >x</button>
                      </div>
                    </div>

                    </div>
                  </div>

                  <div class="mt-20 px-16 space-y-4 ">
                    <p class="text-lg flex justify-center">Notifications Places</p>
                    <p class="flex justify-center">Click to view notifications</p>
                    <div class="text-sm font-medium grid grid-cols-3 gap-x-6 gap-y-3">
                      <button class="px-20 py-3 rounded bg-fuchsia-600 text-white hover:shadow-fuchsia-400 hover:shadow-lg ">TOP LEFT</button>
                      <button class="px-20 py-3 rounded bg-fuchsia-600 text-white hover:shadow-fuchsia-400 hover:shadow-lg">TOP CENTER</button>
                      <button class="px-20 py-3 rounded bg-fuchsia-600 text-white hover:shadow-fuchsia-400 hover:shadow-lg">TOP RIGHT</button>
                      <button class="px-20 py-3 rounded bg-fuchsia-600 text-white hover:shadow-fuchsia-400 hover:shadow-lg">BOTTOM LEFT</button>
                      <button class="px-20 py-3 rounded bg-fuchsia-600 text-white hover:shadow-fuchsia-400 hover:shadow-lg">BOTTOM CENTER</button>
                      <button class="px-20 py-3 rounded bg-fuchsia-600 text-white hover:shadow-fuchsia-400 hover:shadow-lg">BOTTOM RIGHT</button>

                    </div>
                  </div>

                </div>
              </div>
            </section>
    </div>
  )
}

export default notifications