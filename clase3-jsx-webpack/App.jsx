import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'

// JSX -> Javascript xml <persona>
                          // <nombre>Fede</nombre>
                      // </persona>

// function saludos (){
//   return 'hla'
  
// }

// webpack -> vite usa esBuild

function App() { // función contructora
  

  // <h1 style='font-size: 10px;'>Jsx</h1>
  const style = { 
    fontSize: 100 ,
    backgroundColor: 'red'
  }

  return (
    <div className=''>
      <h1>Jsx</h1>
      <img src={reactLogo} onClick={ ()=>alert('Esto es una imagen') } />
      <hr />
      <div></div>
      <input />
      <img src={viteLogo} />
      <nav>
        <ul>
          <li>home</li>
          <li>nosotros</li>
          <li>carrito</li>
        </ul>
      </nav>
    </div>
  )
}

export default App
