import React, { Component } from "react";
import * as firebase from "firebase";
import { Link } from 'react-router-dom';
import { Table, Button, Modal  } from 'react-bootstrap';



class User extends Component {

  constructor(props) {
    super(props);
    this.state = {
      users: [],
      showDeleteDialog: false,
      selectedUser: {}
    };
    this.add = this.add.bind(this); 
    this.closeDeleteDialog = this.closeDeleteDialog.bind(this);                                       
    this.delete = this.delete.bind(this);
  }
  // componentDidMount() {
  //   firebase
  //     .database()
  //     .ref("/")
  //     .on("value", (snapshot) => {
  //       console.log(snapshot.val());
  //     });
  // }
  // render() {
  //   return <div></div>;
  // }
  componentDidMount(){
    firebase.database().ref('/')
      .on('value',snapshot => {
        let returnArr = [];        
        snapshot.forEach(data => {
            var user = data.val();
            user['key'] = data.key;
            returnArr.push(user);        
        });                       
        this.setState({
            users: returnArr
        })                
      });
}

add(e) {
  this.props.history.push("/add");  
}  


export default User;
