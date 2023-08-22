import React from "react";
import { Link } from "react-router-dom";

class MainMenu extends React.Component {
  render() {
    return (
      <div className="main-menu">
        <ul className="d-flex justify-content-between align-items-center w-100 list-unstyled p-5">
          <li>
            <img src="/TechLab.png"></img>
          </li>
          <div className="d-flex gap-4">
            <Link to="/">Home</Link>
            <Link to="/courses">Courses</Link>
            <Link to="/features">Features</Link>
            <Link to="/contact">Contact</Link>
          </div>

          <li>
            <button className="btn-signup">Sign Up</button>
          </li>
        </ul>
      </div>
    );
  }
}

export default MainMenu;
