import React, { Component } from "react";
//import "./App.css";
//import {Navbar,Nav,NavItem,NavDropdown,MenuItem} from 'react-bootstrap/lib/NavbarHeader';

import AppBar from "./AppBar";
import SideMenu from "./SideMenu";
import Showcase from "./Showcase";

class Games extends Component {
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

export default Games;
