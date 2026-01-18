import React from 'react'
import { assets } from '../assets/assets'
import { NavLink } from 'react-router-dom'

const Footer = () => {
    return (
        <div>
            <div className='flex flex-col gap-14 my-10 mt-40 sm:grid grid-cols-[3fr_1fr_1fr]'>

                <div>
                    <img src={assets.logo} alt="" className='mb-5 w-32' />
                    <p className='w-full sm:w-2/3'>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.</p>
                </div>

                <div>
                    <h2 className='text-xl font-medium mb-5'>COMPANY</h2>
                    <ul className='flex flex-col'>
                        <NavLink to="/">Home</NavLink>
                        <NavLink to="/about">About us</NavLink>
                        <NavLink to="/delivery">Delivery</NavLink>
                        <NavLink to="/policy">Privacy Policy</NavLink>
                    </ul>
                </div>

                <div>
                    <h2 className='text-xl font-medium mb-5'>GET IN TOUCH</h2>
                    <ul className='flex flex-col'>
                        <li>+1-212-456-7890</li>
                        <li>prashant@gmail.com</li>
                    </ul>
                </div>
            </div>

            <hr/>

            <p className='text-center text-sm py-2'>Copyright 2025 © Prashant.dev - All Right Reserved.</p>
        </div>
    )
}

export default Footer
