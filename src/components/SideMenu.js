import React, { Component } from "react";

import ListGroup from "react-bootstrap/lib/ListGroup";
import ListGroupItem from "react-bootstrap/lib/ListGroupItem";
import { HashRouter,Switch, Route,Link } from 'react-router-dom'


class SideMenu extends Component {
  render() {
      const showStyle = {
        textAlign:'left'
      }
      const itemStyle = {
              border: '0px'
      }
    return (
      <div className="">
        <ListGroup style={showStyle}>
          <ListGroupItem style={itemStyle}>
                <Link to='/test'>Rent Games</Link>
        </ListGroupItem>
          <ListGroupItem style={itemStyle}>Games for Sale</ListGroupItem>
          <ListGroupItem style={itemStyle}>Events</ListGroupItem>
          <ListGroupItem style={itemStyle}>Tournaments</ListGroupItem>
          <ListGroupItem style={itemStyle}>Players</ListGroupItem>
          <ListGroupItem style={itemStyle}>Guilds</ListGroupItem>
        </ListGroup>
        ;
      </div>
    );
  }
}

export default SideMenu;
