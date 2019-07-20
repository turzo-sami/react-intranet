import React, { Component } from 'react';

import NavBar from './navbar';


class Error extends Component {
  render() {
    return (
      <div className="error">

        <NavBar/>
        
        <h1>Error</h1>
        
      </div>
    );
  }
}

export default Error;