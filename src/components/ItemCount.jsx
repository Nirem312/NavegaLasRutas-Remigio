import { useState } from "react"

export const ItemCount = () => {
  const [cantidad, setCantidad] = useState(0);

  const incrementar = () => {
    setCantidad(cantidad + 1);
  }

  const restar = () => {
    if (cantidad > 0){
      setCantidad(cantidad - 1)
    }
  }

  const agregar = () => {
    if (cantidad == 0){
      Swal.fire({
          title: 'No hay articulos en el carrito',
          text: 'Clickee el boton + para agregarlo al carrito',
          icon: 'warning',
          confirmButtonText: 'Volver'
      })        
    } else {
      let texto = ""
      if (cantidad > 1){
          texto = 'Se agregaron un total de '+cantidad+' articulos al carrito';
      } else {
          texto = 'Se agrego el articulo al carrito';
      }
      Swal.fire({
          title: 'Añadido con exito!',
          text: texto,
          icon: 'success',
          confirmButtonText: 'Genial'
      })
      setCantidad(0);
    }
  }

  return(
    <div>
      <div className="controlesContador">
        <button onClick={restar} className="btn">-</button>
        <h2>{cantidad}</h2>
        <button onClick={incrementar} className="btn">+</button>
      </div>
      <button className="btn" onClick={agregar}>Agregar al carrito</button>
    </div>
  )
}