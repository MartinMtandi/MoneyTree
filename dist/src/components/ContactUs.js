import React from 'react'
import { BsArrowRight } from "react-icons/bs";

function ContactUs() {
    return (
        <div className="py-32" id="contact">
            <div className="container mx-auto">
                <div className="grid grid-cols-12 gap-4">
                    <div className="col-span-5">
                        <h1 className="font-bold text-5xl text-gray-700 leading-tight">Let’s build something <br />great together</h1>
                        <div className="h-1 w-12 bg-orange-600 rounded mt-3"></div>
                        <p className="text-gray-700 leading-7 tracking-wide font-normal my-12">Whatever your ambition, we’d love to design and build your next big idea or lend a hand on an existing one.</p>
                    </div>
                    <div className="col-span-7">
                        <form className="ml-16">
                            <div className="grid grid-cols-2 gap-4"> 
                                <div>
                                    <input className="p-3 border rounded text-gray-700 w-full" placeholder="First Name" />
                                </div>
                                <div>
                                    <input className="p-3 border rounded text-gray-700 w-full" placeholder="First Name" />
                                </div>
                            </div>
                            <div className="my-8">
                                <input className="p-3 border rounded text-gray-700 w-full" placeholder="Email" />
                            </div>
                            <div className="border rounded px-3">
                                <label className="block my-3 text-gray-500 leading-7 tracking-wide">Message</label>
                                <textarea className="w-full focus:outline-none text-gray-700 resize-none" rows="4" cols="50"></textarea>
                            </div>
                            <div className="mt-6">
                                <button className="px-6 py-3 rounded block w-full bg-orange-600 text-white">
                                   <div className="flex items-center justify-center w-full">
                                        <p className="mr-2">Let's Get Started</p>
                                        <BsArrowRight />
                                   </div>
                                </button>
                            </div>
                        </form>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default ContactUs
