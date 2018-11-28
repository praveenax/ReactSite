import React, { Component } from "react";

import ListGroup from "react-bootstrap/lib/ListGroup";
import ListGroupItem from "react-bootstrap/lib/ListGroupItem";

class SideMenu extends Component {
  render() {
    return (
      <div className="">
        <ListGroup>
          <ListGroupItem>Rent Games</ListGroupItem>
          <ListGroupItem>Games for Sale</ListGroupItem>
          <ListGroupItem>Events</ListGroupItem>
          <ListGroupItem>Tournaments</ListGroupItem>
          <ListGroupItem>Players</ListGroupItem>
          <ListGroupItem>Guilds</ListGroupItem>
        </ListGroup>
        ;
      </div>
    );
  }
}

export default SideMenu;
