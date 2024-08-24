import React from 'react'
import Link from 'next/link'
import Header from '../components/Header'

const typography = () => {
  return (
    <div className="ml-64 w-full">
      <div className="flex px-4 py-2">
          <Link
            className="absolute text-gray-500 cursor-pointer px-6 py-3 rounded text-lg font-light active:bg-slate-300"
            href="/"
          >
            Typography
          </Link>
          <Header/>
      </div>

      <section className="px-4">
        <div className="btn w-full p-2">
                <div className=" p-2">
                  <div className="text-white text-lg rounded font-light p-3.5 bg-gradient-to-r from-fuchsia-700 to-fuchsia-800 !shadow-fuchsia -mt-10">
                  Material Dashboard Heading<br/><sub className="text-slate-100 opacity-90 font-thin">Created using Roboto Font Family</sub>
                  </div>
                  <div className="pt-10  ">
                    <table className="w-full text-left font-light border-separate border-spacing-y-[0.8rem] px-4">
                    <thead>
                      <tr className=" ">
                      <td className="text-gray-400 pr-36 text-[0.85rem] opacity-60 font-medium align-bottom ">Header 1</td>
                      <td className="text-[2.5rem] ">The Life of Material Dashboard</td>
                      </tr>
                    </thead>
                    <tbody>
                      <tr className=" ">
                      <td className="text-gray-400 pr-36 text-[0.85rem] opacity-60 align-bottom font-medium">Header2</td>
                      <td className="text-[2rem]  ">The Life of Material Dashboard</td>
                      </tr>

                      <tr className="  ">
                      <td className="text-gray-400  pr-36 text-[0.85rem] opacity-60 align-bottom font-medium">Header3</td>
                      <td className="text-[1.6rem] ">The Life of Material Dashboard</td>
                      </tr>

                      <tr className=" ">
                      <td className="text-gray-400 pr-36 text-[0.85rem] opacity-60 align-bottom font-medium">Header4</td>
                      <td className="text-[1.4rem] ">The Life of Material Dashboard</td>
                      </tr>

                      <tr className="">
                      <td className="text-gray-400 pr-36 text-[0.85rem] opacity-60 align-bottom font-medium">Header5</td>
                      <td className="text-[1.2rem] ">The Life of Material Dashboard</td>
                      </tr>

                      <tr className=" ">
                      <td className="text-gray-400 pr-36 text-[0.85rem] opacity-60 align-bottom font-medium">Header6</td>
                      <td className="uppercase ">The Life of Material Dashboard</td>
                      </tr>

                      <tr className=" ">
                      <td className="text-gray-400 pr-36 text-[0.85rem] opacity-60 align-bottom font-medium">Paragraph</td>
                      <td className=" text-[0.85rem]">I will be the leader of a company that ends up being worth billions of dollars, because I got the answers. I understand culture. I am the nucleus. I think that’s a responsibility that I have, to push possibilities, to show people, this is the level that things could be at.</td>
                      </tr>

                      <tr className="">
                      <td className="text-gray-400 pr-36 text-[0.85rem] opacity-60 align-bottom font-medium">Quote</td>
                      <td className="border-s-4 py-0.5 "><blockquote><em className="text-lg">I will be the leader of a company that ends up being worth billions of dollars, because I got the answers. I understand culture. I am the nucleus. I think that’s a responsibility that I have, to push possibilities, to show people, this is the level that things could be at.</em></blockquote>
                      <p className="text-gray-400 text-[0.85rem] pt-2">-Kanye West, Musician</p></td>
                      </tr>
                      
                      <tr>
                      <td className="text-gray-400 pr-36 text-[0.85rem] opacity-60 align-bottom font-medium text-nowrap">Muted Text</td>
                      <td className="text-gray-500 text-[0.85rem] ">I will be the leader of a company that ends up being worth billions of dollars, because I got the answers...</td>
                      </tr>

                      <tr>
                      <td className="text-gray-400 pr-36 text-[0.85rem] opacity-60 align-bottom font-medium text-nowrap">Primary Text</td>
                      <td className="text-fuchsia-700 text-[0.85rem] ">I will be the leader of a company that ends up being worth billions of dollars, because I got the answers...</td>
                      </tr>
                      
                      <tr>
                      <td className="text-gray-400 pr-36 text-[0.85rem] opacity-60 align-bottom font-medium text-nowrap">Info Text</td>
                      <td className="text-cyan-400 text-[0.85rem] ">I will be the leader of a company that ends up being worth billions of dollars, because I got the answers...</td>
                      </tr>
                      
                      <tr className="">
                      <td className="text-gray-400 pr-36 text-[0.85rem] opacity-60 align-bottom font-medium text-nowrap">Success Text</td>
                      <td className="text-green-700 text-[0.85rem]">I will be the leader of a company that ends up being worth billions of dollars, because I got the answers...</td>
                      </tr>
                      
                      <tr>
                      <td className="text-gray-400 pr-36 text-[0.85rem] opacity-60 align-bottom font-medium text-nowrap">Warning Text</td>
                      <td className="text-amber-500 text-[0.85rem] ">I will be the leader of a company that ends up being worth billions of dollars, because I got the answers...</td>
                      </tr>
                      
                      <tr>
                      <td className="text-gray-400 pr-36 text-[0.85rem] opacity-60 align-bottom font-medium text-nowrap">Danger Text</td>
                      <td className="text-red-500 text-[0.85rem] ">I will be the leader of a company that ends up being worth billions of dollars, because I got the answers...</td>
                      </tr>

                      <tr>
                      <td className="text-gray-400 pr-36 text-[0.85rem] opacity-60 align-bottom font-medium text-nowrap">Small Tag</td>
                      <td><p className="text-[2rem]">Header with small subtitle <br/><small>Use "Small" tag for the headers</small></p></td>
                      </tr>

                    </tbody>
                    </table>
                  </div>
                </div>
        </div>
      </section>
        
    </div>
  )
}

export default typography
