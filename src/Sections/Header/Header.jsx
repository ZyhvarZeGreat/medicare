import React from 'react'
import { UilPhone, UilEnvelopeAlt } from '@iconscout/react-unicons'
import { Link } from 'react-scroll'
import Hero from './Hero'
const Header = () => {
  const linkData = [
    {
      text: 'Home',
      link: 'Header',
    },
    {
      text: 'Services',
      link: 'Services',
    },
    {
      text: 'Contact Us',
      link: 'Contact',
    },
    {
      text: 'Find Care',
      link: 'Find_Care',
    },
    {
      text: 'Find Job',
      link: 'Find Job',
    },


  ]
  return (
    <div className='w-full h-full bg-white flex-col flex items-center justify-start'>
      <div className="w-full flex  items-center justify-end bg-yellow-500">
        <div className="w-full mx-auto px-4 py-3 gap-7 flex items-center justify-end text-black md:px-8">

          <div className=' gap-2 items-center justify-center flex flex-row h-[2rem]'>
            <UilPhone />
            <p>Tel: 888.688.6822 </p>
          </div>
          <div className=' gap-2  items-center justify-center flex flex-row h-[2rem]'>
            <UilEnvelopeAlt />
            <p>contact@siellamedical.com </p>
          </div>
        </div>
      </div>



      <div className='flex gap-3 h-[5.5rem] w-full flex-row items-center justify-center bg-white'>
        <div className=' basis-10/12 flex flex-row items-center justify-end' >
          <div className='basis-9/12  gap-[3rem] flex flex-row items-center justify-center'>
            {linkData.map((link, i) => {
              return (
                <div className='text-montserrat text-lg'>

                  <Link className='text-montserrat font-normal' key={i} spy={true} smooth={true} easing={'easeInOutQuad'} delay={100} duration={500} to={link.link}>{link.text}</Link>
                </div>
              )
            })}

          </div>


        </div>

        <div className='basis-2/12 flex items-center justify-start '>
          <button className='rounded-full  drop-shadow-xl text-center bg-yellow-500  shadow-lg  w-[9rem] h-[2.25rem]'> Get a Quote</button>
        </div>
      </div>

      <Hero />

    </div>
  )
}

export default Header