import { Box, Button, Typography } from '@mui/material'
import React from 'react'
const emailValidator = (email) => /^[\w-\.]+@([\w-]+\.)+[\w-]{2,4}$/.test(email);

const UserInfo = ({carrito, createNewOrder, lastOrder}) => {

    const [nombre, setNombre] = React.useState("");
    const [apellido, setApellido] = React.useState("");
    const [email, setEmail] = React.useState("");
    const [telefono, setTelefono] = React.useState("");

    const handleSubmit = () => {
        if (!isFormValid || !createNewOrder || !carrito.length){
        return;
    }
     
    const order = {
            buyer:{
                nombre,
                apellido,
                email,
                telefono
            },
            items:carrito,
            createdAt:new Date(),
            total: carrito.reduce((acc,item) => acc + item.price * item.quantity, 0)
        }
        createNewOrder(order);
    } 

    const isFormValid = () => {
        return Boolean(nombre.length) && Boolean(apellido.length) && emailValidator(email) && Boolean(telefono.length);
    }

  return (
    <Box sx={{display:"flex", flexDirection:"column", justifyContent:"center", backgroundColor:"#CBCCFF"}}>
        <Typography variant='h4' style={{textAlign:"center"}}>
            Terminar Compra:
        </Typography>
        <Box sx={{display:"flex", flexDirection:"column"}}>
            <input style={{padding:"5px",margin:"5px 500px"}} type="text" placeholder='Nombre' value={nombre} onChange={(event) => setNombre(event.target.value)}/>
            <input style={{padding:"5px",margin:"5px 500px"}} type="text" placeholder='apellido' value={apellido} onChange={(event) => setApellido(event.target.value)}/>
            <input style={{padding:"5px",margin:"5px 500px"}} type="text" placeholder='email' value={email} onChange={(event) => setEmail(event.target.value)}/>
            <input style={{padding:"5px",margin:"5px 500px"}} type="number" placeholder='telefono' value={telefono} onChange={(event) => setTelefono(event.target.value)}/>
        </Box>
        <Button variant="contained" size="small" sx={buttonAddCart} onClick={handleSubmit} disabled={!isFormValid()} >Finalizar Compra</Button>
    </Box>
  )
}
const buttonAddCart = {
    backgroundColor:"black",
    border: 'none',
    color: 'white',
    padding: '15px 14px',
    textAlign: 'center',
    textDecoration: 'none',
    fontSize: '14px',
    margin: '4px 500px',
    cursor: 'pointer'
  }
export default UserInfo