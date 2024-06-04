import { FaPlayCircle } from "react-icons/fa";
import Button from "./Button";

const TextBox = ({ title, subtitle, description, buttonText, children, subtitleClass, secondBtn }) => {
    return (
        <div className='text-white'>
            {title && <h1 className="border-b-2 border-gold w-fit text-2xl pb-1 mb-3">{title}</h1>}
            {subtitle && <h1 className={subtitleClass}>{subtitle}</h1>}
            {description && <p className='my-5'>{description}</p>}
            {children}
            <div className="flex items-center">
                {buttonText && (
                    <Button text={buttonText} />
                )}
                {secondBtn && <button className="flex items-center ms-[1rem]">
                    {secondBtn}
                    <FaPlayCircle className="text-gold text-xl ms-1" />
                </button>}
            </div>
        </div>
    );
};

export default TextBox