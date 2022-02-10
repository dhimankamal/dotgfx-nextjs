import 'bootstrap/dist/css/bootstrap.css'
import '../styles/globals.css'
import TopNavbar from './Components/TopNavbar'
import Navbar from './Components/Navbar'
import Footer from './Components/Footer'
import Script from 'next/script'

function MyApp ({ Component, pageProps }) {
  return (
    <>
      <TopNavbar />
      <Navbar />
      <Component {...pageProps} />
      <Footer />
      <Script
        src='https://cdn.jsdelivr.net/npm/bootstrap@5.0.0-beta1/dist/js/bootstrap.bundle.min.js'
        integrity='sha384-ygbV9kiqUc6oa4msXn9868pTtWMgiQaeYH7/t7LECLbyPA2x65Kgf80OJFdroafW'
        crossorigin='anonymous'
      />
    </>
  )
}

export default MyApp
