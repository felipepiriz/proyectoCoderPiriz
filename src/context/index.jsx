import { addDoc, collection, doc, getFirestore, updateDoc } from 'firebase/firestore';
import React from 'react'
import Swal from 'sweetalert2';

    export const ContextProvider = React.createContext();
    const { Provider } = ContextProvider;

const ContextApp = ({children}) => {
    const [carrito, setCarrito] = React.useState([]);
    const [orderId, setOrderId] = React.useState('');

    const deleteItemArray = (title) => {
      const fakeCarrito = (carrito.filter ((el) => el.title !== title));
      setCarrito (fakeCarrito);
    } 
    


    const addProductToCarrito = (product) => {
        setCarrito([...carrito, product]);
    }
    const vaciarCarrito = () =>{
      setCarrito([]);
    }

const createNewOrder = (order) => {
  const db = getFirestore();
  const orders = collection(db, "orders");

  addDoc (orders, order)
  .then((snapshot) => {
    setOrderId(snapshot.id)
    setCarrito([]);
    Swal.fire( 
      `Tu numero de orden es: ${snapshot.id}`,
      'En poco tiempo sera contactado para coordinar la entrega, muchas gracias'
    )
    const getDoc = doc(db, "orders", snapshot.id);
    updateDoc (getDoc, {orderId: snapshot.id});
  })
  .catch((err) => {
    console.log(err);
  })
}

  return (  
    <Provider value={{ carrito, addProductToCarrito, quantity:carrito.length, createNewOrder, lastOrder:orderId , vaciarCarrito , deleteItemArray }}>
        { children }
    </Provider>
  )
}

export default ContextApp;