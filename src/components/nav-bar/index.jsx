import * as React from 'react';
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import { Link } from 'react-router-dom';
import CartIcon from '../cart';
import { ContextProvider } from '../../context';

const NavBar =() => {

  const { quantity } = React.useContext(ContextProvider);
  return (
    <Box sx={{ flexGrow: 1,}}>
      <AppBar position="static" sx={{height:"75px",display:"flex", justifyContent:"center", alignItems:"center", backgroundColor:"#9296F0" }}>
          <Box > 
            <Link to = {"/products/all"} style={estiloLink}>
              Productos
            </Link>
            <Link to={"/cart"} style={estiloLink}>
                <CartIcon cartQuantity={quantity}/>
            </Link>
          </Box>
      </AppBar>
    </Box>
  );
}



export default NavBar; 

const estiloLink = {
  color:"black",
  textDecoration:"none",
  padding:"50px"}