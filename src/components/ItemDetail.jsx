import './NavBar.css'
import { ContadorCarrito } from './ContadorCarrito'

export const ItemDetail = ({NombreDelItem, Precio, Imagen, Id}) => {
  return(
          <ul>
              <div className="ItemDetailContainer">
                <li><img src={Imagen} alt="Imagen del producto"/></li>
                <li><p>{NombreDelItem}</p></li>
                <li>Precio: {Precio}</li>
                <ContadorCarrito />
              </div>
          </ul>
  )
}