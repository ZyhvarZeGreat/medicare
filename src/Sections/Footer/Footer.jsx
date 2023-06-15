import React from 'react'
import { footerNavs } from './footerData'
import logo from '../../assets/footer_logo.png'
import { UilEnvelope, UilGlobe, UilPhone, UilMap } from '@iconscout/react-unicons'
const Footer = () => {
  const contactData = [
    {
      icon: <UilPhone />,
      detail: 'Toll Free: 888.688.6822'
    },
    {
      icon: <UilPhone />,
      detail: '657.218.9447'
    },

    {
      icon: <UilEnvelope />,
      detail: 'contact@siellamedical.com'
    },

    {
      icon: <UilGlobe />,
      detail: 'www.siellamedical.com'
    },

    {
      icon: <UilMap />,
      detail: '16 Goodyear, suite 105 Irvine California 92618  '
    },


  ]

  return (


    <footer className="bg-white  lg:h-[25rem]  w-full ">
      <div className="w-full max-w-[100%] h-full  py-6 lg:py-8">
        <div className="md:flex  h-[70%] items-center    md:justify-between">
          <div className="mb-6 flex items-center  md:mb-0 h-[12rem] lg:h-[15rem] w-[16rem] lg:[21rem}">
            <img src={logo} className=" object-contain mr-3 w-full h-full" alt="FlowBite Logo" />
          </div>
          <div className="grid grid-cols-2 place-content-center place-items-center gap-8 sm:gap-6 sm:grid-cols-3">
            <div className='h-[80%] '>
              <h2 className="mb-6 text-sm font-semibold uppercase text-black">Important Links</h2>
              <ul className="text-gray-600 dark:text-gray-400 font-medium">
                <li className="mb-4">
                  <a href='' className="hover:underline">Who We Serve</a>
                </li>
                <li className="mb-4">
                  <a href='' className="hover:underline">Products</a>
                </li>
                <li className="mb-4">
                  <a href='' className="hover:underline">What We Do</a>
                </li>

              </ul>
            </div>
            <div className='h-[80%] '>
              <h2 className="mb-6 text-sm font-semibold uppercase text-black">Important Links</h2>
              <ul className="text-gray-600 dark:text-gray-400 font-medium">
                <li className="mb-4">
                  <a href='' className="hover:underline">Get A Quote</a>
                </li>
                <li className="mb-4">
                  <a href='' className="hover:underline">Contact Us</a>
                </li>


              </ul>
            </div>
            <div className='lg:h-[80%]  w-full ml-10 lg:ml-0 ' >
              <h2 className="mb-6 text-sm font-semibold uppercase text-black">Get in Touch</h2>
              <ul className="text-gray-600 dark:text-gray-400 font-medium">

                {contactData.map((item, i) => {
                  return (
                    <li key={i} className=" flex flex-row w-[16rem] mb-4">
                      <div className='w-[13%]'>{item.icon}</div>
                      <a href="#" className="hover:underline text-sm w-[80%]">{item.detail}</a>
                    </li>
                  )
                })}
              </ul>
            </div>
          </div>
        </div>
        <svg className='w-full' height="129" viewBox="0 0 1916 129" fill="none" xmlns="http://www.w3.org/2000/svg">
          <path  className="pulse-path " d="M0 75H312L319 44L328 95L343 1L363 128L377 44L382 95L387 75H1916" />
        </svg>
        <div className=" h-[4rem] bg-black flex  items-center justify-center">
          <span className="text-sm text-gray-500 sm:text-center dark:text-gray-400">
          SIELLA MEDICAL #; All rights reserved.
          </span>
        
        </div>
      </div>
    </footer>


  )
}

export default Footer