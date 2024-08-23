import Footer from '../components/Footer'
import SideNavbar from '../components/SideNavbar'
import Sidebar from '../components/sidebar'
import '../styles/globals.css'

function MyApp({ Component, pageProps }) {
  return (
    <>
    <Component {...pageProps} />
    <SideNavbar/>
    <Sidebar/>
    <Footer/>
    </>
  )
}

export default MyApp
