import React from 'react'
import Link from 'next/link'
import Header from '../components/Header'

const topography = () => {
  return (
    <div className="ml-64 w-full">
      <div className="flex px-8 py-4">
          <Link
            className="absolute text-gray-500 cursor-pointer px-3 py-1 text-xl active:bg-gray-300"
            href="/"
          >
            Topography
          </Link>
          <Header/>
      </div>

      <section className="m-4">
        <div className="btn w-full p-2">
                <div className=" p-2">
                  <div className="text-white text-lg rounded  p-3 bg-gradient-to-r from-fuchsia-600 to-fuchsia-700 shadow-fuchsia-300 shadow-md -mt-10">
                  Material Dashboard Heading<br/><sub className="text-slate-100 font-thin">Created using Roboto Font Family</sub>
                  </div>
                  <div className="pt-10 overflow-auto ">
                    <table className="w-full text-left font-thin ">
                      <tr className=" ">
                      <td className="text-gray-400">Header1</td>
                      <td className="text-4xl">The Life of Material Dashboard</td>
                      </tr>

                      <tr className=" ">
                      <td className="text-gray-400">Header2</td>
                      <td className="text-3xl ">The Life of Material Dashboard</td>
                      </tr>

                      <tr className="  ">
                      <td className="text-gray-400">Header3</td>
                      <td className="text-2xl">The Life of Material Dashboard</td>
                      </tr>

                      <tr className=" ">
                      <td className="text-gray-400">Header4</td>
                      <td className="text-xl">The Life of Material Dashboard</td>
                      </tr>

                      <tr className="">
                      <td className="text-gray-400">Header5</td>
                      <td className="text-lg">The Life of Material Dashboard</td>
                      </tr>

                      <tr className=" ">
                      <td className="text-gray-400">Header6</td>
                      <td className="uppercase">The Life of Material Dashboard</td>
                      </tr>

                      <tr className=" ">
                      <td className="text-gray-400">Paragraph</td>
                      <td >I will be the leader of a company that ends up being worth billions of dollars, because I got the answers. I understand culture. I am the nucleus. I think that’s a responsibility that I have, to push possibilities, to show people, this is the level that things could be at.</td>
                      </tr>

                      <tr className="">
                      <td className="text-gray-400">Quote</td>
                      <td><blockquote><em>I will be the leader of a company that ends up being worth billions of dollars, because I got the answers. I understand culture. I am the nucleus. I think that’s a responsibility that I have, to push possibilities, to show people, this is the level that things could be at.</em></blockquote>-Kanye West, Musician</td>
                      </tr>
                      
                      <tr className=" ">
                      <td className="text-gray-400">Muted Text</td>
                      <td className="text-gray-400">I will be the leader of a company that ends up being worth billions of dollars, because I got the answers...</td>
                      </tr>

                      <tr className="  ">
                      <td className="text-gray-400">Primary Text</td>
                      <td className="text-primary">I will be the leader of a company that ends up being worth billions of dollars, because I got the answers...</td>
                      </tr>
                      
                      <tr className=" border-b py-3">
                      <td className="text-gray-400">Info Text</td>
                      <td className="text-cyan-400 ">I will be the leader of a company that ends up being worth billions of dollars, because I got the answers...</td>
                      </tr>
                      
                      <tr className=" border-b py-3">
                      <td className="text-gray-400">Success Text</td>
                      <td className="text-lime-500">I will be the leader of a company that ends up being worth billions of dollars, because I got the answers...</td>
                      </tr>
                      
                      <tr className=" border-b py-3">
                      <td className="text-gray-400">warning Text</td>
                      <td className="text-amber-500">I will be the leader of a company that ends up being worth billions of dollars, because I got the answers...</td>
                      </tr>
                      
                      <tr className=" border-b py-3">
                      <td className="text-gray-400">Danger Text</td>
                      <td className="text-red-500">I will be the leader of a company that ends up being worth billions of dollars, because I got the answers...</td>
                      </tr>

                      <tr className=" border-b py-3">
                      <td className="text-gray-400">Small Tag</td>
                      <td className="py-3">Header with small subtitle Use "Small" tag for the headers</td>
                      </tr>

                      
                    </table>
                  </div>
                </div>
        </div>
      </section>
        
    </div>
  )
}

export default topography