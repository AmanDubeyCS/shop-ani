import React from 'react'


const ProductDetails = () => {
  return (
    <div className='container flex'>
      <div className="w-[30%]">
        <img src="https://www.redwolf.in/image/cache/catalog/t-shirts/drop-cuts/marvel-arc-reactor-suit-drop-cut-t-shirt-india-600x800.jpg?m=170539803" alt="" />
      </div>
      <div className="details px-7">
        <div>
            <h1 className='text-base text-gray-500 font-medium mb-2'>T-shirt</h1>
            <h1 className='text-[18px] leading-6'>Gojo T-shirt (half-sleev)</h1>
        </div>
        <div className="text-[28px] font-medium text-black py-5">
            ₹229{" "}
            <span className="text-[16px] line-through text-gray-500 mr-3">
              800
            </span>
            <span className="text-[16px] text-green-500 ">30%</span>
          </div>
          <div className='flex gap-4 items-center mb-5'>
            <h1>Colors</h1>
            <span className='flex w-8 h-8 rounded-full bg-green-200'></span>
            <span className='flex w-8 h-8 rounded-full bg-green-200'></span>
            <span className='flex w-8 h-8 rounded-full bg-green-200'></span>
            <span className='flex w-8 h-8 rounded-full bg-green-200'></span>
            <span className='flex w-8 h-8 rounded-full bg-green-200'></span>
            <span className='flex w-8 h-8 rounded-full bg-green-200'></span>
          </div>
          <div className='flex gap-4 items-center'>
            <h1>Size</h1>
            <span className='border px-4 py-2 '>S</span>
            <span className='border px-4 py-2 '>M</span>
            <span className='border px-4 py-2 '>L</span>
            <span className='border px-4 py-2 '>Xl</span>
            <span className='border px-4 py-2 '>XXL</span>
            <span className='border px-4 py-2 '>3XL</span>
          </div>
          <div className='flex flex-col gap-3 mt-4'>
            <h1>PRODUCT INFORMATION</h1>
            <table>
                <tbody>
                    <tr className='border-t-2 border-b-2'>
                        <td>TYPE</td>
                        <td>Round Neck</td>
                    </tr>
                    <tr className='border-t-2 border-b-2'>
                        <td>SLEEVE</td>
                        <td>Half Sleeve</td>
                    </tr>
                    <tr className='border-t-2 border-b-2'>
                        <td>FABRIC</td>
                        <td>100% Cotton, 180 GSM</td>
                    </tr>
                    <tr className='border-t-2 border-b-2'>
                        <td>FIT</td>
                        <td>Regular Fit</td>
                    </tr>
                    <tr className='border-t-2 border-b-2'>
                        <td>PACK OF</td>
                        <td>1</td>
                    </tr>
                    <tr className='border-t-2 border-b-2'>
                        <td>PATTERN</td>
                        <td>Printed</td>
                    </tr>
                </tbody>
            </table>
          </div>
      </div>
    </div>
  )
}

export default ProductDetails
