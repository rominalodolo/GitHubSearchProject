import React, { Component } from "react";
import Products from "./components/Products.js";
import { Media, Form, FormGroup, FormControl, Button } from 'reactbootstrap';
import Rating from "./components/Rating.js";

class App extends Component {
  render() {
    const isValid = true;

    return (
      <div>
        <h1>Beginning React Project</h1>
        <Products />
        <Button variant="primary" disabled={!isValid}>Default</Button>
        <Rating rating="1" />
        <Rating rating="2" />
        <Rating rating="3" />
        <Rating rating="4" />
        <Rating rating="5" />
      </div>
    );
  }
}

export default App;
