import * as  React from 'react';
import { BrowserRouter as Router, Routes, Route, Link } from 'react-router-dom';
import BarbiePage from './pages/BarbiePage';
import NinetiesPage from './pages/NinetiesPage';


function App() {
  return (
    <Router>
      <div style={{ padding: 20 }}>
        <h1>Welcome to PixelPop</h1>
        <nav>
          <ul>
            <li>
              <Link to="/barbie">Barbie Theme</Link>
            </li>
            <li>
              <Link to="/nineties">90's Theme</Link>
            </li>
          </ul>
        </nav>
        <Routes>
          <Route path="/barbie" element={<BarbiePage />} />
          <Route path="/nineties" element={<NinetiesPage />} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;
