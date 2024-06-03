import { IoMdArrowForward } from "react-icons/io";

const ProductCards = ({ cardIcon, heading, text, buttonText, buttonClass, bg, bgImage }) => {
    const cardStyle = bgImage
        ? { backgroundImage: `url(${bgImage})`, backgroundSize: 'cover', backgroundPosition: 'center' }
        : { backgroundColor: bg };

    return (
        <div className='text-white shadow-lg max-w-[17rem] px-[1.5rem] py-[3rem] rounded-xl max-h-[22rem] h-[22rem]' style={cardStyle}>
            <div className='w-[4rem] mb-4'>
                <img className='w-full' src={cardIcon} alt="icon1" />
            </div>
            <div>
                <h1 className='text-[1.4rem]'>{heading}</h1>
                <p className='font-light text-sm my-3'>{text}</p>
            </div>
            <div>
                <button className={buttonClass}>
                    {buttonText}
                    <IoMdArrowForward className='ms-2 text-2xl' />
                </button>
            </div>
        </div>
    );
}

export default ProductCards;
