import { BrowserRouter, Routes, Route} from 'react-router-dom';
import './App.css';
import Home from './pages/Home';
import About from './pages/About';
import Reservations from './pages/Reservations'

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/reservations" element={<Reservations />} />
      </Routes>
    </BrowserRouter>

  );
}

export default App;
