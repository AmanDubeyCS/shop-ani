import React from 'react'

const HotAnime = () => {
  return (
    <section>
        <div className="container flex flex-col px-5 py-8 pb-3 rounded-md">
        <div className="">
          <h1 className="text-2xl font-semibold my-8 border-b-2">Hot Anime Picks</h1>
        </div>
        <div className="w-full h-[50dvh] flex gap-2 overflow-hidden">
            <div className="img1 w-[40%] hover:opacity-70">
                <img src="https://i.ibb.co/RyGKHpF/naruto-image.jpg" alt="" className='w-full h-full cursor-pointer'/>
            </div>
            <div className="img2-4 w-[40%] flex flex-wrap gap-2">
                <img src="https://i.ibb.co/4PGhFrG/Onepice.jpg" alt="" className='w-[49%] h-[50%] hover:opacity-70'/>
                <img src="https://i.ibb.co/p479mk3/sung-jin-woo-blue-background-hd-solo-leveling.jpg" alt="" className='w-[49%] h-[50%] hover:opacity-70 cursor-pointer'/>
                <img src="https://i.ibb.co/tJwjNZp/tanjiro-kamado-and-hinokami-kagura-hd-demon-slayer-kimetsu-no-yaiba.jpg" alt="" className='w-[49%] h-[50%] hover:opacity-70 cursor-pointer'/>
                <img src="https://i.ibb.co/sqShnrq/cainsaw.jpg" alt="" className='w-[49%] h-[50%] hover:opacity-70 cursor-pointer'/>
            </div>
            <div className="img3 w-[20%] h-full">
                <img src="https://i.ibb.co/Z2RFKsW/dragon-ball.png" alt="" className='w-full h-full hover:opacity-70 cursor-pointer'/>
            </div>
        </div>
      </div>
    </section>
  )
}

export default HotAnime
