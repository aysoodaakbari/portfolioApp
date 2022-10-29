import '../styles/globals.css'
import type { AppProps } from 'next/app'
import Layout from '../Component/Layout'
import 'bootstrap/dist/css/bootstrap.rtl.min.css'

import 'bootstrap/dist/css/bootstrap.rtl.css'
import '../styles/globals.css'
import Header from '../Component/Header'
export default function App({ Component, pageProps }: AppProps) {
  return (
  
  <Layout>
    <Header/>
  <Component {...pageProps} />
  </Layout>
  
  
  )
}
