import React from 'react'
import { data } from './data'
import AboutCarousel from './AboutCarousel'
import about_1 from '../../assets/about_1.png'
import about_2 from '../../assets/about_2.png'
import about_3 from '../../assets/about_3.png'
import about_4 from '../../assets/about_4.png'
const About = () => {
  return (
    <div className='w-full h-full flex items-center flex-col gap-[3rem] justify-center'>
      <div className='flex items-center h-[10rem] justify-center'>
        <h1 className='font-montserrat text-4xl font-semibold'>What We Do</h1>
      </div>

      <div className="grid lg:grid-cols-4 w-full lg:w-[95%] gap-[2rem] lg:gap-0 place-items-center grid-cols-1 grid-rows-8 lg:h-[32rem] ">

        <div className=" object-cover text-center flex-col  h-[18rem]  w-[90%]  sm:h-[20rem] sm:w-[50%] lg:w-[100%] lg:h-full flex justify-center">
         <img className='h-full' src={about_1}/>
        </div>
        <div className="bg-[#EDEDED] object-cover gap-4 text-center flex-col  h-[18rem]  w-[90%]  sm:h-[20rem] sm:w-[50%] lg:w-[100%] lg:h-full flex items-center justify-center">
          <h2 className=' font-semibold text-xl'> COMPANION CARE </h2>
          <p>Help with light housekeeping, grocery shopping, transportation…</p>
          <a href='#'>Learn More</a>
        </div>
        <div className="object-cover  text-center flex-col  h-[18rem]  w-[90%]  sm:h-[20rem] sm:w-[50%] lg:w-[100%] lg:h-full flex justify-center">
         <img className='h-full object-cover' src={about_2}/>
        </div>
        <div className="bg-[#EDEDED] object-cover  gap-4 text-center flex-col  h-[18rem]  w-[90%]  sm:h-[20rem] sm:w-[50%] lg:w-[100%] lg:h-full flex items-center justify-center">
          <h2 className=' font-semibold text-xl'> PERSONAL CARE </h2>
          <p> There for physical assistance, hygiene, mobility… </p>
          <a href='#'>Learn More</a>

        </div>
        <div className="bg-[#EDEDED] object-cover gap-4 text-center flex-col  h-[18rem]  w-[90%]  sm:h-[20rem] sm:w-[50%] lg:w-[100%] lg:h-full flex items-center justify-center">
          <h2 className=' font-semibold text-xl'> NURSE SERVICES </h2>
          <p> n-home medical care, ostomy care… </p>
          <a href='#'>Learn More</a>
        </div>
        <div className=" object-cover  text-center flex-col  h-[18rem]  w-[90%]  sm:h-[20rem] sm:w-[50%] lg:w-[100%] lg:h-full flex  justify-center">
         <img className='h-full object-cover' src={about_3}/>
        </div>
    
       
        <div className="bg-[#EDEDED] object-cover gap-4 text-center flex-col  h-[18rem]  w-[90%]  sm:h-[20rem] sm:w-[50%] lg:w-[100%] lg:h-full flex  justify-center">
          <h2 className=' font-semibold text-lx'> SPECIAL CARE</h2>
          <p> Support for conditions like Alzheimer’s, diabetes, Parkinson’s… </p>
          <a href='#'>Learn More</a>
        </div>

        <div className=" object-cover  text-center flex-col  h-[18rem]  w-[90%]  sm:h-[20rem] sm:w-[50%] lg:w-[100%] lg:h-fullh-full flex items-center justify-center">
         <img className='h-full' src={about_4}/>
        </div>
      </div>

      <div className=' flex flex-col text-center items-center justify-center w-full bg-yellow-500  gap-[3rem]'>
        <div className='h-[10rem] flex items-center justify-center'><h1 className='text-4xl'>Our Story</h1></div>

       <AboutCarousel/>
     
      </div>
    </div>
  )
}

export default About