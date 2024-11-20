import Head from 'next/head';
import AOS from "aos";
import "aos/dist/aos.css";
import { useEffect } from 'react';
import SocialHero from '../components/SocialHero';
import BrandComp from '../components/BrandComp';
import Footer from '../components/footer';
const SocialInbox = () => {
	useEffect(() => {
        AOS.init();
      }, [])
	return (
		<>
			<Head>
				<title>Social Inbox</title>
			</Head>
            <SocialHero/>
            <BrandComp/>



            <Footer/>
		</>
	);
};

export default SocialInbox;
