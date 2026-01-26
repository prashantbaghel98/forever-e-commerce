import axios from 'axios'
import { React, useState, useEffect } from 'react'
import { backend_url, currency } from '../App'
import { toast } from 'react-toastify';


const List = ({token}) => {

 const [list, setList] = useState([])

  const fetchList = async () => {
    try {
      const response = await axios.get(backend_url + '/api/product/list')
      if (response.data.success) {
        setList(response.data.product)
      
      }
      else {
        toast.error(response.data.message)
      }
    } catch (error) {
      console.log(error)
      toast.error(error.message)
    }
  }


  const removeProduct= async(id)=>{
try {
  const response = await axios.post(backend_url + '/api/product/remove',{id},{headers:{token}})
  if(response.data.success){
    toast.success(response.data.message)
    await fetchList();
  }
  else{
    toast.error(response.data.message)
  }
} catch (error) {
  console.log(error)
  toast.error(error.message)
}
  }


  useEffect(() => {
    fetchList();
  }, [])


  return (
    <>

      <p className='mb-2'>ALL Product List</p>

      <div className='flex flex-col gap-2'>

        {/* list Table Title  */}

        <div className='hidden md:grid grid-cols-[1fr_3fr_1fr_1fr_1fr] items-center py-1 px-2 border bg-gray-100 text-sm'>
          <p>Image</p>
          <p>Name</p>
          <p>Category</p>
          <p>Price</p>
          <p className='text-center'>Action</p>
        </div>

        {/* Product List  */}
{list.length === 0 ? (
  <p className="text-sm text-gray-500">No products found</p>
) : (
  list.map((item,index) => (
    <div
      key={index}
      className="grid grid-cols-[1fr_3fr_1fr_1fr_1fr] items-center py-1 px-2 border text-sm"
    >
      <img
        src={item.image}
        alt={item.name}
        className="w-12 h-12 object-cover"
      />

      <p>{item.name}</p>
      <p>{item.category}</p>
      <p>{currency}{item.price}</p>

      <div className="text-center">
        <button onClick={()=>removeProduct(item._id)} className="text-red-500">X</button>
      </div>
    </div>
  ))
)}

     



      </div>

    </>
  )
}

export default List