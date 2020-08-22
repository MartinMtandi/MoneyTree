import React from 'react'

function Footer() {
    return (
        <footer className="border-t pt-8 pb-6 text-gray-100 bg-blue-900">
            <div className="flex items-center justify-between container mx-auto">
                <div>
                    <p>Privacy Policy</p>
                </div>
                <div>
                    <p>&#169; {new Date().getFullYear()} Money Tree - Web and Mobile Development Company. All Rights Reserved</p>
                </div>
            </div>
        </footer>
    )
}

export default Footer
