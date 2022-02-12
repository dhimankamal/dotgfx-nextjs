import 'bootstrap/dist/css/bootstrap.css'
import '../styles/globals.css'
import TopNavbar from './Components/TopNavbar'
import Navbar from './Components/Navbar'
import Footer from './Components/Footer'


function MyApp ({ Component, pageProps }) {
  return (
    <>
      <TopNavbar />
      <Navbar />
      <Component {...pageProps} />
      <Footer />
     
    </>
  )
}

export default MyApp
