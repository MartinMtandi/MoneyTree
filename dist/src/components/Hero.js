import React from 'react'
import bg from '../images/bg.jpg'
import { FiPhoneCall } from "react-icons/fi";

const imageStyle = {
    backgroundImage: `url(${bg})`,
    height: '520px'
}

function Hero() {
    return (
        <div className="bg-cover w-full bg-center border-none" style={imageStyle} id="home">
           <div className="hero h-full">
            <div className="mx-auto container">
                    <div className="py-20">
                        <h1 className="text-white font-bold leading-snug text-5xl uppercase font-sans">Next Level <br /> Design & Technology</h1>
                        <div className="h-1 w-16 bg-orange-600 rounded mt-6"></div>
                        <p className="text-white text-lg my-8 font-medium">You have the vision for a stunning digital experience. We’re <br />
                            the software design and engineering team that can bring it to life.
                        </p>
                        <button className="bg-orange-600 text-white px-5 py-3 rounded w-48 shadow-lg">
                            <div className="flex items-center justify-center">
                                <div>
                                    <FiPhoneCall />
                                </div>
                                <div className="ml-3">
                                    Contact Us
                                </div>
                            </div>
                        </button>
                    </div>
                </div>
           </div>
        </div>
    )
}

export default Hero
