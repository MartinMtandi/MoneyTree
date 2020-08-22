import React from 'react'
import { BsArrowRight } from "react-icons/bs";

function Portfolio() {
    return (
        <div className="py-20 bg-white bg-gray-100">
           <div className="container mx-auto">
                <div className="text-center">
                    <h1 className="font-bold text-5xl text-gray-700 leading-tight">Our <br />Portfolio</h1>
                    <div className="h-1 w-12 bg-orange-600 rounded mt-3 mx-auto"></div>
                </div>
                <div className="mx-32">
                    <div className="grid grid-cols-2 py-12">
                        <div className="text-gray-700 px-5 py-8 border-r">
                            <p className="leading-7 tracking-wide font-light">Money Tree strategy, user experience, design, engineering, and project management have worked with the Hammer & Tongues Money Lenders Production Operations team since 2017. We are partnering to build web apps that transform how Hammer & Toungues Money Lenders manages its funds.</p>
                            <h1 className="mt-5 font-semibold">Hammer & Tongues Money Lenders</h1>
                            <button className="px-5 py-2 flex items-center justify-center border border-gray-700 mt-8 w-48">
                                <BsArrowRight />
                                <p className="ml-3">Learn More</p>
                            </button>
                        </div>
                        <div className="px-5 py-8">
                            <p className="leading-7 tracking-wide font-light">
                            Commercial Bank of Zimbabwe (CBZ) was building an innovative new Ember.js app. Money Tree provided extensive training and code review expertise to the financial services company’s development team, allowing Fidelity to stay on track with its strategically important project.
                            </p>
                            <h1 className="mt-5 font-semibold text-gray-700">Commercial Bank of Zimbabwe (CBZ)</h1>
                            <button className="px-5 py-2 flex items-center justify-center border mt-8 w-48 bg-orange-600">
                                <BsArrowRight className="text-white"/>
                                <p className="ml-3 text-white">Learn More</p>
                            </button>
                        </div>
                        <div className="text-gray-700 px-5 py-8 border-r border-t border-b">
                            <p className="leading-7 tracking-wide font-light">Money Tree worked with digital marketing and sales team of The Residence, to diagnose and fix system performance issues using Elixir and Phoenix development. This provided a financial boost, allowing the client to support more users on less hardware, leading to a faster and more reliable user experience.</p>
                            <h1 className="mt-5 font-semibold">Hammer & Tongues Africa Holdings</h1>
                            <button className="px-5 py-2 flex items-center justify-center border border-gray-700 mt-8 w-48">
                                <BsArrowRight />
                                <p className="ml-3">Learn More</p>
                            </button>
                        </div>
                        <div className="border-t border-b border-gray-400 px-5 py-8">
                            <p className="leading-7 tracking-wide font-light">
                            An entrepreneur engaged us to lead digital product development for a skill-sharing marketplace. Responsible for the web application’s strategy, user experience, design, and engineering, Money Tree also worked closely with the client after launch to build her IT Support team.
                            </p>
                            <h1 className="mt-5 font-semibold text-gray-700">Afrosoft Innovations</h1>
                            <button className="px-5 py-2 flex items-center justify-center border mt-8 w-48 bg-orange-600">
                                <BsArrowRight className="text-white"/>
                                <p className="ml-3 text-white">Learn More</p>
                            </button>
                        </div>
                        <div className="text-gray-700 px-5 py-8 border-r">
                            <p className="leading-7 tracking-wide font-light">Money Tree led digital product development for a cross-platform, fitness point of sale, administration, and reporting application. Our digital strategy, user research, design, and unique methodology enabled an innovative digital solution that brought benefits to both Mariana Tek and customers.</p>
                            <h1 className="mt-5 font-semibold">Mariana Tek</h1>
                            <button className="px-5 py-2 flex items-center justify-center border border-gray-700 mt-8 w-48">
                                <BsArrowRight />
                                <p className="ml-3">Learn More</p>
                            </button>
                        </div>
                        <div className="px-5 py-8">
                            <p className="leading-7 tracking-wide font-light">
                            CreditCardReviews.com wanted to transform the online comparison shopping experience for credit cards. Monet Tree engineered a sophisticated real-time calculation tool using Ember.js and designed a user-friendly, responsive web application so shoppers could quickly access results.
                            </p>
                            <h1 className="mt-5 font-semibold text-gray-700">CreditCardReviews.com</h1>
                            <button className="px-5 py-2 flex items-center justify-center border mt-8 w-48 bg-orange-600">
                                <BsArrowRight className="text-white"/>
                                <p className="ml-3 text-white">Learn More</p>
                            </button>
                        </div>
                    </div>
                </div>
           </div>
        </div>
    )
}

export default Portfolio
