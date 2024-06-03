import ellipse from '../assets/Ellipse-130.png'
import { IoMdArrowForward } from "react-icons/io";
import Img from "../assets/img.png"
import bgGroup from '../assets/bgGroup.png';

const Investment = () => {
    return (
        <div className='px-[5rem] flex relative bg-[#1F1F1F] pt-[4rem]'>
            <div className="absolute inset-0 bg-contain bg-center bg-no-repeat" style={{ backgroundImage: `url(${bgGroup})` }} />
            <div className='max-w-[35rem] max-h-[40rem]'>
                <img className='h-full' src={Img} alt="img" />
            </div>
            <div className='text-white w-[38rem] max-h-[35rem] flex flex-col justify-around'>
                <div>
                    <h1 className='border-b-2 border-gold inline-block text-2xl pb-1 mb-3'>Investments</h1>
                    <h1 className='text-4xl font-bold'>Our Digital Products On</h1>
                    <h1 className="text-gold text-4xl font-bold">Deposite Or Investments</h1>
                    <p className='leading-[1.7rem] my-5 font-light'>Through our Digital Products on Deposit or investments, you can fulfill your different requirements as per your need through digital payment mechanism or virtual cards. Our main products are mentioned below. However, they could be customized as per your need in Shariah Compliance ways.</p>
                    <ul>
                        <li className='flex items-center'><img className='me-3' src={ellipse} alt="ellipseImg" />Current</li>
                        <li className='flex items-center'><img className='me-3' src={ellipse} alt="ellipseImg" />Saving</li>
                        <li className='flex items-center'><img className='me-3' src={ellipse} alt="ellipseImg" />Fixed Deposite</li>
                        <li className='flex items-center'><img className='me-3' src={ellipse} alt="ellipseImg" />Sakuk</li>
                    </ul>
                </div>
                <div>
                    <button className="bg-gold py-2 px-6 flex items-center rounded-full">
                        Read More
                        <IoMdArrowForward />
                    </button>
                </div>
            </div>
        </div>
    )
}

export default Investment