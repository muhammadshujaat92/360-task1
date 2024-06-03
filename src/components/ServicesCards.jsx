const ServicesCards = ({ icon, heading, text }) => {
    return (
        <div className="bg-[#313131] w-[20rem] p-[2rem] flex flex-col items-center rounded-lg mx-3 justify-center">
            <div>
                <img src={icon} alt="icon" />
            </div>
            <h1>{heading}</h1>
            <p className="my-[1rem] font-light">{text}</p>
        </div>
    )
}

export default ServicesCards