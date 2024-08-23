import React from 'react'
import Link from 'next/link'

const Footer = () => {
  return (
        <div className="w-full ml-64 mt-16" >
        <hr/>
        <nav className="py-6 px-2 " >
                <ul className="flex gap-6 justify-start md:justify-between ml-4 text-xs font-medium text-gray-600">
                    <li >
                        <Link className="hover:text-fuchsia-700" href="/" >HOME</Link>
                    </li>
                    <li>
                        <Link className="hover:text-fuchsia-700" href="/">COMPANY</Link>
                    </li>
                    <li>
                        <Link className="hover:text-fuchsia-700" href="/" >PORTFOLIO</Link>
                    </li>
                    <li>
                        <Link className="hover:text-fuchsia-700" href="/">BLOG</Link>
                    </li>
                    <li className=" ml-auto font-light text-sm">© 2024
                        <Link className="text-fuchsia-700" href="/" > Creative Tim</Link>, made with love for a better web
                    </li>
                </ul>
            </nav>
        </div>
  )
}

export default Footer