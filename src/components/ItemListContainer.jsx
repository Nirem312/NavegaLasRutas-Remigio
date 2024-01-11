import { useEffect, useState } from "react"
import { devolverProductos } from "../../asyncMock";
import { Item } from "../components/Item"

export const ItemListContainer = () => {
  const [products, setProducts] = useState([]);

  useEffect(() => {
    devolverProductos()
      .then(res => {
        setProducts(res);
      })
      .catch(err => {
        console.error(err);
      })
  }, [])

  return (
    <div className="containerDeProductos">
      {products.map(prod => <Item key={prod.Id} {...prod}/>)}
    </div>
  )
}