import './NavBar.css'
import { ItemCount } from './ItemCount'

export const ItemDetail = ({NombreDelItem, Precio, Imagen}) => {
  return(
    <ul>
      <div className="ItemDetailContainer">
        <li><img src={Imagen} alt="Imagen del producto"/></li>
        <li><p>{NombreDelItem}</p></li>
        <li>Precio: {Precio}</li>
        <ItemCount Precio={Precio}/>
      </div>
    </ul>
  )
}