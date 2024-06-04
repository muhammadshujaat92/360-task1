import { IoMdArrowForward } from "react-icons/io";

const Button = ({ text }) => {
    return (
        <button className="bg-[#D8B150] py-2 px-6 flex items-center rounded-full w-fit">
            {text}
            <IoMdArrowForward />
        </button>
    );
};

export default Button;
