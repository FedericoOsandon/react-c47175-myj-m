import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'

import Navbar from './components/Navbar/Navbar'
import Titulo from './components/Titulo/Titulo'
import Footer from './components/Footer/Footer'

import './App.css'


// Navbar()

function App() { /// componete es una función (que comienza con Mayúscula) y retorna jsx
    const [count, setCount] =  useState(0)

    // console.log(estado)
    const titulo = 'soy un titulo App'
    const subtitulo = 'subtitulo app'
    // let count = 0

    // const addCount = () => {
    //     count = count + 1
    //     console.log(count)
    //     // count ++
    //     // count += 1
    // }
    
    const addCount = () => {
        setCount(count + 1) // estado = estado +1  
        // estado + 1 -> 0 + 1
        // estado = estado + 1 -> estado = 0 + 1 
    }

    return (
        <div>
            {/* { Navbar( { titulo: '', subtitulo: ''} ) } */}
            {/* Elemento */}
            <Navbar /> 

            <Titulo titulo={titulo} subtitulo={subtitulo} />

            <label>
                <strong>{ count }</strong>
            </label>
            <button onClick={addCount}> + 1 </button>
            <Footer />
            
        </div>
    )
}

export default App
