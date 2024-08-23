import React from 'react'
import Header from '../components/Header'
import Link from 'next/link'

const tableList = () => {
  return (
    <div className="ml-64 w-full">
      <div className="flex px-8 py-4">
          <Link
            className="absolute text-gray-500 cursor-pointer px-3 py-1 text-xl active:bg-gray-300"
            href="/"
          >
            Table List
          </Link>
          <Header/>
      </div>
        <section className="m-4">
        <div className="btn w-full p-2">
                <div className=" p-2">
                  <div className="text-white text-lg rounded  p-3 bg-gradient-to-r from-fuchsia-600 to-fuchsia-700 shadow-fuchsia-300 shadow-md -mt-10">
                  Simple Table<br/><sub className="text-slate-100 font-thin">Here is a subtitle for this table</sub>
                  </div>
                  <div className="pt-10 overflow-auto">
                    <table className="w-full text-left font-thin">
                      <thead>
                      <tr className=" border-b text-fuchsia-600">
                        <td className="py-3">Name</td>
                        <td>Country</td>
                        <td>City</td>
                        <td>Salary</td>
                      </tr>
                      </thead>
                      <tbody>
                      <tr className=" border-b">
                        <td className="py-3">Dakota Rice</td>
                        <td>Niger</td>
                        <td>Oud-Turnhout</td>
                        <td>$36,738</td>
                      </tr>			
                      <tr className=" border-b">
                        <td className="py-3">Minerva Hooper</td>
                        <td>Curaçao</td>
                        <td>Sinaai-Waas</td>
                        <td>$23,789</td>
                      </tr>
                      <tr className="  border-b">
                        <td className="py-3">Sage Rodriguez	</td>
                        <td>Netherlands</td>
                        <td>Baileux</td>
                        <td>$56,142</td>
                      </tr>
                      <tr className=" border-b">
                        <td className="py-3">Philip Chaney</td>
                        <td>Korea, South</td>
                        <td>Overland Park</td>
                        <td>$38,735</td>
                      </tr>
                      <tr className=" border-b">
                        <td className="py-3">Doris Greene</td>
                        <td>Malawi</td>
                        <td>Feldkirchen in Kärnten</td>
                        <td>$63,542</td>
                      </tr>
                      <tr className=" border-b">
                        <td className="py-3">Mason Porter</td>
                        <td>Chile</td>
                        <td>Gloucester</td>
                        <td>78,615</td>
                      </tr>
                      </tbody>
                    </table>
                  </div>
                </div>
              </div>
        </section>

        <section className="mt-16 m-4">
        <div className="mt-10 px-4 py-2 w-full p-2">
                <div className=" p-2">
                  <div className="text-white text-lg rounded  p-3 bg-gradient-to-r from-fuchsia-600 to-fuchsia-700 shadow-fuchsia-300 shadow-md -mt-10">
                  Table on Plain Background<br/><sub className="text-slate-100 font-thin">Here is a subtitle for this table</sub>
                  </div>
                  <div className="pt-10 overflow-auto">
                    <table className="w-full text-left font-thin">
                      <thead>
                      <tr className=" border-b text-fuchsia-600">
                        <td className="py-3">Name</td>
                        <td>Country</td>
                        <td>City</td>
                        <td>Salary</td>
                      </tr>
                      </thead>
                      <tbody>
                      <tr className=" border-b">
                        <td className="py-3">Dakota Rice</td>
                        <td>Niger</td>
                        <td>Oud-Turnhout</td>
                        <td>$36,738</td>
                      </tr>			
                      <tr className=" border-b">
                        <td className="py-3">Minerva Hooper</td>
                        <td>Curaçao</td>
                        <td>Sinaai-Waas</td>
                        <td>$23,789</td>
                      </tr>
                      <tr className="  border-b">
                        <td className="py-3">Sage Rodriguez	</td>
                        <td>Netherlands</td>
                        <td>Baileux</td>
                        <td>$56,142</td>
                      </tr>
                      <tr className=" border-b">
                        <td className="py-3">Philip Chaney</td>
                        <td>Korea, South</td>
                        <td>Overland Park</td>
                        <td>$38,735</td>
                      </tr>
                      <tr className=" border-b">
                        <td className="py-3">Doris Greene</td>
                        <td>Malawi</td>
                        <td>Feldkirchen in Kärnten</td>
                        <td>$63,542</td>
                      </tr>
                      <tr className=" border-b">
                        <td className="py-3">Mason Porter</td>
                        <td>Chile</td>
                        <td>Gloucester</td>
                        <td>78,615</td>
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

export default tableList