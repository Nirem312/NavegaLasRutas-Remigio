import { Item } from './components/ItemListContainer';
//import './App.css'
import { NavBar } from './components/NavBar';

function App() {

  return (
    <>
      <NavBar/>
      <Item 
        NombreDelItem={"Remera"}
        Precio={600}
        Imagen={"https://images-wixmp-ed30a86b8c4ca887773594c2.wixmp.com/f/6628cd7a-dd6a-43d3-a2b1-a9c921a93f98/d4q0qtb-45c9906e-6ad2-48e7-a071-c1c6b0904f5c.png?token=eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJzdWIiOiJ1cm46YXBwOjdlMGQxODg5ODIyNjQzNzNhNWYwZDQxNWVhMGQyNmUwIiwiaXNzIjoidXJuOmFwcDo3ZTBkMTg4OTgyMjY0MzczYTVmMGQ0MTVlYTBkMjZlMCIsIm9iaiI6W1t7InBhdGgiOiJcL2ZcLzY2MjhjZDdhLWRkNmEtNDNkMy1hMmIxLWE5YzkyMWE5M2Y5OFwvZDRxMHF0Yi00NWM5OTA2ZS02YWQyLTQ4ZTctYTA3MS1jMWM2YjA5MDRmNWMucG5nIn1dXSwiYXVkIjpbInVybjpzZXJ2aWNlOmZpbGUuZG93bmxvYWQiXX0.cEOmX0ZF4vX61G3xg-FlXtgXJC-EtC-XfGaIXu8aWG0"}
      />
      <Item 
        NombreDelItem={"Pantalones jean"}
        Precio={1100}
        Imagen={"https://pngimg.com/d/jeans_PNG5745.png"}
      />
      <Item 
        NombreDelItem={"Gorro"}
        Precio={400}
        Imagen={"https://assets.stickpng.com/images/580b57fbd9996e24bc43bf0e.png"}
      />
    </>
  )
}

export default App
