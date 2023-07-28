import React from 'react'
import { ContextProvider } from '../../context';
import ListCart from '../../components/cart-list';
import { Box, Button, Typography } from '@mui/material';
import UserInfo from '../../components/user-info';
import { Link } from 'react-router-dom';

const Cart = () => {
const {carrito, createNewOrder, lastOrder, vaciarCarrito } = React.useContext(ContextProvider); 
const total = carrito.reduce((acc,item) => acc + item.price * item.quantity, 0);


        if (!carrito.length) return(
            <Box sx={{display:"flex", flexDirection:"column", textAlign:"center", gap:"20px", marginTop:"20px"}}>
            <Typography variant='h2'>El carrito esta vacio</Typography>
            <Link to={"/"} style={{textDecoration:"none", color:"black", fontSize:"25px", border:"1px solid black", margin:"5px 750px",padding:"10px", backgroundColor:"#CBCCFF" }} >Volver a comprar </Link>
            </Box>
        );
         else return(
        <Box sx={{display:"flex", flexDirection:"column", gap:"20px"}} >
            <Box style={{display:"flex", justifyContent:"center", gap:"200px"}}>
                <Typography sx={styleTitle}>Productos en el carrito: {carrito.length}</Typography>   
                <Button variant='contained' sx={styleButtonMasMenos} onClick={vaciarCarrito}>Vaciar Carrito </Button>
            </Box>
            <Box style={listStyle}>
                <ListCart carrito={carrito}/>
            </Box>
            <Typography variant='h5' sx={ { textAlign:"center" }}>El total a pagar es: ${total}</Typography>
            <UserInfo carrito={carrito} createNewOrder={createNewOrder} lastOrder={lastOrder}/>
        </Box>
         )
}
const listStyle = {
    display:"flex",
    justifyContent:"center",
    flexDirection:"row",
    flexWrap:"wrap",
    gap:"80px",
    marginTop:"0px",
}
const styleTitle = {
    justifyContent:"center",
    fontSize:"30px",
}
const estiloBoxCarrito = {
    marginTop:"20px",
    justifyContent:"center",
    textAling:"center",
    display:"flex",
    flexDirection:"row"
}
const styleButtonMasMenos = {
    backgroundColor: "white", /* Green */
    border: "1px solid black",
    color: "white",
    padding: "5px 5px",
    textAlign: 'center',
    textDecoration: 'none',
    fontSize: '16px',
    margin: '4px 2px',
    cursor: 'pointer',
    backgroundColor:"black"
}

export default Cart;