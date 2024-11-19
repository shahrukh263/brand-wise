import type { NextComponentType } from "next";
import Image from "next/image";
import MugsyLogo from "../images/brand-logo/mugsy-logo.png";
import PinkBoutiqueLogo from "../images/brand-logo/pink-boutique-logo.png";
import ObviLogo from "../images/brand-logo/obvi-logo.png";
import RowenLogo from "../images/brand-logo/rowen-logo.png";
import MonosLogo from "../images/brand-logo/monos-logo.png";
import DozeLogo from "../images/brand-logo/doze-logo.png";
import MichaelLogo from "../images/brand-logo/michael-logo.png";
const BrandComp: NextComponentType = () => {
  return (
    <>
      <section className="pb-16">
        <div className="innerDiv">
          <h5 className="text-center text-[#475467] text-xs font-medium tracking-[0.04em] mb-10 uppercase">
            Trusted by hundreds of global brands
          </h5>
          <div className="flex flex-col overflow-hidden w-[calc(100vw-48px)] h-[50px] max-w-full">
            <div className="relative">
              <span className="absolute left-0 top-0 w-[70px] h-full bg-gradient-to-l to-transparent rotate-180 z-10 from-white"></span>
              <div className="flex items-center animate-slow-infinite-scroll gap-8 mix-blend-darken justify-between">
                <div className="flex-shrink-0">
                  <Image
                    className="object-contain h-[20px] w-full mix-blend-darken"
                    data-src={MugsyLogo}
                    src={MugsyLogo}
                    alt=""
                    loading="lazy"
                    width={86}
                    height={48}
                  />
                </div>
                <div className="flex-shrink-0">
                  <Image
                    className="object-contain h-[20px] w-full mix-blend-darken"
                    data-src={PinkBoutiqueLogo}
                    src={PinkBoutiqueLogo}
                    alt=""
                    loading="lazy"
                    width={188}
                    height={32}
                  />
                </div>
                <div className="flex-shrink-0">
                  <Image
                    className="object-contain h-[20px] w-full mix-blend-darken"
                    data-src={ObviLogo}
                    src={ObviLogo}
                    alt=""
                    loading="lazy"
                    width={100}
                    height={40}
                  />
                </div>
                <div className="flex-shrink-0">
                  <Image
                    className="object-contain h-[20px] w-full mix-blend-darken"
                    data-src={RowenLogo}
                    src={RowenLogo}
                    alt=""
                    loading="lazy"
                    width={125}
                    height={32}
                  />
                </div>
                <div className="flex-shrink-0">
                <Image
                  className="object-contain h-[20px] w-full mix-blend-darken"
                  data-src={MonosLogo}
                  src={MonosLogo}
                  alt=""
                  loading="lazy"
                  width={132}
                  height={44}
                />
                </div>
                <div className="flex-shrink-0">
                <Image
                  className="object-contain h-[20px] w-full mix-blend-darken"
                  data-src={DozeLogo}
                  src={DozeLogo}
                  alt=""
                  loading="lazy"
                  width={84}
                  height={40}
                />
                </div>
                <div className="flex-shrink-0">
                <Image
                  className="object-contain h-[20px] w-full mix-blend-darken"
                  data-src={MichaelLogo}
                  src={MichaelLogo}
                  alt="BBC logo"
                  loading="lazy"
                  width={178}
                  height={32}
                />
                </div>
                <div className="flex-shrink-0">
                  <Image
                    className="object-contain h-[20px] w-full mix-blend-darken"
                    data-src={MugsyLogo}
                    src={MugsyLogo}
                    alt=""
                    loading="lazy"
                    width={86}
                    height={48}
                  />
                </div>
                <div className="flex-shrink-0">
                  <Image
                    className="object-contain h-[20px] w-full mix-blend-darken"
                    data-src={PinkBoutiqueLogo}
                    src={PinkBoutiqueLogo}
                    alt=""
                    loading="lazy"
                    width={188}
                    height={32}
                  />
                </div>
                <div className="flex-shrink-0">
                  <Image
                    className="object-contain h-[20px] w-full mix-blend-darken"
                    data-src={ObviLogo}
                    src={ObviLogo}
                    alt=""
                    loading="lazy"
                    width={100}
                    height={40}
                  />
                </div>
                <div className="flex-shrink-0">
                  <Image
                    className="object-contain h-[20px] w-full mix-blend-darken"
                    data-src={RowenLogo}
                    src={RowenLogo}
                    alt=""
                    loading="lazy"
                    width={125}
                    height={32}
                  />
                </div>
                <div className="flex-shrink-0">
                <Image
                  className="object-contain h-[20px] w-full mix-blend-darken"
                  data-src={MonosLogo}
                  src={MonosLogo}
                  alt=""
                  loading="lazy"
                  width={132}
                  height={44}
                />
                </div>
                <div className="flex-shrink-0">
                <Image
                  className="object-contain h-[20px] w-full mix-blend-darken"
                  data-src={DozeLogo}
                  src={DozeLogo}
                  alt=""
                  loading="lazy"
                  width={84}
                  height={40}
                />
                </div>
                <div className="flex-shrink-0">
                <Image
                  className="object-contain h-[20px] w-full mix-blend-darken"
                  data-src={MichaelLogo}
                  src={MichaelLogo}
                  alt="BBC logo"
                  loading="lazy"
                  width={178}
                  height={32}
                />
                </div>
              </div>
              <span className="absolute right-0 top-0 w-[70px] h-full bg-gradient-to-l to-transparent z-10 from-white"></span>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default BrandComp;
