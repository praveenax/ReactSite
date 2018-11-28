import React, { Component } from "react";
import "./App.css";
//import {Navbar,Nav,NavItem,NavDropdown,MenuItem} from 'react-bootstrap/lib/NavbarHeader';

import AppBar from "./components/AppBar";
import SideMenu from "./components/SideMenu";
import Showcase from "./components/Showcase";

class App extends Component {
  render() {
      const divStyle = {
      marginTop: "5%"
    }
      const showStyle = {
        height: '80vh',
        overflow: 'auto'
      }
      return (
      <div className="App">
        <AppBar />
        <div className="col-md-12" style={divStyle}>
          <div className="col-md-2">
            <SideMenu />
          </div>

          <div className="col-md-10" style={showStyle}>
            <Showcase />
          </div>
        </div>
      </div>
    );
  }
}

export default App;
