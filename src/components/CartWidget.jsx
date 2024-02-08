import './NavBar.css';
import carrito from '../assets/icons/cart-shopping-fast-svgrepo-com.svg';
import { useContext } from 'react';
import { MyContext } from '../context/MyContext';

export const CartWidget = () => {

  const {cart} = useContext(MyContext)

  return (
    <div className='divCartWidget'>
      <div className='divCarrito'>
        <img src={carrito} alt="" id="iconoCarrito"/>
          <p id="compras">{cart}</p>
      </div>
    </div>
  )
}