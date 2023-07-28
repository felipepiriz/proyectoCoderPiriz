import { Box, CircularProgress } from '@mui/material'
import React from 'react'
import Item from '../item-card'

const ItemList = ({items, loading}) => {
return (
    <Box sx={estilos}>
        {    
            Boolean (loading)          ?
            <CircularProgress />
            :
                items.map(( item, index) => <Item key={item.title + index} item={item} />)
        }
    </Box>

    )
}

export default ItemList;

const estilos = {
    display:"flex",
    justifyContent:"center",
    flexWrap:"wrap",
    gap:"80px",
    marginTop:"50px",
}