import React from 'react'
import Logo from '../images/logo.png'

function Navbar() {
    return (
        <nav class="bg-white px-6 py-2 border-b">
            <div className="flex items-center justify-between flex-wrap mx-auto container">
                <div class="flex items-center flex-shrink-0 text-white mr-6">
                    <img src={Logo} alt="Logo" className="h-16"/>
                </div>
                <div class="block lg:hidden">
                    <button class="flex items-center px-3 py-2 border rounded text-teal-200 border-teal-400 hover:text-white hover:border-white">
                    <svg class="fill-current h-3 w-3" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><title>Menu</title><path d="M0 3h20v2H0V3zm0 6h20v2H0V9zm0 6h20v2H0v-2z"/></svg>
                    </button>
                </div>
                <div class="w-full block flex-grow lg:flex lg:items-center lg:w-auto md:text-right font-medium">
                    <div class="lg:flex-grow text-right text-gray-700">
                        <a href="#home" class="block mt-4 lg:inline-block lg:mt-0 mr-6">
                            Home
                        </a>
                        <a href="#portfolio" class="block mt-4 lg:inline-block lg:mt-0 mr-6">
                           Portfolio
                        </a>
                        <a href="#about" class="block mt-4 lg:inline-block lg:mt-0 mr-6">
                            About 
                        </a>
                        <a href="#contact" class="block mt-4 lg:inline-block lg:mt-0">
                            Contact Us 
                        </a>
                    </div>
                </div>
            </div>
        </nav>
    )
}

export default Navbar
