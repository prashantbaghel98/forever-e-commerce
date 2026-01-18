import { React, useContext, useState } from 'react'
import { assets } from '../assets/assets'
import { NavLink, Link } from 'react-router-dom'
import { ShopContext } from '../context/ShopContext'


const Navbar = () => {

  const [toggle, settoggle] = useState(true)
  const {setShowSearch, getCartCount } = useContext(ShopContext)


  return (
    <div className="Nav flex justify-between items-center">

      <div className="logo w-[35%] sm:w-[15%]">
       <Link to='/'> <img src={assets.logo} alt="" /></Link>
      </div>


      <ul className='menu-list hidden sm:flex gap-5'>
        <NavLink to="/">
          <p>Home</p>
          <hr className='hidden h-1.5' />
        </NavLink>

        <NavLink to="/collection">
          <p>Collection</p>
          <hr className='hidden h-1.5' />
        </NavLink>

        <NavLink to="/about">
          <p>About</p>
          <hr className='hidden h-1.5' />
        </NavLink>

        <NavLink to="/contact">
          <p>Contact</p>
          <hr className='hidden h-1.5' />
        </NavLink>
      </ul>

      <div className="right-icon flex gap-5">
        <Link to="/">
          <img onClick={()=>setShowSearch( true)} src={assets.search_icon} alt="" className='size-5 cursor-pointer' />
        </Link>

       
          <div className='group cursor-pointer'>
           <Link to='/login'> <img src={assets.profile_icon} alt="" className='size-5 cursor-pointer' /></Link>
            <div className='text-gray-700  bg-gray-200 rounded-xl p-3  flex-col gap-2 group-hover:flex hidden absolute right-30 top-10 px-8'>
              <p className='cursor-pointer hover:text-black'>My Profile</p>
              <p className='cursor-pointer hover:text-black'>Orders</p>
              <p className='cursor-pointer hover:text-black'>Logout</p>
            </div>
          </div>
        

        <Link to="/cart">
          <img src={assets.cart_icon} alt="" className='size-5 relative' />
          <p className='absolute text-[8px] top-5 sm:top-7 right-12  sm:right-34 leading-1.5 bg-red-800 text-amber-50 p-1 rounded-full'>{getCartCount()}</p>
        </Link>
        <img src={assets.menu_icon} alt="" onClick={() => settoggle(false)} className="sm:hidden size-5" />
      </div>


      {/* Mobile Menu  */}

      <div className={`sm:hidden absolute right-0 ${toggle ? "hidden" : "w-full top-0 transition-all bg-white"}  `}>
        <div className={`${toggle ? "hidden" : "flex items-center gap-2 p-2"}`} onClick={() => { settoggle(true) }}>
          <img src={assets.cross_icon} alt="" className='size-4' />
          <p>Close</p>
        </div>

        <div className='flex flex-col py-5 '>
          <NavLink onClick={() => { settoggle(true) }} to="/" className="uppercase py-2 border-b-2">Home</NavLink>
          <NavLink onClick={() => { settoggle(true) }} to="/collection" className="uppercase py-2 border-b-2">Collection</NavLink>
          <NavLink onClick={() => { settoggle(true) }} to="/about" className="uppercase py-2 border-b-2">About</NavLink>
          <NavLink onClick={() => { settoggle(true) }} to="/contact" className="uppercase py-2 border-b-2">Contact</NavLink>
        </div>



      </div>





    </div>
  )
}

export default Navbar

