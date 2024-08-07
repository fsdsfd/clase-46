import React from 'react'
import Swal from 'sweetalert2'
import { notificacionSweet } from './TablaFila.service'
import { Link } from 'react-router-dom'

const TablaFila = ({product, eliminarProducto, setProductoAEditar}) => {
    //console.log(product)
    const handleEliminar = ()=>{
      //console.log(product.id)
      console.log('hicieron click')
      notificacionSweet(product.nombre,()=>{
        eliminarProducto(product.id)
      })
      // Creando una alerta para confirmar el eliminar
      // let isDelete = window.confirm(`¿Estás seguro de eliminar el producto con el nombre: ${product.nombre}`)

      // if (isDelete) {
      //   eliminarProducto(product.id)
      // } else {
      //   return // break 
      // } 
      // Se puede crear

      
    }
    const handleEditar = (prod)=>{
       console.log(prod)
      setProductoAEditar(prod)
    }
  return (
  
    <tr>
      <td>{product.nombre}</td>
      <td>{product.categoria}</td>
      <td>{product.precio}</td>
      <td>                                {/* No se puede poner {handleEditar[product]} porque se ejecutaría instantaneamente ni bien se ejecute la aplicación*/}
      <Link className="btn btn-info" to={`/detalle-producto/${product.id}`}>Ver</Link>
        <button className="btn btn-warning" onClick={()=>handleEditar(product)}>Editar</button>

        <button className="btn btn-danger" onClick={handleEliminar}>Eliminar</button>
      </td>
    </tr>

  )
}

export default TablaFila