import bgGroup from '../assets/bgGroup.png';
import cards from '../assets/cards.png';
import Rectangle from '../assets/Rectangle.png';
import { IoMdArrowForward } from "react-icons/io";
import ProductCards from './ProductCards';
import cardIcon1 from "../assets/productCard1.png";
import cardIcon2 from "../assets/productCard2.png";
import cardIcon3 from "../assets/productCard3.png";
import cardIcon4 from "../assets/productCard4.png";
import cardBg from "../assets/productCard.png";

const Products = () => {
    return (
        <div className='px-[5rem] py-[4rem] relative bg-[#1F1F1F]'>
            <div className="absolute inset-0 bg-contain bg-center bg-no-repeat" style={{ backgroundImage: `url(${bgGroup})` }} />
            <div className="absolute inset-0 bg-no-repeat" style={{ backgroundImage: `url(${Rectangle})` }} />
            <div className='grid grid-cols-2 gap-8 relative z-10'>
                <div className='flex justify-between'>
                    <div className='flex flex-col h-[55rem] max-h-[55rem] justify-evenly pt-[2rem]'>
                        <ProductCards
                            cardIcon={cardIcon1}
                            heading="Virtual Islamic Bank"
                            text="The Islamic Fintech industry provides ways of Shariah-compliant virtual digital, transparent."
                            buttonText="Know More"
                            buttonClass="text-gold flex items-center text-xl"
                            bg="#313131"
                        />
                        <ProductCards
                            cardIcon={cardIcon3}
                            heading="Islamic Edtech"
                            text="The online learning industry is growing quite fast, as it easiest, cost effective, time saving"
                            buttonText="Know More"
                            buttonClass="text-gold flex items-center text-xl"
                            bg="#313131"
                        />
                    </div>
                    <div className='grid grid-rows-[24rem]'>
                        <ProductCards
                            cardIcon={cardIcon2}
                            heading="Shariah Compliant MarketPlace"
                            text="Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor..."
                            buttonText="Know More"
                            buttonClass="text-white flex items-center text-xl"
                            bgImage={cardBg}
                        />
                        <ProductCards
                            cardIcon={cardIcon4}
                            heading="Product Advisory"
                            text="strategic partnership that provides vital insights for informed decision-making in product development"
                            buttonText="Know More"
                            buttonClass="text-gold flex items-center text-xl"
                            bg="#313131"
                        />
                    </div>
                    {/* <img src={cards} alt="" /> */}
                </div>
                <div className='text-white max-h-[40rem] h-[40rem] flex flex-col justify-center'>
                    <h1 className="border-b-2 border-gold w-fit text-2xl pb-1 mb-3">Products</h1>
                    <h1 className='font-bold text-4xl'>Our <span className='text-gold'>Islamic Fintech</span> Products Includes:</h1>
                    <p className='my-7 max-w-[30rem] w-[30rem]'>We have complete and very easy solution for Virtual Islamic / Digital Banking and different fintech products for Islamic banking including deposit and asset side for all requirements of clients.</p>
                    <button className="bg-gold py-2 px-6 flex items-center rounded-full w-fit">
                        All Products
                        <IoMdArrowForward />
                    </button>
                </div>
            </div>
        </div>
    );
}

export default Products;
