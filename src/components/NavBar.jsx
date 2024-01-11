import './NavBar.css'
import { Link } from 'react-router-dom';
import icono from '../assets/icons/clothes-svgrepo-com.svg';
import { CartWidget } from './CartWidget';

export const NavBar = (cant) => {
  return (
    <nav>
      <ul>
        <a href="/"><img src={icono} alt="Icono de la tienda" id='icono'/></a>
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