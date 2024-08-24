import Footer from '../components/Footer'
import SideNavbar from '../components/SideNavbar'
import Sidebar from '../components/sidebar'
import '../styles/globals.css'
import Head from 'next/head';

function MyApp({ Component, pageProps }) {
  return (
    <>
    <Head>
        <title>Material Dashboard React By Creative Tim</title>
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
        <link href="https://fonts.googleapis.com/css2?family=Roboto:wght@100;300;400;500;700&display=swap" rel="stylesheet"/>
    </Head>
    <div className=" flex ">  
        <Component {...pageProps} className="flex-1 "/>
    </div>
    <Sidebar/>
    <Footer />
    <SideNavbar/>
    </>
  )
}

export default MyApp
