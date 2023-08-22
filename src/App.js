import "./App.css";
import "../node_modules/bootstrap/dist/css/bootstrap.min.css";

import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';

import MainMenu from "./components/MainMenu";
import Home from './pages/Home';
import Courses from './pages/Courses';
import Features from './pages/Features';
import Contact from './pages/Contact';

function App() {
  return (
    <Router>
      <div className="App">
        <MainMenu />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/courses" element={<Courses />} /> {/* Check this route */}
          <Route path="/features" element={<Features />} />
          <Route path="/contact" element={<Contact />} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;
