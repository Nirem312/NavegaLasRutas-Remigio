export const Item = ({NombreDelItem, Precio, Imagen}) => {
  return (
    <ul>
      <li><img src={Imagen} alt="" /></li>
      <li><p>Item: {NombreDelItem}</p></li>
      <li>Precio: {Precio}</li>
    </ul>
  )
}