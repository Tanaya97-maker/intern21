
import Link from "next/link";
import React from "react";
import { useState } from "react";

import Chart1 from "../components/Chart1";
import Chart2 from "../components/Chart2";
import Chart3 from "../components/Chart3";
import { Icons } from "../utils/icons"
import Header from "../components/Header";

import { useRouter } from "next/router";

export default function Home() {

  const [selectedButton, setSelectedButton] = useState('button1');

  const taskData = {
    button1: [
      "Sign contract for 'What are conference organizers afraid of?'",
      "Lines From Great Russian Literature? Or E-mails From My Boss?",
      "Flooded: One year later, assessing what was lost and what was found when a ravaging rain swept through metro Detroit",
      "Create 4 Invisible User Experiences you Never Knew About",
    ],
    button2: [
      "Flooded: One year later, assessing what was lost and what was found when a ravaging rain swept through metro Detroit",
      "Sign contract for 'What are conference organizers afraid of?'",
    ],
    button3: [
      "Lines From Great Russian Literature? Or E-mails From My Boss?",
      "Flooded: One year later, assessing what was lost and what was found when a ravaging rain swept through metro Detroit",
      "Sign contract for 'What are conference organizers afraid of?'",
    ],
  };

  const router=useRouter()

  return (
    <>
      

      <div className= " ml-64 w-full ">
        <div className="flex px-4 py-2">
          <Link
            className="absolute text-gray-500 cursor-pointer px-6 py-3 rounded text-lg font-light active:bg-slate-300 "
            href="/"
          >
            Dashboard
          </Link>
          <Header/>
          </div>

        <div className="px-4 ">
          <section className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 p-2 ">
          {[
          {
            icon: <Icons.copy className="text-white text-4xl" />,
            bgColor: "bg-gradient-to-tr from-amber-400 to-amber-500",
            shadowColor: "!shadow-amber",
            title: "Used Space",
            value: <p>49/50<small className="font-normal"> GB</small></p>,
            footer: <a className="active:text-fuchsia-600 cursor-pointer">Get more space</a>,
            ficon: <Icons.warning className="text-red-500"/>
          },
          {
            icon: <Icons.shop className="text-white text-4xl" />,
            bgColor: "bg-gradient-to-tr from-green-500 to-green-600",
            shadowColor: "!shadow-green",
            title: "Revenue",
            value: "$34,245",
            footer: "Last 24 hours",
            ficon: <Icons.date />
          },
          {
            icon: <Icons.info className="text-white text-4xl" />,
            bgColor: "bg-gradient-to-tr from-red-500 to-red-600",
            shadowColor: "!shadow-red",
            title: "Fixed issues",
            value: "75",
            footer: "Tracked from Github",
            ficon: <Icons.tag />
          },
          {
            icon: <Icons.person className="text-white text-4xl" />,
            bgColor: "bg-gradient-to-tr from-cyan-400 to-cyan-500",
            shadowColor: "!shadow-cyan",
            title: "Followers",
            value: "+245",
            footer: "Just Updated",
            ficon: <Icons.update />
          }
          ].map((item, index) => (
            <div key={index}>
             <div className="btn w-full p-2">
                <div className="pb-3 p-2 ">
                  <div className={`float-left rounded h-[5.5rem] w-[5.5rem] p-6 ${item.bgColor} ${item.shadowColor} shadow-md mt-[-2.5rem]`}>
                     {item.icon}
                  </div>
                  <div className=" font-light text-end pl-28">
                    <p className="text-gray-400 text-sm  ">{item.title}</p>
                    <h3 className="text-2xl text-gray-600 break-all ">{item.value}</h3>
                  </div>
                </div>
                <div className="pt-2">
                  <hr />
                    <span className="text-gray-400 flex items-center space-x-1 ml-2 py-2 mt-1 ">
                      {item.ficon}
                      <p className="text-xs font-light">{item.footer}</p>
                    </span>
                </div>
              </div>
            </div>
          ))}
          </section>
        </div>

        <div className="px-4 ">
          <section className="grid grid-cols-1 lg:grid-cols-3 gap-6 p-2" >
          {[
          {
            id: <Chart1 />,
            bgColor: "bg-gradient-to-tr from-green-500 to-green-600",
            shadowColor: "!shadow-green",
            title: "Daily Sales",
            value: (
              <span className="flex  space-x-1">
                <Icons.arrow className="text-green-700" />
                <span className="text-green-700">55%</span> increase in today's sales.
              </span>
            ),
            footer: "updated 4 minutes ago"
          },
          {
            id: <Chart2 />,
            bgColor: "bg-gradient-to-tr from-amber-400 to-amber-500",
            shadowColor: "!shadow-amber",
            title: "Email Subscriptions",
            value: "Last Campaign Performance",
            footer: "campaign sent 2 days ago"
          },
          {
            id: <Chart3 />,
            bgColor: "bg-gradient-to-tr from-red-500 to-red-600",
            shadowColor: "shadow-red",
            title: "Completed Tasks",
            value: "Last Campaign Performance",
            footer: "campaign sent 2 days ago"
          },
          ].map((item, index) => (
            <div  key={index}>
             <div className="btn w-full p-2">
                <div className="pb-3 p-2 ">
                  <div className={`h-[12rem] rounded pl-7 pb-7 p-2 ${item.bgColor} ${item.shadowColor} mt-[-2.5rem]`}>
                    {item.id}
                  </div>
                  <div className="text-gray-600 font-light mt-2 ml-2">
                    <p className="text-lg py-2 ">{item.title}</p>
                    <p className="text-gray-400 text-sm">{item.value}</p>
                  </div>
                </div>
                <div className="pt-2 ml-2">
                  <hr />
                    <span className="text-gray-400 flex items-center space-x-1 ml-2 py-2 mt-1">
                      <Icons.clock className="text-sm font-light"/>
                      <p className="text-xs font-light">{item.footer}</p>
                    </span>
                </div>
              </div>
            </div>
          ))}
          
          </section>
        </div>

        <div className=" px-4">
            <section className="grid grid-cols-1 lg:grid-cols-2 gap-6 p-2" >
              <div>
              <div className="btn w-full p-2">
              <div className={`p-2  transition delay-150 duration-300 ease-in-out ${selectedButton === 'button1' ? 'h-auto' : 'h-auto'}`}>
                <div className="flex items-center text-white rounded text-sm font-light p-2 bg-gradient-to-tr from-fuchsia-600 to-fuchsia-700 !shadow-fuchsia -mt-10">
                <span className="mr-2">Tasks:</span>
                  <div className="flex-1 flex space-x-2">
                    <button  
                    onClick={() => setSelectedButton('button1')}
                    className={`m-1 p-3 font-medium text-xs opacity-70 focus:opacity-100 rounded ml-3 ${selectedButton === 'button1' ? 'bg-fuchsia-300/30' : ''}`}>
                    <Icons.bug className="text-white text-2xl inline-flex mr-1" />
                    BUGS
                    </button>
                    <button  
                    onClick={() => setSelectedButton('button2')}
                    className={`m-1 p-3 font-medium text-xs opacity-70 focus:opacity-100 rounded ml-3 ${selectedButton === 'button2' ? 'bg-fuchsia-300/30' : ''}`}>
                    <Icons.bracket className="text-white text-2xl inline-flex mr-1" />
                    WEBSITE
                    </button>
                    <button  
                    onClick={() => setSelectedButton('button3')}
                    className={`m-1 p-3 font-medium text-xs opacity-70 focus:opacity-100 rounded ml-3 ${selectedButton === 'button3' ? 'bg-fuchsia-300/30' : ''}`}>
                    <Icons.cloud className="text-white text-2xl inline-flex mr-1" />
                    SERVER
                    </button>
                  </div>
                </div>
                    <div className="mt-5 space-y-2 ">
                     {taskData[selectedButton].map((text, index) => (
                      <div key={index}>
                      <label className=" space-x-1 inline-flex items-center py-2 mx-4 ">
                      <input type="checkbox" className="check-input" />
                      <span className="checkmark"></span>
                        <p className="text-black font-light text-sm px-7 ">{text}</p>
                        <button type="button" className="relative group">
                          <Icons.pen className="text-fuchsia-700  hover:bg-gray-200 active:bg-gray-300 p-1 hover:rounded-full " size={20}/>
                          <p className="absolute z-10 text-nowrap bottom-8 shadow-md text-xs shadow-gray-500 left-1/2 transform -translate-x-1/2 text-white bg-stone-600 px-14 py-3 rounded hidden group-hover:block transition duration-300 opacity-90">
                          Edit Task</p>
                        </button>
                    
                        <button type="button" class="relative group">
                          <Icons.cross className="text-red-500 hover:bg-gray-200 active:bg-gray-300 p-1 hover:rounded-full " size={24}/>
                          <p className="absolute z-10 text-nowrap bottom-8 shadow-md text-xs shadow-gray-500 left-1/2 transform -translate-x-1/2 text-white bg-stone-600 px-14 py-3 rounded hidden group-hover:block transition duration-300 opacity-90">
                          Remove</p>
                        </button>
                     </label>
                    {index < taskData[selectedButton].length  && <hr />}
                    </div>
                    ))}
                    </div>
                 
              </div>
              </div>
              </div>
              
              <div className="btn  w-full p-2">
                <div className=" p-2">
                  <div className="text-white text-lg rounded font-light p-3 bg-gradient-to-r from-amber-400 to-amber-500 !shadow-amber -mt-10">
                     Employees Stats<br/><sub className="text-slate-100 opacity-80 font-thin">New Employees on 15th September,2016</sub>
                  </div>
                  <div className="pt-12 ">
                    <table className="w-full border-spacing-2 text-left text-sm font-light">
                      <thead>
                      <tr className=" border-b text-amber-500">
                        <td>ID</td>
                        <td>Name</td>
                        <td>Salary</td>
                        <td>Country</td>
                      </tr>
                      </thead>
                      <tbody>
                      <tr className=" border-b">
                        <td>1</td>
                        <td>Dakota Rice</td>
                        <td>$36,738</td>
                        <td>Niger</td>
                      </tr>
                      <tr className=" border-b">
                        <td>2</td>
                        <td>Minerva Hooper</td>
                        <td>$23,789</td>
                        <td>Curaçao</td>
                      </tr>
                      <tr className="  border-b">
                        <td>3</td>
                        <td>Sage Rodriguez</td>
                        <td>$56,142</td>
                        <td>Netherlands</td>
                      </tr>
                      <tr className=" border-b">
                        <td>4</td>
                        <td>Philip Chaney</td>
                        <td>$38,735</td>
                        <td>Korea, South</td>
                      </tr>
                      </tbody>
                      </table>
                  </div>
                </div>
              </div>
            </section>
        </div>


      </div>
    </>
  );
}
