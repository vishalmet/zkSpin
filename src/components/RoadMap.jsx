import React from 'react'
import Roadmap from "../assets/roadmap.png"

const RoadMap = () => {
  return (
    <div className=' mx-0 md:mx-20 pt-10 md:pt-24 text-white'>
        <p className='text-4xl md:text-5xl lg:text-7xl uppercase space-grotesk text-center font-medium bg-gradient-to-b from-customStart to-customEnd bg-clip-text text-transparent'>roadmap</p>
        <img className=' pt-6 md:pt-16' src={Roadmap} alt="" />
    </div>
  )
}

export default RoadMap