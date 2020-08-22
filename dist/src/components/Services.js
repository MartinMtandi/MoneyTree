import React from 'react'
import { ImRadioChecked2 } from "react-icons/im";

function Services() {
    let data = [
        {
            title: 'Full service, full stack',
            message: 'From idea to implementation, our complete product development approach means convenience and less risk.'
        },
        {
            title: 'Smart, intuitive user experiences',
            message: 'Money Tree’s methodology bridges the gap between design and engineering in ways our competitors can’t.'
        },
        {
            title: 'Trailblazing apps that function flawlessly',
            message: 'Our ambitious software, mobile, and web apps offer security, stability, and scalability, with attention to detail.'
        },
        {
            title: 'Tech that advances the industry',
            message: 'Money Tree helps create and lead some of the open-source web development technologies of the future.'
        },
        {
            title: 'Brilliant, top-tier talent',
            message: 'We hire only the brightest and most experienced product strategists, designers, engineers, and managers.'
        }
    ]
    return (
        <div className="py-20 bg-red-100">
            <div className="grid grid-cols-12 gap-4 mx-auto container">
                <div className="col-span-5">
                    <h1 className="font-bold text-5xl text-gray-700 leading-tight">One stop for <br />ingenuity</h1>
                    <div className="h-1 w-12 bg-orange-600 rounded mt-3"></div>
                    <p className="col-span-7 text-gray-700 leading-7 tracking-wide font-normal py-8">Money Tree’s comprehensive service suite ensures the applications we design and develop set high water marks for efficiency, engagement, and elegance.</p>
                </div>
                <div className="col-span-7 pl-16">
                    {data.map((item, index) => {
                        return (
                            <div className="flex mb-5" key={index}>
                                <ImRadioChecked2 className="mt-2 text-orange-600" />
                                <div className="text-gray-700 ml-3 leading-7 tracking-wide font-normal">
                                    <h2 className="font-semibold text-gray-800 text-lg">{item.title}</h2>
                                    <p>{item.message}</p>
                                </div>
                            </div>
                        )
                    })}
                </div>
            </div>
        </div>
    )
}

export default Services
