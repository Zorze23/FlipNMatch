import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Home   from './pages/Home';
import Easy   from './pages/Easy';
import Medium from './pages/Medium';
import Hard   from './pages/Hard';
import GameOver from './pages/GameOver1';
import GameOver2 from './pages/GameOver2.js';
import GameOver3 from './pages/GameOver3';
import Win1 from './pages/Win1.js';
import Win2 from './pages/Win2.js';
import Win3 from './pages/Win3.js';

export default function App() {
  return (

      <Routes>
        <Route path="/"      element={<Home />} />
        <Route path="/easy"  element={<Easy />} />
        <Route path="/medium" element={<Medium />} />
        <Route path="/hard"  element={<Hard />} />
        <Route path="/gameover" element={<GameOver />} />
        <Route path="/gameover2" element={<GameOver2 />} />
        <Route path="/gameover3" element={<GameOver3 />} />
        <Route path="/Win1" element={<Win1 />} />
        <Route path="/Win2" element={<Win2 />} />
        <Route path="/Win3" element={<Win3 />} />
      </Routes>

  );
}