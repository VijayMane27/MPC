import Head from "next/head";
import Image from "next/image";
import CustomNavbar from "./components/CustomNavbar";
import Footer from "./components/Footer";
import { Element } from "react-scroll";
import HomeVideoSection from "./components/HomeVideoSection";
import AboutUs from "./components/AboutUs";
import OurServices from "./components/OurServices";

export default function Home() {
  return (
    <div>
      <Head>
        <title>title</title>
        <meta name="description" content=" " />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <main className="flex min-h-screen flex-col bg-[#121212]">
        <CustomNavbar />
        <HomeVideoSection />
        <AboutUs />
        <OurServices />
      </main>
      <Footer />
    </div>
  );
}
