// Creando contexto, los pasos van a ser parecido

import { createContext, useState } from "react";



// 1 Creamos el contexto
const ProductosContext = createContext()
// 2 Armamos el provider
const ProductosProvider = ({children})=>{
    // Todos los componentes adentro del ProductosProvider, van a estar representados en el children
    const [productos, setProductos] = useState('holis')
    const [productosAEditar, setproductosAEditar] = useState('pepito')
    const data = {
        productos,
        productosAEditar
    }
    return <ProductosContext.Provider value={data}>{children}</ProductosContext.Provider>
                                    // Recibe un children el cual va a retornar cuando la función termine

}
// Para que esto se pueda compartir se tiene que retornar el productosContext.provider
// 3 Exportaciones
export {ProductosProvider}
export  default ProductosContext