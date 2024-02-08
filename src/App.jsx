import { ItemListContainer } from './components/ItemListContainer';
import { ItemDetailContainer } from './components/ItemDetailContainer';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import { NavBar } from './components/NavBar';
import { MyContext } from './context/MyContext';
import { useState } from 'react';

function App() {
  const [cart, setCart] = useState(0);

  return (
    <MyContext.Provider value={{cart, setCart}}>
      <BrowserRouter>
        <NavBar />
        <Routes>
          <Route path="/" element={<ItemListContainer />} />
          <Route path="/category/:categoryId" element={<ItemListContainer />} />
          <Route path="/item/:itemId" element={<ItemDetailContainer />} />
          <Route path="*" element={<h1>Error 404</h1>} />
        </Routes>
      </BrowserRouter>
    </MyContext.Provider>
  )
}

export default App