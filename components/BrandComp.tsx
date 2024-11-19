import type {NextComponentType} from 'next';
import Image from 'next/image';
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
        <section>
            <div className='innerDiv'>
                <h5 className='text-center text-[#475467] text-xs font-medium tracking-[0.04em] mb-10 uppercase'>Trusted by hundreds of global brands</h5>
                <div>
                    
                </div>
            </div>
        </section>
		</>
	);
};

export default BrandComp;
