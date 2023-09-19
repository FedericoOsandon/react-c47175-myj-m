
import { useRef, useState } from 'react'
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'

import NavBar from './components/Navbar'
import ItemListContainer from './components/ItemListContianer/ItemListContainer'
import ItemDetialContainer from './components/ItemDetailContainer/ItemDetialContainer'
import CartContainer from './components/CartContainer/CartContainer'
import {  CartContextProvider } from './context/CartContext'

import 'bootstrap/dist/css/bootstrap.min.css'

function App() { 
    // estados y funciones para context
    // import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
    // link -> navegar a una url
    return (
        <Router>
            <CartContextProvider>
                <NavBar />  
                <Routes>
                    <Route path='/' element={<ItemListContainer /> }/>
                    <Route path='/category/:cid' element={<ItemListContainer /> }/>
                    
                    <Route path='/detalle/:pid' element={<ItemDetialContainer /> }/>
                    <Route path='/cart' element={ <CartContainer /> }/>              
                </Routes>  
            </CartContextProvider>            
        </Router>
    )
}

export default App




// CartWidget -> icono
// NavBar.jsx -> 
// ItemListContainer.jsx -> props greeting