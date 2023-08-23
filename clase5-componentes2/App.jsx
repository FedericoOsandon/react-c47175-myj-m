
import { useRef, useState } from 'react'
import NavBar from './components/Navbar';
import Titulo from './components/Titulo/Titulo'
import 'bootstrap/dist/css/bootstrap.min.css';


function App() { // vuelve a ejecutar app, onClick - cambio de estado -> re render (actualización)
    const [count, setCount] =  useState(0)   // 
    const divRef = useRef(null) // es persistente como el estado pero no produce un nuvo render
    const chartRef = useRef(null) // es persistente como el estado pero no produce un nuvo render
    const renderCount = useRef(0)

    const titleObject = {
        titulo: 'soy un titulo App',
        subtitulo: 'subtitulo app'
    }
    const titulo = 'soy un titulo App'
    const subtitulo = 'subtitulo app'
    // let count = 0
    const addCount = () => {
        setCount(count + 1) 
        // renderCount.current++
    }

    function hanleCAmbiar(){
        divRef.current.innerHTML = 'nuevo contenido'
    }
    // no usar esto document.querySelector()

    return (
        <div>
            <NavBar>
                <Titulo titleObject={titleObject} />
                <div>Hola fede</div>                
            </NavBar> 
            <center>
                <Titulo titleObject={titleObject} />
                <div>
                    <h1>CAntidad de render {renderCount.current}</h1>
                </div>
                <label>
                    <strong>{ count }</strong>
                </label>
                <button onClick={addCount}> + 1 </button>
                <div>
                    <div ref={divRef}>Contenido original</div>
                    <button onClick={hanleCAmbiar}>Cambiar contenido</button>
                </div>
            </center>   
                  
        </div>
    )
}

export default App




// CartWidget -> icono
// NavBar.jsx -> 
// ItemListContainer.jsx -> props greeting