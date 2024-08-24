import React from 'react'
import Link from 'next/link'
import Header from '../components/Header'
import { Icons } from "../utils/icons"

const upgrade = () => {
  return (
    <div className="ml-64 w-full">
      <div className="flex px-4 py-2">
          <Link
            className="absolute text-gray-500 cursor-pointer px-6 py-3 rounded text-lg font-light active:bg-slate-300"
            href="/"
          >
            Upgrade to PRO
          </Link>
          <Header/>
      </div>
            <section className=" lg:mx-44 sm:mx-10">
              <div className="btn w-full p-2">
                <div className=" p-2 ">
                  <div className="text-white text-lg rounded font-light p-3.5 bg-gradient-to-r from-cyan-400 to-cyan-500 !shadow-cyan -mt-10">
                  Material Dashboard PRO React<br/><sub class="text-slate-100 opacity-90 font-thin">Are you looking for more components? Please check our Premium Version of Material Dashboard Angular.</sub>
                  </div>

                  <table className="w-full border-collapse font-light text-sm leading-6 ">
                    <thead>
                      <tr className="border-b">
                        <th className=" py-3 w-1/2 "></th>
                        <th className=" py-3 ">Free</th>
                        <th className=" py-3  ">PRO</th>
                      </tr>
                    </thead>
                    <tbody>
                      <tr className="border-b">
                        <td className="py-3 px-4">Components</td>	
                        <td className="py-3 text-center">30</td>
                        <td className="py-3 text-center">200</td>
                      </tr>
                      <tr className="border-b">
                        <td className="py-3 px-4">Plugins</td>	
                        <td className="py-3 text-center">2</td>
                        <td className="py-3 text-center">10</td>
                      </tr>
                      <tr className="border-b">
                        <td className="py-3 px-4">Example Pages</td>	
                        <td className="py-3 text-center">7</td>
                        <td className="py-3 text-center">28</td>
                      </tr>
                      <tr className="border-b">
                        <td className="py-3 px-4">Login, Register, Pricing, Lock Pages</td>	
                        <td className="text-red-500 py-3 text-center pl-[4.5rem]"><Icons.cross size={20}/></td>
                        <td className="text-green-500 py-3 text-center pl-[4.5rem]"><Icons.check  size={20}/></td>
                      </tr>
                      <tr className="border-b">
                        <td className="py-3 px-4">ReactTables, ReactVectorMap, ReactSweetAlert, Wizard, Validation, ReactBigCalendar etc...</td>	
                        <td className="text-red-500 py-3 text-center pl-[4.5rem]"><Icons.cross size={20}/></td>
                        <td className="text-green-500 py-3 text-center pl-[4.5rem]"><Icons.check  size={20}/></td>
                      </tr>
                      <tr className="border-b">
                        <td className="py-3 px-4">Mini Sidebar</td>	
                        <td className="text-red-500 py-3 text-center pl-[4.5rem]"><Icons.cross size={20}/></td>
                        <td className="text-green-500 py-3 text-center pl-[4.5rem]"><Icons.check  size={20}/></td>
                      </tr>
                      <tr className="border-b">
                        <td className="py-3 px-4">Premium Support</td>	
                        <td className="text-red-500 py-3 text-center pl-[4.5rem]"><Icons.cross size={20}/></td>
                        <td className="text-green-500 py-3 text-center pl-[4.5rem]"><Icons.check  size={20}/></td>
                      </tr>
                      <tr className="border-b">
                        <td></td>
                        <td className="py-3 text-center">Free</td>	
                        <td className="py-3 text-center">Just $59</td>	
                      </tr>
                    
                    <tr>
                      <td></td>
                      <td className="py-3 text-nowrap text-center">
                        <button className=" bg-gray-400 rounded-full px-4 py-2 text-sm font-mono text-white">CURRENT VERSION</button>	
                      </td>
                      <td className="py-3 text-nowrap text-center">
                        <button className=" bg-red-500 rounded-full px-4 py-2 text-sm font-mono hover:shadow-lg hover:shadow-red-300 text-white">UPGRADE TO PRO</button>
                      </td>
                  	</tr>
                    </tbody>
                  </table>
                </div>
              </div>
            </section>

    </div>
  )
}

export default upgrade