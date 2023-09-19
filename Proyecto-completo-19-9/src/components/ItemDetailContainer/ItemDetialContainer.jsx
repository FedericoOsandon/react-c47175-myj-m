import { useEffect, useState } from "react"
import { useParams } from "react-router-dom"

import { mFetch } from "../../utils/mockFetch"
import ItemDetail from "./ItemDetail/ItemDetail"

import { TextComponent, TextComponent2, TextComponent3, TextComponent4, TextComponent5, TextComponent6, TextComponent7 } from "../../../react-c47175-myj-m/clase12-rendering/ComponenteEjemplosCondicionales"


const ItemDetialContainer = () => {
    // api manejo de estados etc
    const [product, setProduct ] = useState({})
    const { pid } = useParams()
    console.log(pid)

    useEffect(()=>{
        // llamada a la api
        mFetch(Number(pid))
        .then(resp => setProduct(resp))
        .catch(err=> console.log(err))
        // .finally(set loading)
    },[])

    return (
        <div>            
            <ItemDetail product={product} />           
        </div>
    )
}

export default ItemDetialContainer