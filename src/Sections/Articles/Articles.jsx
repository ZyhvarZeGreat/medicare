import React from 'react'
import { articleData } from './articleData'
import hero from '../../assets/hero.jpg'
const Articles = () => {
  return (
    <div className='text-white w-full flex justify-center items-center '>
      <div className='w-[95%] flex justify-center flex-col gap-[3rem] items-center'>
        <div className='flex items-center justify-center text-2xl'>
          <h3>Articles</h3>
        </div>

        <div className='grid grid-cols-2 w-full gap-[3rem]'>
          <div className='col-span-1 flex items-start flex-col justify-start'>
            <div className='bg-yellow-700 flex items-center justify-center h-[3rem] w-[12rem]'>
              <h3 className='text-black font-semibold text-xl '>Featured Articles</h3>

            </div>
            <div className='h-[30rem]'>
              <img className='object-cover h-full' src={hero} />
            </div>
          </div>
          <div className='col-span-2 lg:col-span-1 flex items-end text-left justify-start' >
            <div className='w-[90%] h-[91%] flex gap-[3rem] items-start flex-col justify-start text-left'>
              <div className='flex gap-3 flex-col'>
                <h3 className='mt-2 font-semibold text-2xl capitalize text-white'>Caring for a loved one with aphasia</h3>
                <p>Learn more about aphasia, the limitations it can cause,<br /> and how you can help a loved one</p>
              </div>
              <button className='h-[3rem] text-center bg-yellow-700 text-black font-semibold text-md w-[12rem]'>Learn More</button>
            </div>
          </div>


        </div>
        <div className='w-full grid grid-cols-1 lg:grid-cols-3 gap-[4rem] place-items-center '>
          {articleData.map((data, i) => {
            return (
              <div key={i} className='h-[32rem] w-full flex text-center items-center flex-col justify-around '>
                <div className='w-[80%] h-[40%]'> <img className='object-cover h-full w-full' src={data.imgUrl} /></div>
                <h3 className='text-xl font-semibold capitalize'>{data.title}</h3>
                <p className='text-sm'>{data.description}</p>
                <button className='h-[3rem] bg-yellow-700 text-black font-semibold text-md rounded-md w-[12rem]'> Read More</button>
              </div>
            )
          })}
        </div>

        <div className='w-full flex items-center justify-center'>
          <div className='m-auto w-[15rem] h-[3rem] flex items-center justify-center  ring-yellow-700 ring-2'>
            <p className='text-xl'>Latest Articles</p>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Articles