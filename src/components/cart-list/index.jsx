import React from 'react'
import CartCard from '../card-cart';
import { Box } from '@mui/material';

const ListCart = ({carrito, total}) => {
  return (carrito?.map (( item, index) => <CartCard key={item.title + index} item={item} />))
}

export default ListCart;