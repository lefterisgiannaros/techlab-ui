import React from "react";
import { NavLink } from 'react-router-dom';

class MainMenu extends React.Component {
  render() {
    return (
      <div className="main-menu">
        <ul className="d-flex justify-content-between align-items-center w-100 list-unstyled p-5">
          <li>
            <img className="logo" src="/TechLab.svg"></img>
          </li>
          <div className="d-flex gap-4">
          <NavLink to="/" activeClassName="active">Home</NavLink>
          <NavLink to="/courses" activeClassName="active">Courses</NavLink>
          <NavLink to="/features" activeClassName="active">Features</NavLink>
          <NavLink to="/contact" activeClassName="active">Contact</NavLink>
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
