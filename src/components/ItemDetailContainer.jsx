import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { devolverProductoPorId } from "../../asyncMock";
import { ItemDetail } from "../components/ItemDetail";

export const ItemDetailContainer = () => {
  const [product, setProduct] = useState([]);

  const { itemId } = useParams();

  useEffect(() => {
    devolverProductoPorId(itemId)
      .then(res => {
        setProduct(res);
      })
      .catch(err => {
        console.error(err);
      })
  }, [itemId])

  return (
    <div className="containerDeProductos">
      <ItemDetail {...product} />
    </div>
  )
}