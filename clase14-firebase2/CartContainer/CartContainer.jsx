// import { useContext } from "react"
// import { CartContext } from "../../context/CartContext"
import { addDoc, collection, doc, getFirestore, updateDoc, writeBatch } from 'firebase/firestore'
import { useCartContext } from "../../context/CartContext"
import { useState } from 'react'
import { Link } from 'react-router-dom'

const CartContainer = () => {
  // const {} = useContext(CartContext)
	const [dataForm, setDataForm] = useState({
		name: '',
		phone: '',
		email: ''
	})
	const [id, setId] = useState('')
  const {cartList, deleteCart, eliminarProducto, precioTotal} = useCartContext()

  // porqeue no puede estar la función para eliminar producto en cartContainer?

  const handleAddOrder = async (evt) => {
	evt.preventDefault()
	const order = {}
	order.buyer = dataForm
	order.items = cartList.map(prod => {
		return {id: prod.id, name: prod.name, price: prod.price, quantity: prod.quantity}
	})
	order.total= precioTotal()

	// insertar una item(orden)
	const queryDB = getFirestore()
	const ordersCollection = collection(queryDB, 'orders')// doc(), collection, getDoc, getDocs, 
	addDoc(ordersCollection, order)
	.then(({id}) => setId(id))
	.catch(err => console.log(err))
	.finally(()=> {
		setDataForm({
			name: '',
			phone: '',
			email: ''
		})
		deleteCart()
	})
	// console.log(order)

	// update 
	
	// const queryDB = getFirestore()
	// const queryUpdateProduct = doc(queryDB, 'products', 'VnfdbLjBK6MZfgnqlm37')
	// foreach
	// updateDoc(queryUpdateProduct, {
	// 	isActive: false
	// })
	// .then(()=> console.log('se actualizó'))


	// const queryDB = getFirestore()
	// const queryUpdateProduct1 = doc(queryDB, 'products', 'Ll5FTNRM1xTG7tUhgs0O')
	// const queryUpdateProduct2 = doc(queryDB, 'products', 'VnfdbLjBK6MZfgnqlm37')
	
	// const batch = writeBatch(queryDB)

	// batch.update(queryUpdateProduct1,{
	// 		stock: 100
	// })
	// batch.update(queryUpdateProduct2, {
	// 		stock: 100
	// })

	// batch.commit()


  }

  const handleOnChange = (evt) => {
	setDataForm({
		...dataForm,
		[evt.target.name] : evt.target.value
	})
  }

//   arrayPRoductos.forEach(element => {
// 	addDoc(ordersCollection, prod)
// 	.then(resp => console.log(resp))
//   });

  console.log(dataForm)
  return (
	<>
		{id !== '' && <h3>SE ha generado le orden de compra: {id}</h3>}
	 	{cartList.length > 0 ? 
			<div>
				{cartList.map(prod => <div key={prod.id}>
					<img src={prod.imageUrl} className="w-25"/>
					{prod.name} - ${prod.price} - Cantidad: {prod.quantity}
					<button className="btn btn-danger" onClick={ () => eliminarProducto(prod.id) }> X </button>
				</div>)}
				<button onClick={deleteCart}>Vaciar Carrito</button>

					<h3>Precio total: {precioTotal()}</h3>
				<form onSubmit={handleAddOrder}>
					<input 
						type='text' 
						name='name' 
						placeholder='ingresar el nombre' 
						value={dataForm.name}
						onChange={handleOnChange}
					/>
					<input 
						type='text' 
						name='phone'
						placeholder='ingresar el teléfono' 
						value={dataForm.phone}
						onChange={handleOnChange}
					/>
					<input 
						type='text' 
						name='email'
						placeholder='ingresar el email' 
						value={dataForm.email}
						onChange={handleOnChange}
					/>
					<button 
						className="btn btn-success"				
					>
						Terminar compra
					</button>

				</form>

			</div>		
		:
			<center>
				<h2>No hay productos en el carrito</h2>
				<Link to='/'>Andá a comprar Ratón</Link>
			</center>}

	</>

	
  )
}

export default CartContainer