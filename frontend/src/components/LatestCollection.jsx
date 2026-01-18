import React, { useContext,useState,useEffect } from 'react'
import { ShopContext } from '../context/ShopContext'
import Title from './Title';
import ProductItem from './ProductItem';

const LatestCollection = () => {
    const { products } = useContext(ShopContext);
    const [latestProducts, setlatestProducts] = useState([]);

    useEffect(() => {
    setlatestProducts(products.slice(0,10))
    }, [])
    
    return (
        <div className='my-10'>
            <div className='text-center py-8 text-3xl'>
                <Title text1={'LATEST '} text2={'COLLECTION'} />
                <p className='text-xs m-auto sm:text-sm md:text-base text-gray-600'>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the.</p>
            </div>

        {/* Rendering Products  */}

      
  <div className='grid grid-cols-2 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-5'>
            {
              latestProducts.map((item,index)=>{
                return <ProductItem key={index} id={item._id} image={item.image} name={item.name} price={item.price} />
              })
            }
        </div>



        </div>
    )
}

export default LatestCollection
