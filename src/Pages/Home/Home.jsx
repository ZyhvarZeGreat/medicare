import React from 'react'
import { Header, Contact, About, Services, Footer,What_We_Do, Articles } from '../../Sections/index'
const Home = () => {
  return (
    <div className=' font-montserrat gap-[4rem] bg-black/90  h-full flex items-center flex-col  justify-center'>
    <Services />
    <What_We_Do/>
    <About />
    <Articles/>
  </div>
  )
}

export default Home