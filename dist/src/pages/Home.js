import React, {Fragment} from 'react'
import Navbar from '../components/Navbar'
import Hero from '../components/Hero'
import WhatWeDo from '../components/WhatWeDo'
import Services from '../components/Services'
import Portfolio from '../components/Portfolio'
import AboutUs from '../components/AboutUs'
import ContactUs from '../components/ContactUs'
import Footer from '../components/Footer'

function Home() {
    return (
        <Fragment>
            <div id="page-container">
                <div id="content-wrap">
                    <Navbar />
                    <Hero />
                    <WhatWeDo />
                    <Services />
                    <Portfolio />
                    <AboutUs />
                    <ContactUs />
                </div>
                <div id="footer">
                    <Footer />
                </div>
            </div>
        </Fragment>
    )
}

export default Home
