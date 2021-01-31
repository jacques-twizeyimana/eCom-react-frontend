import Head from "next/head";
import Banner from "../components/homepage/Banner";
import Home from "../components/homepage/Home";
import Navbar from "../components/homepage/Navbar";
import Title from "../components/homepage/Title";
import WhyUs from "../components/homepage/WhyUs";

import BestSeller from '../components/homepage/BestSeller'
import HomeAppliances from '../components/homepage/HomeAppliances'
import NewProducts from '../components/homepage/NewProducts'


import Footer from "../components/homepage/Footer";
import Newsletter from "../components/homepage/Newsletter";
import Stories from "../components/homepage/Stories";
import Brands from "../components/homepage/Brands";

import Electronics from "../components/homepage/Electronics";
import Promotions from "../components/homepage/Promotions";
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
        <BestSeller/>
        <Promotions></Promotions>
        <NewProducts />
        <HomeAppliances/>
        <Electronics />
        <Brands />
        <WhyUs />
        <Title title=" Our Satsfied Customers Says" centered></Title>
        <Stories />
        <Newsletter />
        <Footer />
      </div>
    </div>
  );
}
