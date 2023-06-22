import { BrowserRouter as Router, Route, Routes, Navigate, useLocation } from 'react-router-dom'

import Header from './components/Header';
import Landing from './page/Landing';
import Test from './page/Test';
import IndividualPage from './page/TestIndividual';
import ProductsLanding from './page/products/ProductsLanding';
import BurgerLanding from './page/burgerStacker/BurgerLanding';
import CSSTrial from './page/CSStrial/CSSTrial';
import PokemonLanding from './page/pokemon/pokemonLanding';

function App() {
  return (
    <Router>
      <Header />
      <Routes>
        <Route path='/' element={<Landing />} />
        <Route path='/test' element={<Test />} />
        <Route path='/CSStrial' element={<CSSTrial />} />
        <Route path='/products' element={<ProductsLanding />} />
        <Route path='/burgerStacker' element={<BurgerLanding />} />
        <Route path='/pokemon' element={<PokemonLanding />} />
        <Route path='/test/:id' element={<IndividualPage />} />
      </Routes>
      {/* Footer */}
    </Router>
  );
}

export default App;