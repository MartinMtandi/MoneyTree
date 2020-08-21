import React from 'react'
import UI from '../images/ux-ui-active.svg'
import web from '../images/web-development-active.svg'
import mobile from '../images/mobile-development-active.svg'
import machineLearning from '../images/machine-learning-active.svg'
import productDesign from '../images/product-management-active.svg'

function WhatWeDo() {
    return (
        <div className="bg-orange-100 py-32">
            <div className="grid grid-cols-12 gap-4 mx-auto container">
                <div className="col-span-5">
                    <h1 className="font-bold text-5xl text-gray-700 leading-tight">What <br /> We Do</h1>
                    <div className="h-1 w-12 bg-orange-600 rounded mt-3"></div>
                </div>
                <div className="col-span-7 text-gray-700 leading-7 tracking-wide font-normal">
                    <p>
                        Going remote has never been so important. It's a challenging time for everyone, but hopefully it will reinforce our community, and we will learn from each other and find support through collaboration. 
                    </p>
                    <p className="py-4">
                        Money Tree has the right experience and capabilities to help you develop a new product, modernize an existing app or ramp up your dev team. So don't put your plans on hold! We are your tech partner for project definition, application design, and technical development.
                    </p>
                </div>
            </div>
            <div className="flex items-center justify-between mx-auto container text-center pt-8">
                <div>
                    <img src={UI} alt="UI/UX design" className="block mx-auto" />
                    <p className="my-4">UX/UI <br />Design</p>
                </div>
                <div>
                    <img src={web} alt="UI/UX design" className="block mx-auto" />
                    <p className="my-4">Web <br /> Development</p>
                </div>
                <div>
                    <img src={mobile} alt="UI/UX design" className="block mx-auto" />
                    <p className="my-4">Mobile <br />Development</p>
                </div>
                <div>
                    <img src={machineLearning} alt="UI/UX design" className="block mx-auto" />
                    <p className="my-4">Machine <br />Learning</p>
                </div>
                <div>
                    <img src={productDesign} alt="UI/UX design" className="block mx-auto" />
                    <p className="my-4">Product <br />Discovery</p>
                </div>
            </div>
        </div>
    )
}

export default WhatWeDo
