import React from 'react'
import Near from "../assets/brands/near.png"
import DAOMaker from "../assets/brands/daomaker.png"
import LDcapital from "../assets/brands/ldcapital.png"
import Binatar from "../assets/brands/binatir.png"
import CoinUnited from "../assets/brands/coinunited.png"
import SnapFingers from "../assets/brands/snap.png"
import Commas from "../assets/brands/3commas.png"
import Mexc from "../assets/brands/mexc.png"

const TeamUp = () => {
  return (
    <div className=' mx-20 pt-24'>
        <p className='text-7xl uppercase space-grotesk text-center font-medium bg-gradient-to-b from-customStart to-customEnd bg-clip-text text-transparent'>TEAMED UP WITH <br /> THE BEST</p>
        <div className=" grid grid-cols-4 gap-6 items-center pt-10" >
            <img className=' w-[357px] hover:scale-105' src={Near} alt="near foundations" />
            <img className=' w-[330px] hover:scale-105' src={DAOMaker} alt="daomaker" />
            <img className=' w-[410px] hover:scale-105' src={LDcapital} alt="ldcapital" />
            <img className=' w-[272px] hover:scale-105' src={Binatar} alt="binatar" />
            <img className=' w-[372px] hover:scale-105' src={CoinUnited} alt="coinunited" />
            <img className=' w-[357px] hover:scale-105' src={SnapFingers} alt="snapfingers" />
            <img className=' w-[235px] hover:scale-105' src={Commas} alt="3commas" />
            <img className=' w-[235px] hover:scale-105' src={Mexc} alt="mexc" />
        </div>
    </div>
  )
}

export default TeamUp