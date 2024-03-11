import React from 'react'
import img1 from '../../Assets/primary1.jpg'

const HotAnime = () => {
  return (
    <section>
        <div className="container flex flex-col px-5 py-8 pb-3 rounded-md">
        <div className="">
          <h1 className="text-2xl font-semibold my-8 border-b-2">Hot Anime Picks</h1>
        </div>
        <div className="w-full h-[50dvh] flex gap-2 overflow-hidden">
            <div className="img1 w-[40%]">
                <img src={img1} alt="" className='w-full h-full'/>
            </div>
            <div className="img2-4 w-[40%] flex flex-wrap gap-2">
                <img src={img1} alt="" className='w-[49%] h-[50%]'/>
                <img src={img1} alt="" className='w-[49%] h-[50%]'/>
                <img src={img1} alt="" className='w-[49%] h-[50%]'/>
                <img src={img1} alt="" className='w-[49%] h-[50%]'/>
            </div>
            <div className="img3 w-[20%] h-full">
                <img src={img1} alt="" className='w-full h-full'/>
            </div>
        </div>
      </div>
    </section>
  )
}

export default HotAnime
