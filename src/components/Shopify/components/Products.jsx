import React, { Component } from "react";
import { Carousel } from "react-bootstrap";

class Products extends Component {
  render() {
    const products = this.props.products.map((product, key) => {
      return (
        <Carousel.Item className="Product-wrapper d-flex justify-content-center"
          key={key}
          style={{ margin: "5%", padding: 5, minHeight: "350px" }}
        >
          {product.title}
        </Carousel.Item>
      );
    });

    return (
      <div>{products}</div>
    );
  }
}

export default Products;
