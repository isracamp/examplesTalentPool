import Home from './pages/Home';
import { Routes, Route } from 'react-router-dom';
import Movie from './pages/Movie';
function App() {
  return (
    <Routes>
      <Route path='/' element={<Home />} />
      <Route path='movies/:id' element={<Movie />} />
    </Routes>
  );
}

export default App;
