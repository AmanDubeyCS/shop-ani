import React from 'react'
import { IconChevronRight } from '@tabler/icons-react';
import { Link } from 'react-router-dom';

const Breadcrums = (props) => {
    const {product} = props;
  return (
    <div className='flex items-center gap-1 pb-5 text-xs'>
      <Link to="/">Home</Link><IconChevronRight stroke={1} size={15} /><Link to="/men">shop</Link><IconChevronRight stroke={1} size={15}/>{product.Type}<IconChevronRight stroke={1} size={15}/>{product.Name}
    </div>
  )
}

export default Breadcrums
