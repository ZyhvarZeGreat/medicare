import React from 'react'
import { data } from './data'
import AboutCarousel from './AboutCarousel'
import about_1 from '../../assets/about_1.png'
import about_2 from '../../assets/about_2.png'
import about_3 from '../../assets/about_3.png'
import about_4 from '../../assets/about_4.png'
const About = () => {
  return (
    <div className='w-full h-full flex items-center gap-[2rem] flex-col  justify-center'>


      <div className=' flex flex-col text-center items-center justify-center w-full bg-white  gap-[rem]'>
        <div className='h-[7rem] flex items-center justify-center'><h1 className='text-4xl'>Our Story</h1></div>

        <div className='w-[60%] lg:h-[22rem] '>
          <p className=' '>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Asperiores, voluptatibus nostrum perspiciatis necessitatibus placeat officia accusamus? Pariatur inventore corrupti reprehenderit repellendus ullam? Earum necessitatibus quia cum aut ipsa fugiat reiciendis culpa ratione velit, beatae assumenda fugit, reprehenderit eos odit sunt? Similique nesciunt culpa autem ducimus inventore asperiores hic alias nulla.
            Lorem ipsum dolor sit, amet consectetur adipisicing elit. Nisi, vitae maiores eos maxime dolore, necessitatibus possimus numquam dicta magnam soluta expedita, ipsam consectetur atque beatae voluptates voluptate? Blanditiis, similique. Accusamus voluptatem ab, adipisci, eum voluptate aut cupiditate totam inventore necessitatibus harum explicabo ut repudiandae! Ut harum velit perferendis enim voluptates maxime impedit, quam animi? Esse quis assumenda reprehenderit officiis laudantium ab reiciendis repellendus ad asperiores perferendis nisi voluptates debitis qui repellat velit aut illo sit tenetur nemo porro quidem similique, neque illum error. Itaque eum impedit natus architecto assumenda nemo voluptatibus omnis non esse eos, labore alias. Eligendi, provident ea!
          </p>
        </div>
        <button className=' font-semibold bg-yellow-700 h-[2.8rem] w-[12rem] rounded-md'>Learn More</button>

      </div>


      <div className='lg:h-[50rem] bg-white flex items-center justify-center flex-col'>
        <div className='w-[80%] flex items-center justify-center gap-[2rem] flex-col'>
          <div className='flex w-full h-[6rem] items-center justify-center'>
            <h3 className='font-semibold text-3xl'>About Us</h3>
          </div>

          <div className='text-center text-md'>
            <p>
              Amazing pearl is a residential service agaency that aims to improve the quality of life of our clients through the delivery of amazing excellent cpmpassionate care and extraordinary services in the comfort of their homes while being recognized as an employer of first choice. Our mission is to create a compassionate and comfortable enviroment for both the adults and pediatrics entrusted in our care and foster a healthy relationship amongst them and their family.
            </p>
          </div>

          <button className='h-[3rem] w-[12rem] flex items-center justify-center bg-yellow-700 rounded-md font-semibold'>Learn More</button>
        </div>
      </div>

      {/* <div className='w-full  relative flex items-center justify-center '>
        <div className='h-[32rem] absolute  bottom-[19rem] bg-red-300 w-[80%]'>
          <img className='h-full w-full object-cover object-top' src={about_1} alt='img' />
        </div>
      </div> */}

      <div className='flex items-center relative lg flex-col justify-center gap-[3rem]'>

        <div className='flex items-center justify-between gap-[3rem]  w-[95%]'>
          <div className=' basis-1/2 h-[25rem]  w-[26rem]'>
            <img src={about_4} alt='img' className='  cover h-full w-full object-cover object-top ' />
          </div>

          <div className='basis-1/2  flex items-center h-[25rem] justify-start text-white'>
            <div className=' w-[70%] flex items-start justify-start h-[80%]'>
              <p className='text-md'>
                We believe there’s more to caring for people than just providing in-home assistance. For decades, families have trusted Right at Home for our expert guidance and experience to help them navigate every step of the aging journey.
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default About