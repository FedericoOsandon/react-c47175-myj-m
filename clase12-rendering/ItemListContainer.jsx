import {useState, useEffect} from 'react'
import { useParams } from 'react-router-dom'
import { Input } from '../../../clases/clase9/Input'
import { tarea } from '../../../utils/promesas'
import ItemList from '../../ItemLsit/ItemList'



function ItemListContainer() {
    const [bool, setBool] = useState(true)
    const [items, setItems] = useState([])

    const { category } = useParams()
   

    useEffect(() => {
        //alert('effecto con filtro')
        if(category===undefined){
            tarea
            .then((resp)=> setItems(resp) )     //guardar en el estado
         }else{
             tarea
             .then((resp)=> setItems(resp.filter( r => category===r.categoria)) ) 
        }
    }, [category])

    
   //ejemplo de evento
   const handleClick=(e)=>{
        e.preventDefault() 
        setBool(!bool)
    }

    const handleAgregar=()=>{
        setItems([
            ...items,
            { id: "8", name: "Gorra 7", url: 'https://www.remerasya.com/pub/media/catalog/product/cache/e4d64343b1bc593f1c5348fe05efa4a6/r/e/remera_negra_lisa.jpg', categoria: "remera" , price: 2 }
        ])
    }

    console.log(bool);
    console.log('itemListContainer');

    return (
        <>
            <button onClick={handleClick}>Cambiar estado </button>           
            <button onClick={handleAgregar}>Agregar Item </button>           
            <ItemList items={items} />
            {/* <button onKeyDown={handleClick} >click</button> */}
        </>
    )
}

export default ItemListContainer
