import Footer from "../components/homepage/Footer";
import Navbar from "../components/homepage/Navbar";
import Head from "next/head";
import Banner from "../components/homepage/Banner";
import Title from "../components/homepage/Title";
import styles from '../styles/Contact.module.css'
import ContactSection from "../components/contactPage/ContactSection";

export default function Contact(){
    return (
        <div style={{backgroundColor: "#F1F1F1"}}>
            
      <Head>
        <title>Contact us | E-shop </title>
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <Banner />
        <Navbar />
        <div className={"container-fluid m-0 py-32 px-5 text-white " + styles.welcome}>
            <h1 className="font-black text-center text-4xl">Contact Us</h1>
            <h2 className="font-light text-lg text-gray-400 mt-4 text-center">Home &rarr; Contact Us</h2>
        </div>

        <ContactSection></ContactSection>
        
        <Footer />
        </div>
    )
}