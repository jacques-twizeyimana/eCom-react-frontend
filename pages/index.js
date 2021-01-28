import Head from "next/head";
import Banner from "../components/homepage/Banner";
import Home from "../components/homepage/Home";
import Navbar from "../components/homepage/Navbar";
import Title from "../components/homepage/Title";
import WhyUs from "../components/homepage/WhyUs";

import BestSeller from '../components/homepage/BestSeller'

import Footer from "../components/homepage/Footer";
import Newsletter from "../components/homepage/Newsletter";
import Stories from "../components/homepage/Stories";
import Brands from "../components/homepage/Brands";

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
        
        <Title title="The Bestsellers"></Title>
        <BestSeller/>
        {/* <Title title="Promotions">
          <button>Child btn</button>
        </Title>
        <Title title="What Our Customers Say" centered></Title> */}
        <Title title="Top Brands"></Title>
        <Brands />
        <WhyUs></WhyUs>
        <Title title=" Our Satsfied Customers Says" centered></Title>
        <Stories />

        <Newsletter />
        <Footer />
      </div>
    </div>
  );
}
