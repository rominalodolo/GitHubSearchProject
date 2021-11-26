import React, { Component } from "react";
import Products from "./components/Products";
import { Button } from "react-bootstrap";
import Rating from "./components/Rating";

class App extends Component {
  render() {
    return (
      <div>
        <h1>Beginning React Project</h1>
        <Products />
        <Button>Click Me!</Button>
        <div>
          <Rating rating="1" />
          <Rating rating="2" />
          <Rating rating="3" />
          <Rating rating="4" />
          <Rating rating="5" />
        </div>
      </div>
    );
  }
}

export default App;
