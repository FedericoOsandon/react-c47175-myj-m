
import { useRef, useState } from 'react'
import NavBar from './components/Navbar';
import 'bootstrap/dist/css/bootstrap.min.css';
import ItemListContainer from './components/ItemListContianer/ItemListContainer';
import ItemCount from './components/Counter/ItemCount';
import Formulario from './components/Formulario/Formulario';




function App() { 
    const onAdd = (count) => {
        console.log(count)
    }

    return (
        <div>
            <NavBar />          
            <ItemListContainer />  
            <ItemCount initial={1} stock={5} onAdd={onAdd} /> 
            <Formulario />               
        </div>
    )
}

export default App




// CartWidget -> icono
// NavBar.jsx -> 
// ItemListContainer.jsx -> props greeting