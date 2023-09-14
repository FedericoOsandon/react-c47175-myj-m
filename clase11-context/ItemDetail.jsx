// import { useContext } from "react"
// import { CartContext } from "../../../context/CartContext"

import { useCartContext } from "../../../context/CartContext"
import ItemCount from "../../Counter/ItemCount"


const ItemDetail = ({product}) => {
    const {addProduct} = useCartContext()
    // console.log(product)
    const onAdd = (quantity) => {
        // console.log('productos seleccionados: ',count)
        addProduct( {...product, quantity } )
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
                <ItemCount initial={1} stock={product.stock} onAdd={onAdd} />
            </div>

        </div>
    )
}

export default ItemDetail