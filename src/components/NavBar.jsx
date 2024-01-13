import './NavBar.css'
import { NavLink } from 'react-router-dom';
import icono from '../assets/icons/clothes-svgrepo-com.svg';
import { CartWidget } from './CartWidget';

export const NavBar = () => {
  return (
    <nav>
      <ul>
        <NavLink to={`/`}><img src={icono} alt="Icono de la tienda" id='icono'/></NavLink>
        <NavLink to={`/`}><li>Inicio</li></NavLink>
        <NavLink to={`/category/Remeras`}><li>Remeras</li></NavLink>
        <NavLink to={`/category/Pantalones`}><li>Pantalones</li></NavLink>
        <NavLink to={`/category/Accesorios`}><li>Accesorios</li></NavLink>
        <CartWidget 
          contador={0}
        />
      </ul>
    </nav>
  )
}