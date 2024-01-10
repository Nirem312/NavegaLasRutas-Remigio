export const Item = ({NombreDelItem, Precio, Imagen}) => {
  return(
    <ul>
      <div className="container">
        <li><img src={Imagen} alt="Imagen del producto"/></li>
        <li><p>{NombreDelItem}</p></li>
        <li>Precio: {Precio}</li>
      </div>
    </ul>
  )
}
