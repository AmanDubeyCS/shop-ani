import React from 'react'
import { IconMathGreater } from '@tabler/icons-react';

const Breadcrums = (props) => {
    const {product} = props;
  return (
    <div className='container flex items-center gap-1 py-5'>
      Home<IconMathGreater stroke={1} size={15} />shop<IconMathGreater stroke={1} size={15}/>{product.Type}<IconMathGreater stroke={1} size={15}/>{product.Name}
    </div>
  )
}

export default Breadcrums
