import { Box, CircularProgress } from "@mui/material";
import TabsMenu from "../../components/tabs";
import { useNavigate, useParams } from "react-router-dom";
import React from "react";
import ItemList from "../../components/item-list";
import {getFirestore, collection, getDoc, query, where, getDocs} from "firebase/firestore"

const CATEGORIES = [{id:"all", title:"Todos los Productos"},{ id:"zapatillas", title:"Zapatillas" },{ id:"remeras", title:"Remeras" }, {id:"hoodies", title:"Hoodies"},  ]

const ItemsContainer = () => {
    
    const [list,setList] = React.useState([]);
    const [loading,setLoading] = React.useState(false);

    const {category} = useParams(); 
    const navigate = useNavigate();

    React.useEffect (() => {

        if (!CATEGORIES.some (item => item.id === category )){
            navigate("/products/all")
        }
        
    }, [category,navigate])
    React.useEffect (()=> {
        setLoading(true);
        <CircularProgress/>
        const db = getFirestore();
        const getCollection = collection(db,"Productos")

        if (category === "all"){
            getDocs(getCollection)
            .then((snapshot) => {
                setLoading(false);
                setList(snapshot.docs.map(el => ({id:el.id, ...el.data()})))
            })
        } else if (CATEGORIES.some(categories => categories.id === category)) {
            const q = query(getCollection, where("categoryID", "==", category))

            getDocs(q)
            .then ((snapshot) => {
                setLoading(false);
                setList(snapshot.docs.map(el =>({id:el.id, ...el.data()})))
            })
        }
    },[category])



    return (
        <Box>
                <TabsMenu current={category} items={CATEGORIES}/>
            <Box sx={{display:"flex" , justifyContent:"center"}}>
                <ItemList items={list} loading={loading}/>
            </Box>
        </Box>
    )
}

export default ItemsContainer;