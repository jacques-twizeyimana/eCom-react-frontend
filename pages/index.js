import Head from 'next/head'
import Banner from '../components/homepage/Banner'
import Home from '../components/homepage/Home'
import Navbar from '../components/homepage/Navbar'

export default function HomePage() {
  return (
    <div>
      <Head>
        <title>E-shop | shop at minimum prices </title>
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <div className="w-full m-0 p-0">
        <Banner />
        <Navbar />
        <Home />
      </div>
    </div>
  )
}
