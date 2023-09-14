// import { useContext } from "react"
// import { CartContext } from "../../context/CartContext"

import { useCartContext } from "../../context/CartContext"

const CartContainer = () => {
  // const {} = useContext(CartContext)

  const {cartList, deleteCart} = useCartContext()
  // console.log(cartList)
  return (
    <div>
      {cartList.map(prod => <div key={prod.id}>
          <img src={prod.imageUrl} className="w-25"/>
          {prod.name} - ${prod.price} - Cantidad: {prod.quantity}
          <button> X </button>
      </div>)}
      <button onClick={deleteCart}>Vaciar Carrito</button>
    </div>
  )
}

export default CartContainer