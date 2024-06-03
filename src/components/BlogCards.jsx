import cardImg1 from "../assets/blogCard1.png"
import { IoMdArrowForward } from "react-icons/io";

const BlogCards = ({bgImage}) => {
    return (
        <div className="w-[25rem] h-[25rem] rounded-xl p-[2rem] flex flex-col justify-between" style={{ backgroundImage: `url(${bgImage})`, backgroundSize: 'cover', backgroundPosition: 'center' }}>
            <div className="text-end">
                <button className="bg-gold rounded-full py-2 px-[2rem] text-xl">Tech</button>
            </div>
            <div>
                <h1 className="text-3xl">Lorem ipsum dolor sit amet</h1>
                <p className="font-light my-2 leading-[1.4rem]">Lorem ipsum dolor sit, amet consectetur adipisicing elit. Excepturi ex repellat doloribus?</p>
                <button className="flex items-center text-xl">
                    Know More
                    <IoMdArrowForward className='ms-2 text-2xl' /></button>
            </div>
        </div>
    )
}

export default BlogCards