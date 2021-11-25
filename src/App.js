import React, { Component } from "react";
import Products from "./components/Products";

class App extends Component {
  render() {
    return (
      <div>
        <h1>My First React App!</h1>
        <Products />
        <Products />
        <Products />
      </div>
    );
  }
}

export default App;
