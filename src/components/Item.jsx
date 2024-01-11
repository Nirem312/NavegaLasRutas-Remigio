import { Link } from 'react-router-dom';

export const Item = ({NombreDelItem, Precio, Imagen, Id}) => {
  return(
          <ul>
              <div className="container">
              <li><img src={Imagen} alt="Imagen del producto"/></li>
              <li><p>{NombreDelItem}</p></li>
              <li>Precio: {Precio}</li>
              <Link to={`/item/${Id}`}><button className="btn">Ver detalles</button></Link>
              </div>
          </ul>
  )
}