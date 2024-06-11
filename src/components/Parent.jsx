import React from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { decrement, increment } from '../assets/slices/counterSlice'

export const Parent = () => {

 const data =useSelector((state)=> state.counter.value)
 const dispatch = useDispatch()



  return (
    <>
<div className="flex gap-[50px] justify-center items-center w-full h-screen bg-photo bg-no-repeat bg-cover bg-center">

    <button onClick={()=>dispatch(decrement())} className="text-2xl font-semibold text-white bg-pink-500 w-[110px] h-[55px] transition-all rounded-sm hover:bg-sky-400 active:bg-purple-500 hover:text-pink-600 active:text-black">Remove</button>
    <h1 className="text-6xl font-black text-pink-700">{data}</h1>
    <button onClick={()=>dispatch(increment())} className="text-2xl font-semibold text-white bg-pink-500 w-[110px] h-[55px] transition-all rounded-sm hover:bg-sky-400  active:bg-purple-500 hover:text-pink-600 active:text-black">Add</button>

</div>
    
    </>
  )
}
