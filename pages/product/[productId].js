import ProductDetails from "../../components/product/product-details";
import Navbar from "../../components/homepage/Navbar";
import Banner from "../../components/homepage/Banner";
import Head from "next/head";
import Footer from "../../components/homepage/Footer";

export default function ProductDetailsPage(){
    return (
        <div>
          <Head>
            <title>Product details | E-shop </title>
            <link rel="icon" href="/favicon.ico" />
          </Head>
          <div className="w-full p-0 m-0">
            <Banner />
            <Navbar />
            <ProductDetails />
            {/*<Footer />*/}
          </div>
        </div>
    )
}