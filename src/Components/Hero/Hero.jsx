import React from 'react'
import p1 from '../../Assets/primary1.jpg'

const Hero = () => {
  return (
    <div className='flex w-full relative h-[50dvh] overflow-hidden bg-[#201f31] text-white  rounded-md '>
        <div className="absolute left-[35%] right-0 bottom-0 top-0 mask">
            <img src={p1} alt="" className="w-full h-full object-cover absolute "/>
        </div>
        <div className="absolute max-w-[600px] bottom-16 pl-8">
            <h1 className='text-5xl font-bold mb-7'>Do You Love <br /> Gojo</h1>
            <p className='text-base font-medium '>Lorem ipsum dolor sit amet consectetur adipisicing elit. Commodi mollitia obcaecati impedit sapiente! Quos in ea voluptatibus veniam facilis modi! Deleniti, ullam velit. Consectetur ullam vitae dolore cum dolorum earum!</p>
        </div>
    </div>
  )
}

export default Hero

