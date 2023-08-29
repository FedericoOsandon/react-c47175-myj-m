import { useEffect, useState } from "react"
import { mFetch } from "../../utils/mockFetch"

const ItemListContainer = () => { 
    const [products, setProduct] = useState([])
    const [ loading, setLoading ] = useState(true)
    
    useEffect(()=>{
        mFetch()
        .then(respuesta => setProduct(respuesta))
        .catch(err => console.log(err))
        .finally(()=> setLoading(false))
    }, [])
    
    // console.log(products)
    // [1,2,3,4] -> map -> [<li>1</li>,<li></li>,<li>3</li>,<li></li>] // 4 pos 3
    return (
        <center>
            <div className="row">
            { loading ? <h2>Loading ...</h2> : products.map(product =>   <div key={product.id} className="card w-25">
                                                                                <div className="card-body">
                                                                                    <img className="w-100 card-img-top" src={product.imageUrl} alt="imagen prenda"/>
                                                                                    <p>Description: {product.description}</p>
                                                                                    <p>Precio: {product.price}</p>
                                                                                </div>
                                                                                <div className="card-footer">
                                                                                    <button className="btn btn-outline-dark w-100">Detalle</button>
                                                                                </div>
                                                                            </div> 
            )}
            </div>
        </center>

    )
}

export default ItemListContainer

// fetch().then()