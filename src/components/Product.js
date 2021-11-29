import React, { Component } from 'react';
import Rating from './Rating.js';
import { Modal } from 'react-bootstrap';


class Product extends Component {

  constructor(props){
    super(props);
  }

  render() {
    return (
      <div>
        <Modal>
          <img
            width={64}
            height={64}
            className="mr-3"
            src={this.props.data.imageUrl}
            alt="Portrait"
          />
          <Modal.Body>
            <h5>{this.props.data.productName}</h5>
            {this.props.data.releasedDate}
            <Rating
              rating={this.props.data.rating}
              numOfReviews={this.props.data.numOfReviews}
            />
            <p>{this.props.data.description}</p>
          </Modal.Body>
        </Modal>
      </div>
    );
  }
}

export default Product;
