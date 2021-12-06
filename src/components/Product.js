import "bootstrap/dist/css/bootstrap.min.css";
import React, { Component } from "react";

class Product extends Component {
  constructor(props) {
    super(props);
  }

  render() {
    const listProducts = this.products.map((product) => (
      <Product key={product.productName} data={product} />
    ));

    return (
      <div>
        {listProducts.length > 0 && <ul>{listProducts}</ul>}
        {listProducts.length == 0 && <ul>No Products to display</ul>}
      </div>
    );
  }
}

export default Product;
