
import React from 'react'
import { ContextProvider } from '../../context';
import { useNavigate } from 'react-router-dom';
import { Box, Button, Typography } from '@mui/material';

const CounterItem = ({stock, addCarrito}) => {

    const [counter, setCounter] = React.useState(1);
    const [clicked, setClicked] = React.useState(false);
    const navigate = useNavigate();
    const handleAdd = () => {
        if (counter < stock) {
            setCounter (counter + 1 )
        }
    } 
    const handleRes = () => {
        if (counter > 1) {
            setCounter(counter - 1)
        }
    }

    const handleCarrito = ( ) => {
        addCarrito (counter);
        setCounter(1);
        setClicked(true);
    }
    const handleNavigate = () => {
        navigate("/cart");
    }
    
  return (  
    clicked ? 
    <Button variant="contained" size="small" onClick={handleNavigate} sx={buttonAddCart}>Finalizar Compra</Button>
    :
    <Box style={{display:"flex", flexDirection:"column", gap:5, justifyContent:"center"}}>
        <Box style={{display:"flex", flexDirection:"row", gap:5, justifyContent:"center"}}>
            <Button onClick={handleRes} style={styleButtonMasMenos}>-</Button>
            <Typography sx={{margin:"7px",}}>{counter}</Typography>

            <Button onClick={handleAdd} style={styleButtonMasMenos}>+</Button>
        </Box>
        <Button variant="contained" size="small" sx={buttonAddCart} onClick={handleCarrito}>Agregar Al Carrito</Button>
    </Box>
  )
}

const styleButtonMasMenos = {
    color: "white",
    textAlign: 'center',
    textDecoration: 'none',
    display: 'inline-block',
    fontSize: '16px',
    cursor: 'pointer',
    backgroundColor:"black",
    padding:"4px",
}
const buttonAddCart = {
    backgroundColor:"black",
    border: 'none',
    color: 'white',
    padding: '15px 14px',
    textAlign: 'center',
    textDecoration: 'none',
    display: 'inline-block',
    fontSize: '14px',
    margin: '4px 2px',
    cursor: 'pointer',
}

export default CounterItem;