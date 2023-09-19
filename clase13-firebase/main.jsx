import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
// import { BrowserRouter } from 'react-router-dom'
import { initFirebase } from './firebase/config.js'
// import './index.css'
initFirebase()
// App() -> <App />
ReactDOM.createRoot(document.getElementById('root')).render( 
    // <BrowserRouter>
        <App /> 
    // </BrowserRouter>
)
