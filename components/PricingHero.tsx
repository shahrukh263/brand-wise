import type { NextComponentType } from "next";
import DataIcon from "../images/database-icon.svg";
import Image from "next/image";
const PricingHero: NextComponentType = () => {
  return (
    <>
      <section className="pt-[60px] pb-[60px] md:pt-[100px] md:pb-[100px] ">
        <div className="innerDiv">
          <div className="text-center">
            <h1 className="font-[600] lg:text-[72px] md:text-[60px] text-[40px] md:leading-[1] text-[#2B2866] tracking-[-0.02em]">
              Simple, transparent pricing
            </h1>
            <p className="text-[#475467] md:text-base text-sm font-[500] mt-5">
              Every feature and unlimited team members on every plan.
            </p>
            <p className="text-[#475467] md:text-base text-sm font-[500]">
              Only pay based on AI usage.
            </p>
          </div>
          <div className="lg:mt-[80px] md:mt-[60px] sm:mt-[42px] mt-[32px]">
            <h2 className="mb-6 text-center md:text-[24px] md:leading-[32px] text-[20px] leading-[28px] font-[600] text-[#2B2866] tracking-[-0.02em]">
              I have{" "}
              <span className="bg-[#F4F4FF] rounded-[8px] text-[#6962FB] py-[4px] px-[8px]">
                10,000
              </span>{" "}
              support tickets per month on average
            </h2>
            <div className="mx-auto md:w-9/12 w-full mb-[48px]"></div>
            <div>
              <div className="text-center">
                <ul className="bg-[#F2F4F7] rounded-[12px] py-[4px] px-[4px] inline-flex items-center gap-[4px] mb-6">
                  <li>
                    <a className="cursor-pointer bg-white text-[#0C111D] text-[14px] leading-[20px] font-[500] tracking-[-0.006em] rounded-[12px] py-[6px] px-[12px] inline-block">
                      Monthly{" "}
                    </a>
                  </li>
                  <li>
                    <a className="cursor-pointer text-[#475467] text-[14px] leading-[20px] font-[500] tracking-[-0.006em] py-[6px] px-[12px] inline-block">
                      Yearly{" "}
                      <span className="text-[12px] text-white bg-[#17B26A] rounded-[4px] inline-block px-[4px] py-[1px] leading-[16px]">
                        2 Months Free
                      </span>
                    </a>
                  </li>
                </ul>
              </div>
              <div className="flex flex-wrap sm:-mx-4 lg:gap-0 gap-y-3">
                <div className="sm:px-4 lg:w-1/4 md:w-1/2 sm:w-1/2 w-full">
                  <div className="rounded-[16px] bg-white py-8 2xl:px-8 px-6 border border-[#E4E7EC] shadow-[0px_1px_2px_0px_rgba(16,24,40,0.05)]">
                    <div className="mb-6">
                      <h4 className="text-[rgba(43,40,102,1)] text-[18px] font-medium tracking-[-0.006em] mb-1 leading-[28px]">
                        Start
                      </h4>
                      <p className="text-[rgba(71,84,103,1)] text-[14px] tracking-[-0.006em] leading-[20px]">
                        Best for personal use
                      </p>
                    </div>
                    <div className="flex gap-[8px] mb-6">
                      <h2 className="text-[#2B2866] text-[40px] font-[600] tracking-[-0.02em] leading-[1]">
                        $49
                      </h2>
                      <div>
                        <p className="text-[#525252] text-[14px] font-[500] tracking-[-0.006em]">
                          USD / mo
                        </p>
                        <p className="text-[#525252] text-[14px] font-[500] tracking-[-0.006em]">
                          Billed monthly
                        </p>
                      </div>
                    </div>
                    <a className="cursor-pointer text-[14px] tracking-[-0.006em] font-medium leading-[20px] py-[10px] block w-full px-3 text-center rounded-[10px] [box-shadow:0px_0px_0px_1px_rgba(225,228,234,1),_0px_1px_3px_0px_rgba(14,18,27,.12)]">
                      Start 7-day Free Trial
                    </a>
                    <div className="mt-6 flex items-center gap-[2px] justify-center">
                      <Image src={DataIcon} alt="" />
                      <span className="text-[16px] text-[#0C111D] font-[500] tracking-[-0.011em] leading-[24px]">
                        5,000 AI monthly credits
                      </span>
                    </div>
                  </div>
                </div>
				<div className="sm:px-4 lg:w-1/4 md:w-1/2 sm:w-1/2 w-full">
                  <div className="rounded-[16px] bg-white py-8 2xl:px-8 px-6 border border-[#E4E7EC] shadow-[0px_1px_2px_0px_rgba(16,24,40,0.05)]">
                    <div className="mb-6">
                      <h4 className="text-[rgba(43,40,102,1)] text-[18px] font-medium tracking-[-0.006em] mb-1 leading-[28px]">
                        Start
                      </h4>
                      <p className="text-[rgba(71,84,103,1)] text-[14px] tracking-[-0.006em] leading-[20px]">
                        Best for personal use
                      </p>
                    </div>
                    <div className="flex gap-[8px] mb-6">
                      <h2 className="text-[#2B2866] text-[40px] font-[600] tracking-[-0.02em] leading-[1]">
                        $49
                      </h2>
                      <div>
                        <p className="text-[#525252] text-[14px] font-[500] tracking-[-0.006em]">
                          USD / mo
                        </p>
                        <p className="text-[#525252] text-[14px] font-[500] tracking-[-0.006em]">
                          Billed monthly
                        </p>
                      </div>
                    </div>
                    <a className="cursor-pointer text-[14px] tracking-[-0.006em] font-medium leading-[20px] py-[10px] block w-full px-3 text-center rounded-[10px] [box-shadow:0px_0px_0px_1px_rgba(225,228,234,1),_0px_1px_3px_0px_rgba(14,18,27,.12)]">
                      Start 7-day Free Trial
                    </a>
                    <div className="mt-6 flex items-center gap-[2px] justify-center">
                      <Image src={DataIcon} alt="" />
                      <span className="text-[16px] text-[#0C111D] font-[500] tracking-[-0.011em] leading-[24px]">
                        5,000 AI monthly credits
                      </span>
                    </div>
                  </div>
                </div>
				<div className="sm:px-4 lg:w-1/4 md:w-1/2 sm:w-1/2 w-full">
                  <div className="rounded-[16px] bg-white py-8 2xl:px-8 px-6 border border-[#E4E7EC] shadow-[0px_1px_2px_0px_rgba(16,24,40,0.05)]">
                    <div className="mb-6">
                      <h4 className="text-[rgba(43,40,102,1)] text-[18px] font-medium tracking-[-0.006em] mb-1 leading-[28px]">
                        Start
                      </h4>
                      <p className="text-[rgba(71,84,103,1)] text-[14px] tracking-[-0.006em] leading-[20px]">
                        Best for personal use
                      </p>
                    </div>
                    <div className="flex gap-[8px] mb-6">
                      <h2 className="text-[#2B2866] text-[40px] font-[600] tracking-[-0.02em] leading-[1]">
                        $49
                      </h2>
                      <div>
                        <p className="text-[#525252] text-[14px] font-[500] tracking-[-0.006em]">
                          USD / mo
                        </p>
                        <p className="text-[#525252] text-[14px] font-[500] tracking-[-0.006em]">
                          Billed monthly
                        </p>
                      </div>
                    </div>
                    <a className="cursor-pointer text-[14px] tracking-[-0.006em] font-medium leading-[20px] py-[10px] block w-full px-3 text-center rounded-[10px] [box-shadow:0px_0px_0px_1px_rgba(225,228,234,1),_0px_1px_3px_0px_rgba(14,18,27,.12)]">
                      Start 7-day Free Trial
                    </a>
                    <div className="mt-6 flex items-center gap-[2px] justify-center">
                      <Image src={DataIcon} alt="" />
                      <span className="text-[16px] text-[#0C111D] font-[500] tracking-[-0.011em] leading-[24px]">
                        5,000 AI monthly credits
                      </span>
                    </div>
                  </div>
                </div>
				<div className="sm:px-4 lg:w-1/4 md:w-1/2 sm:w-1/2 w-full">
                  <div className="rounded-[16px] bg-white py-8 2xl:px-8 px-6 border border-[#E4E7EC] shadow-[0px_1px_2px_0px_rgba(16,24,40,0.05)]">
                    <div className="mb-6">
                      <h4 className="text-[rgba(43,40,102,1)] text-[18px] font-medium tracking-[-0.006em] mb-1 leading-[28px]">
                        Start
                      </h4>
                      <p className="text-[rgba(71,84,103,1)] text-[14px] tracking-[-0.006em] leading-[20px]">
                        Best for personal use
                      </p>
                    </div>
                    <div className="flex gap-[8px] mb-6">
                      <h2 className="text-[#2B2866] text-[40px] font-[600] tracking-[-0.02em] leading-[1]">
                        $49
                      </h2>
                      <div>
                        <p className="text-[#525252] text-[14px] font-[500] tracking-[-0.006em]">
                          USD / mo
                        </p>
                        <p className="text-[#525252] text-[14px] font-[500] tracking-[-0.006em]">
                          Billed monthly
                        </p>
                      </div>
                    </div>
                    <a className="cursor-pointer text-[14px] tracking-[-0.006em] font-medium leading-[20px] py-[10px] block w-full px-3 text-center rounded-[10px] [box-shadow:0px_0px_0px_1px_rgba(225,228,234,1),_0px_1px_3px_0px_rgba(14,18,27,.12)]">
                      Start 7-day Free Trial
                    </a>
                    <div className="mt-6 flex items-center gap-[2px] justify-center">
                      <Image src={DataIcon} alt="" />
                      <span className="text-[16px] text-[#0C111D] font-[500] tracking-[-0.011em] leading-[24px]">
                        5,000 AI monthly credits
                      </span>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};
export default PricingHero;
