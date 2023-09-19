import { memo } from "react"
import { Link } from "react-router-dom"

const Item = memo(({product}) => {
    console.log('render de Item')
    return (
        <div className="card w-25">
            <div className="card-body">
                <img className="w-100 card-img-top" src={product.imageUrl} alt="imagen prenda"/>
                <p>Nombre: {product.name}</p>
                <p>Description: {product.description}</p>
                <p>Precio: {product.price}</p>
            </div>
            <div className="card-footer">
                <Link to={`/detalle/${product.id}`}>
                    <button className="btn btn-outline-dark w-100">Detalle</button>
                </Link>
            </div>
        </div>
    )
})

export default Item