import './NavBar.css';
import carrito from '../assets/icons/cart-shopping-fast-svgrepo-com.svg';

export const CartWidget = () => {
  return (
    <div className='divCartWidget'>
      <div className='divCarrito'>
        <img src={carrito} alt="" id="iconoCarrito"/>
          <p id="compras"></p>
      </div>
    </div>
  )
}