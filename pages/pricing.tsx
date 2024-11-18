import type {NextPage} from 'next';
import Head from 'next/head';
import PricingHero from '../components/PricingHero';

const Pricing: NextPage = () => {
	return (
		<>
			<Head>
				<title>Pricing</title>
			</Head>
            <PricingHero/>
		</>
	);
};

export default Pricing;
