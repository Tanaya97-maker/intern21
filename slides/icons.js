import React from 'react'
import Link from 'next/link'
import Header from '../components/Header'

const icons = () => {
  return (
    <div className="ml-64 w-full">
      <div className="flex px-8 py-4">
          <Link
            className="absolute text-gray-500 cursor-pointer px-3 py-1 text-xl active:bg-gray-300"
            href="/"
          >
            Icons
          </Link>
          <Header/>
      </div>
      <section class="m-4 ">
        <div class=" p-4">
            <div class="text-white text-lg rounded  p-3 bg-gradient-to-r from-fuchsia-600 to-fuchsia-700 shadow-fuchsia-300 shadow-md ">
            Material Design Icons<br/><sub class="text-slate-100 font-thin">Handcrafted by our friends from <span class="font-medium">Google</span></sub>
            </div>
            <div class="p-4">
                <div class="btn w-full  mt-5  shadow-gray-400 shadow-lg h-screen">kkkkk</div>
            </div>
        </div>
      </section>

    </div>
    )
}
    
export default icons
