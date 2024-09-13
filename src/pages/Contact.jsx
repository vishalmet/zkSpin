import React from 'react'
import Footer from '../components/Footer'

const Contact = () => {
    return (
        <div className="gradient-container overflow-x-hidden min-h-screen text-white epilogue">
            <div className='pt-28 mx-4 md:mx-20'>
                <p className=' text-4xl md:text-5xl lg:text-7xl space-grotesk text-center font-medium bg-gradient-to-b from-customStart to-customEnd bg-clip-text text-transparent'>CONTACT US</p>

                <div class="container mx-auto mt-4 md:w-1/3 border border-purple-500 bg-white/10 rounded-lg backdrop-blur-md backdrop-filter">
                    <div class="p-5 space-y-5 shadow-xl">
                        <form>
                            <div class="grid grid-cols-2 gap-5">
                                <input
                                    type="text"
                                    class="border border-gray-500 px-4 py-2 focus:outline-none focus:border-purple-500 bg-gray-900/10 rounded-md"
                                    placeholder="First Name"
                                />
                                <input
                                    type="text"
                                    class="border border-gray-500 px-4 py-2 focus:outline-none focus:border-purple-500 bg-gray-900/10 rounded-md"
                                    placeholder="Last Name"
                                />
                                <input
                                    type="email"
                                    class="border border-gray-500 px-4 py-2 focus:outline-none focus:border-purple-500 col-span-2 bg-gray-900/10 rounded-md"
                                    placeholder="Email"
                                />
                               
                                <textarea
                                    cols="10"
                                    rows="5"
                                    class="border border-gray-500 px-4 py-2 focus:outline-none focus:border-purple-500 col-span-2 bg-gray-900/10 rounded-md"
                                    placeholder="Write your message..."
                                ></textarea>
                            </div>
                            <input
                                type="submit"
                                value="Send Message"
                                class="focus:outline-none mt-5 bg-gradient-to-br from-customStart to-customEnd hover:bg-gradient-to-tr transforn transition-colors duration-300 rounded-md px-4 py-2 text-white font-bold w-full"
                            />
                        </form>
                    </div>
                </div>
            </div>
            <div className="absolute bottom-0 w-full">
            <Footer />
            </div>
        </div>
    )
}

export default Contact