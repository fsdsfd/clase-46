import React, { useEffect, useState } from 'react'
import { useParams } from 'react-router'
import Spinner from '../components/Spinner'

const DetalleProducto = () => {
    /* Para obtener los parametros pasados como parte de la url uso un Hook */
    // UseParams
    /* GETONE ---> url */
    // UseEffect cuando se modifique el id
    const [producto, setProducto] = useState(null) // Objeto para obtener la data del producto fuera del get
    const {id} = useParams()
    useEffect(() => {
      getOneProducto()
    }, [])
    
    console.log(id)
    const getOneProducto = async ()=>{
      const url = 'https://6695aff80312447373bfcc6e.mockapi.io/id/productos/'
      try {
        const urlPeticion = url + id
        const res = await fetch(urlPeticion)
        if (!res.ok) {
          throw new Error('No se pudo obtener el producto', res.status)
        }
        const data = await res.json()
        setProducto(data)

      } catch (error) {
        console.log('getProducto', error)
      }
    }
  return (
    <>
    {
      producto ? <h1>{producto.nombre}</h1> : <Spinner/>
    }
    {/* En el caso de que no se encuentre el spinner, va a aparecer el spinner */}
    </>
  )
}

export default DetalleProducto