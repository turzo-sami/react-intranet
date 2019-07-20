import React, { Component } from 'react';

import NavBar from './navbar';


class Addressbook extends Component {
  render() {
    return (
      <div className="addressbook">

        <NavBar/>
        
        <h1>Addressbook</h1>
        
      </div>
    );
  }
}

export default Addressbook;