import React from 'react'
import { useParams } from 'react-router-dom'
import ProductDetails from '../Components/ProductDetails/ProductDetails';


const ProductPage = ({data}) => {
    const {productId} = useParams();
    const product = data.find((e) => e.id === productId)  
  return (
    <div>
      <ProductDetails product={product}/>
    </div>
  )
}

export default ProductPage