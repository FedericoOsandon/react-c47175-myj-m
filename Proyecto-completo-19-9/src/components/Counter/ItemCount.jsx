import { useState } from "react"


// un re-render se produce con un cambio de estado o de props - evento
const ItemCount = ({ initial, stock, onAdd }) => {   
    const [counter, setcounter] = useState(initial)    
    
    const handleAdd = ()=>{
        if (counter < stock) setcounter(counter+1)
        
    }
    const handleSubstract = (evt)=>{
        console.log(evt)
        if (counter > initial) setcounter(counter - 1)
        

    }

    const handleOnAdd = () => onAdd(counter )
    

    return <center>
                <h2>Counter</h2>
                <button className="btn btn-outline-dark" onClick={handleAdd}> + 1 </button>                
                <label>
                    <strong>{ counter }</strong>
                </label>
                <button 
                    className="btn btn-outline-dark" 
                    onClick={handleSubstract}
                > 
                    - 1 
                </button>      
                <button 
                    className="btn btn-outline-dark" 
                    onClick={handleOnAdd}
                > 
                    Agregar al carrito
                </button>          
            </center>
} 

export default ItemCount