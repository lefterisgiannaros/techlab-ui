import "./App.css";
import "../node_modules/bootstrap/dist/css/bootstrap.min.css";

import { BrowserRouter as Router, Switch, Route, Routes } from 'react-router-dom';

import MainMenu from "./components/MainMenu";
import Home from './components/pages/Home';
import Courses from './components/pages/Courses';
import Features from './components/pages/Features';
import Contact from './components/pages/Contact';

function App() {
  return (
    <Router>
      <div className="App">
        <MainMenu />
        <Routes>
          <Route path="/" exact component={Home} />
          <Route path="/courses" component={Courses} />
          <Route path="/features" component={Features} />
          <Route path="/contact" component={Contact} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;
