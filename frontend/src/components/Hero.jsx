import React from 'react'
import { assets } from '../assets/assets'

const Hero = () => {
    return (
        <div className='flex flex-col mt-5 sm:flex-row border border-gray-400'>

            {/* Left Sidebar  */}

            <div className='flex flex-col w-full md:ps-15 py-10 sm:w-1/2 justify-center'>
                <div className='flex items-center gap-2'>
                    <p className='w-8 h-[1px] bg-black'></p>
                    <p className='font-medium text-sm sm:text-base'>OUR BESTSELLERS</p>
                </div>
                <div>
                    <h1 className='prata-regular text-[40px] sm:text-[60px]'>Latest Arrivals</h1>
                    <div className='flex items-center gap-2'>
                        <p className='font-medium text-sm sm:text-base'>SHOP NOW</p>
                        <p className='w-8 h-[1px] bg-black'></p>
                    </div>
                </div>
            </div>


            {/* Right Sidebar  */}

            <div className='md:w-1/2'>
                <img src={assets.hero_img} alt="" className='h-full' />
            </div>

        </div>
    )
}

export default Hero
