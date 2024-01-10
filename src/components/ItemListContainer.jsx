import { useEffect, useState } from "react"
import { getProducts } from "../../asyncMock";
import { Item } from "../components/Item"

export const ItemListContainer = () => {
  const [products, setProducts] = useState([]);

  useEffect(() => {
    getProducts()
      .then(res => {
        setProducts(res);
      })
      .catch(err => {
        console.error(err);
      })
  }, [])

  return (
    <div>
      {products.map(prod => <Item key={prod.Id} {...prod}/>)}
    </div>
  )
}