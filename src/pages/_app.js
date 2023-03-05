//import '@/styles/globals.css'
import  '../components/layout/Navbar.css'

import '../styles/globals.css'
import '../styles/layout.css'
import {SessionProvider} from 'next-auth/react'


import 'bootstrap/dist/css/bootstrap.min.css'
import Header from '../components/layout/Header'
import Footer from '../components/layout/Footer'
import Navbar from '../components/layout/Navbar'


export default function App({ Component, pageProps: { session, ...pageProps }  }) {
  if(Component.getLayout){
     return Component.getLayout(<Component {...pageProps }/>)
  }
  return (
    <>
    <SessionProvider session={session}>
        <Navbar/>
        <Header/>
          <Component {...pageProps} />
        <Footer/>
    </SessionProvider>
    </>
  )
}
