import React, { Component } from "react";
import "../App.css";
import Navbar from "react-bootstrap/lib/Navbar";
//import Nav from "react-bootstrap/lib/Nav";
//import NavItem from "react-bootstrap/lib/NavItem";
//import NavDropdown from "react-bootstrap/lib/NavDropdown";
//import MenuItem from "react-bootstrap/lib/MenuItem";
//import {Navbar,Nav,NavItem,NavDropdown,MenuItem} from 'react-bootstrap/lib/NavbarHeader';
import Values from "../constants/Values";

class AppBar extends Component {
  render() {
      
      var v = new Values();
      console.log(v.getName());
      
      const styleFont = {
          fontSize: '30px',
          color:'#fff'
      }
      
      const barStyle = {
          background:'#3498db'
      }
    return (
      <Navbar className='navbar-fixed-top' style={barStyle} >
        <Navbar.Header>
          <Navbar.Brand>
            <a href="#home" className="title_text" style={styleFont}>{v.getValue('page_title')}</a>
          </Navbar.Brand>
        </Navbar.Header>
        
      </Navbar>
    );
  }
}

export default AppBar;
