import React from 'react'
import Title from '../components/Title'
import { assets } from '../assets/assets'
import NewletterBox from '../components/NewletterBox'

const About = () => {
  return (
    <div>

      <div className='text-2xl text-centerpt-8 border-t'>
        <Title text1={'ABOUT'} text2={'US'} />
      </div>

      <div className='my-10 flex flex-col md:flex-row gap-16'>
        <img className='w-full md:max-w-[450px]' src={assets.about_img} alt="" />
        <div className='flex flex-col justify-center gap-6 md:2/4 text-gray-600'>
          <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Modi nulla obcaecati fugit. Maxime ex, a illo praesentium sit soluta aliquam.
          </p>
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Modi quia tempore dolor nemo unde distinctio esse, delectus eveniet eum pariatur!
          </p>
          <b className='text-gray-700'>Our Misson</b>
          <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Praesentium dolorem ipsum maiores expedita odio amet reprehenderit ab, reiciendis explicabo distinctio?</p>
        </div>
      </div>

      <div className='text-xl py-4'>
        <Title text1={'WHY'} text2={'CHOOSE US'} />
      </div>

      <div className='flex flex-col md:flex-row text-sm mb-20'>

        <div className='border border-gray-300 px-10 md:px-16 py-8 sm:py-20 flex flex-col gap-5'>
          <b>Quality Assurance:</b>
          <p className='text-gray-600'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Pariatur, alias. Commodi a tempore dolorem reprehenderit!</p>
        </div>

        <div className='border border-gray-300 px-10 md:px-16 py-8 sm:py-20 flex flex-col gap-5'>
          <b>Convenince:</b>
          <p className='text-gray-600'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Pariatur, alias. Commodi a tempore dolorem reprehenderit!</p>
        </div>

        <div className='border border-gray-300 px-10 md:px-16 py-8 sm:py-20 flex flex-col gap-5'>
          <b>Customer Service:</b>
          <p className='text-gray-600'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Pariatur, alias. Commodi a tempore dolorem reprehenderit!</p>
        </div>
      </div>

      <NewletterBox />
    </div>
  )
}

export default About
