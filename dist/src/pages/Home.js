import React from 'react'
import Navbar from '../components/Navbar'
import Hero from '../components/Hero'
import WhatWeDo from '../components/WhatWeDo'
import Services from '../components/Services'
import Portfolio from '../components/Portfolio'

function Home() {
    return (
        <div>
            <Navbar />
            <Hero />
            <WhatWeDo />
            <Services />
            <Portfolio />
        </div>
    )
}

export default Home
