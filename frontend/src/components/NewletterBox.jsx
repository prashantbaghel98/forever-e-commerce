import React from 'react'

const NewletterBox = () => {

    const onSubmitHandler = (e) => {
        e.preventDefault();
    }


    return (
        <div className='text-center'>
            <p className='text-2xl font-medium text-gray-800'>Subscribe now & get 20% off</p>
            <p className='text-gray-500 mt-3 mb-10'>
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Tenetur, accusantium?
            </p>
            <form className='w-full sm:w-1/2 flex items-center gap-3 mx-auto' action="">
                <input className='w-full sm:flex-1 outline-none' type="email" placeholder='Enter your email' required />
                <button type='submit' className='bg-black text-white text-xs px-10 py-4'>Subscribe</button>
            </form>
        </div>
    )
}

export default NewletterBox
