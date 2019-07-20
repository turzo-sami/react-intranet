import React, { Component } from 'react';

import NavBar from './navbar';


class DashBoard extends Component {
  render() {
    return (
      <div className="dashboard">

        <NavBar/>
        
        <h1>Dashboard</h1>
        
      </div>
    );
  }
}

export default DashBoard;