import React from 'react'
const Services = () => {

  const serviceData = [
    {
      icon: 'biomedical.svg',
      title: 'BioMedical',
      desc: 'We provide reliable, honest repair services ranging from simple preventative maintenance and troubleshooting, to more complicated component level and software related issues'
    },
    {
      icon: 'phamarcy.svg',
      title: 'Home Phamarcy',
      desc: 'We provide pharmacists a comprehensive service that includes regular PM service, repair programs, and rental options to ensure every patient has a safe and effective home infusion device '
    },
    {
      icon: 'surgery.svg',
      title: 'Surgery Centers',
      desc: 'We provide complete maintenance programs and equipment repair services that keep your Operating Rooms functioning efficiently and running at full capacity'
    },
  ]
  return (
    <div className=' font-montserrat bg-red-500  w-full gap-[3rem] flex flex-col items-center justify-center'>
      <div className='h-[10rem] bg-blue-950 flex flex-col items-center justify-center'>
        <div><p className='text-4xl font-montserrat'>Who We Serve</p></div>
      </div>

      <div className='items-center w-full flex lg:flex-row flex-col justify-around gap-[3rem] '>

        {serviceData.map((service, i) => {
          return (
            <div key={i} className='  text-center  rounded-md bg-yellow-400  gap-[1.4rem] items-center justify-center w-[90%] sm:w-[50%] lg:w-[70%] xl:w-[25.75rem] h-full sm:h-[25rem] flex flex-col'>
              <img className='h-[6rem]' src={`../${service.icon}`} />
              <h2 className='text-2xl  '>{service.title.toUpperCase()}</h2>
              <div className='w-[90%]'>     <p className='text-lg font-normal'>{service.desc}</p></div>
            </div>
          )
        })}
      </div>
    </div>
  )
}

export default Services