import React, { useEffect, useState } from 'react'

const Formulario = ({agregarProducto, productoAEditar, editarProducto}) => { // props = {agregarProducto}
  // Capturar datos del usuario para el formulario
  const formInicial = {
    id: null, // Pongo el tipo de input que se le va a ingresar 
    nombre : '', 
    categoria : '',
    precio : ''
  }
  const [form, setForm] = useState(formInicial)
  // Usamos la variable vacía para poder actualizarl, incializar el estado, del useState()
  // La idea se que mientras vaya escribiendo el usuario en el formulario, se vaya cargando en el useState
  const handleChange = e =>{
    // Recibe el objeto event (e)
    //console.log(e.target.value) // De esta manera está cargando los valores
    //console.log(e.target.name)
    // const obj = {
    //   ...form, // Simboliza todo lo que tenía el form
    //   [e.target.name] : e.target.value // nombre : Tomi
    // }
    //    setForm(obj)
    // Esto es una manera mucho más larga y fácil de explicar de crearlo, mayormente se hace de esta manera más corta
    setForm({
      ...form, // Spread Operator (Todo lo que tenía el form),
      [e.target.name]: e.target.value,
  })
  
  }
  useEffect(() => {
    console.log('Cambió el producto a editar') // Si cambia se ejecuta esto
    productoAEditar ? setForm(productoAEditar): setForm(formInicial)
  }, [productoAEditar]) // Cuando esto cambie

  const handleReset = ()=>{
    setForm(formInicial)
  }
  const handleSubmit = e=>{
    e.preventDefault() // Detiene el comportamiento por defecto de los formularios
    console.log(form)
    if (form.id === null) { // Si el id del producto es === nulo
      agregarProducto(form) // Si no existe se crea
    }
    editarProducto(form) // Si existe se edita
    handleReset()
    
  }
  // console.log(form)
  return (
    <>
    <h2>Formulario de { productoAEditar ? 'edición' : 'creación'}</h2>
    <form className='w-75 border border-danger rounded-3 p-4'>
        <div className="mb-3">
            {/* Campo nombre */}
            <label htmlFor="lbl-nombre" className="form-label">Nombre</label>
            <input 
            type="text" 
            className="form-control" 
            id="lbl-nombre" 
            placeholder="Ingrese el nombre" 
            name='nombre'
            value = {form.nombre} // Poniendo esto el componente no se puedem cambiar los valores porque le definimos el valor
            // De esta manera si que se puede modificar
            onChange={handleChange}
            />
        </div>
        <div className="mb-3">
            {/* Campo categoria */}
            <label htmlFor="lbl-categoria" className="form-label">categoria</label>
            <input 
            type="text"
             className="form-control" 
             id="lbl-categoria" 
             placeholder="Ingrese el categoria" 
             name='categoria'
             value={form.categoria} 
             onChange={handleChange}/>
        </div>

        <div className="mb-3">
            {/* Campo precio */}
            <label htmlFor="lbl-precio" className="form-label">precio</label>
            <input type="text" 
            className="form-control" 
            id="lbl-precio" 
            placeholder="Ingrese el precio" 
            name='precio'
            value={form.precio}
            onChange={handleChange}/>
        </div>
    <button type="submit" className="btn btn-dark me-2">Enviar</button>
    <button type="reset" className="btn btn-danger">Resetear</button>

    </form>
    
    </>
  )
}

export default Formulario