import { Component } from "react";
import { Card, Carousel, Image } from "react-bootstrap";
import Client from "shopify-buy";
import Cart from "./components/Cart.jsx";

let placeholderImage = require("../../../../assets/logo.png");

class Shopify extends Component {
  constructor() {
    super();

    this.client = Client.buildClient({
      domain: "your.shop",
      storefrontAccessToken: "abcdefghijklmnoyourkey",
    });

    this.state = {
      isCartOpen: false,
      checkout: { lineItems: [] },
      products: [],
      shop: {},
    };

    this.handleCartClose = this.handleCartClose.bind(this);
    this.addVariantToCart = this.addVariantToCart.bind(this);
    this.updateQuantityInCart = this.updateQuantityInCart.bind(this);
    this.removeLineItemInCart = this.removeLineItemInCart.bind(this);
  }

  componentWillMount() {
    this.client.checkout.create().then((res) => {
      this.setState({
        checkout: res,
      });
    });

    this.client.product.fetchAll().then((res) => {
      this.setState({
        products: res,
      });
      console.log(res);
    });

    this.client.shop.fetchInfo().then((res) => {
      this.setState({
        shop: res,
      });
    });
  }

  addVariantToCart(variantId, quantity) {
    this.setState({
      isCartOpen: true,
    });

    const lineItemsToAdd = [{ variantId, quantity: parseInt(quantity, 10) }];
    const checkoutId = this.state.checkout.id;

    return this.client.checkout
      .addLineItems(checkoutId, lineItemsToAdd)
      .then((res) => {
        this.setState({
          checkout: res,
        });
      });
  }

  updateQuantityInCart(lineItemId, quantity) {
    const checkoutId = this.state.checkout.id;
    const lineItemsToUpdate = [
      { id: lineItemId, quantity: parseInt(quantity, 10) },
    ];

    return this.client.checkout
      .updateLineItems(checkoutId, lineItemsToUpdate)
      .then((res) => {
        this.setState({
          checkout: res,
        });
      });
  }

  removeLineItemInCart(lineItemId) {
    const checkoutId = this.state.checkout.id;

    return this.client.checkout
      .removeLineItems(checkoutId, [lineItemId])
      .then((res) => {
        this.setState({
          checkout: res,
        });
      });
  }

  handleCartClose() {
    this.setState({
      isCartOpen: false,
    });
  }

  render() {
    return (
      <div className="App">
        <header className="App__header">
          <div className="App__title">
            <h3>{this.state.shop.name} Store</h3>
            <p>{this.state.shop.description}</p>
          </div>
        </header>

        <Carousel className="carousel" interval={5000}>
          {this.state.products.map((carouselItem, key) => (
            <Carousel.Item key={key}>
              <div className="d-flex justify-content-center carouselCard">
                <a href={carouselItem.onlineStoreUrl}>
                  <Card
                    bg="secondary"
                    text="white"
                    className="text-center py-5 carouselCard"
                  >
                    <Image
                      className="thumbnailImage"
                      src={
                        carouselItem.images.length > 0 ? (
                          carouselItem.images[0].src
                        ) : (
                           placeholderImage
                        )
                      }
                    />
                    
                    <p className="coolText">
                    

                    <h4>{carouselItem.title}</h4>
                      {carouselItem.description}</p>
                  </Card>
                </a>
              </div>
            </Carousel.Item>
          ))}
        </Carousel>
        {false && this.state.isCartOpen && (
          <div className="App__view-cart-wrapper">
            <Cart
              client={this.props.client}

            />
          </div>
        )}
        {false && !this.state.isCartOpen && (
          <div className="App__view-cart-wrapper">
            <button
              className="App__view-cart"
              onClick={() => this.setState({ isCartOpen: true })}
            >
              Cart
            </button>
          </div>
        )}
      </div>
    );
  }
}

export default Shopify;
