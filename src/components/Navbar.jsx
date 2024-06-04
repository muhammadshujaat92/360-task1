import logo from "../assets/logo.png"
import { IoMdArrowForward } from "react-icons/io";
import Button from "./Button";

const Navbar = () => {
    return (
        <nav className="text-white flex items-center justify-around py-6">
            <div>
                <img src={logo} alt="logo" />
            </div>
            <ul className="flex text-lg items-center">
                <li>Home</li>
                <li className="mx-8">Products</li>
                <li>Services</li>
                <li className="mx-8">Clients</li>
                <li>Blogs</li>
                <li className="mx-8">Podcasts</li>
                <li>About us</li>
            </ul>
            <div>
                {/* <button className="bg-[#D8B150] text-lg flex items-center py-2 px-8 rounded-full">
                    Contact
                    <IoMdArrowForward />
                </button> */}
                <Button text={"Contact"}/>
            </div>
        </nav>
    )
}

export default Navbar