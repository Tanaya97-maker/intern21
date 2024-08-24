import React from 'react'
import Link from 'next/link'
import Header from '../components/Header'

export default function userProfile () {
  return (
    <>
    <div className="ml-64 w-full px-4 ">
        <div className="flex px-4 py-2">
          <Link
            className="absolute text-gray-500 cursor-pointer px-6 py-3 rounded text-lg font-light active:bg-slate-300"
            href="/"
          >
            User Profile
          </Link>
          <Header/>
        </div>
            <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 p-2" >
              <div className="btn w-full p-2 col-span-2 ">
                <div className=" p-2">
                  <div className="text-white text-lg rounded font-light p-3.5 bg-gradient-to-r from-fuchsia-700 to-fuchsia-800 !shadow-fuchsia -mt-10">
                     Edit Profile<br/><sub className="text-slate-100 opacity-90 font-thin">Complete your profile</sub>
                  </div>
                  <div className='mt-2 text-sm'>
                    <form className="w-full " autoComplete="true">
                        <div className="flex space-x-8 pt-14 ">
                            <input
                            type="text"
                            placeholder="Company(disabled)" disabled
                            className=" flex-1 bg-inherit border-b pb-1 outline-none w-full sm:w-auto"/>
                            <div class="relative">
                              <input
                              type="text"
                              id="1"
                              placeholder="Username"
                              className="user flex-1 bg-inherit border-b pb-1 border-gray-300 focus:border-purple-600 focus:border-b-2 outline-none w-full  sm:w-auto peer "
                              />
                              <label
                              for="1"
                              className="absolute left-0 -top-5 transition-all duration-200 transform text-gray-400 text-[0.7rem] opacity-0 scale-90 peer-focus:opacity-100 peer-focus:scale-100 "
                              >Username
                              </label>
                            </div>
                            <div class="relative">
                              <input
                              type="text"
                              id="2"
                              placeholder="Email address"
                              className="user flex-1 bg-inherit border-b pb-1 border-gray-300 focus:border-purple-600 focus:border-b-2 outline-none w-full  sm:w-auto peer "
                              />
                              <label
                              for="2"
                              className="absolute left-0 -top-5 transition-all duration-200 transform text-gray-400 text-[0.7rem] opacity-0 scale-90 peer-focus:opacity-100 peer-focus:scale-100 "
                              >Email address
                              </label>
                            </div>
                        </div>
                        
                        <div className="flex space-x-8 pt-14 ">
                          <div class="relative w-full">
                              <input
                              type="text"
                              id="3"
                              placeholder="First name"
                              className="user flex-1 bg-inherit border-b pb-1 border-gray-300 focus:border-purple-600 focus:border-b-2 outline-none  sm:w-auto peer "
                              />
                              <label
                              for="3"
                              className="absolute left-0 -top-5 transition-all duration-200 transform text-gray-400 text-[0.7rem] opacity-0 scale-90 peer-focus:opacity-100 peer-focus:scale-100 "
                              >First name
                              </label>
                            </div>
                            <div class="relative w-full">
                              <input
                              type="text"
                              id="4"
                              placeholder="Last name"
                              className="user bg-inherit border-b pb-1 border-gray-300 focus:border-purple-600 focus:border-b-2 outline-none w-full  sm:w-auto peer "
                              />
                              <label
                              for="4"
                              className="absolute left-0 -top-5 transition-all duration-200 transform text-gray-400 text-[0.7rem] opacity-0 scale-90 peer-focus:opacity-100 peer-focus:scale-100 "
                              >Last name
                              </label>
                            </div>
                        </div>

                        <div className="flex space-x-8 pt-14  ">
                          <div class="relative">
                              <input
                              type="text"
                              id="5"
                              placeholder="City"
                              className="user flex-1 bg-inherit border-b pb-1 border-gray-300 focus:border-purple-600 focus:border-b-2 outline-none w-full  sm:w-auto peer "
                              />
                              <label
                              for="5"
                              className="absolute left-0 -top-5 transition-all duration-200 transform text-gray-400 text-[0.7rem] opacity-0 scale-90 peer-focus:opacity-100 peer-focus:scale-100 "
                              >City
                              </label>
                            </div>
                            <div class="relative">
                              <input
                              type="text"
                              id="6"
                              placeholder="Country"
                              className="user flex-1 bg-inherit border-b pb-1 border-gray-300 focus:border-purple-600 focus:border-b-2 outline-none w-full  sm:w-auto peer "
                              />
                              <label
                              for="6"
                              className="absolute left-0 -top-5 transition-all duration-200 transform text-gray-400 text-[0.7rem] opacity-0 scale-90 peer-focus:opacity-100 peer-focus:scale-100 "
                              >Country
                              </label>
                            </div>
                            <div class="relative">
                              <input
                              type="text"
                              id="7"
                              placeholder="Postal code"
                              className="user flex-1 bg-inherit border-b pb-1 border-gray-300 focus:border-purple-600 focus:border-b-2 outline-none w-full  sm:w-auto peer "
                              />
                              <label
                              for="7"
                              className="absolute left-0 -top-5 transition-all duration-200 transform text-gray-400 text-[0.7rem] opacity-0 scale-90 peer-focus:opacity-100 peer-focus:scale-100 "
                              >Postal code
                              </label>
                            </div>
                        </div>
                        <p className="text-gray-400 pt-2 text-base">About me</p>

                        <div class="relative">
                          <textarea
                          id="8"
                          className=" user mt-12 resize-none form-textarea w-full border-b border-gray-300 focus:border-purple-600 focus:border-b-2 outline-none peer"
                          placeholder="Lamborghini Mercy, Your chick she is so thirsty, I'm in that two seat Lambo."
                          rows={4}
                          />
                          <label
                          for="8"
                          className="absolute left-0 top-6 transition-all duration-200 transform text-gray-400 text-[0.7rem] opacity-0 scale-90 peer-focus:opacity-100 peer-focus:scale-100 "
                          >Lamborghini Mercy, Your chick she is so thirsty, I'm in that two seat Lambo.
                          </label>
                        </div>
                        <button type="button" className="mt-10 text-white text-xs py-3.5 px-8 bg-fuchsia-700 rounded  !shadow-fuchsia active:bg-fuchsia-500 ">UPDATE PROFILE</button>
                    </form>
                  </div>
                </div>
              </div>
              <div >
              <div className="btn p-2  grid place-items-center ">
                <img src="./images/person.jpg " className="rounded-full shadow-gray-500/50 shadow-xl  w-32 h-32 -mt-14 text-center" />
                  <p className="text-sm font-extralight pt-14">CEO / CO-FOUNDER</p>
                  <p className="text-lg font-light pt-8">Alec Thompson</p>
                  <p className="px-4 text-center font-light text-sm pt-6 leading-6">Don't be scared of the truth because we need to restart the human foundation in truth And I love you like Kanye loves Kanye I love Rick Owens’ bed design but the back is...</p>
                  <button type="button" className=" text-white text-xs mt-4 mb-2 py-3.5 px-7 bg-fuchsia-700 rounded-full  !shadow-fuchsia active:bg-fuchsia-500">FOLLOW</button>
              </div>
              </div>
            </div>

    </div>
    </>
  )
}

