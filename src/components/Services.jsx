import cards from '../assets/servicesImg2.png'
import Img from '../assets/servicesImg.png'
import { IoMdArrowForward } from "react-icons/io"
import cardImg1 from "../assets/servicesCard1.png"
import cardImg2 from "../assets/servicesCard2.png"
import cardImg3 from "../assets/servicesCard3.png"
import cardImg4 from "../assets/servicesCard4.png"
import bannerImg from "../assets/servicesBanner.png"
import ServicesCards from './ServicesCards'
import Button from './Button'

const Services = () => {
    return (
        <div className='px-[5rem] py-[4rem]'>
            <div className='text-center text-white'>
                <h1 className='border-b-2 border-gold inline-block text-2xl pb-1 mb-3'>Our Services</h1>
                <h1 className='font-bold text-4xl'>Our <span className='text-gold'>Cutting Edge Solutions</span> For</h1>
                <h1 className='text-4xl tracking-[0.2rem]'>Virtual Islamic & Digital Banking</h1>
                <div className='max-h-[23rem] my-[4rem] flex'>
                    {/* <img src={cards} alt="cardImg" /> */}
                    <ServicesCards icon={cardImg1} heading={"Digital Financing"} text={"This term refers to the impact of new technologies on the financial services industry. It includes a variety of products, applications that have transformed the traditional way "} />
                    <ServicesCards icon={cardImg2} heading={"Digital Investment"} text={"This is a digital solution that allows customers to save and invest money in stocks, shares, and investment funds through an automated platform "} />
                    <ServicesCards icon={cardImg3} heading={"Digital SME Commercial"} text={"This product caters to the SME sector and provides long-term financing for infrastructure development and industrial projects. "} />
                    <ServicesCards icon={cardImg4} heading={"Low Cost Housing Finance"} text={"This product provides digital solutions for low-cost housing finance schemes. This creates employment and boosts demand in industries."} />
                </div>
                <div className='flex justify-center mb-[3rem]'>
                    {/* <button className="bg-gold py-2 px-6 flex items-center rounded-full">
                        All Services
                        <IoMdArrowForward />
                    </button> */}
                    <Button text={"All Services"} />
                </div>
            </div>
            <div className='text-white relative flex justify-center items-center'>
                {/* <img src={Img} alt="img" /> */}
                <img src={bannerImg} alt="img" />
                <div className='absolute flex flex-col justify-center items-center'>
                    <h1 className='font-bold text-5xl'>Digital Products On <span className='text-gold'> Deposit Or Investments</span></h1>
                    <p className='my-5 text-center'>Work with Greensfin, more than a fintech company, currently on a mission to tranform the <br /> global business infrastructure.</p>
                    <button className="bg-gold text-lg py-2 px-6 flex items-center rounded-full">
                        Book Your Consultation
                        <IoMdArrowForward />
                    </button>
                </div>
            </div>
        </div>
    )
}

export default Services