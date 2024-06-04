import blogs from '../assets/blogs.png'
import blogsImg from '../assets/blogsImg.png'
import { IoMdArrowForward } from "react-icons/io";
import cardImg1 from "../assets/blogCard1.png"
import cardImg2 from "../assets/blogCard2.png"
import cardImg3 from "../assets/blogCard3.png"
import BlogCards from './BlogCards';
import bannerImg from "../assets/blogBanner.png"
import Button from './Button';

const Blogs = () => {
    return (
        <div className='px-[5rem] py-[4rem]'>
            <div className='text-white'>
                <h1 className='border-b-2 border-gold inline-block text-2xl pb-1 mb-3'>Blogs</h1>
                <h1 className='text-4xl font-bold'>Latest News <span className='text-gold'>Managing Money Better</span></h1>
                <p className='my-[1rem]'>Lorem ipsum, beatae quia recusandae nisi corporis libero maiores laudantium!</p>
                <div className='my-[2rem] grid grid-cols-3'>
                    {/* <img src={blogs} alt="blogs" /> */}
                    <BlogCards bgImage={cardImg3} />
                    <BlogCards bgImage={cardImg2} />
                    <BlogCards bgImage={cardImg1} />
                </div>
                <div className='my-[4rem] flex justify-center'>
                    {/* <button className="bg-gold py-2 px-6 flex items-center rounded-full">
                        Read All Blogs
                        <IoMdArrowForward />
                    </button> */}
                    <Button text={"Read All Blogs"} />
                </div>
            </div>
            <div className='text-white relative flex justify-between items-center'>
                {/* <img src={blogsImg} alt="img" /> */}
                <img src={bannerImg} alt="img" />
                <div className='absolute flex w-full justify-between items-center px-[4rem]'>
                    <div>
                        <h1 className='text-white text-2xl border-b-2 border-gold w-fit pb-1'>Newsletter</h1>
                        <h1 className='text-[2.5rem] font-bold mt-3 leading-[3rem]'>Keep Updated <span className='text-gold m'>About Our <br /> Product</span></h1>
                    </div>
                    <div className='bg-[#444444] rounded-full w-fit'>
                        <input className='bg-[#444444] py-[0.5rem] px-[3rem] rounded-full' type="email" placeholder='Enter your email address' />
                        <button className='bg-gold rounded-full py-3 px-[2rem]'>Submit</button>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Blogs