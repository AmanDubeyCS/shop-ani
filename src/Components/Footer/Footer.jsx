import React from "react";

const Footer = () => {
  return (
    <footer className="mt-16 bg-black">
      <div className="container py-8">
        <div className="flex justify-between">
          <ul className="w-[40%] flex-1">
            <li className="text-[12] text-[#878787] mb-3">ABOUT</li>
            <li className="text-[12] text-white">Contact</li>
            <li className="text-[12] text-white">About Us</li>
            <li className="text-[12] text-white">Careers</li>
            <li className="text-[12] text-white">Corporate Info</li>
          </ul>

          <ul className="footer-content-2 flex-1">
            <li className="text-[12] text-[#878787] mb-3">HELP</li>
            <li className="text-[12] text-white">
              <a href="/">Payment</a>
            </li>
            <li className="text-[12] text-white">
              <a href="/">Shipping</a>
            </li>
            <li className="text-[12] text-white">
              <a href="/">cancellation and returns</a>
            </li>
            <li className="text-[12] text-white">
              <a href="/">FAQs</a>
            </li>
          </ul>

          <ul className="footer-content-2 flex-1">
            <li className="text-[12] text-[#878787] mb-3">CONSUMER POLICY</li>
            <li className="text-[12] text-white">Cancellation & Returns</li>
            <li className="text-[12] text-white">Terms Of Use</li>
            <li className="text-[12] text-white">Security</li>
            <li className="text-[12] text-white">Privacy</li>
            <li className="text-[12] text-white">Sitemap</li>
          </ul>

          {/* <ul className='border-l-2 pl-4 flex-1'>
            <li className='text-[12] text-[#878787] mb-3'>MAIL US</li>
            <li className='text-[12] text-white'>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Rerum, eius, dolore ab a reprehenderit libero debitis </li>
          </ul> */}
          <div className="max-w-[186px] flex-1">
            <h1 className="text-[12] text-[#878787] mb-3">PAYMENT METHODS</h1>
            <ul className="flex flex-wrap gap-3">
              <li>
                <img
                  src="https://cdn.shopify.com/s/files/1/0725/1289/7345/files/Layer_867_1.png?v=1683513533"
                  alt=""
                />
              </li>
              <li>
                <img
                  src="https://cdn.shopify.com/s/files/1/0725/1289/7345/files/Layer_865.png?v=1683513534"
                  alt=""
                />
              </li>
              <li>
                <img
                  src="https://cdn.shopify.com/s/files/1/0725/1289/7345/files/Layer_868.png?v=1683513533"
                  alt=""
                />
              </li>
              <li>
                <img
                  src="https://cdn.shopify.com/s/files/1/0725/1289/7345/files/Layer_865_1.png?v=1683513533"
                  alt=""
                />
              </li>
              <li>
                <img
                  src="https://cdn.shopify.com/s/files/1/0725/1289/7345/files/Layer_866.png?v=1683513534"
                  alt=""
                />
              </li>
              <li>
                <img
                  src="https://cdn.shopify.com/s/files/1/0725/1289/7345/files/Layer_867.png?v=1683513533"
                  alt=""
                />
              </li>
            </ul>
          </div>
          <div className="max-w-[186px] ml-6 flex-1 items-center justify-center">
            <h1 className="text-[12] text-[#878787] mb-3">DOWNLOAD APP</h1>
            <img src="https://cdn.shopify.com/s/files/1/0725/1289/7345/files/Ios_1.png?v=1683513921" alt="" />
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
