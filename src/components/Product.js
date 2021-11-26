import React, { Component } from "react";
import Rating from './components/Rating.js';
import { Media } from 'react-bootstrap';

class Product extends Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <div>
        <Media>
          <img
            width={64}
            height={64}
            className="mr-3"
            src={this.props.data.imageUrl}
            alt="Image"
          />
          <Media.Body>
            <h5>{this.props.data.productName}</h5>
            {this.props.data.releasedDate}
            <Rating
              rating={this.props.data.rating}
              numOfReviews={this.props.data.numOfReviews}
            />
            <p>{this.props.data.description}</p>
          </Media.Body>
        </Media>
      </div>
    );
  }
}

getProducts() {
    return [
    {
    imageUrl: "http://loremflickr.com/150/150?random=1",
    productName: "Product 1",
    releasedDate: "May 31, 2016",
    description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit.
    Aenean porttitor, tellus laoreet venenatis facilisis, enim ex faucibus nulla, id
    rutrum ligula purus sit amet mauris. ",
    rating: 4,
    numOfReviews: 2
    },
    {
    imageUrl: "http://loremflickr.com/150/150?random=2",
    productName: "Product 2",
    releasedDate: "October 31, 2016",
    description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit.
    Aenean porttitor, tellus laoreet venenatis facilisis, enim ex faucibus nulla, id
    rutrum ligula purus sit amet mauris. ",
    rating: 2,
    numOfReviews: 12
    },
    {
    imageUrl: "http://loremflickr.com/150/150?random=3",
    productName: "Product 3",
    releasedDate: "July 30, 2016",
    description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit.
    Aenean porttitor, tellus laoreet venenatis facilisis, enim ex faucibus nulla, id
    rutrum ligula purus sit amet mauris. ",
    rating: 5,
    numOfReviews: 2
    }];
} 


export default Product;
