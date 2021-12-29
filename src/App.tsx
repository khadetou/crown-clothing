
import './App.css';
import Homepage from './pages/homepage/Homepage';
import { Routes, Route } from 'react-router-dom';
import Hatspage from './pages/hatspage/Hatspage';


const App: React.FC = () => {
  return (
    <div >
      <Routes>
        <Route path="/" element={<Homepage />} />
        <Route path="shop/hats" element={<Hatspage />} />
      </Routes>
    </div>
  );
}

export default App;
