import * as React from 'react';
import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import Typography from '@mui/material/Typography';
import CounterItem from '../count-item';
import { ContextProvider } from '../../context';
import { CardMedia } from '@mui/material';

const ProductCard = ({data}) => {

  const {addProductToCarrito} = React.useContext(ContextProvider); 
  const addCarrito = (quantity) => {
      addProductToCarrito({
        id: data.id,
        title:data.title,
        price:data.price,
        image:data.imageURL,
        stock:data.stock,
        quantity:quantity
      })
  };
  return (
    <Card sx={estilo}>
        <CardMedia
            component="img"
            alt={data?.title}
            image={data?.imageURL}
            height="500px"
            width="200px"
                />
      <CardContent sx={{backgroundColor:"#CBCCFF"}}>
        <Typography gutterBottom variant="h5" component="div">
            {data?.title}
        </Typography>
        <Typography variant="h4" color="bold">
            $ {data?.price}
        </Typography>
        <Typography>stock:{data?.stock}</Typography>
      </CardContent>
      <CardActions sx={{justifyContent:"center", backgroundColor:"#9296F0",height:"120px"}}>
      <CounterItem stock={data?.stock} addCarrito={addCarrito}/>
      </CardActions>
    </Card>
  );
}
export default ProductCard;

const estilo = {
    height:"770px",
    width:"500px",
    marginTop:"100px",
    display:"flex",
    flexDirection:"column",
}
