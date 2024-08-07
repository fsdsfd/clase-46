import TablaFila from './TablaFila'

const Tabla = ({products, eliminarProducto, setProductoAEditar}) => {
  // setUseEffect: Para mirar ciertas variables en el caso de que se cambien, ejecutar otra cosa
  return (
    <>   
     <h2>Tabla de productos</h2>
    <table className="table table-stripped">
  <thead>
    <tr>
      <th scope="col">Nombre</th>
      <th scope="col">Categoría</th>
      <th scope="col">Precio</th>
      <th scope="col">Acciones</th>
    </tr>
  </thead>
  <tbody>
    {/* Para renderizar los productos se usa map, no se puede con forEach */}
    {
      // Esto es básicamente products ? 'products.map()...' : ''. Un if básicamente, rendering condicional, si 
       products && products.map((product, idx) => (
          <TablaFila key={idx} product={product} 
          eliminarProducto={eliminarProducto}
          setProductoAEditar = {setProductoAEditar} />
            ))
    }
  </tbody>
</table>
    </>

  )
}

export default Tabla