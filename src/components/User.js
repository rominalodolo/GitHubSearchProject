import React, { Component } from "react";
import * as firebase from "firebase";
import { Link } from 'react-router-dom';
import { Table, Button, Modal  } from 'react-bootstrap';



class User extends Component {

  constructor(props) {
    super(props);
    this.state = {
      users: [],
    };
  }
  componentDidMount() {
    firebase
      .database()
      .ref("/")
      .on("value", (snapshot) => {
        console.log(snapshot.val());
      });
  }
  render() {
    return <div></div>;
  }
}

export default User;
