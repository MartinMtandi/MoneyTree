import React from 'react'
import Navbar from '../components/Navbar'
import Hero from '../components/Hero'
import WhatWeDo from '../components/WhatWeDo'
import Services from '../components/Services'
import Portfolio from '../components/Portfolio'
import AboutUs from '../components/AboutUs'
import ContactUs from '../components/ContactUs'

function Home() {
    return (
        <div>
            <Navbar />
            <Hero />
            <WhatWeDo />
            <Services />
            <Portfolio />
            <AboutUs />
            <ContactUs />
        </div>
    )
}

export default Home
