import React, { useContext, useEffect, useState } from 'react'
import { useParams } from 'react-router-dom'
import { ShopContext } from '../context/ShopContext'
import { assets } from '../assets/assets'
import RelatedProducts from '../components/RelatedProducts'

const Product = () => {
  const { productId } = useParams()
  const { products, currency, addToCart } = useContext(ShopContext)

  const [productData, setProductData] = useState(null)
  const [image, setImage] = useState('')
  const [size, setSize] = useState('')

  useEffect(() => {
    const product = products.find(item => item._id === productId)
    if (product) {
      setProductData(product)
      setImage(product.image[0])
    }
  }, [productId, products])

  return productData ? (
    <div className="border-t pt-10">

      {/* Product Section */}
      <div className="flex gap-5 flex-col sm:flex-row">

        {/* Thumbnails */}
        <div className="flex sm:flex-col gap-3 overflow-x-auto sm:overflow-y-auto sm:w-[5%]">
          {productData.image.map((item, index) => (
            <img
              key={index}
              src={item}
              onClick={() => setImage(item)}
              className="w-[24%] sm:w-full cursor-pointer"
              alt=""
            />
          ))}
        </div>

        {/* Main Image */}
        <div className="w-full sm:w-[40%]">
          <img className="w-full" src={image} alt="" />
        </div>

        {/* Product Info */}
        <div className="flex-1">

          <h1 className="text-2xl font-medium">{productData.name}</h1>

          {/* Rating */}
          <div className="flex items-center gap-1 mt-2">
            <img src={assets.star_icon} className="w-3 h-3" />
            <img src={assets.star_icon} className="w-3 h-3" />
            <img src={assets.star_icon} className="w-3 h-3" />
            <img src={assets.star_icon} className="w-3 h-3" />
            <img src={assets.star_dull_icon} className="w-3 h-3" />
            <p className="pl-2 text-sm">(122)</p>
          </div>

          <p className="mt-5 text-3xl font-medium">
            {currency}{productData.price}
          </p>

          <p className="mt-5 text-gray-500">
            {productData.description}
          </p>

          {/* Size Selection */}
          {productData.size && (
            <div className="flex flex-col gap-4 my-8">
              <p>Select Size</p>
              <div className="flex gap-2">
                {productData.size.map((item, index) => (
                  <button
                    key={index}
                    onClick={() => setSize(item)}
                    className={`border px-4 py-2 bg-gray-100 transition 
                      ${item === size ? 'border-orange-500 font-semibold' : ''}`}
                  >
                    {item}
                  </button>
                ))}
              </div>
            </div>
          )}

          {/* Add to Cart */}
          <button onClick={()=>addToCart(productData._id, size)} className="bg-black text-white px-8 py-3 text-sm active:bg-gray-700">
            ADD TO CART
          </button>

          <hr className="mt-8 w-4/6" />

          {/* Policies */}
          <div className="text-sm text-gray-500 mt-5 flex flex-col gap-1">
            <p>100% Original Product</p>
            <p>Cash on delivery is available</p>
            <p>Easy return and exchange within 7 days</p>
          </div>
        </div>
      </div>

      {/* Description & Reviews */}
      <div className="mt-10">
        <div className="flex">
          <b className="border px-5 py-3 text-sm">Description</b>
          <p className="border px-5 py-3 text-sm">Reviews (122)</p>
        </div>

        <div className="border px-6 py-6 text-sm text-gray-500 space-y-4">
          <p>Lorem ipsum dolor sit amet consectetur adipisicing elit.</p>
          <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Itaque repellat vel magni.</p>
        </div>
      </div>

      {/* Display Related Product  */}

      <RelatedProducts category={productData.category} subCategory={productData.subCategory}/>

    </div>
  ) : (
    <div className="opacity-0"></div>
  )
}

export default Product
