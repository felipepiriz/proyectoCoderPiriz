import * as React from 'react';
import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import { ContextProvider } from '../../context';

const CartCard = ({item}) =>  {
  const {deleteItemArray} = React.useContext(ContextProvider); 
  const totalprice = item.quantity * item.price
  const deleteItemCarrito =  () => {
    deleteItemArray(item.title)
  }
  return (
    <Card sx={styleCard} key={item.id + item.title}> 
      <CardMedia
        sx={estiloImage}
        image={item.image}
        title={item.id}
      />
      <CardContent sx={{backgroundColor:"#CBCCFF", height:"130px"}}>
        <Typography gutterBottom variant="h5" component="div">
        {item.title}
        </Typography>
        <Typography>
          cantidad: {item.quantity} <br></br>Precio Por Unidad: ${item.price}<br></br>Precio Total:{totalprice}
        </Typography>
      </CardContent>
      <CardActions sx={{backgroundColor:"#9296F0"}}>
        <Button onClick={deleteItemCarrito} variant="contained" size="small" sx={stl} >Eliminar del carrito</Button>
      </CardActions>
    </Card>
  );
}

const styleCard = {
  height:"540px",
  width:"300px",
  marginTop:"100px",
}
const estiloImage = {
  height:"300px",
  width:"300px",
}
const stl = {
  backgroundColor:"black",
  border: 'none',
  color: 'white',
  padding: '15px 14px',
  textAlign: 'center',
  textDecoration: 'none',
  display: 'inline-block',
  fontSize: '14px',
  margin: '4px 2px',
  cursor: 'pointer'
}
export default CartCard;