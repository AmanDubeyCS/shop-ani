import React from 'react'
import { IconX } from '@tabler/icons-react';

const Cart = () => {
  return (
    <div className='container w-full bg-white md:p-8 p-2'>
      <div className='text-2xl font-bold border-b broder-zinc-500 md:w-[55%]'>
        CART
      </div>
      <div className='w-full md:flex justify-between'>
        <ul className='w-full md:w-[50%]'>
          <li className='flex py-8 border-b-2'>
            <div className='w-[25%]' >
              <img src="https://tailwindui.com/img/ecommerce-images/shopping-cart-page-01-product-01.jpg" alt="" />
            </div>

            <div className='flex flex-col text-base ml-6 justify-between w-[75%]'> 
              <div className='flex justify-between '>
                <div className='flex flex-col gap-1 w-[80%]'>
                  <div>
                    <h3 className='text-xl'>BASIC T-shirt</h3>
                  </div>
                  <div>
                    <p className='text-zinc-500'>Type</p>
                  </div>
                  <p>32.00</p>
                  <div className='md:hidden'>
                    <label htmlFor="quantity"></label>
                    <select name="quantity" id="quantity" className='h-10 w-12 border border-black font-medium'>
                      <option value="1">1</option>
                      <option value="2">2</option>
                      <option value="3">3</option>
                      <option value="4">4</option>
                      <option value="5">5</option>
                    </select>
                  </div>
                </div>
                <div className='flex justify-between md:w-[50%] relative'>
                  <div className='hidden md:flex'>
                    <label htmlFor="quantity"></label>
                    <select name="quantity" id="quantity" className='h-10 w-12 border border-black font-medium'>
                      <option value="1">1</option>
                      <option value="2">2</option>
                      <option value="3">3</option>
                      <option value="4">4</option>
                      <option value="5">5</option>
                    </select>
                  </div>
                  <div className='absolute right-0 top-0'><IconX stroke={2} size={25}/></div>
                </div>
              </div>
              <p>In Stock</p>
            </div>
          </li>
          <li className='flex py-8 border-b-2'>
            <div className='w-[25%]' >
              <img src="https://tailwindui.com/img/ecommerce-images/shopping-cart-page-01-product-01.jpg" alt="" />
            </div>

            <div className='flex flex-col text-base ml-6 justify-between w-[75%]'> 
              <div className='flex justify-between '>
                <div className='flex flex-col gap-1 w-[50%]'>
                  <div>
                    <h3 className='text-xl'>BASIC T-shirt</h3>
                  </div>
                  <div>
                    <p className='text-zinc-500'>Type</p>
                  </div>
                  <p>32.00</p>
                </div>
                <div className='flex justify-between w-[50%]'>
                  <p>Quantity</p>
                  <div><IconX stroke={2} size={25}/></div>
                </div>
              </div>
              <p>In Stock</p>
            </div>
          </li>
        </ul>
        <div className='p-8 bg-[#F9FAFB] rounded-xl md:w-[40%] mt-8 md:mt-0'> 
          <h2 className='text-lg font-bold'>Order Summary</h2>
          <dl className='mt-5'>
            <div className='flex justify-between py-4 border-b-2'>
              <dt>Subtotal</dt>
              <dd>$99.00</dd>
            </div>
            <div className='flex justify-between py-4 border-b-2'>
              <dt>Shipping Estimate</dt>
              <dd>$5.00</dd>
            </div>
            <div className='flex justify-between py-4 border-b-2'>
              <dt>Tex Estimat</dt>
              <dd>$8.32</dd>
            </div>
            <div className='flex justify-between py-4 font-semibold'>
              <dt>Order Total</dt>
              <dd>$112.32</dd>
            </div>
          </dl>
          <div>
            <button className="CartBtn w-full h-12 bg-red-500 flex items-center justify-center cursor-pointer duration-[0.5s] overflow-hidden shadow-[0px_5px_10px_rgba(0,0,0,0.103)] relative md:rounded-xl border-[none] md:active:duration-[0.5s] md:active:scale-95 font-semibold text-white">
              Checkout
            </button>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Cart
