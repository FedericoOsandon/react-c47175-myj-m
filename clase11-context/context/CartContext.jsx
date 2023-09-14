import { createContext, useContext, useState } from "react";

const CartContext = createContext([])

export const useCartContext = () => useContext(CartContext)

export const CartContextProvider = ({ children }) => {
    // estados y funciones del contexto
    const [cartList, setCartList] = useState([])

    const addProduct = (newProduct)=>{
        // lógica  para evitar duplicados
        setCartList([
            ...cartList,
            newProduct
        ])
    }

    // Eliminar por producto
    // mostrar la cantidad de productos total que tienen 
    // precio total

    const deleteCart = ()=>{
        setCartList([])
    }

    return (
        <CartContext.Provider value={{
            cartList,
            addProduct,
            deleteCart
        }}>
            {children}
        </CartContext.Provider>
    )
}

