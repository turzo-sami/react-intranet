import React, { Component } from 'react';

import { NavLink } from 'react-router-dom';


const NavBar = () => {
  return (
    <div>
      
      <header>


        <nav className="navbar navbar-expand-lg navbar-light bg-light">

          <NavLink className="navbar-brand" to="/">Intranet</NavLink>

          <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
            <span className="navbar-toggler-icon"></span>
          </button>

          <div className="collapse navbar-collapse" id="navbarNav">

            <ul className="navbar-nav">

              <li className="nav-item">
                <NavLink className="nav-link" to="/addressbook">Addressbook</NavLink>
              </li>

              <li className="nav-item">
                <NavLink className="nav-link" to="/login">Login</NavLink>
              </li>

            </ul>

          </div>

        </nav>

      </header>

    </div>

  );
};

export default NavBar;