import './NavBar.css'
import icono from '../assets/icons/clothes-svgrepo-com.svg';
import { CartWidget } from './CartWidget';

export const NavBar = () => {
  return (
    <nav>
      <ul>
        <img src={icono} alt="Icono de la tienda" id='icono'/>
        <li><a href="#">Home</a></li>
        <li><a href="#">About</a></li>
        <li><a href="#">Products</a></li>
        <li><a href="#">Contact</a></li>
        <li><a href="#">Services</a></li>
        <CartWidget 
          contador={0}
        />
      </ul>
    </nav>
  )
}