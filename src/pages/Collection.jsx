import React, { useContext, useState } from 'react'
import { ShopContext } from '../context/ShopContext'
import { assets } from '../assets/assets';
import Title from '../components/Title';

const Collection = () => {
  const { products } = useContext(ShopContext);
  const [showFilter, setShowFilter] = useState(false)
  return (
    <div className='flex flex-col sm:flex-row gap-1 sm:gap-10 pt-10 border-t'>

      {/* Filter Options  */}

      <div className='min-w-60'>
        <p onClick={() => { setShowFilter(!showFilter) }} className='my-2  text-xl flex items-center cursor-pointer gap-2'>FILTERS
          <img className={`h-3 sm:hidden ${showFilter ? "rotate-90" : ""}`} src={assets.dropdown_icon} alt="" />
        </p>

        {/* Category Filter  */}

        <div className={`border border-gray-300 pl-5 py-3 mt-6 ${showFilter ? "" : "hidden"} sm:block`}>
          <p className='mb-3 txt-sm font-medium'>CATEGORIES</p>
          <div className='flex gap-2 sm:flex-col text-gray-700'>
            <p className='flex gap-1 text-base'><input type="checkbox" value={'men'} name="men" />Men</p>
            <p className='flex gap-1 text-base'><input type="checkbox" value={'women'} name="women" />Women</p>
            <p className='flex gap-1 text-base'><input type="checkbox" value={'kid'} name="kid" />Kids</p>
          </div>
        </div>

        <div className={`border border-gray-300 pl-5 py-3 my-5 ${showFilter ? "" : "hidden"} sm:block`}>
          <p className='mb-3 txt-sm font-medium'>TYPES</p>
          <div className='flex gap-2 sm:flex-col text-gray-700'>
            <p className='flex gap-1 text-base'><input type="checkbox" value={'topwaer'} name="topwaer" />Topwear</p>
            <p className='flex gap-1 text-base'><input type="checkbox" value={'bottomwear'} name="bottomwear" />Bottomwear</p>
            <p className='flex gap-1 text-base'><input type="checkbox" value={'winterwear'} name="winterwear" />Winterwear</p>
          </div>
        </div>
      </div>


      {/* Right Side  */}

      <div className='flex-1 '>
        <div className='flex justify-between text-base sm:text-2xl mb-4'>
        <Title text1={'ALL'} text2={'COLLECTIONS'} />

        {/* Product Sort  */}

        <select className='border border-gray-300 text-sm px-2'>
          <option value="relavent">Sort by: Relavent</option>
          <option value="low-high">Sort by: Low - High</option>
          <option value="high-low">Sort by: High - Low</option>
        </select>
        </div>
      </div>


    </div>
  )
}

export default Collection
