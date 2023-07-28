import { Box } from "@mui/material"
import React from "react"
import ProductCard from "../../components/product-card"
import { useParams } from "react-router-dom"
import { doc, getDoc, getFirestore } from "firebase/firestore"

const ProductContainer = () => {
    const [data, setData] = React.useState();
    const {id} = useParams();
    
    React.useEffect(() => {
        const db = getFirestore();
        const getProduct = doc(db, "Productos", id);
        getDoc(getProduct)
        .then((snapshot) => {
            setData({id:snapshot.id, ...snapshot.data()})
        })
    })

    return (
        <Box sx={estilo} >
            <ProductCard data={data} />
        </Box>
    )
}

export default ProductContainer;

const estilo = {
    display:"flex",
    flexDirection:"row",
    justifyContent:"center",
}