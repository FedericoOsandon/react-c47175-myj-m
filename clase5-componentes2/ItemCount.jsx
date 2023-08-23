import { useEffect, useState } from "react"
import Titulo from "../Titulo/Titulo"

const Counter = () => { 
    const [count, setCount] =  useState(0)   // 
    const [boolean, setBoolean] = useState(true)
    // def user
    
    useEffect(()=>{
        // acciones
        // chart cód         
        console.log('llama siempre que hay un nuevo render addEventlistener()  1') // traba simular tarea pesada o llamada a api - fetch 
        return ()=>{ // 
            console.log('limipeza addEventListerner - removeEventListener()')
        } // cleanup 
    })

    useEffect(()=>{ // montaje una sola vez
        // acciones        
        console.log('api - fetch  2') // traba simular tarea pesada o llamada a api - fetch 
    }, [])

    useEffect(()=>{ // montaje una sola vez
        // acciones        
        console.log('Solo cambia cuando cambia el valor de la dependencia 3') // traba simular tarea pesada o llamada a api - fetch 
    }, [boolean]) //<- estados o props
   
    const addCount = () => {
        setCount(count + 1) 
        // renderCount.current++
    }
    const handleSetBoolean = () => {
        setBoolean(!boolean) 
        // renderCount.current++
    }

   
    console.log('REnderizando counter 4')
    
    return <center>
                <h2>Counter</h2>
                <label>
                    <strong>{ count }</strong>
                </label>
                <button onClick={addCount}> + 1 </button>
                <button onClick={handleSetBoolean}> Boolean </button>
                
            </center>
} 

export default Counter