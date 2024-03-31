import React, { useState } from 'react'
import { IconPlus } from "@tabler/icons-react";

const ProductDiscription = ({product}) => {
  const [featureVisibale, setFeatureVisable] = useState(false);
  const [careVisibale, setcareVisable] = useState(false);
  const [shippingVisibale, setShippingVisable] = useState(false);
  const [returnsVisibale, setReturnsVisable] = useState(false);
  return (

      <ul className="px-5 my-7 md:px-0">
              <li className="py-6 border-t-2">
                <div>
                  <div
                    className="flex justify-between"
                    onClick={() => setFeatureVisable((prev) => !prev)}
                  >
                    <h3 className="font-semibold">Information</h3>
                    <IconPlus stroke={2} />
                  </div>
                  <div className={`${featureVisibale ? "" : "hidden"} py-5`}>
                    <div className="flex">
                      <h1 className="font-bold w-[20%]">Type</h1>{" "}
                      <p>{product.Type}</p>
                    </div>
                    <div className="flex">
                      <h1 className="font-bold w-[20%]">SLEEVE</h1>
                      <p className="w-[80%]">{product.Sleeve}</p>
                    </div>
                    <div className="flex">
                      <h1 className="font-bold w-[20%]">FABRIC</h1>{" "}
                      <p>{product.Fabric}</p>
                    </div>
                    <div className="flex">
                      <h1 className="font-bold w-[20%]">FIT</h1>{" "}
                      <p>Regular Fit</p>
                    </div>
                    <div className="flex">
                      <h1 className="font-bold w-[20%]">PATTERN</h1>{" "}
                      <p>{product.Pattern}</p>
                    </div>
                  </div>
                </div>
              </li>
              <li className="py-6 border-t-2 ">
                <div>
                  <div
                    className="flex justify-between"
                    onClick={() => setcareVisable((prev) => !prev)}
                  >
                    <h3 className="font-semibold">Care </h3>
                    <IconPlus stroke={2} />
                  </div>
                  <div className={`${careVisibale ? "" : "hidden"} py-5`}>
                    <ul className="list-disc px-6 py-5">
                      <li>Spot clean as needed</li>
                      <li>Hand wash with mild soap</li>
                      <li>Machine wash interior dividers</li>
                      <li>Treat handle and tabs with leather conditioner</li>
                    </ul>
                  </div>
                </div>
              </li>
              <li className="py-6 border-t-2 ">
                <div>
                  <div
                    className="flex justify-between"
                    onClick={() => setShippingVisable((prev) => !prev)}
                  >
                    <h3 className="font-semibold">Shipping </h3>
                    <IconPlus stroke={2} />
                  </div>
                  <div className={`${shippingVisibale ? "" : "hidden"} py-5`}>
                    <ul className="list-disc px-6 py-5">
                      <li>Free shipping on orders over $300</li>
                      <li>International shipping available</li>
                      <li>Expedited shipping options</li>
                      <li>Signature required upon delivery</li>
                    </ul>
                  </div>
                </div>
              </li>
              <li className="py-6 border-t-2">
                <div>
                  <div
                    className="flex justify-between"
                    onClick={() => setReturnsVisable((prev) => !prev)}
                  >
                    <h3 className="font-semibold">Returns </h3>
                    <IconPlus stroke={2} />
                  </div>
                  <div className={`${returnsVisibale ? "" : "hidden"} py-5`}>
                    <ul className="list-disc px-6 py-5">
                      <li>Easy return requests</li>
                      <li>Pre-paid shipping label included</li>
                      <li>10% restocking fee for returns</li>
                      <li>60 day return window</li>
                    </ul>
                  </div>
                </div>
              </li>
            </ul>
  )
}

export default ProductDiscription
