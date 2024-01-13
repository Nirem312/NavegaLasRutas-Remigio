import { useEffect, useState } from "react"
import { devolverProductos, devolverProductosPorCategoria } from "../../asyncMock";
import { Item } from "../components/Item"
import { useParams } from "react-router-dom";

export const ItemListContainer = () => {
  const [products, setProducts] = useState([]);

  const { categoryId } = useParams();

  let titulo = categoryId ? products[0].Categoria : 'Nuestros productos'

  useEffect(() => {
    const asyncFunc = categoryId ? devolverProductosPorCategoria : devolverProductos

    asyncFunc(categoryId)
      .then(res => {
        setProducts(res);
      })
      .catch(err => {
        console.error(err);
      })
  }, [categoryId])

  return (
    <>
      <h1>{titulo}</h1>
      <div className="containerDeProductos">
        {products.map(prod => <Item key={prod.Id} {...prod}/>)}
      </div>
    </>
  )
}