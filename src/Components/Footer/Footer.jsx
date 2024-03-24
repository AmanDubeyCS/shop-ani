import React from "react";
import { Link } from "react-router-dom";

const FooterContent = ({title, options}) => {
  return(
    <ul className="w-[48%] md:w-[20%]">
      <li className="text-[12] text-[#878787] mb-3">{title}</li>
      {options.map((option) => {
        return(
          <Link><li className="text-[12] text-white">{option}</li></Link>
        )
      })}
    </ul>
  )
}

const Footer = () => {
  return (
    <footer className="mt-16 bg-black">
      <div className="container py-8">
        <div className="flex flex-wrap gap-2 md:gap-0">
          <FooterContent title="ABOUT" options={["Contact", "About Us", "Careers", "Corporate Info"]} />
          <FooterContent title="HELP" options={["Payment", "Shipping", "cancellation and returns", "FAQs"]} />
          <FooterContent title="CONSUMER POLICY" options={["Cancellation & Returns", "Terms Of Use", "Security", "Privacy","Sitemap"]} />

          <div className="w-[45%] md:w-[20%]">
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
          <div className="w-[50%] md:w-[20%] items-center justify-center">
            <h1 className="text-[12] text-[#878787] mb-3">DOWNLOAD APP</h1>
              <img src="https://cdn.shopify.com/s/files/1/0725/1289/7345/files/Ios_1.png?v=1683513921" alt="" />
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
