import React, { Component } from "react";
import "./App.css";
//import ReactDOM from 'react-dom';
//import { Router, Route, Link, browserHistory } from 'react-router'
import { HashRouter,Switch, Route } from 'react-router-dom'

//import {Navbar,Nav,NavItem,NavDropdown,MenuItem} from 'react-bootstrap/lib/NavbarHeader';

import Games from "./components/Games";
import Events from "./components/Events";
//import SideMenu from "./components/SideMenu";
//import Showcase from "./components/Showcase";

class App extends Component {
  render() {
//      const divStyle = {
//      marginTop: "5%"
//    }
//      const showStyle = {
//        height: '80vh',
//        overflow: 'auto'
//      }
      return (
          <HashRouter>
   <div className="App">
         <main>
    <Switch>
      <Route exact path='/' component={Games}/>
      <Route exact path='/test' component={Events}/>
    </Switch>
  </main>
      </div>
  </HashRouter>
     
    );
  }
}

export default App;
