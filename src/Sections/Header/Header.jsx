import React from 'react'
import { UilPhone, UilEnvelopeAlt } from '@iconscout/react-unicons'
import { Link } from 'react-scroll'
import Hero from './Hero'
import { ReactComponent as Logo } from '../../assets/logo.svg'
import {UilBars, UilMultiply } from '@iconscout/react-unicons'
const Header = () => {
  const [opened, setOpened] = React.useState(false)
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
    <div className='w-full h-full relative bg-white flex-col flex items-center justify-start'>
      <div className="w-full hidden lg:flex  items-center justify-end bg-yellow-500">
        <div className="w-full mx-auto px-4 py-3 gap-7 flex flex-col  sm:flex-row items-center justify-end text-black md:px-8">

          <div className=' gap-2 items-center justify-center flex flex-row lg:h-[2rem]'>
            <UilPhone />
            <p>Tel: 888.688.6822 </p>
          </div>
          <div className=' gap-2  items-center justify-center flex flex-row lg:h-[2rem]'>
            <UilEnvelopeAlt />
            <p>contact@siellamedical.com </p>
          </div>
        </div>
      </div>

      <div className=' hidden lg:flex gap-3 h-[5.5rem] w-full flex-row items-center justify-center bg-white'>
        <div className=' basis-10/12 flex flex-row items-center justify-end' >
          <div className='basis-9/12 hidden   gap-[3rem] lg:flex flex-row items-center justify-center'>
            {linkData.map((link, i) => {
              return (
                <div className='text-montserrat text-lg'>
                  <Link className='text-montserrat font-normal' key={i} spy={true} smooth={true} easing={'easeInOutQuad'} delay={100} duration={500} to={link.link}>{link.text}</Link>
                </div>
              )
            })}

          </div>


        </div>

        <div className='basis-2/12 hidden  lg:flex items-center justify-start '>
          <button className='rounded-full  drop-shadow-xl text-center bg-yellow-500  shadow-lg  w-[9rem] h-[2.25rem]'> Get a Quote</button>
        </div>
      </div>


      <div className="w-full h-[5rem] flex  items-center justify-end ">
          <div className="w-[85%] mx-auto gap-[1rem] flex   flex-row items-center justify-end text-black md:px-8">
            <div className='h-[6rem] object-contain w-[6rem]'>
              <Logo className='h-full w-full' />
            </div>

            <div className="w-full mx-auto gap-[1rem] flex   flex-row items-center justify-end text-black md:px-8">

              <button className='z-[9999999]' onClick={()=>{setOpened(!opened)}}>
             { opened ? <UilMultiply className='fixed right-[2.5rem] fill-white' />:<UilBars/>}
              </button>
            </div>

            {/* <div className=' w-[80%] bg-blue-500 gap-2 items-center justify-start flex flex-row lg:h-[2rem]'>
              <UilPhone />
              <p>Tel: 888.688.6822 </p>
            </div>
            <div className=' w-[80%] gap-2  items-center justify-start  bg-blue-500 flex flex-row lg:h-[2rem]'>
              <UilEnvelopeAlt />
              <p>contact@siellamedical.com </p>
            </div> */}
          </div>
        </div>
      { opened && <div className='flex lg:hidden fixed top-0 flex-col bg-blue-500/20 backdrop-blur-xl  left-0 right-0 bottom-0 z-[10] w-[100%] min-h-[100%]  items-center justify-between'>
        

        <div className='h-[100%]  w-full flex flex-col items-center justify-center gap-[3rem]'>
          {linkData.map((item, i) => {
            return (
              <div className='w-[50%] text-center'>
                <Link className='text-4xl  text-white text-montserrat font-normal' key={i} spy={true} smooth={true} easing={'easeInOutQuad'} delay={100} duration={500} to={item.link}>{item.text}</Link>
              </div>
            )
          })}
        </div>

      </div>}

      


      <Hero />

    </div>
  )
}

export default Header