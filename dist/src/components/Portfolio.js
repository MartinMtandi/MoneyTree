import React from 'react'

function Portfolio() {
    return (
        <div className="py-20 bg-red-100">
           <div className="container mx-auto">
                <div className="text-center">
                    <h1 className="font-bold text-5xl text-gray-700 leading-tight">Our <br />Portfolio</h1>
                    <div className="h-1 w-12 bg-orange-600 rounded mt-3 mx-auto"></div>
                </div>
                <div className="grid grid-cols-3 gap-4">
                    <div>
                        {/* Portfolio One */}
                    </div>
                    <div>
                        {/* Portfolio Two */}
                    </div>
                    <div>
                        {/* Portfolio Three */}
                    </div>
                </div>
           </div>
        </div>
    )
}

export default Portfolio
