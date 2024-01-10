import { ItemListContainer } from './components/ItemListContainer';
import { NavBar } from './components/NavBar';

function App() {

  return (
    <>
      <NavBar/>
      <div className='items'>
        <ItemListContainer/>
      </div>
    </>
  )
}

export default App
