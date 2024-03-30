import { createContext, useContext, useReducer } from "react";
import { useProductContext } from '../Context/ProductContext';
import { cartReducer } from "./Reducers";



const cart = createContext() ;

const CartContext = ({ children }) => {
    const { list } = useProductContext();

    const products = [...list]
   
    const [state, dispatch] = useReducer(cartReducer, {
        products: products,
        cart: []
    })


    return <cart.Provider value={{state, dispatch}}>{children}</cart.Provider>
};

export default CartContext;

export const CartState = () => {
    return useContext(cart)
}