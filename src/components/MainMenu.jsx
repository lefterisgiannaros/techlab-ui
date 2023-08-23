import React from "react";
import { NavLink } from 'react-router-dom';

class MainMenu extends React.Component {
  render() {
    return (
      <div className="main-menu">
        <ul className="d-flex justify-content-between align-items-center w-100 list-unstyled">
          <li>
            <img className="logo" src="/TechLab.svg" alt="logo"></img>
          </li>
          <div className="d-flex gap-4">
          <NavLink to="/" activeclassname="active">Home</NavLink>
          <NavLink to="/courses" activeclassname="active">Courses</NavLink>
          <NavLink to="/features" activeclassname="active">Features</NavLink>
          <NavLink to="/contact" activeclassname="active">Contact</NavLink>
          </div>

          <li>
            <button className="btn-curved btn-white">Sign Up</button>
          </li>
        </ul>
      </div>
    );
  }
}

export default MainMenu;
