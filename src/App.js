import React, { Component } from "react";
import Products from "./components/Products.js";
import { Button } from 'react-bootstrap'; // Media, Form, FormGroup, FormControl, Button
import Rating from "./components/Rating.js";
import GitHub from './components/GitHub';
import Header from "./components/Header";
import GitHubUser from './GitHubUser';

class App extends Component {
  render() {
    const isValid = true;

    return (
      <div>
        <Header />
        <h1>Beginning React Project</h1>
        <Products />
        <Button variant="primary" disabled={!isValid}>Default</Button>
        <Rating rating="1" />
        <Rating rating="2" />
        <Rating rating="3" />
        <Rating rating="4" />
        <Rating rating="5" />
        <GitHub />
        <GitHubUser />
      </div>
    );
  }
}

export default App;
