import React from 'react' // Corazón de react
import ReactDOM from 'react-dom/client' // El adaptador que nos permite gestionar el dom
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import * as bootstrap from 'bootstrap' // De esta manera traigo todas las herramientas de js de bootsrap

import './index.css'
import Productos from './Productos.jsx' // Hay que importarlo, se puede no importar y tenerlo abierto en pestaña dividida
import NoEncontrado from './pages/NoEncontrado.jsx'
import Contacto from './pages/Contacto.jsx'
import Nosotros from './pages/Nosotros.jsx'
import Inicio from './pages/Inicio.jsx'
import Navbar from './components/Navbar.jsx'
import DetalleProducto from './pages/DetalleProducto.jsx'
// Creamos un componente
ReactDOM.createRoot(document.getElementById('root')).render(
    <BrowserRouter>
        {/* Navbar */}
        <Navbar/>
        <Routes>
            <Route path='/productos' element={<Productos />}/>
            <Route path='*' element={<NoEncontrado/>}/>
            <Route path='/' element={<Inicio />}/>
            <Route path='/detalle-producto/:id' element={<DetalleProducto />}/>
            {/* :id puede ser cualquier nombre */}
            <Route path='/detalle-producto' element={<DetalleProducto />}/>

            <Route path='/contacto' element={<Contacto/>}/>
            <Route path='/nosotros' element={<Nosotros/>}/>

        </Routes>
    </BrowserRouter>
)
    /* <InicioApp></InicioApp>  Sacar el strictmode al principio*/
    /* Se puede cerrar de las 2 maneras, como un elemento html con 2 partes o así/ */