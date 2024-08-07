// Contenedor de la app

import { useEffect, useState } from "react";
import Formulario from "./components/Formulario";
import Tabla from "./components/Tabla";
import productos from "./constants/productos";
import { v4 as uuidv4 } from 'uuid';
const Productos = () => {
  const url = import.meta.env.VITE_API_PRODUCTOS
  const [products, setProducts] = useState(productos); // Array, tenemos que modificar el array de productos
  console.log(products);
  useEffect(() => {
    document.title = 'Educacion IT- Productos'
    console.log('Se monta el componente en pantalla')
    // Es entonces cuando tengo que hacer la petición
    obtenerTodosLosProductos()
  }, [])
  const obtenerTodosLosProductos = async ()=>{
    try {
      const res = await fetch(url)
      if (!res.ok) {
        throw new Error('No se pudo enviar los productos', res.status)
      }
      const data = await res.json()
      console.log(data)
      // Seteo los productos que me llegaron del backend
      setProducts(data)
    } catch (error) {
      console.log(error)
    }
  }
  const agregarProducto = async (producto) => {
    // Hacer la petición para el guardado del producto en el backend
        /* 2. Cambiar el estado de react para que vuelve a renderizar y pueder la creación del producto. */
    try {
      const options = {
        method : 'POST',
        headers: { 'content-type': 'application/json'},
        body: JSON.stringify(producto)
      }
      const res = await fetch(url, options)
      if (!res.ok) {
        throw new Error('No se pudo crear el producto', res.status)
      }
      const dataNuevoProducto = await res.json()
      console.log(dataNuevoProducto) // El producto nuevo
      const nuevoEstadoProductos = [...products, dataNuevoProducto] // Crea un array con todo lo anterior más el nuevo producto
      setProducts(nuevoEstadoProductos) // La función que modifica el estado del producto estado inicial nulo
    } catch (error) {
      console.log('agregarProducto', error)
    }
  };
  const editarProducto =  async (productoEditado) => {
    try {
      // Petición asincrónica para actualizar el backend con el producto nuevo
      const options ={
        method : 'PUT',
        headers: { 'content-type' : 'application/json'},
        body : JSON.stringify(productoEditado)
      }
      const urlEdicion = url + productoEditado.id
      const res = await fetch(urlEdicion, options)
      if (!res.ok) {
        throw new Error('No se pudo editar')
      }
      const DataEditado = await res.json()

      // 2. Actulizo el estado basado en el producto editado que me llega del backend
      const nuevoEstadoProductos = productos.map(
        prod => 
        (prod.id === productoEditado.id) // Si esto es true es el producto que quieren editar, entonces se guarda en elNuevoEstadoProductos
        ? productoEditado : prod)         // En caso de ser false
        setProducts(nuevoEstadoProductos)
    } catch (error) {
     console.log('editarProducto', error) 
    }
  }
  // Eliminar producto, se necesita un identificador
  // De esta manera se escribe más comunmente y más corto
  //const nuevoEstadoProductos = products.filter(prod => prod.id !== id)
  const eliminarProducto = async(id)=>{
      try {
        const options = {
          method:'DELETE'
        }
        const urlEliminacion = url + id
        const res = await fetch(urlEliminacion, options)
        if (!res.ok) {
          throw new Error('No se pudo eliminar')
        }
        const dataEliminado = await res.json()
        console.log(dataEliminado)
        const data = {
          id: id,
          producto : dataEliminado
        }
        // Hay que hacer un filter para eliminar
        const nuevoEstadoProductos = products.filter(prod => prod.id !== data.id)
        setProducts(nuevoEstadoProductos)
      } catch (error) {
        console.log('eliminarProducto', error)
      }
    }
    
   // Cambia el estado, y le avisa a react que tiene que volver a dibujar los componentes involucrados, las tabla fila Establece el valor nuevo, en el cual no tiene el elemento en el array
  // Le estamos mandando al setProducts un array en el que no está el producto x, y este le avisa a react

  // Editar producto
  const [productoAEditar, setProductoAEditar] = useState(null)
  // Practicar el formulario y entenderlo
  return (
    <div className="container">
      <Formulario 
        agregarProducto={agregarProducto}
        productoAEditar={productoAEditar}
        setProductoAEditar={setProductoAEditar}
        editarProducto={editarProducto}
      />
      <Tabla 
        products={products} 
        eliminarProducto={eliminarProducto}
        setProductoAEditar={setProductoAEditar}
      />
    </div>
  );
}

export default Productos;
