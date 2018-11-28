import React, { Component } from "react";
import "./App.css";
//import {Navbar,Nav,NavItem,NavDropdown,MenuItem} from 'react-bootstrap/lib/NavbarHeader';

import AppBar from "./components/AppBar";
import SideMenu from "./components/SideMenu";
import Showcase from "./components/Showcase";

class App extends Component {
  render() {
      return (
      <div className="App">
        <AppBar />
        <div className="col-md-12">
          <div className="col-md-2">
            <SideMenu />
          </div>

          <div className="col-md-10">
            <Showcase />
          </div>
        </div>
      </div>
    );
  }
}

export default App;
