import React, { Component } from 'react';
import AppBar from 'material-ui/AppBar';
import './App.css';
import Input from '../../containers/App.js';

class Header extends Component {
  render() {
    return (
      <div>
        <div className="App">
          <AppBar
            title="App"
            iconStyleLeft={{ "display": "none" }}
          />
        </div>
          <Input  />
      </div>
    );
  }
}

export default Header;
