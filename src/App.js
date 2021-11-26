import React, { Component } from "react";
import Products from "./components/Products";
import { Button } from 'react-bootstrap';

class App extends Component {
  render() {
    return (
      <div>
        <h1>Beginning React Project</h1>
        <Products />
        <Button>Click Me!</Button>
      </div>
    );
  }
}

export default App;