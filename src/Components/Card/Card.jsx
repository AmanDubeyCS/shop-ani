import React from 'react'

const Card = () => {
  return (
    <div className="w-[190px] h-[254px] shadow-[rgba(0,_0,_0,_0.4)_0px_30px_90px] rounded-[30px] bg-transparent">
      <div className="img"></div>
      <div className="text">
        <div className="name"></div>
        <div className="price"></div>
        <div className="rating"></div>
      </div>
    </div>
  )
}

export default Card
