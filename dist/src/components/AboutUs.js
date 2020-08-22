import React from 'react'
import Counter from 'react-number-counter'
import About from '../images/about-us.svg'

function AboutUs() {
    return (
        <div className="py-20 bg-red-100" id="about">
            <div className="grid grid-cols-12 gap-4 mx-auto container">
                <div className="col-span-7">
                    <h1 className="font-bold text-5xl text-gray-700 leading-tight">We are <br />problem solvers</h1>
                    <div className="h-1 w-12 bg-orange-600 rounded mt-3"></div>
                    <p className="text-gray-700 leading-7 tracking-wide py-6">Driven by genuine commitment to quality in every aspect of our work.</p>
                    <div className="flex items-center py-6">
                        <p className="text-gray-700 leading-7 tracking-wider uppercase text-sm font-semibold border-b-2 border-gray-700">About Us</p>
                    </div>
                    <p className="leading-7 tracking-wide text-gray-700">
                        For the past 6 years we’ve been helping creatives and entreprenuers bring their visions to life. Whether you are a startup or a web agency, we work as an extension to your team, bringing our resources and expertise to your organization.<span className="text-indigo-600 cursor-pointer font-medium"> Contact us</span> for more details about different cooperation models and prices.
                    </p>
                </div>
                <div className="col-span-5">
                    <img src={About} alt="team-work"/>
                </div>
            </div>
            <div className="flex items-center justify-between pt-10 mx-auto container px-24">
                <div className="text-center mx-8">
                    <h1 className="text-gray-800 text-6xl py-2 "><Counter start={0} end={6} delay={30} /></h1>
                    <p className="leading-snug tracking-wide  text-lg text-gray-700">Years Of <br />Experience</p>
                </div>
                <div className="text-center mx-8">
                    <h1 className="text-gray-800 text-6xl py-2 "><Counter start={0} end={125} delay={30} />+</h1>
                    <p className="leading-snug tracking-wide  text-lg text-gray-700">Projects <br />Completed</p>
                </div>
                <div className="text-center mx-8">
                    <h1 className="text-gray-800 text-6xl py-2 "><Counter start={0} end={78} delay={30} />%</h1>
                    <p className="leading-snug tracking-wide  text-lg text-gray-700">Returning <br />Clients</p>
                </div>
            </div>
        </div>
    )
}

export default AboutUs
