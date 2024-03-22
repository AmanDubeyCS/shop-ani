import React from 'react'
import { IconChevronRight } from '@tabler/icons-react';

const Breadcrums = (props) => {
    const {product} = props;
  return (
    <div className='flex items-center gap-1 pb-5 text-xs'>
      Home<IconChevronRight stroke={1} size={15} />shop<IconChevronRight stroke={1} size={15}/>{product.Type}<IconChevronRight stroke={1} size={15}/>{product.Name}
    </div>
  )
}

export default Breadcrums
