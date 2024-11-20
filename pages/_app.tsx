import '../styles/globals.scss';
import type {AppProps} from 'next/app';
import Navbar from '../components/Navbar';
import Footer from './../components/footer';
function MyApp({Component, pageProps}: AppProps) {
	return (
		<>
			<Navbar />
			<main>
				<Component {...pageProps} />
			</main>
			{/* <Footer /> */}
		</>
	);
}

export default MyApp;
