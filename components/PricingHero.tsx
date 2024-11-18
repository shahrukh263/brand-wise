import type { NextComponentType } from 'next';

const PricingHero: NextComponentType = () => {
	return (
		<>
			<section className='pt-[60px] pb-[60px] md:pt-[100px] md:pb-[100px] '>
				<div className='innerDiv'>
					<div className='text-center'>
						<h1 className='font-[600] lg:text-[72px] md:text-[60px] text-[40px] md:leading-[1] text-[#2B2866] tracking-[-0.02em]'>Simple, transparent pricing</h1>
						<p className='text-[#475467] md:text-base text-sm font-[500] mt-5'>Every feature and unlimited team members on every plan.</p>
						<p className='text-[#475467] md:text-base text-sm font-[500]'>Only pay based on AI usage.</p>
					</div>
					<div className='lg:mt-[80px] md:mt-[60px] sm:mt-[42px] mt-[32px] text-center'>
						<h2 className='mb-6 md:text-[24px] md:leading-[32px] text-[20px] leading-[28px] font-[600] text-[#2B2866] tracking-[-0.02em]'>I have <span className='bg-[#F4F4FF] rounded-[8px] text-[#6962FB] py-[4px] px-[8px]'>10,000</span> support tickets per month on average</h2>
					<div className='mx-auto md:w-9/12 w-full'></div>
					</div>
				</div>
			</section>
		</>
	);
};
export default PricingHero;
