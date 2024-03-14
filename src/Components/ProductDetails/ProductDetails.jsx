import React from 'react'


const ProductDetails = ({product}) => {
  return (
    <div className='container flex'>
      <div className="w-[30%]">
        <img src={product?.Image?.Front} alt="" />
      </div>
      <div className="details px-7">
        <div>
            <h1 className='text-base text-gray-500 font-medium mb-2'>{product.Type}</h1>
            <h1 className='text-[18px] leading-6'>{product.Name}</h1>
        </div>
        <div className="text-[28px] font-medium text-black py-5">
        {Math.round(product.Price - (product.Discount / 100) * product.Price)}{" "}
            <span className="text-[16px] line-through text-gray-500 mr-3">
              {product.Price}
            </span>
            <span className="text-[16px] text-green-500 ">{product.discount}%</span>
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
                        <td>{product.Sleeve}</td>
                    </tr>
                    <tr className='border-t-2 border-b-2'>
                        <td>FABRIC</td>
                        <td>{product.Fabric}</td>
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
                        <td>{product.Pattern}</td>
                    </tr>
                </tbody>
            </table>
          </div>
      </div>
    </div>
  )
}

export default ProductDetails
