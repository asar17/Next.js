//import '@/styles/globals.css'
import '../styles/globals.css'
import '../styles/layout.css'

import 'bootstrap/dist/css/bootstrap.min.css'
import Header from '../components/layout/Header'
import Footer from '../components/layout/Footer'


export default function App({ Component, pageProps }) {
  if(Component.getLayout){
     return Component.getLayout(<Component {...pageProps} />)
  }
  return (
    <>
      <Header/>
        <Component {...pageProps} />
      <Footer/>
    </>
  )
}
