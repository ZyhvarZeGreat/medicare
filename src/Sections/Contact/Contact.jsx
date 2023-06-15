import React from 'react'
import { ReactComponent as Contact_Image } from '../../assets/contact.svg'
import { data } from './data'
const Contact = () => {
  const radioData = ['Companion Care', 'Personal Care', 'Nurse Services', 'Specialty Care', 'Other']
  return (
    <div className='w-full h-full flex flex-col items-center justify-center'>

      <div className='flex items-center h-[10rem] justify-center'>
        <h1 className='text-4xl font-normal   '>FIND CARE</h1>
      </div>

      <div className='w-full h-full flex flex-row items-center justify-center gap-[3rem]'>

        <form className=' basis-10/12  lg:basis-6/12 '>
          <div className="border-b w-full  border-gray-900/10 pb-12">
            <h2 className="text-base font-semibold leading-7 text-gray-900">Personal Information</h2>
            <p className="mt-1 text-sm leading-6 text-gray-600">Use a permanent address where you can receive mail.</p>

            <div className="mt-10 grid grid-cols-1 gap-x-6 gap-y-8 sm:grid-cols-6">
              <div className="sm:col-span-3">
                <label htmlFor="first-name" className="block text-sm font-medium leading-6 text-gray-900">
                  First name
                </label>
                <div className="mt-2">
                  <input
                    type="text"
                    name="first-name"
                    id="first-name"
                    autoComplete="given-name"
                    placeholder='John'
                    className="block h-[2.5rem]  w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 pl-4 focus:ring-[.3px] focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                  />
                </div>
              </div>

              <div className="sm:col-span-3">
                <label htmlFor="last-name" className="block text-sm font-medium leading-6 text-gray-900">
                  Last name
                </label>
                <div className="mt-2">
                  <input
                    type="text"
                    name="last-name"
                    placeholder='Doe'
                    id="last-name"
                    autoComplete="family-name"
                    className="block h-[2.5rem] w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 pl-4 focus:ring-[.3px] focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                  />
                </div>
              </div>

              <div className="sm:col-span-3">
                <label htmlFor="email" className="block text-sm font-medium leading-6 text-gray-900">
                  Email address
                </label>
                <div className="mt-2">
                  <input
                    id="email"
                    name="email"
                    type="email"
                    autoComplete="email"
                    placeholder='johndoe@gmail.com'
                    className="block h-[2.5rem]  w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 pl-4 focus:ring-[.3px] focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                  />
                </div>
              </div>



              <div className="sm:col-span-3">
                <label htmlFor="email" className="block text-sm font-medium leading-6 text-gray-900">
                  Phone Number
                </label>
                <div className="mt-2">
                  <input
                    id="email"
                    name="email"
                    type="text"
                    inputMode='tel'
                    autoComplete="email"
                    placeholder="+1 (555) 000-000"
                    className="block h-[2.5rem]  w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 pl-4 focus:ring-[.3px] focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                  />
                </div>
              </div>



              <div className="col-span-full grid-flow-row">
                <h3 className="block text-sm font-medium leading-6 text-gray-900">
                  Type of Service Interested in
                </h3>

                <div className=' mt-3  flex-row flex flex-wrap  gap-5 items-center  justify-start lg:justify-around  col-span-full'>
                  {radioData.map((item, i) => {
                    return (
                      <div key={i} className="">
                        <label className="w-[25%]  sm:w-[50%]">
                          <input name={item} id={item} className='mr-2 wid ' type="checkbox" />
                          {item}
                        </label>
                      </div>
                    )
                  })}
                </div>
              </div>




              <div className="sm:col-span-2">
                <label htmlFor="postal-code" className="block text-sm font-medium leading-6 text-gray-900">
                  Comments
                </label>
                <div className="mt-2">
                  <textarea className='rounded-sm h-4 w-[20rem] sm:h-[4rem]  sm:w-[23rem] lg:w-[36rem] lg:h-[6rem] xl:h-[12rem] xl:w-[45rem]' name="" id="" ></textarea>
                </div>
              </div>


              <div className="col-span-full  ">
                <div className='flex items-center gap-2  justify-start'>
                  <div className=''>
                    <input
                      type="checkbox"
                      name='Submit'
                      id='Submit'
                      autoComplete="street-address"
                      className="block mr-4 w-full rounded-md h-[.9rem]  cursor-pointer  border-0 py-1.5shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 pl-4 focus:ring-[.3px] focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                    />
                  </div>
                  <p className="block text-sm font-medium leading-6 text-gray-900">
                    By Submitting you agree to the Terms & Conditions, and Privacy Policy
                  </p>
                </div>

              </div>

              <div className="col-span-full  ">
                <button className='  bg-yellow-500 rounded-full  w-[9rem] text-black h-[2.5rem] '>Submit</button>
              </div>


            </div>
          </div>
        </form>


        <div className=' basis-4/12 h-[27rem] w-[27rem] hidden lg:block  flex items-center justify-center '>
          <Contact_Image className='h-[90%] w-[90%]' />
        </div>
      </div>


      <div className='w-full bg-yellow-400   flex-col lg:flex-row  gap  lg:h-[30rem] flex gap-[2rem] items-center justify-center lg:justify-around '>
        {data.map((item, i) => {
          return (
            <div key={i} className=' flex items-center justify-center flex-col  lg:h-[24rem] h-[20rem] w-[22rem]  lg:w-[22rem]  rounded-md'>
              <img className='h-[80%] object-contain` w-full' src={`../${item.img}`} />
              <div className=' rounded-md bg-white w-full justify-center text-xl h-[20%] flex items-center'>
                <p className='font-bold text-2xl ' >{item.text}</p>
              </div>
            </div>
          )
        })}
      </div>
    </div>
  )
}

export default Contact