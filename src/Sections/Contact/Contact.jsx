import React from 'react'
import contact from '../../assets/contact.svg'
import {data }from './data'
const Contact = () => {
  const radioData = ['Companion Care', 'Personal Care', 'Nurse Services', 'Specialty Care', 'Other']
  return (
    <div className='w-full h-full flex flex-col items-center justify-center'>

      <div className='flex items-center justify-center'>
        <h1 className='text-4xl font-normal  h-[10rem] '>FIND CARE</h1>
      </div>

      <div className='w-full h-full flex flex-row items-center justify-center'>

        <form className='  basis-7/12 '>
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

                <div className=' mt-3 flex flex-row col-span-full'>
                  {radioData.map((item, i) => {
                    return (
                      <div key={i} className="flex w-[17rem] flex-row items-center justify-center">
                        <div className=''>
                          <label htmlFor="city" className="block text-sm font-medium leading-6 text-gray-900">
                            {item}
                          </label>
                        </div>
                        <div className='w-[20%]'>
                          <input
                            type="checkbox"
                            name={item}
                            id={item}
                            autoComplete="street-address"
                            className="block w-full rounded-md h-[.9rem]  cursor-pointer  border-0 py-1.5shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 pl-4 focus:ring-[.3px] focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                          />
                        </div>
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
                  <textarea className='rounded-sm' name="" id="" cols="30" rows="4"></textarea>
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


        <div className=' basis-4/12 h-[20rem] w-[20rem] hidden lg:block  flex items-center justify-center '>
          <img className='object-contain ml-[6rem] h-full w-[90%]' src={contact} alt='contact-img' />
        </div>
      </div>


      <div className='w-full bg-yellow-400 flex gap  h-[30rem] items-center  justify-around '>
        {data.map((item, i) => {
          return (
            <div key={i}  className=' flex items-center justify-center flex-col  h-[20rem] w-[18rem] rounded-md'>
              <img className='h-[80%] w-full' src={`../${item.img}`} />
             <div className=' rounded-md bg-white w-full justify-center text-xl h-[20%] flex items-center'>
             <p className='font-semibold' >{item.text}</p>
             </div>
            </div>
          )
        })}
      </div>
    </div>
  )
}

export default Contact