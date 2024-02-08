import { useContext } from 'react';
import { MyContext } from '../context/MyContext';

export const ItemCount = () => {

  const {cart, setCart} = useContext(MyContext)

  const incrementar = () => {
    setCart(cart + 1);
  }

  const restar = () => {
    if (cart > 0){
      setCart(cart - 1)
    }
  }

  const agregar = () => {
    if (cart == 0){
      Swal.fire({
          title: 'No hay articulos en el carrito',
          text: 'Clickee el boton + para agregarlo al carrito',
          icon: 'warning',
          confirmButtonText: 'Volver'
      })        
    } else {
      let texto = ""
      if (cart > 1){
          texto = 'Se agregaron un total de '+cart+' articulos al carrito';
      } else {
          texto = 'Se agrego el articulo al carrito';
      }
      Swal.fire({
          title: 'Añadido con exito!',
          text: texto,
          icon: 'success',
          confirmButtonText: 'Genial'
      })
      setCart(0);
    }
  }

  return(
    <div>
      <div className="controlesContador">
        <button onClick={restar} className="btn">-</button>
        <h2>{cart}</h2>
        <button onClick={incrementar} className="btn">+</button>
      </div>
      <button className="btn" onClick={agregar}>Agregar al carrito</button>
    </div>
  )
}