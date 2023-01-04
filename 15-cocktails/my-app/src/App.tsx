import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Navbar from './components/shared/navbar/Navbar';
import About from './pages/About';
import Home from './pages/Home';
import Error from './pages/Error';
import SingleCocktail from './pages/SingleCocktail';
// import pages
function App() {
  return (
    <Router>
      <Navbar />
      <Routes>
        <Route path='/' element={<Home />} />
        <Route path='about' element={<About />} />
        <Route path='cocktail/:id' element={<SingleCocktail />} />
        <Route path='*' element={<Error />} />
      </Routes>
    </Router>
  );
}

export default App;
