import { useEffect, useState } from "react"
import { collection, doc, getDoc, getDocs, getFirestore, limit, orderBy, query, where } from 'firebase/firestore'
import { mFetch } from "../../utils/mockFetch"
import ItemList from "../ItemList/ItemList"
import { useParams } from "react-router-dom"

const Loading = ()=>{
    // estados y componentes hijos
    // useEffect(()=>{
        // acciones
        // return ()=>{ // clean up
        //     console.log('desmontando loading...')
        // } 
    // })

    return (
        <>
            <h2>Loading ...</h2> 
        </>
    )
}


const ItemListContainer = () => { 
    const [products, setProducts] = useState([])
    const [ loading, setLoading ] = useState(true)
    const [ meGusta, setMeGusta ] = useState(false)
    
    // evento props estado ??? 
    const { cid } = useParams()
    // console.log(cid)

    // useEffect(()=>{
    //     if (cid) {
    //         mFetch()
    //         .then(respuesta => setProducts( respuesta.filter(product => cid === product.category )))
    //         .catch(err => console.log(err))
    //         .finally(()=> setLoading(false))            
    //     } else {            
    //         mFetch()
    //         .then(respuesta => setProducts(respuesta))
    //         .catch(err => console.log(err))
    //         .finally(()=> setLoading(false))
    //     }
    // }, [cid])


    // // función que nos da firebase para traer un doc de firestore -> itemDetailContainer
    // useEffect(()=>{
    //     const db = getFirestore()
    //     const queryDoc = doc(db, 'products', 'Ll5FTNRM1xTG7tUhgs0O') // id useParams
    //     getDoc(queryDoc)
    //     .then(resp => ( { id: resp.id, ...resp.data() } ) )
    //     .then(resp => setProduct(resp))
    // }, [])

    // useEffect(()=>{
    //     const db = getFirestore()
    //     const queryCollection = collection(db, 'products')
    //     getDocs(queryCollection)
    //     .then(resp => setProducts(resp.docs.map(prod =>( { id: prod.id, ...prod.data() }))))
    //     .catch(err => console.log(err))
    //         .finally(()=> setLoading(false))
    // }, [])

    useEffect(()=>{
        const db = getFirestore()
        const queryCollection = collection(db, 'products')
       
        // const queryFilter = query(
        //     queryCollection, 
        //     where('price', '>=', 3000),
        //     // limit(1),
        //     // orderBy('price','desc')
        // )
        
        const queryFilter = query(queryCollection, where('category', '==', cid))
       
        getDocs(queryFilter)
        .then(resp => setProducts(resp.docs.map(prod =>( { id: prod.id, ...prod.data() }))))
        .catch(err => console.log(err))
            .finally(()=> setLoading(false))
    }, [])


    // función para cambiar el estado de me gusta
    const handleMeGusta = () => {
        setMeGusta(!meGusta)
    }

    // función para agregar un nuevo producto
    const handleAddProduct = () => {
        setProducts([
            ...products,
            {id: products.length+1, name: 'Producto de prueba', price: 1500, description: 'lorem asdfas asdf asdf '}
        ])
    }
    console.log(products)
    return (
        <center>
            <button className="btn btn-outline-dark" onClick={handleMeGusta}>ME gusta</button>
            <button className="btn btn-outline-dark" onClick={handleAddProduct}>agregar product</button>
            <div className="row">
            { loading ? // true - false
                    <Loading />
                :   
                    <ItemList products={products} />
            }
            </div>
        </center>

    )
}

export default ItemListContainer
