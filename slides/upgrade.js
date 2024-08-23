import React from 'react'
import Link from 'next/link'
import Header from '../components/Header'
import { Icons } from "../utils/icons"

const upgrade = () => {
  return (
    <div className="ml-64 w-full">
      <div className="flex px-8 py-4">
          <Link
            className="absolute text-gray-500 cursor-pointer px-3 py-1 text-xl active:bg-gray-300"
            href="/"
          >
            Upgrade to PRO
          </Link>
          <Header/>
      </div>
            <section class=" font-thin lg:mx-44">
              <div class="btn w-full p-2">
                <div class=" p-2 ">
                  <div class="text-white text-lg rounded  p-3 bg-gradient-to-r from-cyan-400 to-cyan-500 shadow-cyan-200 shadow-md -mt-10">
                  Material Dashboard PRO React<br/><sub class="text-slate-100">Are you looking for more components? Please check our Premium Version of Material Dashboard Angular.</sub>
                  </div>

                  <table class="w-full border-collapse">
                    <thead>
                      <tr class="border-b">
                        <th class=" py-3 w-1/2 "></th>
                        <th class=" py-3 ">Free</th>
                        <th class=" py-3  ">PRO</th>
                      </tr>
                    </thead>
                    <tbody>
                      <tr class="border-b">
                        <td class="py-3 px-4">Components</td>	
                        <td class="py-3 text-center">30</td>
                        <td class="py-3 text-center">200</td>
                      </tr>
                      <tr class="border-b">
                        <td class="py-3 px-4">Plugins</td>	
                        <td class="py-3 text-center">2</td>
                        <td class="py-3 text-center">10</td>
                      </tr>
                      <tr class="border-b">
                        <td class="py-3 px-4">Example Pages</td>	
                        <td class="py-3 text-center">7</td>
                        <td class="py-3 text-center">28</td>
                      </tr>
                      <tr class="border-b">
                        <td class="py-3 px-4">Login, Register, Pricing, Lock Pages</td>	
                        <td class="text-red-500 py-3 text-center"><Icons.cross/></td>
                        <td class="text-green-500 py-3 text-center"><Icons.check/></td>
                      </tr>
                      <tr class="border-b">
                        <td class="py-3 px-4">ReactTables, ReactVectorMap, ReactSweetAlert, Wizard, Validation, ReactBigCalendar etc...</td>	
                        <td class="text-red-500 py-3 text-center"><Icons.cross/></td>
                        <td class="text-green-500 py-3 text-center"><Icons.check/></td>
                      </tr>
                      <tr class="border-b">
                        <td class="py-3 px-4">Mini Sidebar</td>	
                        <td class="text-red-500 py-3 text-center"><Icons.cross/></td>
                        <td class="text-green-500 py-3 text-center"><Icons.check/></td>
                      </tr>
                      <tr class="border-b">
                        <td class="py-3 px-4">Premium Support</td>	
                        <td class="text-red-500 py-3 text-center"><Icons.cross/></td>
                        <td class="text-green-500 py-3 text-center"><Icons.check/></td>
                      </tr>
                      <tr class="border-b">
                        <td></td>
                        <td class="py-3 text-center">Free</td>	
                        <td class="py-3 text-center">Just $59</td>	
                      </tr>
                    
                    <tr>
                      <td></td>
                      <td class="py-3 text-center">
                        <button class=" bg-gray-300 rounded-full px-4 py-2 text-sm font-mono text-white">CURRENT VERSION</button>	
                      </td>
                      <td class="py-3 text-center">
                        <button class=" bg-red-500 rounded-full px-4 py-2 text-sm font-mono hover:shadow-lg hover:shadow-red-300 text-white">UPGRADE TO PRO</button>
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