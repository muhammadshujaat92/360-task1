import { FaPlayCircle } from "react-icons/fa";
import ellipseImg from "../assets/Ellipse-130.png"
import bgImg from "../assets/header-Img.png"
import vectorImg from "../assets/Vector.png"
import { IoMdArrowForward } from "react-icons/io";
import Button from "./Button";
import TextBox from "./TextBox";

const Hero = () => {
    return (
        <>
            <div className="flex px-[5rem] justify-between">
                <div className="max-w-[35rem] flex flex-col justify-between max-h-[28rem]">
                    <div className="flex justify-end max-w-[13rem] mt-[2rem]">
                        <img src={ellipseImg} alt="ellipse" />
                    </div>
                    {/* <div>
                        <div>
                            <h1 className="text-white text-2xl border-b-2 border-gold w-fit pb-1">Virtual Islamic Banking</h1>
                            <h1 className="text-gold font-bold my-2 text-5xl">Transforming Finance</h1>
                            <h4 className="text-white text-3xl">with Fast & Easy!</h4>
                            <p className="text-white my-7">From Virtual Islamic/ Digital Banking and payment platforms to asset management, our FinTech products encompass a wide spectrum of offerings that are reshaping the financial landscape.</p>
                        </div>
                        <div className="flex items-center text-white">
                            <Button text={"Get Started"}/>
                            <button className="flex items-center ms-[1rem]">
                                See Live Demo
                                <FaPlayCircle className="text-gold text-xl ms-1" />
                            </button>
                        </div>
                    </div> */}
                    <TextBox
                        title="Virtual Islamic Banking"
                        subtitle={<><span className='text-gold font-bold'>Transforming Finance</span> <br /> <span className='font-normal text-3xl'>with Fast & Easy!</span></>}
                        description="From Virtual Islamic/ Digital Banking and payment platforms to asset management, our FinTech products encompass a wide spectrum of offerings that are reshaping the financial landscape."
                        subtitleClass="font-bold text-5xl"
                        buttonText={"Get Started"}
                        secondBtn={"See Live Demo"}
                    />
                </div>
                <div className="max-w-xl">
                    <img className="w-full" src={bgImg} alt="bgImg" />
                </div>
            </div >

            <div className="relative top-[-5rem] px-7">
                <div className="max-w-[20rem]">
                    <img className="w-full" src={vectorImg} alt="vectorImg" />
                </div>
                <div className="w-full flex justify-center relative top-[-3.7rem]">
                    <div className="bg-[#313131] shadow-lg text-white text-center max-w-[60rem] p-[2rem] rounded-xl">
                        <h1 className="text-gold font-bold text-lg">GET YOUR PROJECTS ESTIMATION</h1>
                        <p className="text-sm leading-[2rem]">Submit your details, our representative will be in your touch soon.</p>
                        <div className="flex items-center mt-3">
                            <input className="bg-[#242424] border rounded-md p-2" type="text" placeholder="Full Name" />
                            <input className="bg-[#242424] border rounded-md p-2 mx-5" type="email" placeholder="Email" />
                            <input className="bg-[#242424] border rounded-md p-2" type="number" placeholder="Phone no" />
                            <button className="flex items-center bg-gold py-2 px-6 ms-5 rounded-lg">
                                Get A Quote
                                <IoMdArrowForward />
                            </button>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}

export default Hero