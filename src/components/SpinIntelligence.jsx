import React from 'react'
import SpinIntel from "../assets/spinintelligence.png"

const SpinIntelligence = () => {
  return (
    <div className=' mx-20 pt-24 text-white'>
        <div className=" flex items-center">
            <img className=' h-[700px] w-[820px]' src={SpinIntel} alt="spin intelligence" />
            <div className="mx-32 space-y-10">
                <p className='text-7xl uppercase space-grotesk font-medium bg-gradient-to-br from-customStart to-customEnd bg-clip-text text-transparent'>spin intelligence</p>
                <p className=''>On-chain gaming activities are professionally indexed and analyzed, with actionable insights accessible via a Web2 API, by the team behind <a className='underline' href="https://x.com/CertiKAlert" target='_blank'> @CertikAlert </a> and <a className='underline' target='_blank' href="https://www.certik.com/products/skyinsights"> SkyInsights. </a></p>
                <button className=' text-black font-semibold bg-white uppercase p-4 hover:bg-slate-200'>coming soon</button>
            </div>
        </div>
    </div>
  )
}

export default SpinIntelligence