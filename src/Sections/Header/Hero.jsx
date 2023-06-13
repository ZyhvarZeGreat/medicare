import React from 'react'
import { UilCheckCircle } from '@iconscout/react-unicons'

const Hero = () => {
    const heroData = ['Companion Care', 'Personal Care', 'Nursing Services', 'Specialty Care']
    return (
        <div className='text-black relative bg-cover bg-center bg-no-repeat  bg-[url(./assets/hero.jpg)] h-[40rem] w-[100%] '>
            <div className='absolute w-full h-full bg-blue-500/30 gap-4 flex flex-col items-center justify-center ' >
                {heroData.map((service, i) => {
                    return (
                        <div key={i} className='flex w-[20rem] gap-2 flex-row text-xl items-center justify-center'>
                            <div className='w-[10%]'> <UilCheckCircle fill='#FFD037' /></div>
                            <div className='w-[90%]'> <p>{service}</p></div>
                        </div>
                    )
                })}

                <button className='bg-yellow-500 h-[2.25rem] w-[9rem] rounded-full'>View  Services</button>
            </div>

        </div>
    )
}

export default Hero