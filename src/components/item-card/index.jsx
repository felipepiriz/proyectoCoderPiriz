import * as React from 'react';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Typography from '@mui/material/Typography';
import { CardActionArea, CardActions } from '@mui/material';
import { Link } from 'react-router-dom';
import CounterItem from '../count-item';
import { ContextProvider } from '../../context';

const Item = ({item}) => {
    const {id,title,imageURL,price,stock} = item;
    const {addProductToCarrito} = React.useContext(ContextProvider); 

    const addCarrito = (quantity) => {
        addProductToCarrito({
            id:id,
            title:title,
            price:price,
            image:imageURL,
            stock:stock,
            quantity:quantity
        })
    };

    return (
        <Card style ={{ width: "400px", height:"645px" , display: "block", paddingBottom:"20px"}}>
            <Link style={{textDecoration:"none", color:"black" }} to={"/product/" + item.id} gutterBottom variant="h5" component="div">
            <CardActionArea>
                <CardMedia
                    component="img"
                    alt={title}
                    image={imageURL}
                    height="400px"
                    width="200px"
                />
                <CardContent style={{display:"flex", flexDirection:"column", gap:5, justifyContent:"center", textAlign:"center",backgroundColor:"#CBCCFF"}}>
                        <Typography sx={{fontSize:"20px"}}>
                            {title}
                        </Typography>
                    <Typography style={{fontSize:"20px"}}>
                        ${price}
                    </Typography>
                    <Typography style={{fontSize:"20px"}}>
                        stock:{stock}
                    </Typography>
                </CardContent>
            </CardActionArea>
            </Link>
            <CardActions style={{display:"flex", flexDirection:"row", gap:5, justifyContent:"center", backgroundColor:"#9296F0", height:"120px"}}>
                <CounterItem stock={stock} addCarrito={addCarrito}/>
            </CardActions>
        </Card>
    
    )
}

export default Item;