import Footer from "../components/homepage/Footer";
import Navbar from "../components/homepage/Navbar";
import Head from "next/head";
import Banner from "../components/homepage/Banner";
import Title from "../components/homepage/Title";
import styles from '../styles/Aboutus.module.css'

export default function Contact(){
    return (
        <div>
            
      <Head>
        <title>Contact us | E-shop </title>
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <Banner />
        <Navbar />
        <div className={"container-fluid m-0 py-32 px-5 text-white " + styles.welcome}>
            <h1 className="font-black text-center text-4xl">Contact Us</h1>
            {/* <h2 className="font-light text-lg text-gray-400 mt-4 text-center">Home &rarr; Contact Us</h2> */}
        </div>

        {/* <div className="bg-white px-5 pt-8 md:px-12 md:py-16 lg:px-16 lg:py-20">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-0">
                <div className={""}>
                    <img loading={"lazy"} src="/img/about-us/about-us-girl-with-laptop.jfif" alt="Girl with laptop" className={"block w-full max-h-96"}/>
                </div>
                <div className="px-5 py-8 md:px-16 md:py-10 lg:px-20 lg:py-12">
                    <h2 className="font-bold font-sans text-left text-3xl">Globally connected by large network</h2>
                    <p className="font-bold mt-8">We are here to listen from you deliver excellence</p>
                    <div className="desc">
                        <p className="font-thin mt-10">
                            Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.Ut enim ad minim. Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor.
                        </p>
                        <button className="my-8 bg-black text-gray-300 font-bold rounded-lg py-3 px-7 hover:bg-gray-900">GET DETAILS</button>
                    </div>
                </div>
            </div>
        </div> */}
        
        <Footer />
        </div>
    )
}