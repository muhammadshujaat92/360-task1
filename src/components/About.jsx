import Img from '../assets/Group.png'
import { IoMdArrowForward } from "react-icons/io";
import secImg1 from '../assets/secImg1.png'
import secImg2 from '../assets/secImg2.png'
import secImg3 from '../assets/secImg3.png'
import secImg4 from '../assets/secImg4.png'
import secImg5 from '../assets/secImg5.png'
import secImg6 from '../assets/secImg6.png'

const About = () => {
    return (
        <div className='px-[5rem] py-[3rem]'>
            <div className='flex'>
                <div className='text-white flex flex-col justify-around max-w-[60rem] h-[25rem] max-h-[25rem]'>
                    <div>
                        <h1 className='border-b-2 border-gold w-fit text-2xl pb-1 mb-3'>About Us</h1>
                        <h1 className='font-bold text-5xl'>We Promote Emerging</h1>
                        <h1 className='text-gold font-bold text-5xl'>Digital Experiences.</h1>
                        <p className='my-7'>We are dedicated to revolutionizing the way you manage your finances by seamlessly integrating cutting-edge technology with the principles of Islamic finance</p>
                    </div>
                    <button className="bg-gold py-2 px-6 flex items-center rounded-full w-fit">
                        Know More
                        <IoMdArrowForward />
                    </button>
                </div>
                <div className='w-[70rem] max-w-[70rem]'>
                    <img className='w-full' src={Img} alt="img" />
                </div>
            </div>
            <div className="py-12 flex items-center justify-center">
                <div className='max-w-[7rem] w-[7rem]'>
                    <img className='w-full' src={secImg6} alt="img" />
                </div>
                <div className='max-w-[7rem] w-[7rem] mx-8'>
                    <img className='w-full' src={secImg2} alt="img" />
                </div>
                <div className='max-w-[7rem] w-[7rem]'>
                    <img className='w-full' src={secImg3} alt="img" />
                </div>
                <div className='max-w-[7rem] w-[7rem] mx-8'>
                    <img className='w-full' src={secImg4} alt="img" />
                </div>
                <div className='max-w-[7rem] w-[7rem]'>
                    <img className='w-full' src={secImg5} alt="img" />
                </div>
                <div className='max-w-[7rem] w-[7rem] mx-8'>
                    <img className='w-full' src={secImg1} alt="img" />
                </div>
            </div>
        </div>
    )
}

export default About