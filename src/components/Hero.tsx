import React from 'react'
import Navbar from './Navbar'
const Hero = () => {
  return (
    <div id="hero" className='min-h-screen bg-no-repeat bg-[url(/05.jpeg)] bg-cover'
    style={{backgroundSize: "20%" , backgroundPosition: "left 200px top 350px "}}>
     <Navbar /> 
     <div className='container grid lg:grid-cols-2 h-[calc(100vh-60px)]'>
      <div className='hidden lg:block'></div>
      <div className='text-[90px] sm:text-[100px] font-bold leading-tight flex justify-center items-center'>
        <div>
          <p data-aos="flip-up">I am</p>
          <p data-aos="flip-up">Rehan</p>
          <p data-aos="flip-up">Sabir</p>
        </div>
      </div>
     </div>
    </div>
  )
}

export default Hero
