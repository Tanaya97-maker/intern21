import React from 'react'
import Link from 'next/link'
import Header from '../components/Header'

export default function userProfile () {
  return (
    <>
    <div className="ml-64 w-full ">
        <div className="flex px-8 py-4">
          <Link
            className="absolute text-gray-500 cursor-pointer px-3 py-1 text-xl active:bg-gray-300"
            href="/"
          >
            User Profile
          </Link>
          <Header/>
        </div>
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 py-3" >
              <div className="btn w-full p-2 ">
                <div className=" p-2">
                  <div className="text-white text-lg rounded p-3 bg-gradient-to-r from-fuchsia-700 to-fuchsia-800 shadow-gray-300/50 shadow-md -mt-10">
                     Edit Profile<br/><sub className="text-slate-100 font-thin">Complete your profile</sub>
                  </div>
                  <div className='mt-16'>
                    <form className="w-full " autoComplete="true">
                        <div className="flex space-x-6 space-y-16">
                            <input
                            type="text"
                            placeholder="Company(disabled)" disabled
                            className=" flex-1 bg-inherit border-b outline-none w-full sm:w-auto"/>
                            <input
                            type="text"
                            placeholder="Username"
                            className="flex-1 bg-inherit border-b focus:border-purple-600 focus:border-b-2 outline-none w-full sm:w-auto"
                            />
                            <input
                            type="text"
                            placeholder="Email address"
                            className="flex-1 bg-inherit border-b focus:border-purple-600 focus:border-b-2 outline-none w-full sm:w-auto"
                            />
                        </div>
                        
                        <div className="flex space-x-6 space-y-16">
                            <input
                            type="text"
                            placeholder="First name"
                            className="flex-1 bg-inherit border-b focus:border-purple-600 focus:border-b-2 outline-none"
                            />
                            <input
                            type="text"
                            placeholder="Last name"
                            className="flex-1 bg-inherit border-b focus:border-purple-600 focus:border-b-2 outline-none"
                            />
                        </div>

                        <div className="flex space-x-6 space-y-16">
                            <input
                            type="text"
                            placeholder="City"
                            className=" flex-1 bg-inherit border-b focus:border-purple-600 focus:border-b-2 outline-none w-full sm:w-auto"/>
                            <input
                            type="text"
                            placeholder="Country"
                            className="flex-1 bg-inherit border-b focus:border-purple-600 focus:border-b-2 outline-none w-full sm:w-auto"
                            />
                            <input
                            type="text"
                            placeholder="Postal code"
                            className="flex-1 bg-inherit border-b focus:border-purple-600 focus:border-b-2 outline-none w-full sm:w-auto"
                            />
                        </div>
                        <p className="text-gray-400">About me</p>
                        <textarea
                        className="mt-16 resize-none form-textarea w-full h-24 border-b focus:border-purple-600 focus:border-b-2 outline-none"
                        placeholder="Enter your text here..."
                        rows={4}
                        />
                        <button type="button" className="mt-10 text-white py-4 px-8 bg-fuchsia-700 rounded shadow-gray-300/50 shadow-md  active:bg-fuchsia-500 active:shadow-fuchsia-400/50 active:shadow-lg">UPDATE PROFILE</button>
                    </form>
                  </div>
                </div>
              </div>
              <div className="">
              <div className="btn p-2 text-gray-500 grid place-items-center space-y-5">
                <div className="rounded-full shadow-gray-500/50 shadow-lg bg-red-300 w-32 h-32 -mt-20 text-center">.</div>
                  <p>CEO / CO-FOUNDER</p>
                  <p className="text-xl">Alec Thompson</p>
                  <p className="px-4 text-center">Don't be scared of the truth because we need to restart the human foundation in truth And I love you like Kanye loves Kanye I love Rick Owens’ bed design but the back is...</p>
                  <button type="button" className=" text-white py-4 px-8 bg-fuchsia-700 rounded-full shadow-gray-300/50 shadow-md  active:bg-fuchsia-500 active:shadow-fuchsia-400/50 active:shadow-lg">FOLLOW</button>
              </div>
              </div>
            </div>

            <div>
                
            </div>
        
    </div>
    </>
  )
}

