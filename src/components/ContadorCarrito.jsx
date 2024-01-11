import { useState } from "react"

export const ContadorCarrito = () => {
  const [cantidad, setCantidad] = useState(0);

  const incrementar = () => {
    setCantidad(cantidad + 1);
  }

  const restar = () => {
    if (cantidad > 0){
      setCantidad(cantidad - 1)
    }
  }

  return(
    <div>
      <div className="controlesContador">
        <button onClick={restar} className="btn">-</button>
        <h2>{cantidad}</h2>
        <button onClick={incrementar} className="btn">+</button>
      </div>
      <button className="btn">Agregar al carrito</button>
    </div>
  )
}