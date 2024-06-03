import logo from '../assets/logo.png'
import { FaFacebookF, FaLinkedin, FaYoutube } from "react-icons/fa"

const Footer = () => {
    return (
        <div className='px-[6rem] py-[5rem] text-white bg-[#1F1F1F]'>
            <div className='grid grid-cols-4 border-b border-gray-500 pb-[2rem]'>
                <div className='w-[15rem]'>
                    <div className='max-w-[3rem]'>
                        <img className='w-full' src={logo} alt="logo" />
                    </div>
                    <p className='my-7 font-light'>Virtual Islamic/ Digital Banking and payment platforms to asset management</p>
                    <div className='text-white flex text-xl items-center'>
                        <FaFacebookF />
                        <FaLinkedin className='text-gold mx-2' />
                        <FaYoutube />
                    </div>
                </div>
                <div className='ms-[5rem]'>
                    <h3 className='font-bold text-lg mb-3'>Products</h3>
                    <ul className='font-light leading-[2.5rem]'>
                        <li>Virtual Islamic Bank</li>
                        <li>Shariah Marketplace</li>
                        <li>Islamic Edtech</li>
                        <li>Product Advisory</li>
                    </ul>
                </div>
                <div className='ms-[4rem]'>
                    <h3 className='font-bold text-lg mb-3'>Quick Links</h3>
                    <ul className='font-light leading-[2.5rem]'>
                        <li>Services</li>
                        <li>Blogs</li>
                        <li>Knowledge Center</li>
                        <li>Clients</li>
                        <li>About Us</li>
                    </ul>
                </div>
                <div>
                    <h3 className='font-bold text-lg mb-3'>Contact Us</h3>
                    <ul className='my-[1rem]'>
                        <li className='font-bold'>Phone:</li>
                        <li className='font-light'>021-35123213</li>
                    </ul>
                    <ul>
                        <li className='font-bold'>Email:</li>
                        <li className='font-light'>info@greensfin.com</li>
                    </ul>
                    <ul className='my-[1rem]'>
                        <li className='font-bold'>Address:</li>
                        <li className='font-light'>4C 21st Comm. St, D.H.A Phase II Extension Phase 2 Ext Defence Housing Authority, Karachi,</li>
                    </ul>
                </div>
            </div>
            <div className='pt-[3rem] text-center'>
                <p>Copyright &copy; 2023. All rights reserverd.</p>
            </div>
        </div >
    )
}

export default Footer