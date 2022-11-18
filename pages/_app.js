import Footer from '../components/Footer'
import GoogleTag from '../components/Google-tag'
//import Layout from '../components/Layout'
import Navbar from '../components/Navbar'
import '../styles/globals.css'

/* function MyApp({ Component, pageProps }) {
  return (
    <Layout>
      <Component {...pageProps} />
    </Layout>
  )
} */

function MyApp({ Component, pageProps }) {
  return (
    <div className="content">
      <GoogleTag/>
      <Navbar/>
      <Component {...pageProps} />
      <Footer/>
    </div>
  )
}

export default MyApp
