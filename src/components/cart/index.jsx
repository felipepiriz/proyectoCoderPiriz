import React from 'react'
import ShoppingCartIcon from '@mui/icons-material/ShoppingCart';
import Badge from '@mui/material/Badge';

const CartIcon = ({cartQuantity}) => {
  return (
    <Badge badgeContent={cartQuantity} color="error">
        <ShoppingCartIcon/>
    </Badge>
  );
}
export default CartIcon;