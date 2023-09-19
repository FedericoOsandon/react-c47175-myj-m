// import { useContext } from "react"
// import { CartContext } from "../../../context/CartContext"

import { useState } from "react"
import { useCartContext } from "../../../context/CartContext"
import ItemCount from "../../Counter/ItemCount"
import { Link } from "react-router-dom"


const ItemDetail = ({product}) => {
    const [isCounter, setIsCounter] = useState(true)
    const {addProduct} = useCartContext()
    // console.log(product)
    const onAdd = (quantity) => {
        // console.log('productos seleccionados: ',count)
        addProduct( {...product, quantity } )
        setIsCounter(false)
        // setTimeout(()=>{
        //     setIsCounter(true)
        // }, 2000)
    }
    // console.log(cartList)
    return (
        <div className="row">
            <h2>Vista de detalle</h2>
            <div className="col">
                <img className="w-25" src={product.imageUrl} alt="imagen" />
                <div>
                    <p>Nombre: {product.name}</p>
                    <p>Descripción: {product.description}</p>
                    <p>Precio: {product.price}</p>
                    <p>Stock: {product.stock}</p>
                </div>
            </div>
            <div className="col">
                {
                    isCounter ? 
                        <ItemCount initial={1} stock={product.stock} onAdd={onAdd} />
                    :
                        <>
                            <Link to={'/cart'}>
                                <button className="btn btn-outline-dark">Ir a Cart</button>
                            </Link>
                            <Link to={'/'}>
                                <button className="btn btn-outline-dark">Ir a inicio</button>
                            </Link>
                        </>
                }
            </div>

        </div>
    )
}

export default ItemDetail

// html js
// button = document.querySelector('#agregarAlCarrito') // no se toca el dom 
// button.addEventlistener('click', function(){})
// button.addEventlistener('click', function(){}) - removeEnentlistener('click', function(){})