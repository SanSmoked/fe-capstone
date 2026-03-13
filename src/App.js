import { BrowserRouter, Routes, Route} from 'react-router-dom';
import './App.css';
import Home from './pages/Home';
import About from './pages/About';
import Reservations from './pages/Reservations'
import ConfirmedBooking from './pages/ConfirmedBooking';

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/reservations" element={<Reservations />} />
        <Route path="/confirmed-booking" element={<ConfirmedBooking />} />
        <Route path="/menu" element={<Home />} />
      </Routes>
    </BrowserRouter>

  );
}

export default App;
