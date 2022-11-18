import Footer from '../components/Footer'
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
      <Navbar/>
      <Component {...pageProps} />
      <Footer/>
    </div>
  )
}

export default MyApp
