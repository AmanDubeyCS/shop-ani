import React from 'react';
import { useParams } from 'react-router-dom';
import ProductDetails from '../Components/ProductDetails/ProductDetails';
import { useProductContext } from '../Context/ProductContext';

const ProductPage = () => {
  const { list, loading } = useProductContext();
  const { productId } = useParams();
  const product = list.find((e) => e.id === productId);

  if (loading) {
    return <div>Loading...</div>; 
  }

  return (
    <div className='mt-4'>
      <ProductDetails product={product} />
    </div>
  );
};

export default ProductPage;
