import { createContext, useContext, useState } from "react";

const CartContext = createContext([])

export const useCartContext = () => useContext(CartContext)

export const CartContextProvider = ({ children }) => {
    // estados y funciones del contexto
    const [cartList, setCartList] = useState([])

    const isProduct = (id) => cartList.findIndex(prod => prod.id === id)

    const addProduct = (newProduct)=>{
        // lógica  para evitar duplicados
        // 1 - existe el producto         
        // findIndex

        const index = isProduct(newProduct.id) // 0 -mucho
        // console.log(index)
        if (index !== -1) {
            cartList[index].quantity += newProduct.quantity // modique una prop de un obj de cart
            setCartList([...cartList]) // agregar esto si o si 
        } else {
            setCartList([
                ...cartList,
                newProduct
            ])            
        }

    }

    // Eliminar por producto
    const eliminarProducto = (pid) => setCartList(cartList.filter(prod => prod.id !== pid))
    // mostrar la cantidad de productos total que tienen 
    const cantidadTotal = ()=> cartList.reduce((cantidadTotal, objProduct)=> cantidadTotal += objProduct.quantity ,0)
    // precio total (()=>{}, inicializador de precio total)
    const precioTotal = () => cartList.reduce((precioTotal, objProduct)=> precioTotal += (objProduct.price * objProduct.quantity) ,0)

    const deleteCart = ()=>{
        setCartList([])
    }

    return (
        <CartContext.Provider value={{
            cartList,
            addProduct,
            deleteCart,
            cantidadTotal,
            precioTotal,
            eliminarProducto
        }}>
            {children}
        </CartContext.Provider>
    )
}

