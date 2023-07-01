import React from 'react'
import { UilPhone, UilEnvelopeAlt } from '@iconscout/react-unicons'
import { Link } from 'react-router-dom'
import { Link as Scroll_Link } from 'react-scroll'
import Hero from './Hero'
import { ReactComponent as Logo } from '../../assets/logo.svg'
import { UilBars, UilMultiply } from '@iconscout/react-unicons'
const Header = () => {
  const [opened, setOpened] = React.useState(false)
  const linkData = [
    {
      text: 'Join',
      link: 'Join',
    },
    {
      text: 'Services',
      link: ':Services',
    },
    {
      text: 'About Us',
      link: 'About',
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
      link: 'Jobs',
    },


  ]
  return (
    <div className='w-full h-full relative bg-white flex-col flex items-center justify-start'>
      <div className="w-full   items-center justify-end bg-yellow-500">
        <div className="w-full h-[2.8rem] mx-auto px-4 py-3 gap-7 flex flex-col  sm:flex-row items-center justify-end text-black md:px-8">
          <Link className='font-semibold' to='/Register'>Join</Link>
          <Scroll_Link className='font-semibold' to=''>Services</Scroll_Link>
          <Scroll_Link className='font-semibold' to=''>Contact Us</Scroll_Link>
          <Scroll_Link className='font-semibold' to='/Register'>Find Care</Scroll_Link>
          <Link className='font-semibold' to='Jobs'>Find Jobs</Link>
          <Scroll_Link className='font-semibold' to=''>Articles</Scroll_Link>
          <Scroll_Link className='font-semibold' to=''>About Us</Scroll_Link>

        </div>
      </div>


      {/* {opened && <div className='flex lg:hidden fixed top-0 flex-col bg-blue-500/20 backdrop-blur-xl  left-0 right-0 bottom-0 z-[10] w-[100%] min-h-[100%]  items-center justify-between'>


        <div className='h-[100%]  w-full flex flex-col items-center justify-center gap-[3rem]'>
          {linkData.map((item, i) => {
            return (
              <div className='w-[50%] text-center'>
                <Link className='text-4xl  text-white text-montserrat font-normal' key={i} spy={true} smooth={true} easing={'easeInOutQuad'} delay={100} duration={500} to={item.link}>{item.text}</Link>
              </div>
            )
          })}
        </div>

      </div>} */}






    </div>
  )
}

export default Header