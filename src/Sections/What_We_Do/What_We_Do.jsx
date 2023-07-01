import React from 'react'
import { Link } from 'react-scroll'
import { data } from './data.js'
const Find_Care = () => {
  return (
    <div className='w-full bg-white h-full flex flex-col items-center gap-3 justify-center'>
      <div className='h-[12rem] flex items-center justify-center '>
        <h1 className='text-4xl '>What We Do</h1>
      </div>
      <div className=' w-[90%] lg:h-[20rem] gap-[2rem] grid grid-cols-1 lg:grid-cols-4  '>
        {data.map((item) => {
          return (
            <div className='h-[18rem] w-full lg:w-[20rem] bg-gray-300 hover:bg-gray-500 cursor-pointer flex items-center justify-center '>
              <div className='h-[90%] w-[90%] flex-col text-center flex items-center justify-center gap-[2rem]'>
                <h3 className='font-bold text-xl'>{item.title}</h3>
                <p>{item.description}</p>
                <Link className='font-semibold text-sm' to={item.title}>{item.link}</Link>
              </div>
            </div>
          )
        })}
      </div>


      <div className='flex flex-col lg:flex-row items-center h-[25rem] lg:h-[20rem] w-[80%] text-center justify-center'>
        <div className='h-[90%] w-full lg:w-[50%] flex items-center justify-around  flex-col'>
          <h2 className='font-semibold text-2xl'>Already Know Which <br/> services you need? </h2>
          <button className='bg-yellow-700 h-[3rem] w-[12rem] rounded-md font-semibold'>Connect with us</button>
        </div>
        <div className='h-[90%] w-full lg:w-[50%] flex border-t-2 lg:border-t-0 lg:border-l-2 border-yellow-400 items-center justify-around  flex-col'>
          <h2 className='font-semibold text-2xl'>Not sure what types of <br/> care you need? </h2>
          <button className='ring-2 ring-yellow-500 h-[3rem] w-[12rem] rounded-md font-semibold'>Let's find out</button>
        </div>
      </div>
    </div>
  )
}

export default Find_Care