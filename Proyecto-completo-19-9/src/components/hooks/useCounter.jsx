import { useEffect, useState } from "react"
// ccoustome hook 
export const useCounter = (min, max)=>{
    const [count, setCount] =  useState(min)     
   
    const handleAdd = () => {
        if (count < max) {
            setCount(count + 1)               
        }
    }   
    const handleSubtstract = () => {
        if (count > min) {
            setCount(count - 1) 
        }        
    } 
    return {count, handleAdd, handleSubtstract}
}