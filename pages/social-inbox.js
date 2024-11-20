import Head from "next/head";
import AOS from "aos";
import "aos/dist/aos.css";
import { useEffect } from "react";
import SocialHero from "../components/SocialHero";
import BrandComp from "../components/BrandComp";
import Footer from "../components/footer";
import PlatformComt from "../components/PlatformComp";
const SocialInbox = () => {
  useEffect(() => {
    AOS.init();
  }, []);
  return (
    <>
      <Head>
        <title>Social Inbox</title>
      </Head>
      <SocialHero />
      <BrandComp />
      <PlatformComt />




      <Footer />
    </>
  );
};

export default SocialInbox;
