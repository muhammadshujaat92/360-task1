import Hero from "./Hero"
import Navbar from "./Navbar"

const Header = () => {
    return (
        <div className="max-h-[60rem]" style={{ background: 'linear-gradient(0deg, rgba(39, 39, 39, 1) 50%, rgba(53, 29, 91, 1) 100%)' }}>
            <Navbar />
            <Hero />
        </div>
    )
}

export default Header