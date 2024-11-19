import type {NextPage} from 'next';
import Head from 'next/head';
import PricingHero from '../components/PricingHero';
import FeaturePlan from '../components/FeaturePlan';
import TestimonialComp from '../components/TestimonialComp';

const Pricing: NextPage = () => {
	return (
		<>
			<Head>
				<title>Pricing</title>
			</Head>
            <PricingHero/>
            <FeaturePlan/>
            <TestimonialComp/>
		</>
	);
};

export default Pricing;
