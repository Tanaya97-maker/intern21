import React from 'react'
import Header from '../components/Header'
import Link from 'next/link'

const tableList = () => {
  return (
    <div className="ml-64 w-full px-4">
      <div className="flex px-4 py-2">
          <Link
            className="absolute text-gray-500 cursor-pointer px-6 py-3 rounded text-lg font-light active:bg-slate-300"
            href="/"
          >
            Table List
          </Link>
          <Header/>
      </div>
        <section className="px-4">
        <div className="btn w-full p-2">
                <div className=" p-2">
                  <div className="text-white text-lg rounded font-light p-3.5 bg-gradient-to-r from-fuchsia-700 to-fuchsia-800 !shadow-fuchsia -mt-10">
                  Simple Table<br/><sub className="text-slate-100 opacity-90 font-thin">Here is a subtitle for this table</sub>
                  </div>
                  <div className="pt-10 ">
                    <table className="w-full border-spacing-2 text-left font-light text-sm">
                      <thead>
                      <tr className=" border-b text-fuchsia-700">
                        <td>Name</td>
                        <td>Country</td>
                        <td>City</td>
                        <td>Salary</td>
                      </tr>
                      </thead>
                      <tbody>
                      <tr className=" border-b">
                        <td>Dakota Rice</td>
                        <td>Niger</td>
                        <td>Oud-Turnhout</td>
                        <td>$36,738</td>
                      </tr>			
                      <tr className=" border-b">
                        <td>Minerva Hooper</td>
                        <td>Curaçao</td>
                        <td>Sinaai-Waas</td>
                        <td>$23,789</td>
                      </tr>
                      <tr className="  border-b">
                        <td>Sage Rodriguez	</td>
                        <td>Netherlands</td>
                        <td>Baileux</td>
                        <td>$56,142</td>
                      </tr>
                      <tr className=" border-b">
                        <td>Philip Chaney</td>
                        <td>Korea, South</td>
                        <td>Overland Park</td>
                        <td>$38,735</td>
                      </tr>
                      <tr className=" border-b">
                        <td>Doris Greene</td>
                        <td>Malawi</td>
                        <td>Feldkirchen in Kärnten</td>
                        <td>$63,542</td>
                      </tr>
                      <tr className=" border-b">
                        <td>Mason Porter</td>
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

        <section className="mt-16 px-4">
        <div className=" w-full p-2">
                <div className=" p-2">
                  <div className="text-white text-lg rounded font-light p-3.5 bg-gradient-to-r from-fuchsia-700 to-fuchsia-800 !shadow-fuchsia ">
                  Table on Plain Background<br/><sub className="text-slate-100 opacity-90 font-thin">Here is a subtitle for this table</sub>
                  </div>
                  <div className="pt-10 px-4">
                    <table className="w-full text-left font-light text-sm">
                      <thead>
                      <tr className=" border-b text-fuchsia-700">
                        <td>ID</td>
                        <td>Name</td>
                        <td>Country</td>
                        <td>City</td>
                        <td>Salary</td>
                      </tr>
                      </thead>
                      <tbody>
                      <tr className=" border-b">
                        <td>1</td>
                        <td>Dakota Rice</td>
                        <td>Niger</td>
                        <td>Oud-Turnhout</td>
                        <td>$36,738</td>
                      </tr>			
                      <tr className=" border-b">
                        <td>2</td>
                        <td>Minerva Hooper</td>
                        <td>Curaçao</td>
                        <td>Sinaai-Waas</td>
                        <td>$23,789</td>
                      </tr>
                      <tr className="  border-b">
                        <td>3</td>
                        <td>Sage Rodriguez	</td>
                        <td>Netherlands</td>
                        <td>Baileux</td>
                        <td>$56,142</td>
                      </tr>
                      <tr className=" border-b">
                        <td>4</td>
                        <td>Philip Chaney</td>
                        <td>Korea, South</td>
                        <td>Overland Park</td>
                        <td>$38,735</td>
                      </tr>
                      <tr className=" border-b">
                        <td>5</td>
                        <td>Doris Greene</td>
                        <td>Malawi</td>
                        <td>Feldkirchen in Kärnten</td>
                        <td>$63,542</td>
                      </tr>
                      <tr className=" border-b">
                        <td>6</td>
                        <td>Mason Porter</td>
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